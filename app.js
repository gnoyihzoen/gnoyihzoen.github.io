// ---------- Theme Toggle ----------
const root = document.documentElement;
const THEME_KEY = 'neo-theme';
const savedTheme = localStorage.getItem(THEME_KEY);
if (savedTheme === 'light') root.classList.add('light');
if (savedTheme === 'dark') root.classList.add('dark');

function toggleTheme() {
  const isLight = root.classList.contains('light');
  setTheme(isLight ? 'dark' : 'light');
}
function setTheme(mode) {
  root.classList.toggle('light', mode === 'light');
  root.classList.toggle('dark', mode === 'dark');
  localStorage.setItem(THEME_KEY, mode);
}
document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

// ---------- Dynamic Year ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Mobile Nav ----------
const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');
navToggle.addEventListener('click', () => {
  const isOpen = primaryNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
primaryNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  primaryNav.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
}));

// ---------- Back to Top ----------
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('is-visible', window.scrollY > 500);
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ---------- Scroll Reveal Animation ----------
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.project').forEach(project => {
  observer.observe(project);
});

// ---------- About Modal ----------
let prevFocus = null;
const aboutModal = document.getElementById('about-modal');

function openAbout(e) {
  e.preventDefault();
  prevFocus = document.activeElement;
  aboutModal.classList.add('is-open');
  aboutModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  aboutModal.querySelector('button').focus();
}
function closeModal() {
  aboutModal.classList.remove('is-open');
  aboutModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  prevFocus?.focus();
}
aboutModal.addEventListener('click', (e) => {
  if (!aboutModal.querySelector('.modal__content').contains(e.target)) {
    closeModal();
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && aboutModal.classList.contains('is-open')) {
    closeModal();
  }
});
window.openAbout = openAbout;
window.closeModal = closeModal;

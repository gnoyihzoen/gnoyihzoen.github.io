// ---------- Theme (persist) ----------
const root = document.documentElement;
const THEME_KEY = 'neo-theme';
const savedTheme = localStorage.getItem(THEME_KEY);
if (savedTheme === 'light') root.classList.add('light');
if (savedTheme === 'dark') root.classList.add('dark');

// Toggle: cycles light <-> dark
function setTheme(mode) {
  root.classList.remove('light', 'dark');
  if (mode) root.classList.add(mode);
  localStorage.setItem(THEME_KEY, mode || '');
}
function toggleContrast() {
  const isDark = root.classList.contains('dark');
  const isLight = root.classList.contains('light');
  // prefer flipping between explicit dark and light
  setTheme(isDark ? 'light' : (isLight ? 'dark' : 'dark'));
}
window.toggleContrast = toggleContrast;

document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleContrast);
});

// ---------- Dynamic year ----------
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});

// ---------- Mobile nav ----------
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('primaryNav');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  // close when clicking a link
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
});

// ---------- Back to top ----------
const backBtn = document.getElementById('backToTop');
function backToTopVisibility() {
  if (!backBtn) return;
  const show = window.scrollY > 500;
  backBtn.classList.toggle('is-visible', show);
}
window.addEventListener('scroll', backToTopVisibility, { passive: true });
backBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ---------- Accessible About modal ----------
let lastFocusedEl = null;
function openAbout(e) {
  if (e) e.preventDefault();
  lastFocusedEl = document.activeElement;

  const modal = document.getElementById('about-modal');
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Focus first interactive element
  const focusable = modal.querySelector('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])');
  if (focusable) focusable.focus();

  document.addEventListener('keydown', escHandler);
  modal.addEventListener('click', backdropHandler);
}
function closeModal() {
  const modal = document.getElementById('about-modal');
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';

  document.removeEventListener('keydown', escHandler);
  modal.removeEventListener('click', backdropHandler);

  if (lastFocusedEl) lastFocusedEl.focus();
}
function escHandler(e) { if (e.key === 'Escape') closeModal(); }
function backdropHandler(e) {
  const modalContent = e.currentTarget.querySelector('.modal__content');
  if (!modalContent.contains(e.target)) closeModal();
}
window.openAbout = openAbout;
window.closeModal = closeModal;

// Dark mode toggle
function toggleContrast() {
  document.body.classList.toggle('dark');
}

// Dynamic year in footer
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});

// ===== Accessible About modal =====
let lastFocusedEl = null;

function openAbout(e) {
  if (e) e.preventDefault();
  lastFocusedEl = document.activeElement;

  const modal = document.getElementById('about-modal');
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('body--locked');

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
  document.body.classList.remove('body--locked');

  document.removeEventListener('keydown', escHandler);
  modal.removeEventListener('click', backdropHandler);

  if (lastFocusedEl) lastFocusedEl.focus();
}

function escHandler(e) {
  if (e.key === 'Escape') closeModal();
}

function backdropHandler(e) {
  const modalContent = e.currentTarget.querySelector('.modal__content');
  if (!modalContent.contains(e.target)) closeModal();
}

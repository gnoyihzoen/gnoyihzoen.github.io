function toggleModal() {
  const modal = document.querySelector('.modal');
  modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

function toggleContrast() {
  document.body.classList.toggle('dark');
}

(() => {
  const openModalBtns = document.querySelectorAll('[data-modal-open]');
  const closeModalBtn = document.querySelector('[data-modal-close]');
  const modal = document.querySelector('[data-modal]');

  openModalBtns.forEach(function addEvListener(openModalBtn) {
    openModalBtn.addEventListener('click', toggleModal);
  });

  closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();

const openMenuBtn = document.querySelector('[data-menu-open]');
const closeMenuBtn = document.querySelector('[data-menu-close]');
const menu = document.querySelector('[data-menu]');

openMenuBtn.addEventListener('click', openMenu);

function openMenu(e) {
  e.stopPropagation();
  menu.classList.remove('hidden');
  closeMenuBtn.addEventListener('click', menuHidden);
  menu.addEventListener('click', menuHiddenOnClickLink);
  window.addEventListener('click', menuHidenOnClickMissing);
}

function menuHidden() {
  menu.classList.add('hidden');
  closeMenuBtn.removeEventListener('click', menuHidden);
  menu.removeEventListener('click', menuHiddenOnClickLink);
  window.removeEventListener('click', menuHidenOnClickMissing);
}

function menuHidenOnClickMissing(e) {
  const isMenuClicked = e.target === menu || menu.contains(e.target);
  if (!isMenuClicked) {
    menuHidden();
  }
}

function menuHiddenOnClickLink(e) {
  const clickedElement = e.target;
  if (
    clickedElement.classList.contains('mob-menu-link') ||
    clickedElement.tagName === 'BUTTON'
  ) {
    menuHidden();
  }
}

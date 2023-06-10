// Поліфіл для методу scrollIntoView() з параметром behavior: 'smooth'
if (!('scrollBehavior' in document.documentElement.style)) {
  import('scroll-behavior-polyfill').then(module => module.default());
}

document.addEventListener('DOMContentLoaded', function () {
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substring(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
});

const animateBurger = (navElement, navLinksElement, burgerElement) => {
  navElement.classList.toggle('nav-active');
  navLinksElement.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    }
  });
  burgerElement.classList.toggle('toggle');
};

const _closeWhenLinkClicked = () => {
  const navbarLinks = document.querySelectorAll('navbar-item');
  navbarLinks.forEach((navbarLink) => {
    navbarLink.addEventListener('click', () => {
      document.querySelector('.burger').click();
    });
  });
};

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  burger.addEventListener('click', () => {
    animateBurger(nav, navLinks, burger);
  });
  const windowSize = window.matchMedia('(max-width: 768px)');
  if (windowSize.matches) {
    _closeWhenLinkClicked();
  }
};

export default navSlide;

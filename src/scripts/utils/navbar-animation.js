  
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

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  burger.addEventListener('click', () => {
    animateBurger(nav, navLinks, burger);
  });
  let windowSize = window.matchMedia("(max-width: 768px)")
  if(windowSize.matches){
    console.log('768px')
    _closeWhenLinkClicked();
  }
  
};

const _closeWhenLinkClicked = () =>{
  const navbarLinks = document.querySelectorAll('navbar-item');
  console.log(navbarLinks);
  navbarLinks.forEach(navbarLink => {
      navbarLink.addEventListener('click', () => {
        document.querySelector('.burger').click();
      });
  });
}
export default navSlide;
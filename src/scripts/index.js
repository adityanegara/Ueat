import 'regenerator-runtime';
import '../styles/main.scss';
import './component/navbar/navbar-list';
import './component/hero/HeroContainer';
import links from './component/navbar/navbar-links';
import navSlide from './utils/navbar-animation';
import App from './views/app';
import swRegister from './utils/sw-register';

const renderNavbar = (navbarLinks) => {
  const navbarContainer = document.getElementById('nav-container');
  const navbarListElement = document.createElement('navbar-list');
  navbarListElement.navbarLinks = navbarLinks;
  navbarContainer.appendChild(navbarListElement);
};

const main = document.querySelector('main');
const app = new App(main);
renderNavbar(links);
navSlide();

window.addEventListener('load', () => {
  swRegister();
  app.renderPage();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

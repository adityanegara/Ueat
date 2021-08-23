import "../styles/main.scss"
import './component/navbar/navbar-list';
import links from './component/navbar/navbar-links';
import navSlide from './utils/navbar-animation';

const renderNavbar = (navbarLinks) => {
    const navbarContainer = document.getElementById('nav-container');
    const navbarListElement = document.createElement('navbar-list');
    navbarListElement.navbarLinks = navbarLinks;
    navbarContainer.appendChild(navbarListElement);
};
  
renderNavbar(links);
navSlide();
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

const nav = document.querySelector('navbar-list');
const timeline = gsap.timeline();
    timeline.from('#hero-section', 0.5 , {backgroundColor : "white"});
    timeline.fromTo('.hero-image', 0.5, { opacity : "0%"}, {opacity: "100%", ease:Power2.easeInOut});
    timeline.fromTo('.hero-headline', 0.5, { opacity : "0%"}, {opacity: "100%", ease:Power2.easeInOut});
    timeline.fromTo('.hero-description', 0.5, { opacity : "0%"}, {opacity: "100%", ease:Power2.easeInOut});
    timeline.fromTo('.download-button', 0.5, { opacity : "0%"}, {opacity: "100%", ease:Power2.easeInOut});

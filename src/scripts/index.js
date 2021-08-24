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
const logo = document.querySelector('.logo');
const timeline = gsap.timeline();
var x = window.matchMedia("(max-width: 768px)")
if(x.matches){
    console.log('768px');
    timeline.fromTo(logo, 1, {opacity: "0%"}, {opacity: "100%",  ease : "power1"})
    gsap.fromTo('#navbar-button', 1, { opacity : "0%"}, {opacity: "100%"});
    timeline.from('#hero-section', 0.5 , {backgroundColor : "white"});
    timeline.fromTo('.hero-image', 0.5, { opacity : "0%"}, {opacity: "100%", ease:Power2.easeInOut});
    timeline.fromTo('.hero-headline', 0.5, { opacity : "0%"}, {opacity: "100%", ease:Power2.easeInOut});
    timeline.fromTo('.hero-description', 0.5, { opacity : "0%"}, {opacity: "100%", ease:Power2.easeInOut});
    timeline.fromTo('.download-button', 0.5, { opacity : "0%"}, {opacity: "100%", ease:Power2.easeInOut});
    gsap.fromTo('.copyright', 1, {opacity: "0%"}, {opacity: "100%"});
}else{
    console.log('else');
    timeline.fromTo(logo, 1, {opacity: "0%"}, {opacity: "100%",  ease : "power1"})
    gsap.fromTo('#navbar-button', 1, { opacity : "0%"}, {opacity: "100%"});
    timeline.fromTo('navbar-item', 0.5, {opacity: "0%"}, {opacity: "100%",  ease : "power1", stagger: 0.2})
    timeline.from('#hero-section', 0.5 , {backgroundColor : "white"});
    timeline.fromTo('.hero-image', 0.5, { opacity : "0%"}, {opacity: "100%", ease:Power2.easeInOut});
    timeline.fromTo('.hero-headline', 0.5, { opacity : "0%"}, {opacity: "100%", ease:Power2.easeInOut});
    timeline.fromTo('.hero-description', 0.5, { opacity : "0%"}, {opacity: "100%", ease:Power2.easeInOut});
    timeline.fromTo('.download-button', 0.5, { opacity : "0%"}, {opacity: "100%", ease:Power2.easeInOut});
    gsap.fromTo('.copyright', 1, {opacity: "0%"}, {opacity: "100%"});
}

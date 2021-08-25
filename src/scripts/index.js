import "../styles/main.scss"
import './component/navbar/navbar-list';
import './component/hero/HeroContainer';
import links from './component/navbar/navbar-links';
import navSlide from './utils/navbar-animation';

const linkAnimation = () =>{
    const links = document.querySelectorAll('navbar-item');
    links.forEach(link => {
        link.addEventListener('click', () => {
            animateAboutPage();
        });
    });
}

const scrollToTop = () => {
    window.scrollTo(0,0);
}

const renderNavbar = (navbarLinks) => {
    const navbarContainer = document.getElementById('nav-container');
    const navbarListElement = document.createElement('navbar-list');
    navbarListElement.navbarLinks = navbarLinks;
    navbarContainer.appendChild(navbarListElement);
    linkAnimation();
};

const animateAboutPage = () => {
    scrollToTop();
    const timeline = gsap.timeline();
    timeline.fromTo('#hero-section', 1 , {width : "0%"}, {width: "100%", ease: "power1"});
    timeline.fromTo('.hero-image', 0.5, { opacity : "0%"}, {opacity: "100%", ease:Power2.easeInOut});
    timeline.fromTo('.hero-headline', 0.5, { opacity : "0%"}, {opacity: "100%", ease:Power2.easeInOut});
    timeline.fromTo('.hero-description', 0.5, { opacity : "0%"}, {opacity: "100%", ease:Power2.easeInOut});
    timeline.fromTo('.download-button', 0.5, { opacity : "0%"}, {opacity: "100%", ease:Power2.easeInOut});
}


renderNavbar(links);
animateAboutPage();
navSlide();


  


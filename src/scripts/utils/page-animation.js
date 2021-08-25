const _scrollToTop = () => {
    window.scrollTo(0,0);
}

const animateAboutPage = () => {
    _scrollToTop();
    const timeline = gsap.timeline();
    timeline.fromTo('hero-section', 1 , {width : "0%"}, {width: "100%", ease: "power1"});
    timeline.fromTo('.hero-image', 0.5, { opacity : "0%"}, {opacity: "100%", ease:Power2.easeInOut});
    timeline.fromTo('.hero-headline', 0.5, { opacity : "0%"}, {opacity: "100%", ease:Power2.easeInOut});
    timeline.fromTo('.hero-description', 0.5, { opacity : "0%"}, {opacity: "100%", ease:Power2.easeInOut});
    timeline.fromTo('.download-button', 0.5, { opacity : "0%"}, {opacity: "100%", ease:Power2.easeInOut});
}

const animateLoading = () =>{
    gsap.from(".round", { duration: 1, opacity: 0, y: "100px", stagger: 0.2, repeat: -1, yoyo: true});
}

export {animateAboutPage, animateLoading};
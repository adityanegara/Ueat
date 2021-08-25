import {animateAboutPage} from '../../utils/page-animation';

const AboutPage = {
    async render(){
        return `<hero-section
                    headline="Discover Your Taste"
                    description="Exploring Restaurant Never Been Easier"
                    button-caption="Download Now"
                    image ="./img/hero.jpg">
                </hero-section>`
    },

    async afterRender(){
        animateAboutPage();
    }
}

export default AboutPage;
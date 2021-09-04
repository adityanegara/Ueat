import { animateAboutPage } from '../../utils/page-animation';

const AboutPage = {
  async render() {
    return `<hero-section
                    headline="Discover Your Taste"
                    description="Exploring Restaurant Never Been Easier"
                    button-caption="Download Now"
                    image ="./img/hero.jpg">
                </hero-section>`;
  },

  async afterRender() {
    this._downloadApplication();
    animateAboutPage();
  },

  _downloadApplication() {
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
      deferredPrompt = e;
    });
    const downloadButton = document.querySelector('#download-button');
    downloadButton.addEventListener('click', async () => {
      if (deferredPrompt !== null) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          deferredPrompt = null;
        }
      }
    });
  },
};

export default AboutPage;

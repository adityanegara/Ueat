class HeroSection extends HTMLElement {
  connectedCallback() {
    this.headline = this.getAttribute('headline') || null;
    this.description = this.getAttribute('description') || null;
    this.buttonCaption = this.getAttribute('button-caption') || null;
    this.image = this.getAttribute('image') || null;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero-image">
            <img src="${this.image}" alt="" />
        </div>
        <div class="hero-headline">
            <h1>${this.headline}</h1>
        </div>
      <div class="hero-description">
        <h2>${this.description}</h2>
      </div>
      <div class="download-button">
        <button>${this.buttonCaption}</button>
      </div>`;
  }
}

customElements.define('hero-section', HeroSection);

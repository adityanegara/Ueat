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
            <img tabindex="0"  src="${this.image}" alt="hero image" />
        </div>
        <div class="hero-headline">
            <h1 tabindex="0">${this.headline}</h1>
        </div>
      <div class="hero-description">
        <h2 tabindex="0">${this.description}</h2>
      </div>
      <div class="download-button">
        <button id="download-button" aria-label="Download Now Button ">${this.buttonCaption}</button>
      </div>`;
  }
}

customElements.define('hero-section', HeroSection);

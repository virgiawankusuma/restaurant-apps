class RestoReview extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <h2>Reviews</h2>
    <div id="resto-review"></div>
    `;
  }
}

customElements.define('resto-review', RestoReview);

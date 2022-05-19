class RestoList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <h2>
      <span class="title-content">Explore Restaurant</span>
    </h2>

    <div id="resto-list" class="row"></div>
    `;
  }
}

customElements.define('resto-list', RestoList);

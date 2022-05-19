class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <p>
      &copy; Copyright 2022 &dash; <a href="/">Resto Finder |
      <a href="https://github.com/virgiawankusuma/restaurant-apps" target="_blank" >View on Github</a>
    </p>
    `;
  }
}

customElements.define('app-footer', AppFooter);

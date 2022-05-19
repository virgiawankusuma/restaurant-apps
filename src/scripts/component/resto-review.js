class RestoReview extends HTMLElement {
  connectedCallback(id) {
    console.log(id);
    this._id = id;
    this.render();
  }

  async render() {
    this.classList.add('resto_review');
    console.log(this._id);
    this.innerHTML = `
    <h4>Restaurant Review</h4>
    <form class='submit-review'>
      <input type='hidden' id='reviewID' value='${this._id}'>
      <div class='form-group'>
        <label for='name'>Nama</label>
        <input type='text' id='name' required>
      </div>
      <div class='form-group'>
        <label for='review'>Review</label>
        <textarea id='review' required></textarea>
      </div>
      <button type='submit' class='btn-submit'> Resto Review </button>
    </form>
    `;
  }
}

customElements.define('resto-review', RestoReview);

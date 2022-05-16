const Favorite = {
  async render() {
    return `
      <h2>
        <span class="title-content">Favorite Restaurant</span>
      </h2>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Favorite;

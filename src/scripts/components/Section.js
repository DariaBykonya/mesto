export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._cards = items;
    this.renderer = renderer;
  }

  addCardFromArray() {
    this._cards.forEach(element => {
      this.addItem(this.renderer(element));
    });
  }

  addItem(DomElement) {
    this._container.prepend(DomElement);
  }
}

export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._cards = items;
    this._renderer = renderer;
  }

  renderItems() {
    this._cards.forEach(element => {
      this._renderer(element);
    });
  }

  addItem(DomElement) {
    this._container.prepend(DomElement);
  }
}

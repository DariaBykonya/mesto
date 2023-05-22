// создание класса Card, который создаёт карточку с текстом и ссылкой на изображение
export default class Card {
  constructor(data, templateSelector, openImagePopup) {
    this._data = data;
    this._name = data.title;
    this._image = data.image;
    this._templateSelector = templateSelector;
    this._openImagePopup = openImagePopup;
  }

  _getTepmlate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  // добавление лайка на карточке
  _toggleLike = () => {
    this._likeButtonElement.classList.toggle('element__like-button_active');
  };

  // удаление карточки
  _deleteCard = () => {
    this._element.remove();
  };

  _handleCardClick = () => {
    this._openImagePopup(this._data);
  };

  _setEventListeners() {
    this._likeButtonElement.addEventListener('click', this._toggleLike);
    this._deleteButtonElement.addEventListener('click', this._deleteCard);
    this._imageElement.addEventListener('click', this._handleCardClick);
  }

  createCard() {
    this._element = this._getTepmlate();
    this._imageElement = this._element.querySelector('.element__image');
    this._likeButtonElement = this._element.querySelector('.element__like-button');
    this._deleteButtonElement = this._element.querySelector('.element__delete-button');
    this._textElement = this._element.querySelector('.element__text');

    this._imageElement.src = this._image;
    this._imageElement.alt = this._name;
    this._textElement.textContent = this._name;

    this._setEventListeners();
    return this._element;
  }
}

// создание класса Card, который создаёт карточку с текстом и ссылкой на изображение
export default class Card {
  constructor(dataCard, templateSelector, openImagePopup, openDeletePopup, toggleLike) {
    this._data = dataCard;
    this._image = dataCard.link;
    this._name = dataCard.name;
    this._myId = dataCard.myId;
    this._ownerId = dataCard.owner._id;
    this._cardId = dataCard._id;
    this._likes = dataCard.likes;
    this._likesLength = dataCard.likes.length;
    this._toggleLike = toggleLike;
    this._openImagePopup = openImagePopup;
    this._openDeletePopup = openDeletePopup;
    this._element = document
      .querySelector(templateSelector)
      .content.querySelector('.element')
      .cloneNode(true);
    this._imageElement = this._element.querySelector('.element__image');
    this._likeButtonElement = this._element.querySelector('.element__like-button');
    this._deleteButtonElement = this._element.querySelector('.element__delete-button');
    this._textElement = this._element.querySelector('.element__text');
    this._meterLikes = this._element.querySelector('.element__like-meter');
  }
  // добавление лайка на карточке
  _changeLike = () => {
    this._toggleLike(this._likeButtonElement, this._cardId, this._cardId);
    // this._likeButtonElement.classList.toggle('element__like-button_active');
  };

  // popup удаление карточки
  _deleteCard = () => {
    this._openDeletePopup({ element: this, cardId: this._cardId });
  };

  _handleCardClick = () => {
    this._openImagePopup(this._data);
  };

  _setEventListeners() {
    this._likeButtonElement.addEventListener('click', this._changeLike);
    this._deleteButtonElement.addEventListener('click', this._deleteCard);
    this._imageElement.addEventListener('click', this._handleCardClick);
  }

  _changeStateDeleteButton() {
    this._myId === this._ownerId
      ? (this._deleteButtonElement.style.display = 'block')
      : (this._deleteButtonElement.style.display = 'none');
  }

  _checkLikesStatus() {
    this._likes.forEach(item => {
      if (item._id === this._myId) {
        this._likeButtonElement.classList.add('element__like-button_active');
        return;
      }
    });
    this._meterLikes.textContent = this._likesLength;
  }

  toggleLike(likes) {
    this._likeButtonElement.classList.toggle('element__like-button_active');
    this._meterLikes.textContent = likes.length;
  }

  deleteCard() {
    this._element.remove();
  }

  createCard() {
    this._imageElement.src = this._image;
    this._imageElement.alt = this._name;
    this._textElement.textContent = this._name;
    this._checkLikesStatus();
    this._changeStateDeleteButton();
    this._setEventListeners();
    return this._element;
  }
}

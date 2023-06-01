import Popup from './Popup.js';

export default class PopupConfirmDelete extends Popup {
  constructor(popupSelector, submit) {
    super(popupSelector);
    this._submit = submit;
    this._submitButton = this._form.querySelector('.popup__save');
    this._textButton = this._submitButton.textContent;
  }

  setTextButton() {
    this._submitButton.textContent = this._textButton;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
      this._submitButton.textContent = `${this._submitButton.textContent}...`;

      this._submit({ element: this._element, cardId: this._cardId });
    });
  }

  open = ({ element, cardId }) => {
    super.open();
    this._element = element;
    this._cardId = cardId;
  };
}

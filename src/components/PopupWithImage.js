import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imagePopup = this._popup.querySelector('.popup-image__image');
    this._imagePopupHeading = this._popup.querySelector('.popup-image__heading');
  }

  open = data => {
    this._imagePopup.src = data.link;
    this._imagePopup.alt = data.name;
    this._imagePopupHeading.textContent = data.name;
    super.open();
  };
}

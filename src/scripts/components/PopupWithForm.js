import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submit) {
    super(popupSelector);
    this._submit = submit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
  }

  setInputsValue(dataUser) {
    this._inputList.forEach(input => {
      input.value = dataUser[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
      this._submit(this._getInputsValue());
      this.close();
    });
  }

  _getInputsValue() {
    this._values = {};
    this._inputList.forEach(input => {
      this._values[input.name] = input.value;
    });
    return this._values;
  }

  close() {
    super.close();
    this._form.reset();
  }
}

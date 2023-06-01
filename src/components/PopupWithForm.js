import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submit) {
    super(popupSelector);
    this._submit = submit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._submitButton = this._form.querySelector('.popup__save');
    this._textButton = this._submitButton.textContent;
  }

  setInputsValue(formValues) {
    this._inputList.forEach(input => {
      input.value = formValues[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
      this._submitButton.textContent = `${this._submitButton.textContent}...`;
      this._submit(this._getInputsValue());
    });
  }

  _getInputsValue() {
    this._values = {};
    this._inputList.forEach(input => {
      this._values[input.name] = input.value;
    });
    return this._values;
  }

  setTextButton() {
    this._submitButton.textContent = this._textButton;
  }

  close() {
    super.close();
    this._form.reset();
  }
}

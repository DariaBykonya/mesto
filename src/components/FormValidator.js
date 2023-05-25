export default class FormValidator {
  constructor(config, form) {
    this._inputSelector = config.inputSelector;
    this._errorSelectorTemplate = config.errorSelectorTemplate;
    this._activeErrorClass = config.activeErrorClass;
    this._inputErrorClass = config.inputErrorClass;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._activeButtonClass = config.activeButtonClass;
    this._form = form;
    this._button = form.querySelector(this._submitButtonSelector);
    this._inputList = form.querySelectorAll(this._inputSelector);
  }

  _showInputError() {
    this._input.classList.add(this._inputErrorClass);
    this._errorTextElement.textContent = this._input.validationMessage;
    this._errorTextElement.classList.add(this._activeErrorClass);
  }

  _hideInputError() {
    this._input.classList.remove(this._inputErrorClass);
    this._errorTextElement.classList.remove(this._activeErrorClass);
    this._errorTextElement.textContent = '';
  }

  _enableButton() {
    this._button.classList.remove(this._inactiveButtonClass);
    this._button.classList.add(this._activeButtonClass);
    this._button.disabled = false;
  }

  _disableButton() {
    this._button.classList.add(this._inactiveButtonClass);
    this._button.classList.remove(this._activeButtonClass);
    this._button.disabled = true;
  }

  _hasInvalidInput() {
    return Array.from(this._inputList).some(input => !input.validity.valid);
  }

  _toggleButtonState() {
    if (!this._hasInvalidInput()) {
      this._enableButton();
    } else {
      this._disableButton();
    }
  }

  _checkInputValidity() {
    this._errorTextElement = this._form.querySelector(
      `${this._errorSelectorTemplate}${this._input.id}`
    );
    if (!this._input.validity.valid) {
      this._showInputError();
    } else {
      this._hideInputError();
    }
  }

  _setEventListener() {
    this._inputList.forEach(input => {
      input.addEventListener('input', () => {
        this._input = input;
        this._checkInputValidity();
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListener();
  }

  resetValidation() {
    this._inputList.forEach(input => {
      this._input = input;
      this._errorTextElement = this._form.querySelector(
        `${this._errorSelectorTemplate}${this._input.id}`
      );
      if (!input.validity.valid) {
        this._hideInputError();
      }
    });
    this._disableButton();
  }
}

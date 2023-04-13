const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorClassTemplate: '.popup__input-error_type_',
  activeErrorClass: 'popup__input-error_active',
  inputErrorClass: 'popup__input_type_error',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_invalid',
  activeButtonClass: 'popup__save_valid'
};

const showInputError = (
  input,
  inputErrorClass,
  errorTextElement,
  validationMessage,
  activeErrorClass
) => {
  input.classList.add(inputErrorClass);
  errorTextElement.textContent = validationMessage;
  errorTextElement.classList.add(activeErrorClass);
};

const hideInputError = (input, inputErrorClass, errorTextElement, activeErrorClass) => {
  input.classList.remove(inputErrorClass);
  errorTextElement.classList.remove(activeErrorClass);
  errorTextElement.textContent = '';
};

const disableButton = (submitButton, inactiveButtonClass, activeButtonClass) => {
  submitButton.classList.add(inactiveButtonClass);
  submitButton.classList.remove(activeButtonClass);
  submitButton.setAttribute('disabled', true);
};

const enableButton = (submitButton, inactiveButtonClass, activeButtonClass) => {
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.classList.add(activeButtonClass);
  submitButton.removeAttribute('disabled');
};

const checkInputValidity = (input, inputErrorClass, errorClassTemplate, activeErrorClass) => {
  const errorTextElement = document.querySelector(`${errorClassTemplate}${input.id}`);
  if (!input.validity.valid) {
    showInputError(
      input,
      inputErrorClass,
      errorTextElement,
      input.validationMessage,
      activeErrorClass
    );
  } else {
    hideInputError(input, inputErrorClass, errorTextElement, inputErrorClass);
  }
};

const hasInvalidInput = inputList => {
  return inputList.some(input => !input.validity.valid);
};

const toggleButtonState = (submitButton, inactiveButtonClass, activeButtonClass, inputList) => {
  if (!hasInvalidInput(inputList)) {
    enableButton(submitButton, inactiveButtonClass, activeButtonClass);
  } else {
    disableButton(submitButton, inactiveButtonClass, activeButtonClass);
  }
};

const setEventListeners = (
  inputList,
  inputErrorClass,
  errorClassTemplate,
  activeErrorClass,
  submitButton,
  inactiveButtonClass,
  activeButtonClass
) => {
  inputList.forEach(input => {
    input.addEventListener('input', evt => {
      checkInputValidity(
        input,
        inputErrorClass,
        errorClassTemplate,
        activeErrorClass,
        inputErrorClass
      );
      toggleButtonState(submitButton, inactiveButtonClass, activeButtonClass, inputList);
    });
  });
};

const enableValidation = config => {
  const formList = document.querySelectorAll(config.formSelector);

  formList.forEach(form => {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    const submitButton = form.querySelector(config.submitButtonSelector);
    setEventListeners(
      inputList,
      config.inputErrorClass,
      config.errorClassTemplate,
      config.activeErrorClass,
      submitButton,
      config.inactiveButtonClass,
      config.activeButtonClass
    );
  });
};

enableValidation(validationConfig);

export { disableButton, validationConfig, hideInputError };

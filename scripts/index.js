import cards from './constants.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

const popupEditProfile = document.querySelector('#edit-profile-popup');
const addMestoPopup = document.querySelector('#mestoPopup');
const editProfileButton = document.querySelector('.profile__edit-button');

const currentName = document.querySelector('.profile__name');

const nameInput = document.querySelector('.popup__input_type_name');

const jobInput = document.querySelector('.popup__input_type_job');

const currentJob = document.querySelector('.profile__text');

const closeButton = document.querySelectorAll('.popup__close');

const popupList = document.querySelectorAll('.popup');

const popupImage = document.querySelector('#imagePopup');

const imagePopup = popupImage.querySelector('.popup-image__image');

const headingPopup = popupImage.querySelector('.popup-image__heading');

const selectorTemplate = '#cardTemplate';

const containerElements = document.querySelector('.elements');

const formAddMesto = document.querySelector('#formAddMesto');
const imageSrc = formAddMesto.querySelector('.popup__input_type_mesto');
const name = formAddMesto.querySelector('.popup__input_type_name');

function createCard(element) {
  const card = new Card(element, selectorTemplate, openImagePopup);
  const cardElement = card.createCard();
  return cardElement;
}

function addCard(container, card) {
  container.prepend(card);
}

cards.forEach(element => {
  // Создадим экземпляр карточки
  // Добавляем в DOM
  addCard(containerElements, createCard(element));
});

function openImagePopup(data) {
  imagePopup.src = data.image;
  headingPopup.textContent = data.name;
  imagePopup.alt = data.name;
  openPopup(popupImage);
}

editProfileButton.addEventListener('click', () => {
  formPopupEditProfileValidator.resetValidation();
  nameInput.value = currentName.textContent;
  jobInput.value = currentJob.textContent;
  openPopup(popupEditProfile);
});

const buttonCloseEditForm = popupEditProfile.querySelector('.popup__close');
buttonCloseEditForm.addEventListener('click', function () {
  closePopup(popupEditProfile);
});

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupOnEsc);
}

function closePopup(popup) {
  document.removeEventListener('keydown', closePopupOnEsc);
  popup.classList.remove('popup_opened');
}

//функция закрытия попапа при нажатие на esc
function closePopupOnEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

// функция закрытия попапа при клике на оверлэй
const closePopupOnOverlay = function (event) {
  if (event.target === event.currentTarget) {
    closePopup(event.target);
  }
};

// навешивание закрытие
popupList.forEach(item => {
  item.addEventListener('mousedown', closePopupOnOverlay);
});

const formEdit = popupEditProfile.querySelector('#formEditProfile');

formEdit.addEventListener('submit', handleFormEditProfileSubmit);

function handleFormEditProfileSubmit(evt) {
  evt.preventDefault();
  currentName.textContent = nameInput.value;
  currentJob.textContent = jobInput.value;

  closePopup(popupEditProfile);
}

// открытие и закрытие popup для добавления карточки на страницу

const addMestoButton = document.querySelector('.profile__add-button');
const closeAddPopup = addMestoPopup.querySelector('.popup__close');

addMestoButton.addEventListener('click', () => {
  formAddMesto.reset();
  formAddcardValidator.resetValidation();
  openPopup(addMestoPopup);
});

closeAddPopup.addEventListener('click', function () {
  closePopup(addMestoPopup);
});

// через button добавить карточку на страницу и закрыть Popup

formAddMesto.addEventListener('submit', handleFormCreateMestoSubmit);

function handleFormCreateMestoSubmit(evt) {
  evt.preventDefault();
  const formAddMesto = evt.target;

  const card = {
    name: name.value,
    image: imageSrc.value
  };

  addCard(containerElements, createCard(card));

  closePopup(addMestoPopup);
  formAddMesto.reset();
}

// закрытие Popup с изображением
const closeButtonPopupImage = popupImage.querySelector('.popup__close');
closeButtonPopupImage.addEventListener('click', function () {
  closePopup(popupImage);
});

const validationConfig = {
  inputSelector: '.popup__input',
  errorSelectorTemplate: '.popup__input-error_type_',
  activeErrorClass: 'popup__input-error_active',
  inputErrorClass: 'popup__input_type_error',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_invalid',
  activeButtonClass: 'popup__save_valid'
};

// Создание экземпляра класса для редактирования профиля

const formPopupEditProfileValidator = new FormValidator(validationConfig, popupEditProfile);
formPopupEditProfileValidator.enableValidation();

// Создание экземпляра класса для добавления карточки

const formAddcardValidator = new FormValidator(validationConfig, addMestoPopup);
formAddcardValidator.enableValidation();

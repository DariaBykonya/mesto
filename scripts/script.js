import cards from './constants.js';
import { disableButton, validationConfig, hideInputError } from './validate.js';

const popupEditProfile = document.querySelector('#edit-profile-popup');
const addMestoPopup = document.querySelector('#mestoPopup');
const editProfileButton = document.querySelector('.profile__edit-button');

const currentName = document.querySelector('.profile__name');

const nameInput = document.querySelector('.popup__input_type_name');

const jobInput = document.querySelector('.popup__input_type_job');

const currentJob = document.querySelector('.profile__text');

const closeButton = document.querySelectorAll('.popup__close');

const popupList = document.querySelectorAll('.popup');

editProfileButton.addEventListener('click', function () {
  const submitButton = popupEditProfile.querySelector(validationConfig.submitButtonSelector);
  disableButton(
    submitButton,
    validationConfig.inactiveButtonClass,
    validationConfig.activeButtonClass
  );
  openPopup(popupEditProfile);
  nameInput.value = currentName.textContent;
  jobInput.value = currentJob.textContent;
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

addMestoButton.addEventListener('click', function () {
  formAddMesto.reset();
  openPopup(addMestoPopup);

  const submitButton = formAddMesto.querySelector(validationConfig.submitButtonSelector);
  disableButton(
    submitButton,
    validationConfig.inactiveButtonClass,
    validationConfig.activeButtonClass
  );
});

closeAddPopup.addEventListener('click', function () {
  closePopup(addMestoPopup);
  formAddMesto.reset();
});

// через button добавить карточку на страницу и закрыть Popup

const formAddMesto = document.querySelector('#formAddMesto');
formAddMesto.addEventListener('submit', handleFormCreateMestoSubmit);

function handleFormCreateMestoSubmit(evt) {
  evt.preventDefault();
  const formAddMesto = evt.target;
  const imageSrc = formAddMesto.querySelector('.popup__input_type_mesto').value;
  const name = formAddMesto.querySelector('.popup__input_type_name').value;
  const card = {
    name: name,
    image: imageSrc
  };
  renderCard(card);
  closePopup(addMestoPopup);
  formAddMesto.reset();
}

const cardsContainer = document.querySelector('.elements');
const popupImage = document.querySelector('#imagePopup');

// отображение карточек на странице, активация лайк на карточках

const createCard = card => {
  const newCard = document.querySelector('#cardTemplate').content.cloneNode(true);
  const cardName = newCard.querySelector('.element__text');

  cardName.textContent = card.name;

  const cardImage = newCard.querySelector('.element__image');

  cardImage.setAttribute('src', card.image);
  cardImage.setAttribute('alt', `Фотография ${card.name}`);
  const deleteButton = newCard.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', handleDeleteButtonClick);

  // добавление лайка на карточке

  const likeButton = newCard.querySelector('.element__like-button');
  likeButton.addEventListener('click', evt => {
    likeButton.classList.toggle('element__like-button_active');
  });

  // открытие Popup с изображением

  cardImage.addEventListener('click', evt => {
    const openImagePopup = popupImage.querySelector('.popup-image__image');
    openImagePopup.setAttribute('src', card.image);
    openImagePopup.setAttribute('alt', `Фотография ${card.name}`);
    const imageHeading = popupImage.querySelector('.popup-image__heading');
    imageHeading.textContent = card.name;
    openPopup(popupImage);
  });
  return newCard;
};

const renderCard = card => cardsContainer.prepend(createCard(card));

cards.forEach(renderCard);

// закрытие Popup с изображением

const closeButtonPopupImage = popupImage.querySelector('.popup__close');
closeButtonPopupImage.addEventListener('click', function () {
  closePopup(popupImage);
});

// удаление карточки

function handleDeleteButtonClick(evt) {
  const button = evt.target;
  const card = button.closest('.element');
  card.remove();
}

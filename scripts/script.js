const editCardsPopup = document.querySelector('#cardsPopup');
const addMestoPopup = document.querySelector('#mestoPopup');
let editProfileButton = document.querySelector('.profile__edit-button');

let currentName = document.querySelector('.profile__name');

let nameInput = document.querySelector('.popup__input_type_name');

let jobInput = document.querySelector('.popup__input_type_job');

let currentJob = document.querySelector('.profile__text');

editProfileButton.addEventListener('click', function () {
  openPopup(editCardsPopup);
  nameInput.value = currentName.textContent;
  jobInput.value = currentJob.textContent;
});

let buttonSaveEditForm = editCardsPopup.querySelector('.popup__save');

let buttonCloseEditForm = editCardsPopup.querySelector('.popup__close');
buttonCloseEditForm.addEventListener('click', function () {
  closePopup(editCardsPopup);
});

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function handleFormEditProfileSubmit(evt) {
  evt.preventDefault();

  currentName.textContent = nameInput.value;
  currentJob.textContent = jobInput.value;

  closePopup(editCardsPopup);
}
buttonSaveEditForm.addEventListener('click', handleFormEditProfileSubmit);

// открытие и закрытие popup для добавления карточки на страницу

const addMestoButton = document.querySelector('.profile__add-button');
const formAddMesto = document.querySelector('#formAddMesto');
const buttonCreateMesto = formAddMesto.querySelector('.popup__save');
const closeAddPopup = addMestoPopup.querySelector('.popup__close');

addMestoButton.addEventListener('click', function () {
  openPopup(addMestoPopup);
});

closeAddPopup.addEventListener('click', function () {
  closePopup(addMestoPopup);
});

// // через button добавить карточку на страницу и закрыть Popup

const formCreateMesto = document.querySelector('#formAddMesto');
formCreateMesto.addEventListener('submit', handleFormCreateMestoSubmit);

function handleFormCreateMestoSubmit(evt) {
  evt.preventDefault();
  const formCreateMesto = evt.target;
  const image = formAddMesto.querySelector('.popup__input_type_mesto').value;
  const name = formAddMesto.querySelector('.popup__input_type_name').value;
  const card = {
    name: name,
    alt: '',
    image: image
  };
  createCard(card);
  closePopup(addMestoPopup);
}
buttonCreateMesto.addEventListener('click', handleFormCreateMestoSubmit);

// добавление карточек на страницу

const cards = [
  {
    name: 'Архыз',
    alt: '',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    alt: '',
    image:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    alt: '',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    alt: '',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    alt: '',
    image:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    alt: '',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const addCardsMesto = document.querySelector('.elements');
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
    const buttonlike = evt.target;
    likeButton.classList.toggle('element__like-button_active');
  });
  addCardsMesto.append(newCard);

  // открытие Popup с изображением

  cardImage.addEventListener('click', evt => {
    const currentImageClick = evt.target;
    const openImagePopup = popupImage.querySelector('.popup-image__image');
    openImagePopup.setAttribute('src', card.image);
    const imageHeading = popupImage.querySelector('.popup-image__heading');
    imageHeading.textContent = card.name;
    openPopup(popupImage);
  });
};

cards.forEach(createCard);

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

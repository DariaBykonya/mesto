const editCardsPopup = document.querySelector('#cardsPopup');
const addMestoPopup = document.querySelector('#mestoPopup');
let editProfileButton = document.querySelector('.profile__edit-button');

let formElement = document.querySelector('#edit');

let currentName = document.querySelector('.profile__name');

let nameInput = document.querySelector('.popup__input_type_name');

let jobInput = document.querySelector('.popup__input_type_job');

let currentJob = document.querySelector('.profile__text');

editProfileButton.addEventListener('click', function () {
  openPopup(editCardsPopup);
  // openPopup(addMestoPopup);
  nameInput.value = currentName.textContent;
  jobInput.value = currentJob.textContent;
});

let buttonSaveEditForm = editCardsPopup.querySelector('.popup__save');

let buttonCloseEditForm = editCardsPopup.querySelector('.popup__close');
buttonCloseEditForm.addEventListener('click', function () {
  closePopup(editCardsPopup);
});
const buttonAddMesto = document.querySelector('.pop');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  currentName.textContent = nameInput.value;
  currentJob.textContent = jobInput.value;

  closePopup(editCardsPopup);
}
buttonSaveEditForm.addEventListener('click', handleFormSubmit);

const addMestoButton = document.querySelector('.profile__add-button');
const buttonCreateMesto = addMestoPopup.querySelector('.popup__save');
const closeAddPopup = addMestoPopup.querySelector('.popup__close');

addMestoButton.addEventListener('click', function () {
  openPopup(addMestoPopup);
});

closeAddPopup.addEventListener('click', function () {
  closePopup(addMestoPopup);
});

// function handleFormSubmit(evt) {
//   evt.preventDefault();

//   currentName.textContent = nameInput.value;
//   currentJob.textContent = jobInput.value;

//   closePopup(editCardsPopup);
// }
// buttonSaveEditForm.addEventListener('click', handleFormSubmit);

function handleFormSubmit(evt) {
  evt.preventDefault();

  closePopup(addMestoPopup);
}
buttonCreateMesto.addEventListener('click', handleFormSubmit);

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

const createCard = card => {
  const newCard = document.querySelector('#cardTemplate').content.cloneNode(true);
  const cardName = newCard.querySelector('.element__text');

  cardName.textContent = card.name;

  const cardImage = newCard.querySelector('.element__image');

  cardImage.setAttribute('src', card.image);
  cardImage.setAttribute('alt', card.alt);
  addCardsMesto.append(newCard);
};

cards.forEach(createCard);

const likeButton = document.querySelectorAll('.element__like-button');
likeButton.forEach(button =>
  button.addEventListener('click', evt => {
    button.classList.toggle('element__like-button_active');
  })
);

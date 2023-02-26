let editProfileButton = document.querySelector('.profile__edit-button');
let editPopup = document.querySelector('.popup');
let formElement = document.querySelector('#edit');

let currentName = document.querySelector('.profile__name');

let nameInput = document.querySelector('.popup__input_type_name');

let jobInput = document.querySelector('.popup__input_type_job');

let currentJob = document.querySelector('.profile__text');
editProfileButton.addEventListener('click', function () {
  openPopup(editPopup);
  nameInput.value = currentName.textContent;
  jobInput.value = currentJob.textContent;
});

let buttonSaveEditForm = document.querySelector('.popup__save');

let buttonCloseEditForm = document.querySelector('.popup__close');
buttonCloseEditForm.addEventListener('click', function () {
  closePopup(editPopup);
});

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

  closePopup(editPopup);
}

buttonSaveEditForm.addEventListener('click', handleFormSubmit);

// массив с карточками мест

// const cards = [
//   {
//     title: 'Архыз',
//     image:
//       'https://images.unsplash.com/photo-1638989280415-d58f7340b273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80'
//   },
//   {
//     title: 'Челябинская область',
//     image:
//       'https://images.unsplash.com/photo-1575738171526-df0217663296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
//   },
//   {
//     title: 'Иваново',
//     image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//   },
//   {
//     title: 'Камчатка',
//     image:
//       'https://images.unsplash.com/photo-1665073140507-0bad3d962476?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1203&q=80'
//   },
//   {
//     title: 'Холмогорский район',
//     image:
//       'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//   },
//   {
//     title: 'Байкал',
//     image:
//       'https://images.unsplash.com/photo-1551845041-63e8e76836ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80'
//   }
// ];

// export default cards;

const editProfileButton = document.querySelector('.profile__edit-button');
const addMestoButton = document.querySelector('.profile__add-button');
const AddAvatarButton = document.querySelector('.profile__avatar-add');
// const imageAvatar = document.querySelector('.profile__image');

const selectorTemplate = '#cardTemplate';
const popupProfileSelector = '#edit-profile-popup';
const popupAddMestoSelector = '#mestoPopup';
const popupImageSelector = '#imagePopup';
const containerElementsSelector = '.elements';
const popupAvatarSelector = '#addImageAvatar';
const popupDeleteSelector = '#confirmPopup';

const forms = {};

const configProfile = {
  currentNameSelector: '.profile__name',
  currentJobSelector: '.profile__text',
  currentAvatarSelector: '.profile__image'
};

const validationConfig = {
  inputSelector: '.popup__input',
  errorSelectorTemplate: '.popup__input-error_type_',
  activeErrorClass: 'popup__input-error_active',
  inputErrorClass: 'popup__input_type_error',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_invalid',
  activeButtonClass: 'popup__save_valid'
};

export {
  editProfileButton,
  addMestoButton,
  selectorTemplate,
  popupProfileSelector,
  popupAddMestoSelector,
  popupImageSelector,
  containerElementsSelector,
  forms,
  configProfile,
  validationConfig,
  popupAvatarSelector,
  popupDeleteSelector,
  AddAvatarButton
};

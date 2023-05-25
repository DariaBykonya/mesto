import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {
  cards,
  editProfileButton,
  addMestoButton,
  selectorTemplate,
  popupProfileSelector,
  popupAddMestoSelector,
  popupImageSelector,
  containerElementsSelector,
  forms,
  configProfile,
  validationConfig
} from '../utils/constants.js';

import './index.css';

const userInfo = new UserInfo(configProfile);

const popupImages = new PopupWithImage(popupImageSelector);
popupImages.setEventListeners();

const newSection = new Section(
  {
    items: cards,
    renderer: element => {
      newSection.addItem(createCard(element));
    }
  },
  containerElementsSelector
);
function createCard(element) {
  const card = new Card(element, selectorTemplate, popupImages.open);
  return card.createCard();
}

newSection.renderItems();

const popupProfile = new PopupWithForm(popupProfileSelector, data => {
  userInfo.setUserInfo(data);
});
popupProfile.setEventListeners();

const popupAddMesto = new PopupWithForm(popupAddMestoSelector, data => {
  newSection.addItem(newSection.renderer(data));
});
popupAddMesto.setEventListeners();

Array.from(document.forms).forEach(item => {
  const form = new FormValidator(validationConfig, item);
  const name = item.name;
  forms[name] = form;
  form.enableValidation();
});

editProfileButton.addEventListener('click', () => {
  forms.editProfile.resetValidation();
  popupProfile.setInputsValue(userInfo.getUserInfo());
  popupProfile.open();
});

addMestoButton.addEventListener('click', () => {
  formAddMesto.reset();
  forms.addMesto.resetValidation();
  popupAddMesto.open();
});

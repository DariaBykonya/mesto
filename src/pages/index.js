import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
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
} from '../scripts/utils/constants.js';

import './index.css';

const userInfo = new UserInfo(configProfile);

const popupImages = new PopupWithImage(popupImageSelector);
popupImages.setEventListeners();

const newSection = new Section(
  {
    items: cards,
    renderer: element => {
      const card = new Card(element, selectorTemplate, popupImages.open);
      return card.createCard();
    }
  },
  containerElementsSelector
);
newSection.addCardFromArray();

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

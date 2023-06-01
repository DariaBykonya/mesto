import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupConfirmDelete from '../components/PopupConfirmDelete.js';
import Api from '../components/Api.js';
import {
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
} from '../utils/constants.js';

import './index.css';

const userInfo = new UserInfo(configProfile);

const popupImages = new PopupWithImage(popupImageSelector);

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: 'ae8e820c-7030-4549-b668-34fdff5dfa8b',
    'Content-Type': 'application/json'
  }
});

api.getCards().then(res => console.log(res));

const popupDeleteCard = new PopupConfirmDelete(popupDeleteSelector, ({ element, cardId }) => {
  api
    .deleteCard(cardId)
    .then(() => {
      element.deleteCard();
      popupDeleteCard.close();
    })
    .catch(error => console.error(`Ошибка удаления карточки ${error}`))
    .finally(() => {
      popupDeleteCard.setTextButton();
    });
});

function createCard(element) {
  const card = new Card(
    element,
    selectorTemplate,
    popupImages.open,
    popupDeleteCard.open,
    (likeButton, cardId) => {
      if (likeButton.classList.contains('element__like-button_active')) {
        api
          .deleteLike(cardId)
          .then(res => {
            card.toggleLike(res.likes);
          })
          .catch(error => console.error(`Ошибка удаления лайка ${error}`));
      } else {
        api
          .addLike(cardId)
          .then(res => {
            card.toggleLike(res.likes);
          })
          .catch(error => console.error(`Ошибка лайка ${error}`));
      }
    }
  );
  return card.createCard();
}

const newSection = new Section(element => {
  newSection.addItem(createCard(element));
}, containerElementsSelector);

const popupProfile = new PopupWithForm(popupProfileSelector, data => {
  api
    .patchUserInfo(data)
    .then(res => {
      userInfo.setUserInfo({ nameuser: res.name, profession: res.about, avatar: res.avatar });
      popupProfile.close();
    })
    .catch(error => console.error(`Ошибка ${error}`))
    .finally(() => {
      popupProfile.setTextButton();
    });
});

const popupAddMesto = new PopupWithForm(popupAddMestoSelector, data => {
  Promise.all([api.getInfo(), api.addCard(data)])
    .then(([dataUser, dataCard]) => {
      dataCard.myId = dataUser._id;
      newSection.addItem(createCard(dataCard));
      popupAddMesto.close();
    })
    .catch(error => console.error(`Ошибка ${error}`))
    .finally(() => {
      popupAddMesto.setTextButton();
    });
});

const popupAddAvatar = new PopupWithForm(popupAvatarSelector, data => {
  api
    .patchAddAvatar(data)
    .then(res => {
      userInfo.setUserInfo({ nameuser: res.name, profession: res.about, avatar: res.avatar });
      popupAddAvatar.close();
    })
    .catch(error => console.error(`Ошибка ${error}`))
    .finally(() => {
      popupAddAvatar.setTextButton();
    });
});

popupImages.setEventListeners();
popupProfile.setEventListeners();
popupAddMesto.setEventListeners();
popupAddAvatar.setEventListeners();
popupDeleteCard.setEventListeners();

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

AddAvatarButton.addEventListener('click', () => {
  forms.addAvatar.resetValidation();
  popupAddAvatar.open();
});

Promise.all([api.getInfo(), api.getCards()])
  .then(([dataUser, dataCard]) => {
    dataCard.forEach(element => {
      element.myId = dataUser._id;
    });
    userInfo.setUserInfo({
      nameuser: dataUser.name,
      profession: dataUser.about,
      avatar: dataUser.avatar
    });
    newSection.renderItems(dataCard);
  })
  .catch(error => console.error(`Ошибка ${error}`));

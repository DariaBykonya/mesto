let editProfileButton = document.querySelector('.edit-button');
let editPopup = document.querySelector('.popup');
editProfileButton.addEventListener('click', function () {
  editPopup.classList.add('popup_opened');
});

let buttonCloseEdit = document.querySelector('.popup__close');
buttonCloseEdit.addEventListener('click', function () {
  editPopup.classList.remove('popup_opened');
});

// Находим форму в DOM
let formElement = document.querySelector('.popup'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__inpu_type_name'); // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__input_type_job');
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value
  document.getElementsByTagName('input')[0].value;
  document.getElementsByTagName('input')[1].value;
  // Выберите элементы, куда должны быть вставлены значения полей
  let rename = document.querySelector('.profile__name');
  let editJob = document.querySelector('.profile__text');
  // Вставьте новые значения с помощью textContent
  rename = document.getElementsByTagName('input')[0].textContent;
  editJob = document.querySelector('input')[1].textContent;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);

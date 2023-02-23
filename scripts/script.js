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
let nameInput = document.querySelector('.popup_name'); // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup_job');
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
let rename = document.querySelector('.profile__name');
let editJob = document.querySelector('.profile__text');
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value
  // Выберите элементы, куда должны быть вставлены значения полей
  // Вставьте новые значения с помощью textContent
  rename.textContent = nameInput;
  editJob.textContent = jobInput;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);

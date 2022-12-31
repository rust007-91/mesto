const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close-button');
let editInput = popup.querySelectorAll('.form__edit-input');
const formElement = popup.querySelector('.form');

const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
let profileTitle = profile.querySelector('.profile__title');
let profileDesc = profile.querySelector('.profile__description');


editButton.addEventListener('click', function () {
    popup.classList.add('popup_opened');
});

popupCloseButton.addEventListener('click', function () {
    popup.classList.remove('popup_opened');
});

function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    let nameInput = editInput[0].value; // Получите значение полей jobInput и nameInput из свойства value
    let jobInput = editInput[1].value;

    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    profileTitle.textContent = nameInput;
    profileDesc.textContent = jobInput;

    console.log(nameInput);
    console.log(jobInput);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);

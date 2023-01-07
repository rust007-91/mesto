const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const formElement = popupElement.querySelector('.popup__form');
let inputNameElement = popupElement.querySelector('.popup__input_type_name');
let inputJobElement = popupElement.querySelector('.popup__input_type_job');

const profileElement = document.querySelector('.profile');
const editButtonElement = profileElement.querySelector('.profile__edit-button');
let profileTitleElement = profileElement.querySelector('.profile__title');
let profileDescElement = profileElement.querySelector('.profile__description');


editButtonElement.addEventListener('click', function () {
    popupElement.classList.add('popup_opened');
});

const closeForm = function () {
    popupElement.classList.remove('popup_opened');
}
popupCloseButtonElement.addEventListener('click', closeForm);


// Получите значение полей profileTitle и profileDesc из элемента profile
let profileNameText = profileTitleElement.textContent;
let profileJobText = profileDescElement.textContent;

// Установить значения из profile в атрубут value
inputNameElement.setAttribute('value', profileNameText);
inputJobElement.setAttribute('value', profileJobText);

function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    // Получите значение полей jobInputElement и nameInputElement из свойства value
    let inputName = inputNameElement.value;
    let inputJob = inputJobElement.value;

    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    profileTitleElement.textContent = inputName;
    profileDescElement.textContent = inputJob;

    closeForm();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);

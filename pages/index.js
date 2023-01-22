const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const formElement = popupElement.querySelector('.popup__form');
let inputNameElement = popupElement.querySelector('.popup__input_type_name');
let inputJobElement = popupElement.querySelector('.popup__input_type_job');

const profileElement = document.querySelector('.profile');
const editButtonElement = profileElement.querySelector('.profile__edit-button');
let profileTitleElement = profileElement.querySelector('.profile__title');
let profileDescElement = profileElement.querySelector('.profile__description');

const elementsCardTemplate = document.querySelector('#elements__card').content;
const elementsListElement = document.querySelector('.elements__list');

    // Клонируем содержимое тега template
const CardElement = elementsCardTemplate.querySelector('.elements__card').cloneNode(true);

    // Наполняем содержимым
    CardElement.querySelector('.elements__card-image').src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg';
    CardElement.querySelector('.elements__card-image').alt = 'Архыз';
    CardElement.querySelector('.elements__title').textContent = 'Архыз';

    const CardElement = elementsCardTemplate.querySelector('.elements__card').cloneNode(true);

    // Наполняем содержимым
    CardElement.querySelector('.elements__card-image').src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg';
    CardElement.querySelector('.elements__card-image').alt = 'Челябинская область';
    CardElement.querySelector('.elements__title').textContent = 'Челябинская область';

    // Добавляем элемент на страницу
    elementsListElement.append(CardElement);

    // Добавление карточек
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const openForm = function () {
    popupElement.classList.add('popup_opened');

    // Получите значение полей profileTitle и profileDesc из элемента profile
    let profileNameText = profileTitleElement.textContent;
    let profileJobText = profileDescElement.textContent;

    // Установить значения из profile в атрубут value
    inputNameElement.value = profileNameText;
    inputJobElement.value = profileJobText;
};

const closeForm = function () {
    popupElement.classList.remove('popup_opened');
}

editButtonElement.addEventListener('click', openForm);
popupCloseButtonElement.addEventListener('click', closeForm);




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

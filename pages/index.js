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
const cardsContainer = document.querySelector('.elements__list');

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

const createCard = (data) => {
    // Клонируем содержимое тега template
    const cardElement = elementsCardTemplate.querySelector('.elements__card').cloneNode(true);
    // Наполняем содержимым
    cardElement.querySelector('.elements__card-image').src = data.link;
    cardElement.querySelector('.elements__card-image').alt = data.name;
    cardElement.querySelector('.elements__title').textContent = data.name;

    return cardElement;
};

const renderCard = (data) => {
    // Помещаем карточку в контейнер вызовом creatCard
    cardsContainer.append(createCard(data));
};

initialCards.forEach(function (item) {
    // Добавляем элемент на страницу
    renderCard(item);
})

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

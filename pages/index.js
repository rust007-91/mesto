// Открытие попапов
const editPopupElement = document.querySelector('.popup_edit');
const addPopupElement = document.querySelector('.popup_add');
const imgPopupElement = document.querySelector('.popup_img');
const cardImagePopupElement = imgPopupElement.querySelector('.popup__card-image');
const cardNamePopupElement = imgPopupElement.querySelector('.popup__card-name');
// Кнопки закрытия попапов
const editPopupCloseButtonElement = document.querySelector('.popup__close_edit');
const addPopupCloseButtonElement = document.querySelector('.popup__close_add');
const imgPopupCloseButtonElement = document.querySelector('.popup__close_img');
// Формы
const formEditElement = document.querySelector('.popup__form_edit');
const formAddElement = document.querySelector('.popup__form_add');
// Поля формы edit
let inputEditNameElement = document.querySelector('.popup__input_type_edit-name');
let inputEditJobElement = document.querySelector('.popup__input_type_edit-job');
// Поля формы add
let inputAddNameElement = document.querySelector('.popup__input_type_add-name');
let inputAddImgElement = document.querySelector('.popup__input_type_add-img');
// Секция profile
const profileElement = document.querySelector('.profile');
const editButtonElement = profileElement.querySelector('.profile__edit-button');
let profileTitleElement = profileElement.querySelector('.profile__title');
let profileDescElement = profileElement.querySelector('.profile__description');
let addButtonElement = profileElement.querySelector('.profile__add-button');
// Template
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

    // Удалить карточку
    const deleteIconElement = cardElement.querySelector('.elements__delete');

    deleteIconElement.addEventListener('click', (evt) => {
        evt.target.closest('.elements__card').remove();
    });

    // Поставить лайк
    const likeIconElement = cardElement.querySelector('.elements__like');

    likeIconElement.addEventListener('click', (evt) => {
        evt.target.classList.toggle('elements__like_active');
    });
    // Открыть попап карточки
    const imgCard = cardElement.querySelector('.elements__card-image');
    const titleCard = cardElement.querySelector('.elements__title').textContent;
    imgCard.addEventListener('click', () => {
        togglePopup(imgPopupElement);
        cardImagePopupElement.src = imgCard.src;
        cardImagePopupElement.name = imgCard.name;
        cardNamePopupElement.textContent = titleCard;
    });

    return cardElement;
};

const renderCard = (data) => {
    // Помещаем карточку в контейнер вызовом creatCard
    cardsContainer.append(createCard(data));
};

initialCards.forEach((item) => {
    // Добавляем элемент на страницу
    renderCard(item);
})

                                            //Функционал попапов
const openPopupEdit = () => {
    // Получите значение полей profileTitle и profileDesc из элемента profile
    let profileNameText = profileTitleElement.textContent;
    let profileJobText = profileDescElement.textContent;
    // Установить значения из profile в атрубут value
    inputEditNameElement.value = profileNameText;
    inputEditJobElement.value = profileJobText;
};

const togglePopup = (popup) => {
    popup.classList.toggle('popup_opened');

    if (editPopupElement) {
        openPopupEdit();
    }
}

// Обработчики событий для открытия попапа
editButtonElement.addEventListener('click', () => {
    togglePopup(editPopupElement);
});
addButtonElement.addEventListener('click', () => {
    togglePopup(addPopupElement);
});

// Обработчики событий для закрытия попапа
editPopupCloseButtonElement.addEventListener('click', () => {
    togglePopup(editPopupElement);
});
addPopupCloseButtonElement.addEventListener('click', () => {
    togglePopup(addPopupElement);
});
imgPopupCloseButtonElement.addEventListener('click', () => {
    togglePopup(imgPopupElement);
});

const handleFormEditSubmit = (evt) => {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    // Получите значение полей jobInputElement и nameInputElement из свойства value
    let inputEditName = inputEditNameElement.value;
    let inputAddJob = inputEditJobElement.value;

    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    profileTitleElement.textContent = inputEditName;
    profileDescElement.textContent = inputAddJob;

    togglePopup(editPopupElement);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formEditElement.addEventListener('submit', handleFormEditSubmit);

const handleFormAddSubmit = (evt) => {
    evt.preventDefault();
    // Cоздаём объект и присваиваем значения полей формы
    let objNewCard ={};
    objNewCard['name'] = inputAddNameElement.value;
    objNewCard['link'] = inputAddImgElement.value;
    // Передаём данные карточки в рендер
    renderCard(objNewCard);
    // Закрываем попап
    togglePopup(addPopupElement);
    // Очистка полей
    inputAddNameElement.value = '';
    inputAddImgElement.value = '';
}

formAddElement.addEventListener('submit', handleFormAddSubmit);

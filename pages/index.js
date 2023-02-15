// Открытие попапов
const editPopupElement = document.querySelector('.popup_edit');
const addPopupElement = document.querySelector('.popup_add');
const imgPopupElement = document.querySelector('.popup_img');
const cardImageInputElement = imgPopupElement.querySelector('.popup__card-image');
const cardNameInputElement = imgPopupElement.querySelector('.popup__card-name');
// Кнопки закрытия попапов
const editPopupCloseButtonElement = document.querySelector('.popup__close_edit');
const addPopupCloseButtonElement = document.querySelector('.popup__close_add');
const imgPopupCloseButtonElement = document.querySelector('.popup__close_img');
// Формы
const formEditElement = document.querySelector('.popup__form_edit');
const formAddElement = document.querySelector('.popup__form_add');
// Поля формы edit
const inputEditNameElement = document.querySelector('.popup__input_type_edit-name');
const inputEditJobElement = document.querySelector('.popup__input_type_edit-job');
// Поля формы add
const inputAddNameElement = document.querySelector('.popup__input_type_add-name');
const inputAddImgElement = document.querySelector('.popup__input_type_add-img');
// Секция profile
const profileElement = document.querySelector('.profile');
const editButtonElement = profileElement.querySelector('.profile__edit-button');
const profileTitleElement = profileElement.querySelector('.profile__title');
const profileDescElement = profileElement.querySelector('.profile__description');
const addButtonElement = profileElement.querySelector('.profile__add-button');
// Template
const elementsCardTemplate = document.querySelector('#elements__card').content.querySelector('.elements__card');
const cardsContainer = document.querySelector('.elements__list');


                                                // Добавление карточек
const createCard = (data) => {
    // Клонируем содержимое тега template
    const cardElement = elementsCardTemplate.cloneNode(true);
    // Наполняем содержимым
    const cardImage = cardElement.querySelector('.elements__card-image');
    const cardTitle =  cardElement.querySelector('.elements__title');
    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardTitle.textContent = data.name;

    // Удалить карточку
    const deleteIconElement = cardElement.querySelector('.elements__delete');

    deleteIconElement.addEventListener('click', () => {
        cardElement.remove();
    });

    // Поставить лайк
    const likeIconElement = cardElement.querySelector('.elements__like');

    likeIconElement.addEventListener('click', (evt) => {
        evt.target.classList.toggle('elements__like_active');
    });

    // Открыть попап карточки
    cardImage.addEventListener('click', () => {
        openPopup(imgPopupElement);
        cardImageInputElement.src = cardImage.src;
        cardImageInputElement.alt = cardImage.alt;
        cardNameInputElement.textContent = cardTitle.textContent;
    });

    return cardElement;
};

const renderCard = (data) => {
    cardsContainer.prepend(createCard(data)); // Помещаем карточку в контейнер вызовом creatCard
};

const reverseInitialCards = initialCards.reverse(); // Переварачиваем массив

reverseInitialCards.forEach(renderCard); // Перебор и добавление карточек

                                            //Функционал попапов
const fillPopupEditFields = () => {
    // Получите значение полей profileTitle и profileDesc из элемента profile
    const profileNameText = profileTitleElement.textContent;
    const profileJobText = profileDescElement.textContent;
    // Установить значения из profile в атрубут value
    inputEditNameElement.value = profileNameText;
    inputEditJobElement.value = profileJobText;
};

const openPopup = (popup) => {
    popup.classList.add('popup_opened');
}

const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
}

// Обработчики событий для открытия попапа
editButtonElement.addEventListener('click', () => {
    openPopup(editPopupElement);
    fillPopupEditFields();
});
addButtonElement.addEventListener('click', () => {
    openPopup(addPopupElement);
});

// Обработчики событий для закрытия попапа
editPopupCloseButtonElement.addEventListener('click', () => {
    closePopup(editPopupElement);
});

addPopupCloseButtonElement.addEventListener('click', (evt) => {
    closePopup(addPopupElement);
});

imgPopupCloseButtonElement.addEventListener('click', () => {
    closePopup(imgPopupElement);
});

// Функция закрытия попапа при клике по оверлэю
const closePopupByClickOverlay = (config) => {
    const popupElementList = Array.from(document.querySelectorAll(config.popupClass));
    popupElementList.forEach((popupItem) => {
        popupItem.addEventListener('click', (evt) => {
            if (evt.target === evt.currentTarget) {
                closePopup(popupItem);
            }
        });
    });
}

closePopupByClickOverlay(formValidationConfig);

// Обработчики событий для закрытия попапа по Esc
document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
        closePopup(editPopupElement);
        closePopup(addPopupElement);
        closePopup(imgPopupElement);
    }
});

const handleFormEditSubmit = (evt) => {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    // Получите значение полей jobInputElement и nameInputElement из свойства value
    const inputEditName = inputEditNameElement.value;
    const inputAddJob = inputEditJobElement.value;

    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    profileTitleElement.textContent = inputEditName;
    profileDescElement.textContent = inputAddJob;

    closePopup(editPopupElement);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formEditElement.addEventListener('submit', handleFormEditSubmit);

const handleFormAddSubmit = (evt) => {
    // evt.preventDefault();
    // Cоздаём объект и присваиваем значения полей формы
    const objNewCard = {
        name: inputAddNameElement.value,
        link: inputAddImgElement.value
    };
    // Передаём данные карточки в рендер
    renderCard(objNewCard);
    // Закрываем попап
    closePopup(addPopupElement);
    // Очистка полей
    formAddElement.reset();
}

formAddElement.addEventListener('submit', handleFormAddSubmit);

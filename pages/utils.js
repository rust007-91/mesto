// Поля формы edit
const inputEditNameElement = document.querySelector('.popup__input_type_edit-name');
const inputEditJobElement = document.querySelector('.popup__input_type_edit-job');
// Секция profile
const profileTitleElement = document.querySelector('.profile__title');
const profileDescElement = document.querySelector('.profile__description');
// Template
const cardsContainer = document.querySelector('.elements__list');

                                            // Помещаем карточку в DOM
const renderCard = (cardElement) => {
    cardsContainer.prepend(cardElement);
};

                                            //Функционал попапов
// Установка полей в форме edit
const fillPopupEditFields = () => {
    inputEditNameElement.value = profileTitleElement.textContent;   // Установить значения из profile в атрибут value
    inputEditJobElement.value = profileDescElement.textContent;
};

// Функция открытия попапа
const openPopup = (popup) => {
    popup.classList.add('popup_opened');

    document.addEventListener('keydown', closeByEscape); // Навешиваем обработчик для закрытия попапа по Esc (в случае открытия попапа)
}

// Функция закрытия попапа
const closePopup = (popup) => {
    popup.classList.remove('popup_opened');

    document.removeEventListener('keydown', closeByEscape); // Удаляем обработчик для закрытия попапа по Esc (после закрытия попапа)
}

// Функция закрытия попапа по Esc
const closeByEscape = (evt) => {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

// Функция закрытия попапа при клике по оверлэю или крестику
const closePopupByClickOverlay = (config) => {
    const popupElementList = Array.from(document.querySelectorAll(config.popupClass));
    popupElementList.forEach((popup) => {
        popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                closePopup(popup);
            }
            if(evt.target.classList.contains('popup__close')) {
                closePopup(popup);
            }
        });
    });
}

                                                // Функционал валидации
// Отмена дефолтной перезагрузки
const disableSubmit = (evt) => {
    evt.preventDefault();
}

// Добавление ошибки
const showInputError = (input, errorElement, errorClass) => {
    errorElement.textContent = input.validationMessage;
    input.classList.add(errorClass);
}

// Удаление ошибки
const hideInputError = (input, errorElement, errorClass) => {
    errorElement.textContent = '';
    input.classList.remove(errorClass);
}


export {renderCard, fillPopupEditFields, openPopup, closePopup, showInputError, hideInputError, disableSubmit, closePopupByClickOverlay};
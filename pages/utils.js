

// Поля формы edit
const inputEditNameElement = document.querySelector('.popup__input_type_edit-name');
const inputEditJobElement = document.querySelector('.popup__input_type_edit-job');
// Секция profile
const profileTitleElement = document.querySelector('.profile__title');
const profileDescElement = document.querySelector('.profile__description');
// Template
const cardsContainer = document.querySelector('.elements__list');


const renderCard = (cardElement) => {
    cardsContainer.prepend(cardElement); // Помещаем карточку в контейнер вызовом creatCard
};

//Функционал попапов
const fillPopupEditFields = () => {
    const profileNameText = profileTitleElement.textContent;    // Получите значение полей profileTitle и profileDesc из элемента profile
    const profileJobText = profileDescElement.textContent;
    inputEditNameElement.value = profileNameText;               // Установить значения из profile в атрубут value
    inputEditJobElement.value = profileJobText;
};

const openPopup = (popup) => {
    popup.classList.add('popup_opened');

    document.addEventListener('keydown', closeByEscape); // Навешиваем обработчик для закрытия попапа по Esc (в случае открытия попапа)
}

const closePopup = (popup) => {
    popup.classList.remove('popup_opened');

    document.removeEventListener('keydown', closeByEscape); // Удаляем обработчик для закрытия попапа по Esc (после закрытия попапа)
}

// Функция закрытия попапа
const closeByEscape = (evt) => {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

// Функция закрытия попапа при клике по оверлэю и крестику
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

closePopupByClickOverlay(formValidationConfig);



export {renderCard, fillPopupEditFields, openPopup, closePopup};
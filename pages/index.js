import Card from "./Card.js";
import {renderCard, closePopup, closePopupByClickOverlay} from "./utils.js";
import formValidationConfig from './validate.js'

// Открытие попапов
const editPopupElement = document.querySelector('.popup_edit');
const addPopupElement = document.querySelector('.popup_add');
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
const profileTitleElement = profileElement.querySelector('.profile__title');
const profileDescElement = profileElement.querySelector('.profile__description');

// Обработчик кнопки сабмит на форме edit
const handleFormEditSubmit = (evt) => {
    evt.preventDefault(); // Отменить стандартную отправку формы.

    // Получите значение полей jobInputElement и nameInputElement из свойства value
    const inputEditName = inputEditNameElement.value;
    const inputAddJob = inputEditJobElement.value;
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    profileTitleElement.textContent = inputEditName;
    profileDescElement.textContent = inputAddJob;

    closePopup(editPopupElement);
}

formEditElement.addEventListener('submit', handleFormEditSubmit); // слушатель сабмит на форме edit

// Обработчик кнопки сабмит на форме add
const handleFormAddSubmit = (evt) => {
    evt.preventDefault();

    const objNewCard = {                                                        // Cоздаём объект и присваиваем значения полей формы
        name: inputAddNameElement.value,
        link: inputAddImgElement.value
    };
    const addedCard = new Card(objNewCard, '#elements__card');  // Cоздать инстанс новой карточки
    renderCard(addedCard.createCard());                                         // Добавление карточки в DOM
    closePopup(addPopupElement);                                                // Закрыть попап
    formAddElement.reset();                                                     // Очисить поля
}

formAddElement.addEventListener('submit', handleFormAddSubmit); // слушатель сабмит на форме add

closePopupByClickOverlay(formValidationConfig); // вызов функции закрытия попапа при клике по оверлэю или крестику

                                    // Функционал Карточек
const reverseInitialCards = initialCards.reverse();     // Переворачиваем массив

reverseInitialCards.forEach((data) => {
    const card = new Card(data, '#elements__card');     // Cоздание экземпляра карточки
    renderCard(card.createCard());                                   // Добавление карточки в DOM
});
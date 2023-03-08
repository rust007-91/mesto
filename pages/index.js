import initialCards from "../scripts/constants.js";
import Card from "../scripts/Card.js";
import FormValidator from "../scripts/FormValidator.js";
import {renderCard, fillPopupEditFields, openPopup, closePopup, closePopupByClickOverlay} from "../scripts/utils.js";

// Открытие попапов
const editPopupElement = document.querySelector('.popup_edit');
const addPopupElement = document.querySelector('.popup_add');
const imgPopupElement = document.querySelector('.popup_img');
const cardImageInputElement = imgPopupElement.querySelector('.popup__card-image');
const cardNameInputElement = imgPopupElement.querySelector('.popup__card-name');
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
const editButtonElement = profileElement.querySelector('.profile__edit-button');
const addButtonElement = profileElement.querySelector('.profile__add-button');

                                        // Функционал Валидации
const formValidationConfig = {
    formEditSelector: '.popup__form_edit',
    formAddSelector: '.popup__form_add',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__form-submit',
    errorActiveClass: 'popup__input_type_error',
    buttonDisabledClass: 'popup__form-submit_disabled'
}

const formEdit = document.querySelector(formValidationConfig.formEditSelector);
const formAdd = document.querySelector(formValidationConfig.formAddSelector);

const formValidatorEdit = new FormValidator(formValidationConfig, formEdit);
const formValidatorAdd = new FormValidator(formValidationConfig, formAdd);

formValidatorEdit.enableValidation();
formValidatorAdd.enableValidation();

                                            // Функционал Карточек
// Функция обработчика попап картинки
const handleOpenImage = (link, name) => {
    cardImageInputElement.src = link;
    cardImageInputElement.alt = name;
    cardNameInputElement.textContent = name;
    openPopup(imgPopupElement);
}

// Функция создания экземпляра карточки
const generateCard = (data) => {
    const card = new Card(data, '#elements__card', handleOpenImage);

    return card.createCard();
}

const reverseInitialCards = initialCards.reverse();             // Переворачиваем массив

reverseInitialCards.forEach((data) => {
    renderCard(generateCard(data));                             // Добавление карточки в DOM
});

                                            // Функционал попапов и форм
// Обработчики событий для открытия попапа
editButtonElement.addEventListener('click', () => {
    openPopup(editPopupElement);
    fillPopupEditFields();
});

addButtonElement.addEventListener('click', () => {
    formValidatorAdd._resetError(); // сбросить ошибки
    openPopup(addPopupElement);
});

const popupClass = '.popup';
closePopupByClickOverlay(popupClass); // вызов функции закрытия попапа при клике по оверлэю или крестику

// Обработчик кнопки сабмит на форме edit
const handleFormEditSubmit = (evt) => {
    evt.preventDefault();                                               // Отменить стандартную отправку формы.

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

    const objNewCard = {                                // Cоздаём объект и присваиваем значения полей формы
        name: inputAddNameElement.value,
        link: inputAddImgElement.value
    };
    renderCard(generateCard(objNewCard));               // Добавление карточки в DOM

    closePopup(addPopupElement);
    formAddElement.reset();                             // Очисить поля
}

formAddElement.addEventListener('submit', handleFormAddSubmit); // слушатель сабмит на форме add

export {imgPopupElement, cardImageInputElement, cardNameInputElement};
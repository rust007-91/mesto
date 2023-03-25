import '../pages/index.css';
import initialCards from "../scripts/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

// Секция profile
const editButtonElement = document.querySelector('.profile__edit-button');
const addButtonElement = document.querySelector('.profile__add-button');

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
// Обработчик попапа карточки
const handleCardClick = (link, name) => {
    const popupWithImage = new PopupWithImage('.popup_img', link, name);
    popupWithImage.open();
}

// Создаём экземпляр карточки
const generateCard = (data) => {
    const card = new Card(data, '#elements__card', handleCardClick);
    return card.createCard();
}

// Генерируем и помещаем карточку в DOM
const renderCard = (cardData) => {
    const cardElement = generateCard(cardData);
    section.addItem(cardElement);
}

const reverseInitialCards = initialCards.reverse();             // Переворачиваем массив
const section = new Section({itemList: reverseInitialCards, renderer: renderCard}, '.elements__list');
section.renderItems(); // Рендер карточек


                                            // Функционал попапов и форм
// Класс
const userInfo = new UserInfo({nameSelector: '.profile__title', descSelector: '.profile__description'});

                                                // Функционал формы edit
// Обработчик добавления данных на страницу
const handleFormEditSubmit = (data) => {
    userInfo.setUserInfo(data);
}

const popupWithFormEdit = new PopupWithForm('.popup_edit', handleFormEditSubmit);
popupWithFormEdit.setEventListeners();

editButtonElement.addEventListener('click', () => {
    popupWithFormEdit.open();
    userInfo.getUserInfo(); // подстановка данных при открытии
});

                                        // Функционал формы add
// Обработчик добавления данных на страницу
const handleFormAddSubmit = (data) => {
    const objNewCard = {                   // Cоздаём объект и присваиваем значения полей формы
        name: data.heading,
        link: data.desc
    };
    renderCard(objNewCard);               // Добавление карточки в DOM
}

const popupWithFormAdd = new PopupWithForm('.popup_add', handleFormAddSubmit);
popupWithFormAdd.setEventListeners();

addButtonElement.addEventListener('click', () => {
    formValidatorAdd._resetError(); // сбросить ошибки
    popupWithFormAdd.open();
});


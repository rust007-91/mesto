import {fillPopupEditFields, openPopup} from './utils.js';

class Card {
    constructor(data, templateSelector) {
        this._link = data.link;
        this._name = data.name;
        this._templateSelector = templateSelector;
    }

// Метод установки слушателей
    _setEventListenersCard() {
        // Слушатель на мусорке
        const deleteIconElement =  this._cardElement.querySelector('.elements__delete');
        deleteIconElement.addEventListener('click', () => {
            this._cardElement.remove(); // Удаление карточки
        });

        // Слушатель на лайке
        const likeIconElement = this._cardElement.querySelector('.elements__like');
        likeIconElement.addEventListener('click', (evt) => {
            evt.target.classList.toggle('elements__like_active'); // Поставить лайк
        });

        // Слушатель попап на карточке
        this._cardElement.children[0].addEventListener('click', () => {
           this._handlePopupCard();
        });

        // Слушатель попап на кнопке редактирования
        const profileElement = document.querySelector('.profile');
        this._editButtonElement = profileElement.querySelector('.profile__edit-button');

        this._editButtonElement.addEventListener('click', () => {
            this._handlePopupEdit();
        });

        // Слушатель попап на кнопке добавления карточки
        this._addButtonElement = profileElement.querySelector('.profile__add-button');
        this._addButtonElement.addEventListener('click', () => {
            this._handlePopupAdd();
        });
    }

// Метод обработчика попап карточки
    _handlePopupCard() {
        const imgPopupElement = document.querySelector('.popup_img');
        const cardImageInputElement = imgPopupElement.querySelector('.popup__card-image');
        const cardNameInputElement = imgPopupElement.querySelector('.popup__card-name');

        cardImageInputElement.src = this._cardImage.src;
        cardImageInputElement.alt = this._cardImage.alt;
        cardNameInputElement.textContent = this._cardTitle.textContent;
        openPopup(imgPopupElement);
    }

// Метод обработчика попап окна редактирования
    _handlePopupEdit() {
        const editPopupElement = document.querySelector('.popup_edit');

        openPopup(editPopupElement);
        fillPopupEditFields();
    }

// Метод обработчика попап окна добавления карточки
    _handlePopupAdd() {
        const addPopupElement = document.querySelector('.popup_add');

        openPopup(addPopupElement);
    }

    // Метод получения карточки
    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.elements__card')
            .cloneNode(true); // Клонируем содержимое тега template

        return cardElement;
    }

// Метод наполнения и генерации карточки
    createCard() {
        this._cardElement = this._getTemplate(); // запись для общего доступа к элементу
        this._setEventListenersCard();          // установка слушателей
        // Наполняем содержимым
        this._cardImage = this._cardElement.querySelector('.elements__card-image');
        this._cardTitle = this._cardElement.querySelector('.elements__title');

        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardTitle.textContent = this._name;

        return this._cardElement;
    }
}

export default Card;
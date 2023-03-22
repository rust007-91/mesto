import Popup from "./Popup.js";


class PopupWithImage extends Popup {
    constructor(popupSelector, link, name) {
        super(popupSelector);
        this._link = link;
        this._name = name;
        this._cardImageInputElement = document.querySelector('.popup__card-image');
        this._cardNameInputElement = document.querySelector('.popup__card-name');
    }
}

// Метод открытия попапа
    open = () => {
        this._cardImageInputElement.src = this._link;
        this._cardImageInputElement.alt = this._name;
        this._cardNameInputElement.textContent = this._name;
    }

export default PopupWithImage;
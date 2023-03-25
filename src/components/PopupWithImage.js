import Popup from "./Popup.js";

class PopupWithImage extends Popup {
    constructor(popupSelector, link, name) {
        super(popupSelector);
        this._link = link;
        this._name = name;
        this._cardImageInputElement = this._popupElement.querySelector('.popup__card-image');
        this._cardNameInputElement = this._popupElement.querySelector('.popup__card-name');
    }

// Наследованные и переопределённый метод открытия попапа карточки
    open() {
        const openImage = super.open();

        this._cardImageInputElement.src = this._link;
        this._cardImageInputElement.alt = this._name;
        this._cardNameInputElement.textContent = this._name;

        return openImage;
    }
}

export default PopupWithImage;
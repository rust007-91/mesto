import Popup from "./Popup.js";

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._cardImageInputElement = this._popupElement.querySelector('.popup__card-image');
        this._cardNameInputElement = this._popupElement.querySelector('.popup__card-name');
    }

// Наследованные и переопределённый метод открытия попапа карточки
    open(link, name) {
        super.open();

        this._cardImageInputElement.src = link;
        this._cardImageInputElement.alt = name;
        this._cardNameInputElement.textContent = name;
    }
}

export default PopupWithImage;
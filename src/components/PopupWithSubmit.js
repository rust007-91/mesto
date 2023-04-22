import Popup from "./Popup.js";

class PopupWithSubmit extends Popup{
    constructor(popupSelector, { handleFormConfirmSubmit }) {
        super(popupSelector);
        this._formElement = this._popupElement.querySelector('.popup__form');
        this._handleFormConfirmSubmit = handleFormConfirmSubmit;
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', this._handleFormSubmit);
    }

    open(cardObj, cardId) {
        super.open();
        this._cardId = cardId;
        this._cardObj = cardObj;
    }

    close() {
        super.close();
    }

    _handleFormSubmit = (evt) => {
        evt.preventDefault();
        this._handleFormConfirmSubmit(this._cardObj, this._cardId);           // вызов обработчика подтверждения на удаление карточки
    }
}

export default PopupWithSubmit;

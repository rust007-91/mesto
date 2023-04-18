import Popup from "./Popup.js";

class PopupWithSubmit extends Popup{
    constructor(popupSelector, { handleFormConfirmSubmit }) {
        super(popupSelector);
        this._formElement = this._popupElement.querySelector('.popup__form');
        this._handleFormSubmit = handleFormConfirmSubmit;

        super.setEventListeners();
        this._formElement.addEventListener('submit', this.handleFormSubmit);
    }

    handleFormSubmit = (evt) => {
        evt.preventDefault();
        this._handleFormSubmit();           // вызов обработчика подтверждения на удаление карточки
        this._formElement.removeEventListener('submit', this.handleFormSubmit);
        this.close();
    }
}

export default PopupWithSubmit;

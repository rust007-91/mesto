import Popup from "./Popup.js";

class PopupWithForm extends Popup{
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popupElement.querySelector('.popup__form');
        this._popupInputList = this._popupElement.querySelectorAll('.popup__input');
    }

// Наследованные и переопределённый метод обработки формы
    setEventListeners() {
        const setEventListenersForms = super.setEventListeners();

        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();
        });

        return setEventListenersForms;
    }

// Метод сбора данных полей формы
    _getInputValues() {
        this.inputValue = {};

        this._popupInputList.forEach((input) => {
            console.log(input.value)
            this.inputValue[input.name] = input.value;
        });

        return this.inputValue;
    }
// Наследованный и переопределённый метод закрытия формы
    close() {
        const closeForm = super.close();
        this._formElement.reset(); // сброс полей формы после закрытия
        return closeForm;
    }
}

export default PopupWithForm;

import Popup from "./Popup.js";

class PopupWithForm extends Popup{
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popupElement.querySelector('.popup__form');
        this._popupInputList = this._popupElement.querySelectorAll('.popup__input');
        this._formSubmitElement = this._popupElement.querySelector('.popup__form-submit');
    }

// Наследованные и переопределённый метод обработки формы
    setEventListeners() {
        super.setEventListeners();

        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues()); // обаботчик полей форм
            this.close();
        });
    }

// Метод сбора данных полей формы
    _getInputValues() {
        const inputValues = {};

        this._popupInputList.forEach((input) => {
            inputValues[input.name] = input.value;
        });

        return inputValues;
    }

// Наследованный и переопределённый метод закрытия формы
    close() {
        super.close();
        this._formElement.reset(); // сброс полей формы после закрытия
    }

    setLoading(text) {
        this._formSubmitElement.textContent = text;
    }
}



export default PopupWithForm;

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
        super.setEventListeners();

        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();
        });

    }

// Метод сбора данных полей формы
    _getInputValues() {
        const inputValue = {};

        this._popupInputList.forEach((input) => {
            console.log(input.value)
            inputValue[input.name] = input.value;
        });

        return inputValue;
    }
// Наследованный и переопределённый метод закрытия формы
    close() {
        super.close();
        this._formElement.reset(); // сброс полей формы после закрытия
    }
}

export default PopupWithForm;

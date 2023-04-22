import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popupElement.querySelector(".popup__form");
        this._popupInputList = this._popupElement.querySelectorAll(".popup__input");
        this._formSubmitElement = this._popupElement.querySelector(".popup__form-submit");

        this._submitBtnText = this._formSubmitElement.textContent;
    }

    // Наследованные и переопределённый метод обработки формы
    setEventListeners() {
        super.setEventListeners();

        this._formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues()); // обаботчик полей форм
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

    setInputValues(data) {
        this._popupInputList.forEach((input) => {
            // тут вставляем в `value` инпута данные из объекта по атрибуту `name` этого инпута
            input.value = data[input.name];
        });
    }

    // Наследованный и переопределённый метод закрытия формы
    close() {
        super.close();
        this._formElement.reset(); // сброс полей формы после закрытия
    }

    // метод и подстановки прелоадера
    renderLoading(isLoading, loadingText = "Сохранение...") {
        if (isLoading) {
            this._formSubmitElement.textContent = loadingText;
        } else {
            this._formSubmitElement.textContent = this._submitBtnText;
        }
    }
}

export default PopupWithForm;

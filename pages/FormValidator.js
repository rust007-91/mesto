import {showInputError, hideInputError, disableSubmit} from "./utils.js";

class FormValidator {

    constructor(config, form) {
        this._form = form;
        this._config = config;
    }

// Метод проверки валидности введённых значений
    _handleFormInput(input, config) {
        const inputId = input.id;
        const errorClass = config.errorActiveClass;
        const errorElement = document.querySelector(`#${inputId}-error`);

        if (!input.validity.valid) {
            showInputError(input, errorElement, errorClass);
        } else {
            hideInputError(input, errorElement, errorClass);
        }
    }

// Метод наложения обработчиков на поля форм
    _addInputListeners(form, config) {
        const inputList = Array.from(form.querySelectorAll(config.inputSelector));
        inputList.forEach((input) => {                      // цикл поиска полей в форме
            input.addEventListener('input', () => {
                this._handleFormInput(input, config);             // проверка валидности введённых значений
            });
        });
    }

// Метод блокировки сабмита
    _toggleButtonState(form, config) {
        const buttonSubmitList = Array.from(form.querySelectorAll(config.submitButtonSelector));
        const isFormValid = form.checkValidity();
        buttonSubmitList.forEach((buttonSub) => {
            buttonSub.disabled = !isFormValid;
            buttonSub.classList.toggle(config.buttonDisabledClass, !isFormValid);
        });
    }

// Метод установки слушателей
    _setEventListenersValidator() {
        this._form.addEventListener('input', () => {          // деактивация кнопки сабмит при обработке полей
            this._toggleButtonState(this._form, this._config);
        });

        this._form.addEventListener('reset', () => { // деактивация кнопки сабмит при сбрасывании полей
            setTimeout(() => {
                this._toggleButtonState(this._form, this._config);
            }, 0);
        });

        this._form.addEventListener('submit', disableSubmit); // отмена сабмита для каждой формы;
    }

// Метод запуска валидации
    enableValidation() {
        this._setEventListenersValidator();                 // установка слушателей

        this._addInputListeners(this._form, this._config);            // вызов обработчика полей формы
        this._toggleButtonState(this._form, this._config);            // деактивация внопки сабмит при загрузке сайта
    }
}

export default FormValidator;
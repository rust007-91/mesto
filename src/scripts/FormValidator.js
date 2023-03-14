class FormValidator {

    constructor(config, form) {
        this._form = form;
        this._config = config;
        this._buttonSubmit = this._form.querySelector( this._config.submitButtonSelector);
        this._inputList = Array.from(this._form.querySelectorAll( this._config.inputSelector));
        this._errorClass = this._config.errorActiveClass;
    }

    // Метод инпута с ошибкой
    _getErrorElement(input) {
        const inputId = input.id;
        const errorElement = document.querySelector(`#${inputId}-error`);

        return errorElement;
    }

// Добавление ошибки
    _showInputError(input, errorElement) {
        errorElement.textContent = input.validationMessage;
        input.classList.add(this._errorClass);
    }

// Удаление ошибки
    _hideInputError(input, errorElement) {
        errorElement.textContent = '';
        input.classList.remove(this._errorClass);
    }

// Отмена дефолтной перезагрузки
    _disableSubmit(evt) {
        evt.preventDefault();
    }

// Метод проверки валидности введённых значений
    _handleFormInput(input) {
        if (!input.validity.valid) {
            this._showInputError(input, this._getErrorElement(input));
        } else {
            this._hideInputError(input, this._getErrorElement(input));
        }
    }

// Метод наложения обработчиков на поля форм
    _addInputListeners() {
        this._inputList.forEach((input) => {                      // цикл поиска полей в форме
            input.addEventListener('input', () => {
                this._handleFormInput(input);             // проверка валидности введённых значений
            });
        });
    }

// Метод блокировки сабмита
    _toggleButtonState() {
        const isFormValid = this._form.checkValidity();
        this._buttonSubmit.disabled = !isFormValid;
        this._buttonSubmit.classList.toggle(this._config.buttonDisabledClass, !isFormValid);
    }

// Метод сброса некоректных (несохарённных) данных в форме при закрытии
    _resetError() {
        this._inputList.forEach((formInput) => {
            this._hideInputError(formInput, this._getErrorElement(formInput)); // очистить ошибки валидации
        });

        this._toggleButtonState(); // актуализируем состояние кнопки
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

        this._form.addEventListener('submit', this._disableSubmit); // отмена сабмита для каждой формы;
    }

// Метод запуска валидации
    enableValidation() {
        this._setEventListenersValidator();                 // установка слушателей

        this._addInputListeners();            // вызов обработчика полей формы
        this._toggleButtonState();            // деактивация внопки сабмит при загрузке сайта
    }
}

export default FormValidator;
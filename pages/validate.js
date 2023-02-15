// Валидация форм
const formValidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__form-submit',
    errorActiveClass: 'popup__input_type_error',
    buttonDisabledClass: 'popup__form-submit_disabled',
    popupClass: '.popup'
}

// Добавление ошибки
const showInputError = (input, errorElement, errorClass) => {
    errorElement.textContent = input.validationMessage;
    input.classList.add(errorClass);
}
// Удаление ошибки
const hideInputError = (input, errorElement, errorClass) => {
    errorElement.textContent = '';
    input.classList.remove(errorClass);
}

// Функция проверки валидности введённых значений
const handleFormInput = (input, config) => {
    const inputId = input.id;
    const errorClass = config.errorActiveClass;
    const errorElement = document.querySelector(`#${inputId}-error`);

    if (!input.validity.valid) {
        showInputError(input, errorElement, errorClass);
    } else {
        hideInputError(input, errorElement, errorClass);
    }
}

// функция наложения обработчиков на поля форм
const addInputListeners = (form, config) => {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    inputList.forEach((input) => {                      // цикл поиска полей в форме
        input.addEventListener('input', () => {
            handleFormInput(input, config);             // проверка валидности введённых значений
        });
    });
}

// Функция блокировки сабмита
const toggleButtonState = (form, config) => {
    const buttonSubmitList = Array.from(form.querySelectorAll(config.submitButtonSelector));
    const isFormValid = form.checkValidity();
    buttonSubmitList.forEach((buttonSub) => {
        buttonSub.disabled = !isFormValid;
        buttonSub.classList.toggle(config.buttonDisabledClass, !isFormValid);
    });
}

// Отмена дефолтной перезагрузки
const disableSubmit = (evt) => {
    evt.preventDefault();
}

// функция запуска валидации
const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((form) => {                        // цикл поиска форм
        form.addEventListener('submit', disableSubmit); // отмена сабмита для каждой формы;

        form.addEventListener('input', () => {          // блокировка сабмита
            toggleButtonState(form, config);
        });

        addInputListeners(form, config);                // вызов обработчика полей формы
        toggleButtonState(form, config);
    });
}

enableValidation(formValidationConfig);

import FormValidator from "./FormValidator.js";

const formValidationConfig = {
    formEditSelector: '.popup__form_edit',
    formAddSelector: '.popup__form_add',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__form-submit',
    errorActiveClass: 'popup__input_type_error',
    buttonDisabledClass: 'popup__form-submit_disabled'
}

// Находим форму
const formEdit = document.querySelector(formValidationConfig.formEditSelector);
const formAdd = document.querySelector(formValidationConfig.formAddSelector);

// Функция создания экземпляра формы валидации
const createFormValidator = (form) => {
    const formValidator = new FormValidator(formValidationConfig, form);

    return formValidator.enableValidation();
}

createFormValidator(formEdit);
createFormValidator(formAdd);

export { formValidationConfig, createFormValidator }
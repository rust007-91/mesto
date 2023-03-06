import FormValidator from "./FormValidator.js";

const formValidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__form-submit',
    errorActiveClass: 'popup__input_type_error',
    buttonDisabledClass: 'popup__form-submit_disabled',
    popupClass: '.popup'
}

const formList = Array.from(document.querySelectorAll(formValidationConfig.formSelector));
formList.forEach((form) => {
    const formValidator = new FormValidator(formValidationConfig, form);
    formValidator.enableValidation();
});


export default formValidationConfig;
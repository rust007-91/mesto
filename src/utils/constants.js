const editButtonElement = document.querySelector('.profile__edit-button');
const addButtonElement = document.querySelector('.profile__add-button');
const avatarButtonElement = document.querySelector('.profile__avatar-button');

const formValidationConfig = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__form-submit',
    errorActiveClass: 'popup__input_type_error',
    buttonDisabledClass: 'popup__form-submit_disabled'
}

export {
    editButtonElement,
    addButtonElement,
    avatarButtonElement,
    formValidationConfig
};
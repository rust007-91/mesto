// Поля формы edit
const inputEditNameElement = document.querySelector('.popup__input_type_edit-name');
const inputEditJobElement = document.querySelector('.popup__input_type_edit-job');
// Секция profile
const profileTitleElement = document.querySelector('.profile__title');
const profileDescElement = document.querySelector('.profile__description');



                                            //Функционал попапов
// Установка полей в форме edit
const fillPopupEditFields = () => {
    inputEditNameElement.value = profileTitleElement.textContent;   // Установить значения из profile в атрибут value
    inputEditJobElement.value = profileDescElement.textContent;
};



export {fillPopupEditFields};
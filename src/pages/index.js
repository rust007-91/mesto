import '../pages/index.css';
// import initialCards from "../scripts/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

// Секция profile
const editButtonElement = document.querySelector('.profile__edit-button');
const addButtonElement = document.querySelector('.profile__add-button');
const avatarButtonElement = document.querySelector('.profile__avatar-button');

const inputEditNameElement = document.querySelector('.popup__input_type_edit-name');
const inputEditJobElement = document.querySelector('.popup__input_type_edit-job');

                                        // Функционал Валидации
const formValidationConfig = {
    formEditSelector: '.popup__form_edit',
    formAddSelector: '.popup__form_add',
    formAvatarSelector: '.popup__form_avatar',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__form-submit',
    errorActiveClass: 'popup__input_type_error',
    buttonDisabledClass: 'popup__form-submit_disabled'
}

const formEdit = document.querySelector(formValidationConfig.formEditSelector);
const formAdd = document.querySelector(formValidationConfig.formAddSelector);
const formAvatar = document.querySelector(formValidationConfig.formAvatarSelector);

const formValidatorEdit = new FormValidator(formValidationConfig, formEdit);
const formValidatorAdd = new FormValidator(formValidationConfig, formAdd);
const formValidatorAvatar = new FormValidator(formValidationConfig, formAvatar);

formValidatorEdit.enableValidation();
formValidatorAdd.enableValidation();
// formValidatorAvatar.enableValidation();

// const popupEdit = new Popup('.popup_edit');
// popupEdit.setEventListeners();
//
// const popupAdd = new Popup('.popup_add');
// popupAdd.setEventListeners();


                                            // Функционал Карточек
// Обработчик попапа карточки
const popupWithImage = new PopupWithImage('.popup_img');
popupWithImage.setEventListeners();

const handleCardClick = (link, name) => {
    popupWithImage.open(link, name);
}

// Инициализация данных для запроса карточек с сервера
const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-62/',
    headers: {
        'content-type': 'application/json',
        authorization: '219d5a2e-c83a-413f-99f2-e866bdc38d77',
    },
})


const generateCard = (cardData) => {
    // Обработчик удаления карточки
    const handleDeleteIconClick = (id) => {
        const popupWithFormConfirm = new PopupWithSubmit('.popup_confirm', {
            handleFormConfirmSubmit: () => {
                const deleteApiCard = api.deleteApiCard(id);
                deleteApiCard
                    .then((res) => {
                        card.deleteCard()
                    })
                    .catch((err) => alert(err));
            },
        });

        popupWithFormConfirm.open();
        popupWithFormConfirm.setEventListeners();
    }

    const card = new Card({
            data: cardData,
            handleCard: handleCardClick,
            handleDelete: handleDeleteIconClick},
        '#elements__card'
    );

    return card.createCard();
}


// Создаём экземпляр карточки
// const generateCard = (cardData) => {
//     // Обработчик удаления карточки
//     const handleDeleteIconClick = (id) => {
//         const deleteApiCard = api.deleteApiCard(id);
//         deleteApiCard
//             .then((res) => {
//                 card.deleteCard()
//             })
//             .catch((err) => alert(err));
//     }
//
//     const card = new Card({
//         data: cardData,
//         handleCard: handleCardClick,
//         handleDelete: handleDeleteIconClick},
//         '#elements__card'
//     );
//
//     return card.createCard();
// }


// Генерируем и помещаем карточку в DOM
const renderCard = (cardData) => {
    const cardElement = generateCard(cardData);
    section.addItem(cardElement);
}

const section = new Section(renderCard, '.elements__list');


// Перебираем массив промисов первоначальной информации на странице
Promise.all([api.getApiCard(), api.getApiInfo()])
    .then((dataList) => {
        const [initialCards, profileInfo] = dataList; // диструктурируем собранный массив данных

        section.renderItems(initialCards.reverse()); // Рендер карточек
        userInfo.setUserInfo(profileInfo); // Подгрузка данных профиля с сервера
    })
    .catch((err) => alert(err));


                                   // Функционал попапов и форм
// Класс
const userInfo = new UserInfo({nameSelector: '.profile__title', descSelector: '.profile__description', avatarSelector:'.profile__avatar-image'});


                                        // Функционал формы edit
// Обработчик добавления данных на страницу
const handleFormEditSubmit = (data) => {
    popupWithFormEdit.setLoading('Сохранение...'); // прелоадер

    const changeApiInfo = api.setApiInfo(data); // Прокидываем новые данные на сервер и получаем ответ
    changeApiInfo.then((infoDataText) => {
        userInfo.setUserInfo(infoDataText); // Устанавливаем новые данные
    })
        .catch((err) => alert(err))
        .finally(() => {
            popupWithFormEdit.setLoading('Сохранить');
            });
}

const popupWithFormEdit = new PopupWithForm('.popup_edit', handleFormEditSubmit);
popupWithFormEdit.setEventListeners();

editButtonElement.addEventListener('click', () => {
    popupWithFormEdit.open();
    // подстановка данных при открытии
    const inputInfo = userInfo.getUserInfo();
    inputEditNameElement.value = inputInfo.name;
    inputEditJobElement.value = inputInfo.desc;
});

                                        // Функционал формы add
// Обработчик добавления карточки на страницу
const handleFormAddSubmit = (data) => {
    popupWithFormAdd.setLoading('Создание...');     // прелоадер

    const newCard = api.setApiNewCard(data);
    newCard.then((card) => {
        renderCard(card);
    })
        .catch((err) => alert(err))
        .finally(() => {
            popupWithFormAdd.setLoading('Создать');
        });
}

const popupWithFormAdd = new PopupWithForm('.popup_add', handleFormAddSubmit);
popupWithFormAdd.setEventListeners();

addButtonElement.addEventListener('click', () => {
    popupWithFormAdd.open();
});


// Функционал формы аватара
const handleFormAvatarSubmit = (data) => {
    popupWithFormAvatar.setLoading('Сохранение...');    // прелоадер

    const changeAvatarInfo = api.setApiAvatar(data);
    changeAvatarInfo.then((avatar) => {
        userInfo.setUserInfo(avatar); // Устанавливаем новые данные
    })
        .catch((err) => alert(err))
        .finally(() => {
            popupWithFormAvatar.setLoading('Сохранить');
        });
}

const popupWithFormAvatar = new PopupWithForm('.popup_avatar', handleFormAvatarSubmit);
popupWithFormAvatar.setEventListeners();

avatarButtonElement.addEventListener('click', () => {
    popupWithFormAvatar.open();
});


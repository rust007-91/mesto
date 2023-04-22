import "../pages/index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

import {
    editButtonElement,
    addButtonElement,
    avatarButtonElement,
    formValidationConfig,
} from "../utils/constants.js";

// Функционал валидации
const formValidators = {};

// Включение валидации
const enableValidation = (config) => {
    const formList = Array.from(document.forms);
    formList.forEach((formElement) => {
        const validator = new FormValidator(config, formElement);
        // получаем данные из атрибута `name` и затем в объект записываем под именем формы
        formValidators[formElement.name] = validator;
        validator.enableValidation();
    });
};

enableValidation(formValidationConfig);

// Функционал Карточек
// Обработчик попапа карточки
const popupWithImage = new PopupWithImage(".popup_img");
popupWithImage.setEventListeners();

const handleCardClick = (link, name) => {
    popupWithImage.open(link, name);
};

// Инициализация данных для запроса данных с сервера
const api = new Api({
    url: "https://mesto.nomoreparties.co/v1/cohort-64/",
    headers: {
        "content-type": "application/json",
        authorization: "3e8e1ee3-c047-4c7b-af99-8c5e2a637cf7",
    },
});

let userId; // id для дальнейшего получения и передачи в Card

const createCard = (cardData) => {
    // Обработчик удаления карточки
    const handleDeleteCard = (card) => {
        popupWithFormConfirm.open(card, card.getCardId()); //попап подтверждения
    };

    // Обработчик добавления лайка
    const AddLike = (card) => {
        api
            .setApiLike(card.getCardId())
            .then((res) => {
                card.handleLikes(res);
            })
            .catch((err) => alert(err));
    };

    // Обработчик удаления лайка
    const DeleteLike = (card) => {
        api
            .deleteApiLike(card.getCardId())
            .then((res) => {
                card.handleLikes(res);
            })
            .catch((err) => alert(err));
    };

    const card = new Card(
        {
            data: cardData,
            handleCard: handleCardClick,
            handleDeleteIconClick: handleDeleteCard,
            handleAddLikeClick: AddLike,
            handleDeleteLikeClick: DeleteLike,
        },
        "#elements__card",
        userId
    );
    return card.generateCard(); // создание карточки
};

// Генерируем и помещаем карточку в DOM
const renderCard = (cardData) => {
    const cardElement = createCard(cardData);
    section.addItem(cardElement);
};

const section = new Section(renderCard, ".elements__list");

// Перебираем массив промисов первоначальной информации на странице
Promise.all([api.getApiCard(), api.getApiInfo()])
    .then((dataList) => {
        const [initialCards, profileInfo] = dataList; // диструктурируем собранный массив данных
        userId = profileInfo._id; // айди пользователя для передачи в card
        section.renderItems(initialCards.reverse()); // Рендер карточек
        userInfo.setUserInfo(profileInfo); // Подгрузка данных профиля с сервера
    })
    .catch((err) => alert(err));

// Функционал попапов и форм
const userInfo = new UserInfo({
    nameSelector: ".profile__title",
    descSelector: ".profile__description",
    avatarSelector: ".profile__avatar-image",
});

// Функционал формы edit
// Обработчик добавления данных на страницу
const handleFormEditSubmit = (data) => {
    popupWithFormEdit.renderLoading(true); // прелоадер

    const changeApiInfo = api.setApiInfo(data); // Прокидываем новые данные на сервер и получаем ответ
    changeApiInfo
        .then((infoDataText) => {
            userInfo.setUserInfo(infoDataText); // Устанавливаем новые данные
            popupWithFormEdit.close();
        })
        .catch((err) => alert(err))
        .finally(() => {
            popupWithFormEdit.renderLoading(false); // прелоадер
        });
};

const popupWithFormEdit = new PopupWithForm(
    ".popup_edit",
    handleFormEditSubmit
);
popupWithFormEdit.setEventListeners();

editButtonElement.addEventListener("click", () => {
    popupWithFormEdit.open();
    // подстановка данных при открытии
    const inputInfo = userInfo.getUserInfo();
    popupWithFormEdit.setInputValues(inputInfo);
});

// Функционал формы add
// Обработчик добавления карточки на страницу
const handleFormAddSubmit = (data) => {
    popupWithFormAdd.renderLoading(true); // прелоадер

    const newCard = api.setApiNewCard(data);
    newCard
        .then((card) => {
            renderCard(card);
            popupWithFormAdd.close();
        })
        .catch((err) => alert(err))
        .finally(() => {
            popupWithFormAdd.renderLoading(false); // прелоадер
        });
};

const popupWithFormAdd = new PopupWithForm(".popup_add", handleFormAddSubmit);
popupWithFormAdd.setEventListeners();

addButtonElement.addEventListener("click", () => {
    popupWithFormAdd.open();
});

// Функционал формы аватара
const handleFormAvatarSubmit = (data) => {
    popupWithFormAvatar.renderLoading(true); // прелоадер

    const changeAvatarInfo = api.setApiAvatar(data);
    changeAvatarInfo
        .then((avatar) => {
            userInfo.setUserInfo(avatar); // Устанавливаем новые данные
            popupWithFormAvatar.close();
        })
        .catch((err) => alert(err))
        .finally(() => {
            popupWithFormAvatar.renderLoading(false);
        });
};

const popupWithFormAvatar = new PopupWithForm(
    ".popup_avatar",
    handleFormAvatarSubmit
);
popupWithFormAvatar.setEventListeners();

avatarButtonElement.addEventListener("click", () => {
    popupWithFormAvatar.open();
});

// Обработчик подтвержединя удаления карточки
const popupWithFormConfirm = new PopupWithSubmit(".popup_confirm", {
    handleFormConfirmSubmit: (card, cardId) => {
        api
            .deleteApiCard(cardId)
            .then((res) => {
                card.deleteCard();
                popupWithFormConfirm.close();
            })
            .catch((err) => alert(err));
    },
});
popupWithFormConfirm.setEventListeners();

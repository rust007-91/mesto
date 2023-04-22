class Card {
    constructor(
        {
            data,
            handleCard,
            handleDeleteIconClick,
            handleAddLikeClick,
            handleDeleteLikeClick,
        },
        templateSelector,
        userId
    ) {
        this._likes = data.likes;
        this._link = data.link;
        this._name = data.name;
        this._ownerId = data.owner._id;
        this._cardId = data._id;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCard;
        this._handleDeleteIconClick = handleDeleteIconClick;
        this._handleAddLikeClick = handleAddLikeClick;
        this._handleDeleteLikeClick = handleDeleteLikeClick;
        this._userId = userId;

        this._cardElement = this._getTemplate(); // запись для общего доступа к элементу
        this._cardImage = this._cardElement.querySelector(".elements__card-image");
        this._cardTitle = this._cardElement.querySelector(".elements__title");
        this._countLikes = this._cardElement.querySelector(".elements__count-likes");
        this._likeIconElement = this._cardElement.querySelector(".elements__like");
        this._deleteIconElement = this._cardElement.querySelector(".elements__delete");
    }

    // Метод получения id карточки
    getCardId() {
        return this._cardId;
    }

    // Метод установки слушателей
    _setEventListenersCard() {
        // Слушатель на мусорке
        if (this._ownerId !== this._userId) {
            this._deleteIconElement.remove();
        } else {
            this._deleteIconElement.addEventListener("click", () => {
                this._handleDeleteIconClick(this, this.cardId); // вызов обработчика запроса на удаление карточки
            });
        }

        // Слушатель на лайке
        this._likeIconElement.addEventListener("click", () => {
            this._handleLikeCLick(); // обработчик лайков
        });

        // Слушатель попап на карточке
        this._cardImage.addEventListener("click", () => {
            this._handleCardClick(this._link, this._name);
        });
    }

    // Метод проверки наличия лайков
    _checkLike() {
        return this._likes.some((like) => {
            return like._id === this._userId;
        });
    }

    // Метод обработки лайков
    _handleLikeCLick() {
        // Вызов обработчика после проверки
        if (this._checkLike()) {
            this._handleDeleteLikeClick(this); // обработчик на удаление
        } else {
            this._handleAddLikeClick(this); // обработчик на добавление
        }
    }

    // Метод обаботки лайков после получения ответа от сервера
    handleLikes(card) {
        this._likeIconElement.classList.toggle("elements__like_active"); // Поставить лайк

        this._likes = card.likes; // записываем массив с сервера
        // обновление лайков на странице
        if (this._likes.length === 0) {
            this._countLikes.textContent = "0";
        } else {
            this._countLikes.textContent = this._likes.length;
        }
    }

    // Метод получения карточки
    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content.querySelector(".elements__card")
            .cloneNode(true); // Клонируем содержимое тега template

        return cardElement;
    }

    _handleLikeRender() {
        if (this._checkLike()) {
            this._likeIconElement.classList.add("elements__like_active"); // Поставить лайк
        }
    }

    // Метод наполнения и генерации карточки
    generateCard() {
        this._setEventListenersCard(); // установка слушателей

        // Наполняем содержимым
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardTitle.textContent = this._name;
        this._countLikes.textContent = this._likes.length; // вывод лайков на страницу

        this._handleLikeRender() // Проверка маркера лайков перед рендером

        return this._cardElement;
    }

    // Метод удаления карточки
    deleteCard = () => {
        this._cardElement.remove();
    };
}

export default Card;

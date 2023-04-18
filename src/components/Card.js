class Card {
    constructor({data, handleCard, handleDelete, handleAddLike, handleDelLike}, templateSelector, userId) {
        this._likes = data.likes;
        this._link = data.link;
        this._name = data.name;
        this._ownerId = data.owner._id;
        this.cardId = data._id;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCard;
        this._handleDeleteIconClick = handleDelete;
        this._handleAddLikeClick = handleAddLike;
        this._handleDeleteLikeClick = handleDelLike;
        this._userId = userId;
    }

// Метод установки слушателей
    _setEventListenersCard() {
        // Слушатель на мусорке
        const deleteIconElement = this._cardElement.querySelector('.elements__delete');
        if (this._ownerId !== this._userId) {
            deleteIconElement.remove();
        } else {
            deleteIconElement.addEventListener('click', () => {
                this._handleDeleteIconClick(this.cardId); // вызов обработчика запроса на удаление карточки
            });
        }

        // Слушатель на лайке
        const likeIconElement = this._cardElement.querySelector('.elements__like');
        likeIconElement.addEventListener('click', (evt) => {

            evt.target.classList.toggle('elements__like_active'); // Поставить лайк

            // for(let i = 0; i <= this._likes.length; i++) {
            //     if (this._userId === this._likes[i]._id) {
            //         this._handleDeleteLikeClick(this.cardId);
            //
            //     } else {
            //         this._handleAddLikeClick(this.cardId);
            //     }
            // }

            if (this._checkLikes()) {
                this._handleDeleteLikeClick(this.cardId);
            } else {
                this._handleAddLikeClick(this.cardId);
            }


        });



        // Слушатель попап на карточке
        this._cardImage.addEventListener('click', () => {
           this._handleCardClick(this._link, this._name);
        });
    }

    _checkLikes() {
        // return this._likes.find((like) => like._id === this._userId);
        return this._likes.forEach((like) => {
            if (like._id === this._userId) {
                return true;
            } else {
                return false;
            }
        })

    }

    handleLike(card) {
        this._likeArea = card.likes;
        this._countLikes = this._cardElement.querySelector('.elements__count-likes');
        (this._likeArea.length === 0) ? this._countLikes.textContent = '' : this._countLikes.textContent = this._likeArea.length;
    }

// Метод получения карточки
    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.elements__card')
            .cloneNode(true); // Клонируем содержимое тега template

        return cardElement;
    }

// Метод наполнения и генерации карточки
    generateCard() {

        this._cardElement = this._getTemplate(); // запись для общего доступа к элементу
        // Наполняем содержимым
        this._cardImage = this._cardElement.querySelector('.elements__card-image');
        this._cardTitle = this._cardElement.querySelector('.elements__title');
        this._countLikes = this._cardElement.querySelector('.elements__count-likes');

        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardTitle.textContent = this._name;

        this._countLikes.textContent = this._likes.length; // вывод лайков на страницу

        this._setEventListenersCard();          // установка слушателей

        return this._cardElement;
    }

// Метод удаления карточки
    deleteCard = () => {
        this._cardElement.remove();
    }

    // setCardLike = (card) => {
    //     const arrLikes = card.likes;
    //     this._countLikes = this._cardElement.querySelector('.elements__count-likes');
    //     this._countLikes.textContent = arrLikes.length;
    // }
    //
    // delCardLike = () => {
    //     this._countLikes = this._cardElement.querySelector('.elements__count-likes');
    //     this._countLikes.textContent = '';
    // }
}

export default Card;
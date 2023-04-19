class Card {
    constructor({data, handleCard, handleDelete, handleAddLike, handleDeleteLike}, templateSelector, userId) {
        this._likes = data.likes;
        this._link = data.link;
        this._name = data.name;
        this._ownerId = data.owner._id;
        this.cardId = data._id;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCard;
        this._handleDeleteIconClick = handleDelete;
        this._handleAddLikeClick = handleAddLike;
        this._handleDeleteLikeClick = handleDeleteLike;
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
        this._likeIconElement = this._cardElement.querySelector('.elements__like');
        this._likeIconElement.addEventListener('click', (evt) => {
            evt.target.classList.toggle('elements__like_active'); // Поставить лайк
            // Вызов обработчика после проверки
            if (this._checkLike()) {
                this._handleDeleteLikeClick(this.cardId); // обработчик на удаление
            } else {
                this._handleAddLikeClick(this.cardId); // обработчик на добавление
            }
        });

        // Слушатель попап на карточке
        this._cardImage.addEventListener('click', () => {
           this._handleCardClick(this._link, this._name);
        });
    }

// Метод проверки наличия лайков
    _checkLike() {
        return this._likes.some((like) => {
            return like._id === this._userId;
        })
    }
// Метод обаботки лайков
    handleLikes(card) {
        this._likes = card.likes; // записываем массив с сервера
        // обновление лайков на странице
        if (this._likes.length === 0) {
            this._countLikes.textContent = '0';
        } else {
            this._countLikes.textContent = this._likes.length;
        }
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

        // Проверка маркера лайков перед рендером
        if (this._checkLike()) {
            const likeIconElement = this._cardElement.querySelector('.elements__like');
            likeIconElement.classList.add('elements__like_active'); // Поставить лайк
        }
        this._countLikes.textContent = this._likes.length; // вывод лайков на страницу

        this._setEventListenersCard();          // установка слушателей

        return this._cardElement;
    }

// Метод удаления карточки
    deleteCard = () => {
        this._cardElement.remove();
    }
}

export default Card;
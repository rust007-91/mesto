class Card {
    constructor(data, templateSelector, handleCardClick) {
        this._link = data.link;
        this._name = data.name;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }

// Метод установки слушателей
    _setEventListenersCard() {
        // Слушатель на мусорке
        const deleteIconElement =  this._cardElement.querySelector('.elements__delete');
        deleteIconElement.addEventListener('click', () => {
            this._cardElement.remove(); // Удаление карточки
        });

        // Слушатель на лайке
        const likeIconElement = this._cardElement.querySelector('.elements__like');
        likeIconElement.addEventListener('click', (evt) => {
            evt.target.classList.toggle('elements__like_active'); // Поставить лайк
        });

        // Слушатель попап на карточке
        this._cardImage.addEventListener('click', () => {
           this._handleCardClick(this._link, this._name);
        });
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
    createCard() {
        this._cardElement = this._getTemplate(); // запись для общего доступа к элементу
        // Наполняем содержимым
        this._cardImage = this._cardElement.querySelector('.elements__card-image');
        this._cardTitle = this._cardElement.querySelector('.elements__title');

        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardTitle.textContent = this._name;

        this._setEventListenersCard();          // установка слушателей

        return this._cardElement;
    }
}

export default Card;
class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._popupActiveClass = 'popup_opened';
    }

// Метод открытия попапа
    open() {
        this._popupElement.classList.add(this._popupActiveClass);

        document.addEventListener('keydown', this._handleEscClose); // Навешиваем обработчик для закрытия попапа по Esc (в случае открытия попапа)
    }

// Метод закрытия попапа
    close() {
        this._popupElement.classList.remove(this._popupActiveClass);

        document.removeEventListener('keydown', this._handleEscClose); // Удаляем обработчик для закрытия попапа по Esc (после закрытия попапа)
    }

// Метод закрытия попапа по Esc (стрелочная, для избежания потери контекста)
    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

// Слушатели закрытия попапа при клике по оверлэю или крестику
    setEventListeners() {
        this._popupElement.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains(this._popupActiveClass)) {
                this.close();
            }
            if(evt.target.classList.contains('popup__close')) {
                this.close();
            }
        });
    }
}

export default Popup;

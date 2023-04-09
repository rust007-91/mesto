import Popup from "./Popup.js";

class PopupWithSubmit extends Popup{
    constructor(popupSelector, {handleFormConfirmSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormConfirmSubmit;
    }

    // Наследованные и переопределённый метод обработки формы
    setEventListeners() {
        super.setEventListeners();

        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit();
            this.close();
        });
    }
}

export default PopupWithSubmit;
import Popup from "./Popup.js";

class PopupWithForm extends Popup{
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = document.querySelector('.popup__form');
        this._popupInputList = document.querySelectorAll('.popup__input');
    }

    setEventListeners() {
        super.setEventListeners();

        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();
        });

    }

    _getInputValues() {
        this.inputValue = {};

        this._popupInputList.forEach((input) => {
            this.inputValue[input.name] = input.value;
        });

        return this.inputValue;
    }

    // setInputValues(data) {
    //     const inputData = this._getInputValues();
    //     this._popupInputList.forEach((input) => {
    //         input.value = inputData[input.name];
    //     });
    // }

    close() {
        const closeForm = super.close();
        // this._formElement.reset();

        return closeForm;
    }
}

export default PopupWithForm;
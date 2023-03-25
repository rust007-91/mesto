import _nameSelector from "./PopupWithImage";

class UserInfo {
    constructor({nameSelector, descSelector}) {
        this._nameSelector = document.querySelector(nameSelector);
        this._descSelector = document.querySelector(descSelector);
        this._inputEditNameElement = document.querySelector('.popup__input_type_edit-name');
        this._inputEditJobElement = document.querySelector('.popup__input_type_edit-job');
    }

    getUserInfo() {
        this._inputEditNameElement.value = this._nameSelector.textContent;
        this._inputEditJobElement.value = this._descSelector.textContent;
    }

    setUserInfo(data) {
        this._nameSelector.textContent = data.heading;
        this._descSelector.textContent = data.desc;
    }
}

export default UserInfo;

// getUserInfo() {
//     return { name: this._nameSelector.textContent, desc: this._descSelector.textContent }
// }

// setUserInfo() {
//     this._info = this.getUserInfo();
//     this._inputEditNameElement.value = this._info.name;
//     this._inputEditJobElement.value = this._info.desc;
// }
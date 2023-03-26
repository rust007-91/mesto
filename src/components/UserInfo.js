import _nameSelector from "./PopupWithImage";

class UserInfo {
    constructor({nameSelector, descSelector}) {
        this._nameSelector = document.querySelector(nameSelector);
        this._descSelector = document.querySelector(descSelector);
    }

// Метод подстановки данных при открытии формы edit
    getUserInfo() {
        const inputInfo = {
            name: this._nameSelector.textContent,
            desc: this._descSelector.textContent
        };
        return inputInfo;
    }
// Метод подстановки данных на страницу
    setUserInfo(data) {
        this._nameSelector.textContent = data.heading;
        this._descSelector.textContent = data.desc;
    }
}

export default UserInfo;
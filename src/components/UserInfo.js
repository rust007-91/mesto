
class UserInfo {
    constructor({nameSelector, descSelector, avatarSelector}) {
        this._nameSelector = document.querySelector(nameSelector);
        this._descSelector = document.querySelector(descSelector);
        this._avatarSelector = document.querySelector(avatarSelector);
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
    setUserInfo({name, about, avatar}) {
        this._nameSelector.textContent = name;
        this._descSelector.textContent = about;
        this._avatarSelector.src = avatar;
    }
}

export default UserInfo;
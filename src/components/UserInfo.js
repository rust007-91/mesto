
class UserInfo {
    constructor({nameSelector, descSelector, avatarSelector, }) {
        this._name = document.querySelector(nameSelector);
        this._description = document.querySelector(descSelector);
        this._avatar = document.querySelector(avatarSelector);
    }

// Метод подстановки данных при открытии формы edit
    getUserInfo() {
        const inputInfo = {
            heading: this._name.textContent,
            desc: this._description.textContent
        };
        return inputInfo;
    }
// Метод подстановки данных на страницу
    setUserInfo({name, about, avatar}) {
        this._name.textContent = name;
        this._description.textContent = about;
        this._avatar.src = avatar;
    }
}

export default UserInfo;
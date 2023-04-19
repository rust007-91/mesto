class Api {
    constructor({url, headers}) {
        this._url = url;
        this._headers = headers;
    }

    _getServStatus(res) {
        if(res.ok) {
            return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`)
    }

// Метод запроса карточек с сервера
    getApiCard() {
        return fetch(`${this._url}cards`, {
            method: 'GET',
            headers: this._headers,
        })
            .then((res) => this._getServStatus(res))
    }

// Метод запроса информации о пользователе с сервера
    getApiInfo() {
        return fetch(`${this._url}users/me`, {
            method: 'GET',
            headers: this._headers,
        })
            .then((res) => this._getServStatus(res))
    }

// Метод обновления информации о пользователе на сервере
    setApiInfo({heading, desc}) {
        return fetch(`${this._url}users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: heading,
                about: desc,
            }),
        })
            .then((res) => this._getServStatus(res))
    }

// Метод обновления аватара о пользователе на сервере
    setApiAvatar({link}) {
        return fetch(`${this._url}users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: link,
            }),
        })
            .then((res) => this._getServStatus(res))
    }

// Метод загрузки новой карточки на сервер
    setApiNewCard({name, link}) {
        return fetch(`${this._url}cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link,
            }),
        })
            .then((res) => this._getServStatus(res))
    }

// Метод удаления карточки на сервер
    deleteApiCard(id) {
        return fetch(`${this._url}cards/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then((res) => this._getServStatus(res))
    }
// Метод добавления лайка на сервер
    setApiLike(id) {
        return fetch(`${this._url}cards/${id}/likes`, {
            method: 'PUT',
            headers: this._headers,
        })
            .then((res) => this._getServStatus(res))
    }

// Метод удаления лайка на сервер
    deleteApiLike(id) {
        return fetch(`${this._url}cards/${id}/likes`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then((res) => this._getServStatus(res))
    }
}


export default Api;
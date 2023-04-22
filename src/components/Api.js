class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    _getServStatus(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }

    _request(url, options) {
        return fetch(url, options).then((res) => this._getServStatus(res));
    }

    // Метод запроса карточек с сервера
    getApiCard() {
        return this._request(`${this._url}cards`, {
            method: "GET",
            headers: this._headers,
        });
    }

    // Метод запроса информации о пользователе с сервера
    getApiInfo() {
        return this._request(`${this._url}users/me`, {
            method: "GET",
            headers: this._headers,
        });
    }

    // Метод обновления информации о пользователе на сервере
    setApiInfo({ heading, desc }) {
        return this._request(`${this._url}users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: heading,
                about: desc,
            }),
        });
    }

    // Метод обновления аватара о пользователе на сервере
    setApiAvatar({ link }) {
        return this._request(`${this._url}users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: link,
            }),
        });
    }

    // Метод загрузки новой карточки на сервер
    setApiNewCard({ name, link }) {
        return this._request(`${this._url}cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link,
            }),
        });
    }

    // Метод удаления карточки на сервер
    deleteApiCard(id) {
        return this._request(`${this._url}cards/${id}`, {
            method: "DELETE",
            headers: this._headers,
        });
    }
    // Метод добавления лайка на сервер
    setApiLike(id) {
        return this._request(`${this._url}cards/${id}/likes`, {
            method: "PUT",
            headers: this._headers,
        });
    }

    // Метод удаления лайка на сервер
    deleteApiLike(id) {
        return this._request(`${this._url}cards/${id}/likes`, {
            method: "DELETE",
            headers: this._headers,
        });
    }
}

export default Api;

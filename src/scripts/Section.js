class Section {
    constructor({itemList, renderer}, selector) {
        this._itemList = itemList;
        this._renderer = renderer;
        this._container = document.querySelector(selector);
    }

    renderItems() {
        this._itemList.forEach((item) => {
            this._renderer(item);                             // Добавление карточки в DOM
        });
    }

    addItem(itemHtml) {
        this._container.prepend(itemHtml);
    }
}

export default Section;
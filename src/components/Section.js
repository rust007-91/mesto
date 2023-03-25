class Section {
    constructor({itemList, renderer}, selector) {
        this._itemList = itemList;
        this._renderer = renderer;
        this._container = document.querySelector(selector);
    }
// Метод перебора карточки
    renderItems() {
        this._itemList.forEach((item) => {
            this._renderer(item);
        });
    }
// Метод добавления карточки в DOM
    addItem(itemHtml) {
        this._container.prepend(itemHtml);
    }
}

export default Section;
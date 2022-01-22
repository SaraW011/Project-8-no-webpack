export default class Section {
    constructor({items, renderer}, elementSelector) {
        this._itemsRendered = items;
        this._renderer = renderer;
        this._elementSelector = elementSelector;
    }

    renderer() {
        this._itemsRendered.forEach(element => {
            this._element = this._renderer(element);
        });
    }

    addItem(element) {
        this._elementSelector.prepend(element);
    }
}
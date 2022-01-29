export default class Section {
    constructor({ items, renderer }, container) {
      this._itemsRendered = items;
      this._renderer = renderer;
      this._container = container;
    }
  
    renderer() {
      this._itemsRendered.forEach((element) => {
        this._element = this._renderer(element);
      });
    }
  
    addItem(element) {
      this._container.prepend(element);
    }
  }  

//   note for improvement 
//   make renderer a generic function only for creating a card (without adding it to the DOM) 
//   and then you could create cards inside the class 
//   so you would not bother yourself about creating them in index.js in 2 places -> cleaner code
 
//   addItem(item) {
//      const card = this._renderer(item)
//      this._container.prepend(card);
//    }
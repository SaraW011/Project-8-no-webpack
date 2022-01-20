import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor() {
    super();
    this._popup = document.querySelector(".modal_type_preview-image");
  }

  open(link, name) {
    super.open();
    this._link = link;
    this._name = name;

    this._popup.querySelector(".modal__image-caption").textContent = this._name;

    //select the DOM element once and reuse it:
    const imagePreview = document.querySelector(".modal__image-container");
    imagePreview.src = this._link;
    imagePreview.alt = this._name;
  }
}
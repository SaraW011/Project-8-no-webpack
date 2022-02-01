import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._popup = document.querySelector(".modal_type_preview-image");
  }

  open(link, name) {
    // const imagePopup = this._popup.querySelector(".modal_type_preview-image");
    super.open();
    this._link = link;
    this._name = name;
    this._popup.querySelector(".modal__image-caption").textContent = this._name;

    const imagePreview = this._popup.querySelector(".modal__image-container"); 
    imagePreview.src = this._link;
    imagePreview.alt = this._name;
  }
}
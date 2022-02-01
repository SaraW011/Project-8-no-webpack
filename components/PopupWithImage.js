import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._imageWrapper = document.querySelector(".modal_type_preview-image");

    // this._popup = document.querySelector(".modal_type_preview-image"); //popup already defined in Popup class 
    console.log(popup)
  }

  open(link, name) {
    super.open();
    this._link = link;
    this._name = name;
    // this._popup.querySelector(".modal__image-caption").textContent = this._name; 

    this._imageWrapper.querySelector(".modal__image-caption").textContent = this._name;

    // const imagePreview = this._popup.querySelector(".modal__image-container"); 
    const imagePreview = this._imageWrapper.querySelector(".modal__image-container"); 

    imagePreview.src = this._link;
    imagePreview.alt = this._name;
  }
}
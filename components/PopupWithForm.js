import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".form");
  }

  _getInputValues() {
    this._inputFieldValues = {};
    const inputList = [...this._form.querySelectorAll(".form__input")];
    inputList.forEach(
      (input) => (this._inputFieldValues[input.name] = input.value)
    );
    return this._inputFieldValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._handleFormSubmit);
  }

  close() {
    super.close();
    this._form.reset();
  }
}
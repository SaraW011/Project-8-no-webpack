export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
  }

  open() {
    this._popup.classList.add("modal_open");
    document.addEventListener("keydown", this._handleEscClose);
    document.addEventListener("click", this._handleOverlayClose);
  }

  close() {
    this._popup.classList.remove("modal_open");
    document.removeEventListener("keydown", this._handleEscClose);
    document.removeEventListener("click", this._handleOverlayClose);
  }

  _handleEscClose = (event) => {
    const key = event.key;
    if (key == "Escape") {
      this.close();
    }
  };

  _handleOverlayClose = (event) => {
    if (
      event.target.classList.contains("modal_open") ||
      event.target.classList.contains(`modal__image-wrapper`)
    ) {
      this.close(event.target);
    }
  };

  setEventListeners() {
    const closeButtons = document.querySelectorAll(".modal__close-button");
    closeButtons.forEach((button) =>
      button.addEventListener("click", (event) => {
        this.close(event.target.closest(".modal"));
      })
    );
  }

  removeEventListeners() {
    this._popup.classList.remove("modal_open");
    document.removeEventListener("keydown", this._handleEscClose);
    document.removeEventListener("click", this._handleOverlayClose);
  }
}
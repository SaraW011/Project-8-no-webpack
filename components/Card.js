export default class Card {
  constructor(cardData, templateSelector, handleCardClick) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._template = templateSelector;
    this._handleCardClick = handleCardClick;
    //this._likeCard = this._template.querySelector(".elements__heart")
  }

  _getTemplate() {
    const cardElement = this._template
      .querySelector(".elements__element")
      .cloneNode(true);
    return cardElement;
  }

  _handleLikeImage() {
    this._cardElement
      .querySelector(".elements__heart") //to fix: select once in constructor and re-use
      .classList.toggle("elements__heart_active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _addEventListeners() {
    this._cardElement
      .querySelector(".elements__heart")
      .addEventListener("click", () => {
        this._handleLikeImage();
      });

    this._cardElement
      .querySelector(".elements__trash")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });

    this._cardElement
      .querySelector(".elements__image")
      .addEventListener("click", () => {
        this._handleCardClick(this._link, this._name);
      });
  }

  render() {
    this._cardElement = this._getTemplate();

    this._cardElement.querySelector(".elements__text").textContent = this._name;

    this._cardElement.querySelector(
      ".elements__image"
    ).style.backgroundImage = `url(${this._link})`;

    this._addEventListeners();

    return this._cardElement;
  }
}

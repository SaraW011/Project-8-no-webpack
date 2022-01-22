import "./index.css";

import initialCards from "../components/initialCards.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

// wrapper modals
const editProfilePopup = document.querySelector(".modal_type_edit-profile");
const addNewPlacePopup = document.querySelector(".modal_type_add-place");
const previewImagePopup = addNewPlacePopup.querySelector(
  ".modal_type_preview-image"
);

// wrapper forms
const placeForm = document.querySelector(".form-add-place");
const profileForm = document.querySelector(".form-change-profile");

// profile name and info:
const userNameElement = document.querySelector(".profile__name");
const userJobElement = document.querySelector(".profile__title");

// input data fields in forms
const inputName = document.querySelector(".form__input_type_name");
const inputJob = document.querySelector(".form__input_type_job");

const inputPlace = addNewPlacePopup.querySelector(".form__input_type_place");
const inputLink = addNewPlacePopup.querySelector(".form__input_type_link");

// buttons
const openProfileEditButton = document.querySelector(".profile__edit-button");
const addNewPlacePopupButton = document.querySelector(".profile__add-button");

// place - elements - template
const placesList = document.querySelector(".elements__list"); //ul of place cards
const placeTemplate = document.querySelector(".elements-template").content;

//**-->> FORM VALIDATION SETTINGS <<--*/

// Assign form elements to variables:
const formSelector = ".form";
const fieldset = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};

//**-->> RENDER INITIAL PLACE CARDS <<--*/

// place initialCards:
const elementsList = new Section(
  {
    items: initialCards,
    renderer: (element) => {
      const newElement = renderCard(element);
      elementsList.addItem(newElement);
    },
  },
  placeTemplate
);
elementsList.renderer();

//preview image:
const previewImage = new PopupWithImage(previewImagePopup);
previewImage.setEventListeners();

function renderCard(data) {
  const card = new Card(data, placeTemplate, (link, name) =>
    //note! => binds "open" to original this._popup rather than to scope (Class "Card")
    previewImage.open(link, name)
  );
  placesList.prepend(card.render());
}

//**-->> FORMS <<--*/

//add card form:
const addPlacePopup = new PopupWithForm(addNewPlacePopup, submitNewPlaceForm);
addPlacePopup.setEventListeners();

function submitNewPlaceForm(e) {
  e.preventDefault();

  const insertPlace = renderCard({
    name: inputPlace.value,
    link: inputLink.value,
  });
  elementsList.addItem(insertPlace);
  addPlacePopup.close();
}

//change user profile info form:
const userInfo = new UserInfo({ userNameElement, userJobElement });

const profileModal = new PopupWithForm(editProfilePopup, submitProfileForm);
profileModal.setEventListeners();

function submitProfileForm(e) {
  e.preventDefault();

  userInfo.setUserInfo({
    inputName: inputName.value,
    inputJob: inputJob.value,
  });
  profileModal.close();
}

//---->>>>>>  holds initial values inside profile form when open:
function currentProfileName() {
  const userName = userNameElement.textContent;
  const userJob = userJobElement.textContent;

  inputName.value = userName;
  inputJob.value = userJob;
  //call @ eventListener
}
//<<<<<<----


//**-->> ENABLE FORM VALIDATION <<--*/

const placeFormValidator = new FormValidator(fieldset, placeForm);
placeFormValidator.enableValidation();

const profileFormValidator = new FormValidator(fieldset, profileForm);
profileFormValidator.enableValidation();

//**-->> EVENT LISTENERS <<--*/

openProfileEditButton.addEventListener("click", () => {
  profileModal.open();
  currentProfileName();
});

addNewPlacePopupButton.addEventListener("click", () => {
  addPlacePopup.open();
  placeFormValidator.disableSubmitButton();
});

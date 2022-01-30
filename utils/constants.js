// wrapper modals
export const editProfilePopup = document.querySelector(".modal_type_edit-profile");
export const addNewPlacePopup = document.querySelector(".modal_type_add-place");
export const previewImagePopup = addNewPlacePopup.querySelector(
  ".modal_type_preview-image"
);

// wrapper forms
export const placeForm = document.querySelector(".form-add-place");
export const profileForm = document.querySelector(".form-change-profile");

// profile name and info:
export const userNameElement = document.querySelector(".profile__name");
export const userJobElement = document.querySelector(".profile__title");

// input data fields in forms
export const inputName = document.querySelector(".form__input_type_name");
export const inputJob = document.querySelector(".form__input_type_job");

//no longer in use, use html input "name" values instead
// export const inputPlace = addNewPlacePopup.querySelector(".form__input_type_place");
// export const inputLink = addNewPlacePopup.querySelector(".form__input_type_link");

// buttons
export const openProfileEditButton = document.querySelector(".profile__edit-button");
export const addNewPlacePopupButton = document.querySelector(".profile__add-button");

// place - elements - template
export const placesList = document.querySelector(".elements__list"); //ul of place cards
export const placeTemplate = document.querySelector(".elements-template").content;

//**-->> FORM VALIDATION SETTINGS <<--*/

// Assign form elements to variables:
//export const formSelector = ".form"; moved to Class Popup
export const fieldset = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};
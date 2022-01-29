// import "./index.css";

import initialCards from "../utils/initialCards.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

import {
  editProfilePopup,
  addNewPlacePopup,
  previewImagePopup,
  placeForm,
  profileForm,
  userNameElement,
  userJobElement,
  inputName,
  inputJob,
  inputPlace,
  inputLink,
  openProfileEditButton,
  addNewPlacePopupButton,
  placesList,
  placeTemplate,
  formSelector,
  fieldset,
} from "../utils/constants.js";

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

// function renderCard(data) {
//   const card = new Card(data, placeTemplate, (link, name) =>
//     //note! => binds "open" to original this._popup rather than to scope (Class "Card")
//     previewImage.open(link, name)
//   );

//   placesList.prepend(card.render());
// }

//>>>>>>>>>>>>>>>> separated the above function:
function renderCard(data) {
  const card = new Card(data, placeTemplate, handleImagePreview);
  placesList.prepend(card.render());
}

function handleImagePreview(link, name) {
  previewImage.open(link, name);
}

//**-->> FORMS <<--*/

//add card form:
const addPlacePopup = new PopupWithForm(addNewPlacePopup, submitNewPlaceForm);
addPlacePopup.setEventListeners();

//Only method _getInputValues collects data inputs,
//use the collected data rather than the inputs:

function submitNewPlaceForm(input) {
  const insertPlace = renderCard(
    input
    // name: inputPlace.value,
    // link: inputLink.value,
  );
  elementsList.addItem(insertPlace);
  addPlacePopup.close();
}

//change user profile info form:

const userInfo = new UserInfo({ userNameElement, userJobElement });

const profileModal = new PopupWithForm(editProfilePopup, submitProfileForm);
profileModal.setEventListeners();

function submitProfileForm(data) {
  // e.preventDefault(); //moved to class
  userInfo.setUserInfo(
    { inputName: data.name, inputJob: data.job }

    // inputName: inputName.value,
    // inputJob: inputJob.value,
  );
  profileModal.close();
}

//---->>>>>>  holds initial values inside profile form when open:
function currentProfileName() {
  //note! -->  textContent shouldn't be used here to get the profile data,
  // only getUserInfo should do that:

  // const userName = userNameElement.textContent;
  // const userJob = userJobElement.textContent;

  // inputName.value = userName;
  // inputJob.value = userJob;

  //-----get data from UserInfo class:
  const inputData = userInfo.getUserInfo();

  inputName.value = inputData.name;
  inputJob.value = inputData.job;

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

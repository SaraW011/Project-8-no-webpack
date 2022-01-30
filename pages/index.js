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
  openProfileEditButton,
  addNewPlacePopupButton,
  placesList,
  placeTemplate,
  fieldset,
} from "../utils/constants.js";

//**-->> RENDER INITIAL PLACE CARDS <<--*/

//>>>>>>>>>>>>>>>> separated the function below:
const elementsList = new Section(
  {
    items: initialCards,
    renderer: renderCard,
  },
  placeTemplate
);

elementsList.renderer();

// place initialCards:
// const elementsList = new Section(
//   {
//     items: initialCards,
//     renderer: (element) => {
//       const newElement = renderCard(element);
//       elementsList.addItem(newElement);
//     },
//   },
//   placeTemplate
// );
// elementsList.renderer();

//preview image:
const previewImage = new PopupWithImage(previewImagePopup);
previewImage.setEventListeners();

//>>>>>>>>>>>>>>>> separated the function below:
function renderCard(data) {
  const card = new Card(data, placeTemplate, handleImagePreview);
  placesList.prepend(card.render());
}

function handleImagePreview(link, name) {
  previewImage.open(link, name);
}

// function renderCard(data) {
//   const card = new Card(data, placeTemplate, (link, name) =>
//     //note! => binds "open" to original this._popup rather than to scope (Class "Card")
//     previewImage.open(link, name)
//   );

//   placesList.prepend(card.render());
// }

//**-->> FORMS <<--*/

//add card form:
const addPlacePopup = new PopupWithForm(addNewPlacePopup, submitNewPlaceForm);
addPlacePopup.setEventListeners();

//Only method _getInputValues collects data inputs,
//use the collected data rather than the inputs:

function submitNewPlaceForm(data) {
  const insertPlace = renderCard(
    // name: inputPlace.value,
    // link: inputLink.value,

    //html input "name" values
    { name: data.place, link: data.link }
  );

  elementsList.addItem(insertPlace);
  addPlacePopup.close();
}

//change user profile info form:

const userInfo = new UserInfo({
  userNameElement: userNameElement,
  userJobElement: userJobElement,
});

const profileModal = new PopupWithForm(editProfilePopup, submitProfileForm);
profileModal.setEventListeners();

function submitProfileForm(data) {
  // e.preventDefault(); //moved to class
  userInfo.setUserInfo(
    //html input "name" values
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
export default class UserInfo {
  constructor({ userNameElement, userJobElement }) {
    this._userNameElement = userNameElement;
    this._userJobElement = userJobElement;
  }

  getUserInfo() {
    this._userData = {
      // this.userName = this._userNameElement.textContent;
      // this.userJob = this._userJobElement.textContent;
      name: this._userNameElement.textContent,
      job: this._userJobElement.textContent,
    };
    return this._userData;
    // return { userName, userJob };
  }

  setUserInfo({ inputName, inputJob }) {
    this._userNameElement.textContent = inputName;
    this._userJobElement.textContent = inputJob;
  }
}
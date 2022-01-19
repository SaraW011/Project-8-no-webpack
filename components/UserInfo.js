export default class UserInfo {
constructor({userNameElement, userJobElement}) {
    this._userNameElement = userNameElement;
    this._userJobElement = userJobElement;
  }

  getUserInfo() {
    this.userName = this._userNameElement.textContent;
    this.userJob = this._userJobElement.textContent;
   
    return { userName, userJob };
  }

  setUserInfo({inputName, inputJob}) {
  this._userNameElement.textContent = inputName;
  this._userJobElement.textContent = inputJob;
  }
}
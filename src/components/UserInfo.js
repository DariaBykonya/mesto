export default class UserInfo {
  constructor(configProfile) {
    this._currentName = document.querySelector(configProfile.currentNameSelector);
    this._currentJob = document.querySelector(configProfile.currentJobSelector);
  }

  getUserInfo() {
    return { nameuser: this._currentName.textContent, profession: this._currentJob.textContent };
  }

  setUserInfo(dataUser) {
    this._currentName.textContent = dataUser.nameuser;
    this._currentJob.textContent = dataUser.profession;
  }
}

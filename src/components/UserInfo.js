export default class UserInfo {
  constructor(configProfile) {
    this._currentName = document.querySelector(configProfile.currentNameSelector);
    this._currentJob = document.querySelector(configProfile.currentJobSelector);
    this._currentAvatar = document.querySelector(configProfile.currentAvatarSelector);
  }

  getUserInfo() {
    return { nameuser: this._currentName.textContent, profession: this._currentJob.textContent };
  }

  setUserInfo({ nameuser, profession, avatar }) {
    this._currentAvatar.src = avatar;
    this._currentName.textContent = nameuser;
    this._currentJob.textContent = profession;
  }

  setId(id) {
    this._id = id;
  }

  getId() {
    return this._id;
  }
}

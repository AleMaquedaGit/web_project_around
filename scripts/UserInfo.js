class UserInfo {
  constructor(UserInfoSelector) {
    this._UserInfoSelector = UserInfoSelector;

    this._contentName = this._UserInfoSelector.querySelector(
      "profile__content_name"
    );
    this._contentInfo = this._UserInfoSelector.querySelector(
      "profile__content_info"
    );
  }
  setUserInfo({ name, description }) {
    console.log("UserInfo");
    this._contentName.textContent = name;
    this._contentInfo.textContent = description;
  }
}

export default UserInfo;

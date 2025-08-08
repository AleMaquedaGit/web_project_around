class UserInfo {
  constructor(UserInfoSelector) {
    this._UserInfoSelector = UserInfoSelector;
    this._profileName = document.querySelector(".profile__content_name");
    this._profileDescription = document.querySelector(".profile__content_info");

    this._UserInfoSelector = document.querySelector("#input_description");

    this._contentName =
      this._UserInfoSelector.querySelector("input_description");

    this._contentInfo = this._UserInfoSelector.querySelector(
      "profile__content_info"
    );
  }
  setUserInfo({ name, description }) {
    console.log("UserInfo");
    console.log(name, description);
    this._profileName.textContent = name;
    this._profileDescription.textContent = description;
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      description: this._profileDescription.textContent,
    };
  }
}

export default UserInfo;

import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(PopupWithFormSelector, handleSubmit) {
    super(PopupWithFormSelector);
    this.handleSubmit = handleSubmit;
    /*api.addCard({ name, link }).then((data) => {
    section.addItem(createCard(data));
  });*/
  }

  /*
  Open({ name, link }) {
    if (name) {
      this._inputName = this._PopupSelector.querySelector("#input_name").value =
        name;
    }
    if (link) {
      this._inputDescription = this._PopupSelector.querySelector(
        "#input_description"
      ).value = link;
    }

    console.log("EL super se pone junto con el metodo para agregar mas codigo");
    super.Open();
  }*/
  getInputValues() {
    const formValues = {};
    const inputList = this._PopupSelector.querySelectorAll(".popup__form-name");
    inputList.forEach((element) => {
      formValues[element.name] = element.value;
    });
    return formValues;
  }
  setEvenListener() {
    this._PopupSelector.addEventListener("submit", (evt) => {
      evt.preventDefault();

      //this._inputName = this._PopupSelector.querySelector("#input_name").value;
      // this._inputDescription =
      // this._PopupSelector.querySelector("#input_description").value;

      this.handleSubmit(this.getInputValues());
      console.log("despues de la api");
      this.Close();
    });

    super.setEvenListener();
  }
}

export default PopupWithForm;
//callbacks para las formas

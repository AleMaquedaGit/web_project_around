import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(PopupWithFormSelector) {
    super(PopupWithFormSelector);
  }

  Open() {
    console.log("EL super se pone junto con el metodo para agregar mas codigo");
    super.Open();
  }
}

export default PopupWithForm;


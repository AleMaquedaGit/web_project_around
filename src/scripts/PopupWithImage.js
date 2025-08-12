import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(PopupWithFormSelector) {
    super(PopupWithFormSelector);
  }

  Open({ link, name }) {
    this._image = this._PopupSelector.querySelector(".popup__image");
    this._title = this._PopupSelector.querySelector(".popup__form-title");

    super.Open();
  }
}

export default PopupWithImage;

/*
 <section class="popup" id="popup-image">
          <div class="popup__container">
            <img
              class="popup__image"
              id="popup__image-add"
              src="/images/Montañas_Calvas.png"
              alt=""
            />
            <h2 class="popup__form-title" id="title__imge">Nuevo Lugar</h2>
          </div>
          <div class="popup__button-close" id="popup-close-image"></div>
          <div class="popup__description"></div>
        </section>
*/

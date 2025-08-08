class Popup {
  constructor(PopupSelector) {
    this._PopupSelector = PopupSelector;
    this._closeButton = this._PopupSelector.querySelector(
      ".popup__button-close"
    );
    this._handleEsc = this._handleEsc.bind(this);
  }
  Open() {
    console.log("trabajando dewsdee la clase");
    this._PopupSelector.classList.toggle("popup_opened");
    document.addEventListener("keyup", this._handleEsc);
  }
  Close() {
    this._PopupSelector.classList.toggle("popup_opened");
    document.removeEventListener("keyup", this._handleEsc); 
  }
  setEvenListener() {
    this._closeButton.addEventListener("click", (e) => {
      console.log("funciona el click");
      e.preventDefault();
      this.Close();
    });
  }
  _handleEsc(evt) {
    if (evt.key === "Escape") this.Close();
  }
}

export default Popup;
/* <section class="popup" id="popup-profile">
          <div class="popup__container">
            <h2 class="popup__form-title">Editar Perfil</h2>
            <form class="popup__form" id="form__edit">
              <input
                class="popup__form-name"
                type="text"
                id="input_name"
                name="name"
                placeholder="Nombre"
                minlength="2"
                maxlength="40"
                required
              />
              <span class="popup_paragraph" id="input_name-error"></span>
              <input
                class="popup__form-name"
                type="text"
                id="input_description"
                name="input_link"
                placeholder="Acerca de mi"
                minlength="2"
                maxlength="40"
                required
              />
              <!-- agregar clase al span para estilo en css-->
              <span class="popup_paragraph" id="input_description-error">
              </span>
              <button
                type="submit"
                class="popup__form-button popup__disabled"
                id="btn__enviar"
                value="Enviar"
                disabled
              >
                Guardar
              </button>
            </form>
          </div>
          <div class="popup__button-close"></div>
        </section>*/

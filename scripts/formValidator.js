class FormValidator {
  constructor(config, formElement) {
    this._formElement = formElement;
    this._button = this._formElement.querySelector(config.button);
    this._inputs = this._formElement.querySelectorAll(config.inputs);
    //this._error = config.error;
  }
  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListener();
  }
  _setEventListener() {
    this._inputs.forEach((input) => {
      input.addEventListener("input", () => {
        let parte1 = input.id;
        let parte2 = "-error";
        this._error = this._formElement.querySelector("#" + parte1 + parte2);

        if (input.validity.valid) {
          this._error.textContent = input.validationMessage;
        } else {
          this._error.textContent = input.validationMessage;
        }
        this._actualizarBoton(this._inputs, this._button);
      });
    });
  }

  _actualizarBoton() {
    const validacion = Array.from(this._inputs).some((input) => {
      return !input.validity.valid;
    });

    //button.disabled = false or true
    this._button.disabled = validacion;
    if (validacion) this._button.classList.add("popup__disabled");
    else this._button.classList.remove("popup__disabled");
  }
}

export default FormValidator;

/*<form class="popup__form" id="form__edit">
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
              </button>*/

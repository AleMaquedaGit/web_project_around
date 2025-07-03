const validate = () => {
  const forms = document.querySelectorAll(".popup__form");
  console.log(forms);
  forms.forEach((form) => {
    console.log(form);
    const button = form.querySelector(".popup__form-button");
    const inputs = form.querySelectorAll(".popup__form-name");

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        let parte1 = input.id;
        let parte2 = "-error";
        let completo = "#" + parte1 + parte2;

        const error = document.querySelector(completo);
        console.log(completo);
        if (input.validity.valid) {
          error.textContent = input.validationMessage;
        } else {
          error.textContent = input.validationMessage;
        }
        actualizarBoton(inputs, button);
      });
    });
  });
};
// por cada input se revisan los 2 inputs
function actualizarBoton(inputs, button) {
  const validacion = Array.from(inputs).some((input) => {
    return !input.validity.valid;
  });

  //button.disabled = false or true
  button.disabled = validacion;
  if (validacion) button.classList.add("popup__disabled");
  else button.classList.remove("popup__disabled");
}

export default validate;

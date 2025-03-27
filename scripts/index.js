const openModal = document.querySelector(".profile__button_edit");
const modal = document.querySelector(".popup");

const closeModal = document.querySelector(".popup__button-close");
const buttonDisable = document.querySelector(".popup__form-button");
const nameInput = document.querySelector(".popup__form-name");
const occupationInput = document.querySelector(".popup__form-occupation");
const saveChange = document.querySelector(".popup__form-button");
const usuario = document.querySelector(".profile__content_name");
const descripcion = document.querySelector(".profile__content_info");

openModal.addEventListener("click", (e) => {
  console.log("funciona el click");
  e.preventDefault();
  modal.classList.toggle("popup_opened");
});
closeModal.addEventListener("click", (e) => {
  console.log("funciona el click");
  e.preventDefault();
  modal.classList.toggle("popup_opened");
});

nameInput.addEventListener("change", (e) => {
  buttonDisable.disabled = false;
});

occupationInput.addEventListener("change", (e) => {
  buttonDisable.disabled = false;
});

saveChange.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("funciona el click guardar");
  usuario.textContent = nameInput.value;
  descripcion.textContent = occupationInput.value;
  modal.classList.toggle("popup_opened");
});

// textContent "leer el contenido de los parrafos " ejemplo <p> hola </p> el textcontent es hola
//En un Input para leer el contenido es .value

// https://alemaquedagit.github.io/web_project_around/

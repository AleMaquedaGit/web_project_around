const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

const openModal = document.querySelector(".profile__button_edit");
const modal = document.querySelector(".popup");
/* popup abrir popup-add */
const profileButtonAdd = document.querySelector(".profile__button_add");
const modal1 = document.querySelector("#popup-add");

const closeModal = document.querySelector(".popup__button-close");

// cerrar popup-add //
const popupClose = document.querySelector("#popup-close");
const popupCloseAdd = document.querySelector("#popup-close-add");

const buttonDisable = document.querySelector(".popup__form-button");
const nameInput = document.querySelector(".popup__form-name");
const occupationInput = document.querySelector(".popup__form-occupation");
const saveChange = document.querySelector(".popup__form-button");
const usuario = document.querySelector(".profile__content_name");
const descripcion = document.querySelector(".profile__content_info");
// cerrar popup-image//
const popupCloseImage = document.querySelector("#popup-close-image");
const modal2 = document.querySelector("#popup-image");

openModal.addEventListener("click", (e) => {
  console.log("funciona el click");
  e.preventDefault();
  modal.classList.toggle("popup_opened");
});

profileButtonAdd.addEventListener("click", (e) => {
  console.log("funciona el click");
  e.preventDefault();
  modal1.classList.toggle("popup_opened");
});

closeModal.addEventListener("click", (e) => {
  console.log("funciona el click");
  e.preventDefault();
  modal.classList.toggle("popup_opened");
});
//cerrar pop-add//
popupCloseAdd.addEventListener("click", (e) => {
  console.log("funciona el click");
  e.preventDefault();
  modal1.classList.toggle("popup_opened");
});

// cerrar popup-image//

popupCloseImage.addEventListener("click", (e) => {
  console.log("funciona el click");
  e.preventDefault();
  modal2.classList.toggle("popup_opened");
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

/* textContent "leer el contenido de los parrafos " ejemplo <p> hola </p> el textcontent es hola
En un Input para leer el contenido es .value

 https://alemaquedagit.github.io/web_project_around/
*/

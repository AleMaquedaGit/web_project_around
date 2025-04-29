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
    name: "Parque Nacional  Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

//FUERA DEL FOR EACH
//Paso 1. Tener un lugar donde van a ir los clones (contenedor)
//Paso 2. Extrar el contenido del template(content)
//FUERA DEL FOR EACH

//boton  para borrar imagen

const template = document.querySelector("#template-images").content;
const contenedor = document.querySelector(".gallery");
const popupImage = document.querySelector("#popup-image");

const popupImageAdd = document.querySelector("#popup__image-add");

//CLON

initialCards.forEach((card) => {
  const clon = template.cloneNode(true);
  const titulo = clon.querySelector(".gallery__card-place");
  const imagen = clon.querySelector(".gallery__card-img");
  const buttonElimanateImage = clon.querySelector(".gallery__trash_button");
  const imageDisapear = clon.querySelector(".gallery__card");
  const buttonLike = clon.querySelector(".gallery__card-like");

  //const bottonActive = document.querySelector(".gallery__card_like_active");
  imagen.addEventListener("click", () => {
    console.log("funciona el click");
    popupImageAdd.src = imagen.src;
    popupImage.classList.toggle("popup_opened");
  });

  buttonElimanateImage.addEventListener("click", (evt) => {
    console.log(evt);
    evt.target.closest(".gallery__card").remove();
  });

  buttonLike.addEventListener("click", (e) => {
    console.log("funciona el click");
    e.preventDefault();
    buttonLike.classList.toggle("gallery__card_like_active");
  });

  titulo.textContent = card.name;
  imagen.src = card.link;
  imagen.alt = card.name;

  contenedor.appendChild(clon);
});
// guardar NUEVA IMAGEN
const buttonAddImage = document.querySelector("#button_image_add");
buttonAddImage.addEventListener("click", (e) => {
  e.preventDefault();
  const clon = template.cloneNode(true);
  const titulo = clon.querySelector(".gallery__card-place");
  const imagen = clon.querySelector(".gallery__card-img");
  const buttonElimanateImage = clon.querySelector(".gallery__trash_button");
  const imageDisapear = clon.querySelector(".gallery__card");
  const buttonLike = clon.querySelector(".gallery__card-like");
  //const inputDescription = document.querySelector("#input_description");
  //const link = document.querySelector("#input_link");
  const inputDescription = document.querySelector("#name");
  const link = document.querySelector("#occupation");
  console.log(inputDescription.value);
  //const bottonActive = document.querySelector(".gallery__card_like_active");
  imagen.addEventListener("click", () => {
    console.log("funciona el click");
    popupImageAdd.src = imagen.src;
    popupImage.classList.toggle("popup_opened");
  });

  buttonElimanateImage.addEventListener("click", (evt) => {
    console.log(evt);
    evt.target.closest(".gallery__card").remove();
  });

  buttonLike.addEventListener("click", (e) => {
    console.log("funciona el click");
    e.preventDefault();
    buttonLike.classList.toggle("gallery__card_like_active");
  });

  titulo.textContent = inputDescription.value;
  imagen.src = link.value;
  imagen.alt = inputDescription.value;

  contenedor.appendChild(clon);
  modal1.classList.toggle("popup_opened");
});

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
//popup open image //
const titleImage = document.querySelector(".title__imge");
const popImageAdd = document.querySelector(".popup__image-add");

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

// eliminar imagen
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

// https://alemaquedagit.github.io/web_project_around/

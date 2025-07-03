import FormValidator from "./FormValidator.js";
import Card from "./card.js";
import UserInfo from "./UserInfo.js";
import Popup from "./Popup.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import Section from "./Section.js";

// const x1 = new
const profileContent = document.querySelector(".profile__grid-content");
const openModal = document.querySelector(".profile__button");

const popupProfile = document.querySelector("#popup-profile");
const popupImage = document.querySelector("#popup-image");
const popupAdding = document.querySelector("#popup-add");
const config = { button: ".popup__form-button", inputs: ".popup__form-name" };
const formEdit = document.querySelector("#form__edit");
const formCard = document.querySelector("#form__card");
const forma1 = new FormValidator(config, formEdit);
const forma2 = new FormValidator(config, formCard);
forma1.enableValidation();
forma2.enableValidation();
//creacion de un objeto apartir de una clase
const popupUser = new PopupWithForm(popupProfile);
const popupAdd = new PopupWithForm(popupAdding);
const popupImageCard = new PopupWithImage(popupImage);

popupImageCard.setEvenListener();
popupUser.setEvenListener();
popupAdd.setEvenListener();

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

const popupImageAdd = document.querySelector("#popup__image-add");
const newTitle = document.querySelector("#title__imge");
//CLON
const section = new Section(initialCards, (card) => {
  const cardElement = new Card(template, card, ({ name, link }) => {
    popupImageCard.Open({ name, link });
  });
  cardElement.message();
  const clon = cardElement.clonCard();
  contenedor.appendChild(clon);
});
section.renderitems();
//acceder  a la  llave de un objeto

/*initialCards.forEach((card) => {
  const cardElement = new Card(template, card, ({ name, link }) => {
    popupImageCard.Open({ name, link });
  });
  cardElement.message();
  const clon = cardElement.clonCard();
  contenedor.appendChild(clon);
});*/
// guardar NUEVA IMAGEN
const buttonAddImage = document.querySelector("#button_image_add");
buttonAddImage.addEventListener("click", (e) => {
  //e.preventDefault();
  const clon = template.cloneNode(true);
  const titulo = clon.querySelector(".gallery__card-place");
  const imagen = clon.querySelector(".gallery__card-img");
  const buttonElimanateImage = clon.querySelector(".gallery__trash_button");
  const imageDisapear = clon.querySelector(".gallery__card");
  const buttonLike = clon.querySelector(".gallery__card-like");

  const inputDescription = document.querySelector("#place");
  const link = document.querySelector("#link");

  buttonElimanateImage.addEventListener("click", (evt) => {
    console.log(evt);
    evt.target.closest(".gallery__card").remove();
  });

  buttonLike.addEventListener("click", (e) => {
    console.log("funciona el click");
    //e.preventDefault();
    buttonLike.classList.toggle("gallery__card_like_active");
  });

  openModal.addEventListener("click", () => {
    console.log("funciona el click");
  });

  titulo.textContent = inputDescription.value ?? "";
  imagen.src = link.value;
  imagen.alt = inputDescription.value;

  imagen.addEventListener("click", () => {
    console.log("funciona el click");
    popupImageAdd.src = imagen.src;
    newTitle.textContent = imagen.alt;
    popupImage.classList.toggle("popup_opened");
  });
  contenedor.prepend(clon);
  modal1.classList.toggle("popup_opened");
});

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
const occupationInput = document.querySelector("#input_description");
const saveChange = document.querySelector(".popup__form-button");
const usuario = document.querySelector(".profile__content_name");
const descripcion = document.querySelector(".profile__content_info");
//popup open image //

const popImageAdd = document.querySelector(".popup__image-add");

// cerrar popup-image//

profileButtonAdd.addEventListener("click", (e) => {
  popupAdd.Open();
});

//cerrar pop-add//

// cerrar popup-image//

// eliminar imagen

/*nameInput.addEventListener("change", (e) => {
  buttonDisable.disabled = false;
});

occupationInput.addEventListener("change", (e) => {
  buttonDisable.disabled = false;
});*/

saveChange.addEventListener("click", (e) => {
  e.preventDefault();

  usuario.textContent = nameInput.value;

  descripcion.textContent = occupationInput.value;
  popupUser.Open();
});

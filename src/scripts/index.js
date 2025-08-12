import FormValidator from "./FormValidator.js";
import Card from "./card.js";
import UserInfo from "./UserInfo.js";
import Popup from "./Popup.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import Section from "./Section.js";
import Api from "./Api.js";

// const x1 = new

const usuario = document.querySelector(".profile__content_name");
const descripcion = document.querySelector(".profile__content_info");
const profileContent = document.querySelector(".profile__grid-content");
const openModal = document.querySelector(".profile__button_edit");
const UserInfoSelector = document.querySelector(".userInfo");
const popupProfile = document.querySelector("#popup-profile");
const popupImage = document.querySelector("#popup-image");
const popupAdding = document.querySelector("#popup-add");
const config = { button: ".popup__form-button", inputs: ".popup__form-name" };
const formEdit = document.querySelector("#form__edit");
const formCard = document.querySelector("#form__card");
const forma1 = new FormValidator(config, formEdit);
const forma2 = new FormValidator(config, formCard);
const userInfodata = new UserInfo(UserInfoSelector);

const profileButtonAdd = document.querySelector(".profile__button_add");
forma1.enableValidation();
forma2.enableValidation();
//creacion de un objeto apartir de una clase
const popupUser = new PopupWithForm(
  popupProfile,

  ({ name, description }) => {
    //tarea la llamada al api para guardar la info, y si la aip tiene extio, vas a llmar a este metodo de userinfodata
    //por medio de try or catch
    userInfodata.setUserInfo({ name, description });
  }
); //callback

const popupImageCard = new PopupWithImage(popupImage);

popupImageCard.setEvenListener();
popupUser.setEvenListener();

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "06f1087a-ea72-4331-b20a-47ee42c926d9",
    "Content-Type": "application/json",
  },
});

const popupAdd = new PopupWithForm(popupAdding, ({ name, link }) => {
  api
    .addCard({ name, link })
    .then((data) => {
      section.addItem(createCard(data));
    })
    .catch((error) => {
      console.error(error);
    });
});

//popupAdd.setEvenListener();
//console.log(api.getInitialCards()); //mandar a llamar al metodo getitialcards
//leer datos asincronos
const template = document.querySelector("#template-images").content;
const createCard = (data) => {
  return new Card(
    template,
    data,
    () => imagePopup.open(data),
    (card) => {
      deleteCardPopup.open();
      /* deleteCardPopup.setSubmitAction(() => {
        api
          .removeCard(card.getId())
          .then(() => {
            card.removeCard();
            deleteCardPopup.close();
          })
          .catch((err) => console.error(`Ocurrió un error al eliminar la tarjeta: ${err}`));
      });*/
    },
    (card) => {
      api
        .changeLikeCardStatus(card.getId(), !card.isLiked())
        .then((data) => {
          card.updateLikesView(data);
        })
        .catch((err) =>
          console.error(
            `Ocurrió un error al cambiar el estado del" "like": ${err}`
          )
        );
    }
  ).clonCard();
};

const section = new Section(
  {
    renderer: (data) => {
      section.addItem(createCard(data));
    },
  },
  ".gallery"
);

async function loadInitialCards() {
  try {
    const initialCards = await api.getInitialCards();
    console.log(initialCards, "despues del await");
    section.renderitems(initialCards); //promesa pendiente
  } catch (error) {
    console.error("error al obtener las tarjetas", error);
  }
}

loadInitialCards();

/*const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "MontaÃ±as Calvas",
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
*/
//FUERA DEL FOR EACH
//Paso 1. Tener un lugar donde van a ir los clones (contenedor)
//Paso 2. Extrar el contenido del template(content)
//FUERA DEL FOR EACH

//boton  para borrar imagen

const contenedor = document.querySelector(".gallery");

const popupImageAdd = document.querySelector("#popup__image-add");
const newTitle = document.querySelector("#title__imge");
//CLON

//acceder  a la  llave de un objeto

/*initialCards.forEach((card) => {
  const cardElement = new Card(template, card, ({ name, link }) => {
    popupImageCard.Open({ name, link });
  });
  cardElement.message();
  const clon = cardElement.clonCard();
  contenedor.appendChild(clon);
});*/
// guardar NUEVA IMAGE
//llaves para parametros con objetos
//

openModal.addEventListener("click", () => {
  const userData = userInfodata.getUserInfo();
  console.log(userData);
  const inputName = document.querySelector("#input_name");
  const inputDescription = document.querySelector("#input_description");

  inputName.value = userInfodata.getUserInfo().name;
  inputDescription.value = userInfodata.getUserInfo().description;
  popupUser.Open();

  console.log("userData", userData);
});

/*
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
});*/

const modal = document.querySelector(".popup");
/* popup abrir popup-add */

const modal1 = document.querySelector("#popup-add");

const closeModal = document.querySelector(".popup__button-close");

// cerrar popup-add //
const popupClose = document.querySelector("#popup-close");
const popupCloseAdd = document.querySelector("#popup-close-add");

const buttonDisable = document.querySelector(".popup__form-button");
const nameInput = document.querySelector(".popup__form-name");
const occupationInput = document.querySelector("#input_description");
const saveChange = document.querySelector(".popup__form-button");

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

/*
saveChange.addEventListener("click", (e) => {
  e.preventDefault();

  usuario.textContent = nameInput.value;

  descripcion.textContent = occupationInput.value;
  popupUser.close();
});*/

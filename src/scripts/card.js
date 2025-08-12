//SOLID
//SEPARACION DE RESPONSBILIDAD
//({ name, link }) => {
//popupImageCard.Open({ name, link });
//Callback: una funcion que llega como parametro

class Card {
  constructor(cardSelector, { name, link }, handleCardCallback) {
    this._cardSelector = cardSelector;
    this._handleCardCallback = handleCardCallback;
    this._name = name;
    this._link = link;
  }
  message() {}

  clonCard() {
    this._clon = this._cardSelector.cloneNode(true);
    this._titulo = this._clon.querySelector(".gallery__card-place");
    this._imagen = this._clon.querySelector(".gallery__card-img");
    this._buttonElimanateImage = this._clon.querySelector(
      ".gallery__trash_button"
    );
    this._imageDisapear = this._clon.querySelector(".gallery__card");
    this._buttonLike = this._clon.querySelector(".gallery__card-like");
    //PopUpImage. popup de cada carta.
    this._imagen.addEventListener("click", () => {
      //DEBE DE HABER MANERA PARAR ABRIR EL POPUP USANDO LA CLASE
      //popupImageAdd.Open();¨
      this._handleCardCallback({ name: this._name, link: this._link });
    });
    // termina PopUpImage.
    this._buttonElimanateImage.addEventListener("click", (evt) => {
      console.log(evt);
      evt.target.closest(".gallery__card").remove();
    });

    this._buttonLike.addEventListener("click", (e) => {
      e.preventDefault();
      this._buttonLike.classList.toggle("gallery__card_like_active");
    });

    this._titulo.textContent = this._name;
    this._imagen.src = this._link;
    this._imagen.alt = this._name;
    return this._clon;
  }
}
export default Card;

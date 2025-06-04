class Card {
  constructor(cardSelector, { card }) {
    this._cardSelector = cardSelector;
    this._id = link._id;
    this._cardTitle = this._cardTitle.querySelector("#place");
    this._name = card.name;
    this._link = card.link;
  }
  clonCard() {
    this._clon = this._cardSelector.cloneNode(true);
    this._titulo = this._clon.querySelector(".gallery__card-place");
    this._imagen = this._clon.querySelector(".gallery__card-img");
    this._buttonElimanateImage = this._clon.querySelector(
      ".gallery__trash_button"
    );
    this._imageDisapear = this._clon.querySelector(".gallery__card");
    this._buttonLike = this._clon.querySelector(".gallery__card-like");

    this._imagen.addEventListener("click", () => {
      console.log("funciona el click");
      this._popupImageAdd.src = imagen.src;

      this._newTitle.textContent = imagen.alt;
      this._popupImage.classList.toggle("popup_opened");
    });

    this._buttonElimanateImage.addEventListener("click", (evt) => {
      console.log(evt);
      evt.target.closest(".gallery__card").remove();
    });

    this._buttonLike.addEventListener("click", (e) => {
      console.log("funciona el click");
      e.preventDefault();
      this._buttonLike.classList.toggle("gallery__card_like_active");
    });

    this._titulo.textContent = this._card.name;
    this._imagen.src = this._card.link;
    this._imagen.alt = this._card.name;
    return this._clon;
  }
}

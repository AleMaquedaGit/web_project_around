class Section {
  constructor({ renderer }, sectionSelector) {
    this._renderer = renderer;
    this._sectionSelector = document.querySelector(sectionSelector);
  }

  renderitems(initialCards) {
    console.log(this._renderer);
    this._initialCards = initialCards;
    this._initialCards.forEach((card) => {
      this._renderer(card);

      /*(data) => {
      section.addItem(createCard(data));
    }*/
    });
  }

  addItem(element) {
    this._sectionSelector.prepend(element);
  }
}

export default Section;

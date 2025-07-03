class Section {
  constructor(initialCards, renderer, sectionSelector) {
    this._initialCards = initialCards;
    this._renderer = renderer;
    this._sectionSelector = document.querySelector(sectionSelector);
  }

  renderitems() {
    this._initialCards.forEach((card) => {
      this._renderer(card);
    });
  }
}
export default Section;

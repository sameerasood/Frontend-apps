class View {
  constructor() {
    this.mainContainerEl = document.querySelector("#main-container");

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    const newParagraph = document.createElement("p");
    newParagraph.textContent =
      "This paragraph has been dynamically added by JavaScript!";
    document.body.append(newParagraph);
  }

  clearParagraph() {
    const removeParagraphs = document.querySelectorAll("p");
    removeParagraphs.forEach((paragraph) => paragraph.remove());
  }
}

module.exports = View;

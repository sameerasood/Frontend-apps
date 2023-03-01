class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector("#main-container");

    document.querySelector("#notes-button").addEventListener("click", () => {
      const newNote = document.querySelector("#notes-input").value;
      this.addNewNote(newNote);
    });
  }

  addNewNote(newNote) {
    this.model.addNotes(newNote);
    this.displayNotes();
  }

  displayNotes() {
    document.querySelectorAll(".note").forEach((element) => {
      element.remove();
    });

    const notes = this.model.getNotes();

    notes.forEach((note) => {
      const noteEl = document.createElement("div");
      noteEl.textContent = note;
      noteEl.className = "note";
      this.mainContainerEl.append(noteEl);
    });

    let existingInputValue = document.querySelector("#notes-input").value;
    existingInputValue = "";
  }
}

module.exports = NotesView;

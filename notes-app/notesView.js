class NotesView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

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

  displayNotesFromApi() {
    this.client.loadNotes((notes) => {
      this.model.setNotes(notes);
      this.displayNotes();
    });
  }
}

module.exports = NotesView;

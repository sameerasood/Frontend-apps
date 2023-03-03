class NotesView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    this.mainContainerEl = document.querySelector("#main-container");
    this.addNoteInput = document.querySelector("#notes-input");

    document.querySelector("#notes-button").addEventListener("click", () => {
      const newNote = document.querySelector("#notes-input").value;
      this.addNewNote(newNote);
    });
  }

  addNewNote(newNote) {
    this.addNoteToServer(newNote);
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
    this.client.loadNotes().then((notes) => {
      this.model.setNotes(notes);
      this.displayNotes();
    });
  }

  addNoteToServer(newNote) {
    const notes = this.client.createNote(newNote);
    notes.then((notes) => {
      this.model.setNotes(notes);
      this.displayNotes();
    });


  }

  // async deleteNotes() {
  //   const data = await this.client.reset();
  //   this.displayNotesFromApi();
  // }
}

module.exports = NotesView;

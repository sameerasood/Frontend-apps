class NotesModel {
  constructor() {
    this.notes = [];
  }

  addNotes(note) {
    this.notes.push(note);
  }

  setNotes(notes) {
    this.notes = notes;
  }

  reset() {
    this.notes = [];
  }

  getNotes() {
    return this.notes;
  }
}

module.exports = NotesModel;

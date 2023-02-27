class NotesModel {
  constructor() {
    this.notes = [];
  }

  addNotes(note) {
    this.notes.push(note);
  }

  reset() {
    this.notes = [];
  }

  getNotes() {
    return this.notes;
  }
}

module.exports = NotesModel;

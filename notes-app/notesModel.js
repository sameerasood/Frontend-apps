class NotesModel {
  constructor() {
    this.notes = [];
  }

  addNotes(note) {
    this.notes.push(note);
  }

  getNotes() {
    return this.notes;
  }
}

module.exports = NotesModel;

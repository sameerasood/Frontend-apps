const NotesModel = require("./notesModel.js");
const model = new NotesModel();

console.log(model.addNotes("Buy milk"));
console.log(model.addNotes("Go to the gym"));
const notes = model.getNotes();
console.log(notes);

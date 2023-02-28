const NotesModel = require("./notesModel.js");
const NotesView = require("./notesView");

const model = new NotesModel();
model.addNotes("This is an example note")
console.log(model.getNotes());

const NotesModel = require("./notesModel.js");
let model = new NotesModel();

console.log(model.addNotes("Buy milk"));
console.log(model.addNotes("Go to the gym"));
console.log(model.getNotes());

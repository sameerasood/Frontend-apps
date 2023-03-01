const NotesModel = require("./notesModel.js");
const NotesView = require("./notesView");
const NotesClient = requrie("./notesClient");

const model = new NotesModel();
const client = new NotesClient();
// model.addNotes("This is an example note");
const view = new NotesView(model, client);
view.displayNotesFromApi();

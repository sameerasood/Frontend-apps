const NotesModel = require("./notesModel.js");

describe("NotesModel", () => {
  beforeEach(() => {
    model = new NotesModel();
  });

  it("returns empty notes array", () => {
    const notes = model.getNotes();
    expect(notes).toEqual([]);
  });

  it("adds a note", () => {
    const notes = model.addNotes("Buy milk");
    expect(notes).toEqual["Buy milk"];
  });

  it("adds a note and returns the array", () => {
    model.addNotes("Buy milk");
    model.addNotes("Go to the gym");
    notes = model.getNotes();
    expect(notes).toEqual(["Buy milk", "Go to the gym"]);
  });

  it("resets the notes array", () => {
    model.addNotes("Buy milk");
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });
});

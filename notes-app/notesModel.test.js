const NotesModel = require("./notesModel.js");

describe("NotesModel", () => {
  beforeEach(() => {
    model = new NotesModel();
  });

  it("returns empty notes array", () => {
    notes = model.getNotes();
    expect(notes).toEqual([]);
  });
});

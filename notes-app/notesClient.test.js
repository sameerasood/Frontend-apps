require("jest-fetch-mock").enableMocks();

const NotesClient = require("./notesClient");

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)

describe("NotesClient class", () => {
  it("calls fetch and loads the data", (done) => {
    // 1. Instantiate the class
    const client = new NotesClient();

    fetch.mockResponseOnce(
      JSON.stringify({
        name: "Some Value",
        id: 123,
      })
    );
    const notes = client.loadNotes();
    notes.then((data) => {
      expect(data.name).toEqual("Some Value");
      done();
    });
  });

  it("adds new notes to the server", (done) => {
    const client = new NotesClient();
    fetch.mockResponseOnce(JSON.stringify(["server note"]));
    const newNote = client.createNote("server note");
    newNote.then((data) => {
      expect(data).toEqual(["server note"]);
      done();
    });
  });
});

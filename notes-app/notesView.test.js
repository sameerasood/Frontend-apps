/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesView = require("./notesView");
const NotesModel = require("./notesModel");
const NotesClient = require("./notesClient");

jest.mock("./notesClient.js");

describe("NotesView", () => {
  it("displays two notes", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNotes("Get milk");
    model.addNotes("Go to the gym");
    view.displayNotes();
    expect(document.querySelectorAll("div.note").length).toEqual(2);
  });

  it("adds a note and display it", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    NotesClient.mockClear();

    const model = new NotesModel();
    const mockClient = new NotesClient();

    mockClient.createNote.mockImplementation((note, callback) =>
      callback([note])
    );

    const view = new NotesView(model, mockClient);

    const input = document.querySelector("#notes-input");
    input.value = "This is a test note";

    const button = document.querySelector("#notes-button");
    button.click();

    expect(document.querySelector("div.note").textContent).toEqual(
      "This is a test note"
    );
  });

  it("clears the list of previous notes before displaying", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNotes("note one");
    model.addNotes("note two");

    view.displayNotes();
    view.displayNotes();

    expect(document.querySelectorAll("div.note").length).toEqual(2);
  });

  it("displays the notes from API", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    NotesClient.mockClear();

    const model = new NotesModel();
    const mockClient = new NotesClient();

    mockClient.loadNotes.mockImplementation((callback) =>
      callback(["Note one"])
    );
    const view = new NotesView(model, mockClient);

    view.displayNotesFromApi();
    const notes = document.querySelectorAll(".note");
    expect(notes.length).toBe(1);
  });

  it("creates a note and saves it on server", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    NotesClient.mockClear();

    const model = new NotesModel();
    const mockClient = new NotesClient();

    mockClient.createNote.mockImplementation((note, callback) => {
      callback([note]);

      const view = new NotesView(model, mockClient);

      const input = document.querySelector("#notes-input");
      input.value = "This is a test note";

      const button = document.querySelector("#notes-button");
      button.click();

      expect(document.querySelector("div .note").textContent).toEqual([
        "This is a test note",
      ]);
    });
  });
});

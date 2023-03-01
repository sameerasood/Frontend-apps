/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesView = require("./notesView");
const NotesModel = require("./notesModel");

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

  it("get input and display the note", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();
    const view = new NotesView(model);

    const input = document.querySelector("#notes-input");
    input.value = "This is a test note";

    const button = document.querySelector("#notes-button");
    button.click();

    expect(document.querySelectorAll("div.note").length).toEqual(1);
    expect(document.querySelectorAll("div.note")[0].textContent).toEqual(
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
});

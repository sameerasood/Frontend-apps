const NotesClient = require("./notesClient");

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require("jest-fetch-mock").enableMocks();

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
    client.loadNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi.name).toBe("Some Value");
      expect(returnedDataFromApi.id).toBe(123);

      // 4. Tell Jest our test can now end.
      done();
    });
  });
});

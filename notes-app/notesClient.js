class NotesClient {
  loadNotes() {
    return fetch("http://localhost:3000/notes").then((response) =>
      response.json()
    );
  }

  createNote(note) {
    return fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: note }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log("Error:" + error);
      });
  }
}

module.exports = NotesClient;

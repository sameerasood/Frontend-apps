class MessageView {
  constructor() {
    this.buttonEl = document.querySelector("#show-message-button");
    this.hideButtonEl = document.querySelector("#hide-message-button");
    this.buttonEl.addEventListener("click", () => {
      this.displayMessage();
    });
    this.hideButtonEl.addEventListener("click", () => {
      this.hideMessage();
    });
  }

  displayMessage() {
    // console.log("Thanks for clicking me!");

    const message = document.querySelector("#message-input").value;

    const messageElement = document.createElement("div");
    messageElement.id = "message";
    messageElement.textContent = message;

    document.querySelector("#main-container").append(messageElement);
  }

  hideMessage() {
    const hiddenMessage = document.querySelector("div#message");
    hiddenMessage.remove();
  }
}

module.exports = MessageView;

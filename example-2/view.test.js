/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const View = require("./view");

describe("Page view", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
  });

  it("displays 2 paragraphs", () => {
    const view = new View();
    expect(document.querySelectorAll("p").length).toBe(2);
  });

  it("displays 3 paragraphs", () => {
    const view = new View();
    view.addParagraph();
    expect(document.querySelectorAll("p").length).toBe(3);
  });

  it("removes all paragraphs from the page", () => {
    const view = new View();
    view.addParagraph();
    view.clearParagraph();
    expect(document.querySelectorAll("p").length).toBe(0);
  });
});

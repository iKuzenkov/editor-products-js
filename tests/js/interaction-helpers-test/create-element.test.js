import { createElement } from "../../../src/js/modules/interaction-helpers/create-elements";

describe("should create a button, with options and parent", () => {
  const parent = document.createElement("div");
  const options = {
    classList: ["foo"],
    text: "boo",
    attrs: { "data-name": "attr" },
  };

  it("Create a button", () => {
    const el = createElement("button", options, parent);
    expect(el).toBeInstanceOf(HTMLElement);
    expect(el.tagName).toBe("BUTTON");
    expect(el.classList.contains("foo")).toBe(true);
    expect(el.textContent).toBe("boo");
    expect(el.getAttribute("data-name")).toBe("attr");
    expect(parent.contains(el)).toBe(true);
  });
});

describe("Create element - error cases", () => {
  it("should throw error if parent is missing", () => {
    expect(() => createElement("button")).toThrow("Parent container not found");
  });
});

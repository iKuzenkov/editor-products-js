import { hideElements } from "../../../src/js/modules/interaction-helpers/hide-elements";

describe("hideElements() toggle behavior", () => {
  it("should hide on first click and show on second click", () => {
    document.body.innerHTML = `
    <div data-name="main">
    <button id="8">☝️</button>
    <div data-name="all-products"></div>
    </div>`;

    const button = document.querySelector('[id="8"]');
    const child = document.querySelector('[data-name="all-products"]');

    const event = { target: button };
    const options = {
      text: { hide: "☝️", show: "👇" },
      attrs: { title: { hide: "hide", show: "show" } },
    };

    const click = () =>
      hideElements(
        event,
        '[data-name="main"]',
        '[data-name="all-products"]',
        options
      );

    click();
    expect(child.classList.contains("hide")).toBe(true);
    expect(button.textContent).toBe("👇");
    expect(button.title).toBe("show");

    click();
    expect(child.classList.contains("hide")).toBe(false);
    expect(button.textContent).toBe("☝️");
    expect(button.title).toBe("hide");
  });
});

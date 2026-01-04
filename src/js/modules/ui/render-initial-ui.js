import { createElement } from "../interaction-helpers/create-elements";

export const renderInitialUI = () => {
  const containerHeader = document.querySelector("#container-header");
  if (!containerHeader) return console.error("No #container-header in DOM");
  const containerAside = document.querySelector("#container-aside");
  if (!containerAside) return console.error("No #container-aside in DOM");

  createElement(
    "button",
    {
      classList: ["external-button-header"],
      text: "Online Store",
      attrs: { title: "in Store", "data-action": "store" },
    },
    containerHeader
  );

  createElement(
    "button",
    {
      classList: ["external-button-header"],
      text: "Auto Test",
      attrs: { title: "Autofill data in editor", "data-action": "autofill" },
    },
    containerHeader
  );

  createElement(
    "button",
    {
      classList: ["external-button-header"],
      text: "Clear Data",
      attrs: {
        title: "clear localStorage, and UI",
        "data-action": "clear-data",
      },
    },
    containerHeader
  );

  createElement(
    "button",
    {
      classList: ["external-button-aside"],
      text: "Add Section",
      attrs: { title: "Add Section", "data-action": "add-section" },
    },
    containerAside
  );

  createElement(
    "div",
    {
      classList: ["quantity-sections"],
      text: "0/20",
      attrs: { title: "quantity", "data-action": "quantity" },
    },
    containerAside
  );
};

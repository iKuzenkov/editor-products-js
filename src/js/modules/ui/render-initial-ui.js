import { createElement } from "../patterns/create-elements";

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
      classList: ["external-button-aside"],
      text: "Add Section",
      attrs: { title: "Add Section", "data-action": "add-section" },
    },
    containerAside
  );
};

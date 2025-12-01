import { createElement } from "../patterns/create-elements";

export const renderInitialUI = () => {
  const containerAside = document.querySelector(".container-aside");
  if (!containerAside) return console.error("No .container-aside in DOM");

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

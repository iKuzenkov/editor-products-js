import { createElement } from "./dinamic-elements";

export const renderInitialUI = () => {
  const containerAside = document.querySelector(".container-aside");
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

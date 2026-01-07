import { createElement } from "../../interaction-helpers/create-elements";

export const renderAsideData = ({ aside_data_action, id, name, number }) => {
  const containerAside = document.querySelector("#container-aside");
  if (!containerAside) return console.error("No #container-aside in DOM");

  const quantityAside = containerAside.querySelector(
    '[data-action="quantity"]'
  );
  quantityAside.textContent = `${number}/20`;

  const div = createElement(
    "div",
    {
      classList: ["section-aside"],
      attrs: { "data-action": aside_data_action, "data-name": "aside", id },
    },
    containerAside
  );

  createElement(
    "span",
    {
      classList: ["section-aside-number"],
      text: number,
      attrs: { "data-aside-number": "number" },
    },
    div
  );

  createElement(
    "input",
    {
      classList: ["input-section"],
      attrs: {
        value: name,
        type: "text",
        name: "in-section",
        placeholder: "Enter name section",
        "data-input": "aside",
      },
    },
    div
  );
  createElement(
    "button",
    {
      classList: ["inner-button"],
      text: "+",
      attrs: {
        title: "add section",
        "data-action": "add-section-main",
      },
    },
    div
  );
};

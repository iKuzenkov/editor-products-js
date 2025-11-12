import { createElement } from "../ui/dinamic-elements";

export const renderData = ({ id, name, number }) => {
  const containerAside = document.querySelector(".container-aside");

  const div = createElement(
    "div",
    {
      classList: ["section-aside"],
      attrs: { "data-action": id },
    },
    containerAside
  );

  createElement(
    "span",
    {
      classList: ["section-aside-number"],
      text: number,
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

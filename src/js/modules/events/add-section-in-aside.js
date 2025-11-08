import { createElement, generateRandomId } from "../ui/dinamic-elements";

export const addSectionInAside = (e) => {
  const containerAside = document.querySelector(".container-aside");
  const sectionAside = document.querySelectorAll(".section-aside");
  const MAX_SECTIONS_ASIDE = 12;
  if (sectionAside.length >= MAX_SECTIONS_ASIDE) return;
  const div = createElement(
    "div",
    {
      classList: ["section-aside"],
      attrs: { "data-action": generateRandomId() },
    },
    containerAside
  );

  createElement(
    "input",
    {
      classList: ["input-section"],
      attrs: {
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

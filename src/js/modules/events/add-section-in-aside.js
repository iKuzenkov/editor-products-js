import { createDiv, createInput, createButton } from "../ui/dinamic-elements";

export const addSectionInAside = (e) => {
  const containerAside = document.querySelector(".container-aside");
  const div = createDiv("div", "section-aside", containerAside);

  createInput(
    "input",
    "input-section",
    "text",
    "in-section",
    "Enter name section",
    div
  );
  createButton(
    "button",
    "inner-button",
    "add-section-main",
    "+",
    "add section",
    div
  );
};

import {
  createDiv,
  createInput,
  createButton,
  randomDataAction,
} from "../ui/dinamic-elements";

export const addSectionInAside = (e) => {
  const containerAside = document.querySelector(".container-aside");
  const sectionAside = document.querySelectorAll(".section-aside");
  const MAX_SECTIONS_ASIDE = 12;
  if (sectionAside.length >= MAX_SECTIONS_ASIDE) {
    return;
  }
  const div = createDiv(
    "div",
    "section-aside",
    randomDataAction(1, 1000),
    containerAside
  );

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

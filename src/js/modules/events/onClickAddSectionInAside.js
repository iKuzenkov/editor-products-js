import { createDiv, createInput, createButton } from "../ui/dinamic-elements";

export const onClickAddSectionInAside = (e) => {
  const containerAside = document.querySelector(".container-aside");
  const div = createDiv("div", "section", containerAside);
  createInput(
    "input",
    "input-section",
    "text",
    "in-section",
    "Enter name section",
    div
  );
  createButton("button", "inner-button", "+", "add section", div);
};

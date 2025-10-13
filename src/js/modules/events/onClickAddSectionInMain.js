import { createDiv, createInput, createButton } from "../ui/dinamic-elements";

export const onClickAddSectionInMain = (e) => {
  const containerMain = document.querySelector(".container-main");
  const div = createDiv("div", "section", containerMain);
  createInput(
    "input",
    "input-section",
    "text",
    "in-section",
    "Enter name section",
    div
  );
  createInput(
    "input",
    "input-section",
    "text",
    "in-section",
    "Enter description",
    div
  );
  createButton(
    "button",
    "external-button-main",
    "add product-main",
    "Add Product",
    "Add Product",
    div
  );
};

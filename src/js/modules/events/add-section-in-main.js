import {
  createDiv,
  createInput,
  createButton,
  createCheckbox,
} from "../ui/dinamic-elements";

export const addSectionInMain = (e) => {
  const containerMain = document.querySelector(".container-main");
  const div = createDiv("div", "section-main", containerMain);

  createCheckbox(
    "input",
    "checkbox-section",
    "checkbox",
    "checkbox-section-main",
    "checkbox-main",
    div
  );
  createInput(
    "input",
    "input-section",
    "text",
    "in-section",
    "Enter name",
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
    "add-product",
    "Add Product",
    "Add Product",
    div
  );
};

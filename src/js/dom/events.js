import {
  createDiv,
  createInput,
  createButton,
} from "../modules/ui/dinamic-elements";

export const onClickAddSectionInAside = (containerAside) => {
  const div = createDiv("div", "section", containerAside);
  createInput(
    "input",
    "input-section",
    "text",
    "in-section",
    "Enter name section",
    div
  );
  const buttonCreateSectionInMain = createButton(
    "button",
    "inner-button",
    "+",
    "add section",
    div
  );
  return buttonCreateSectionInMain;
};

export const onClickAddSectionInMain = (containerMain) => {
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
  const buttonCreateProducts = createButton(
    "button",
    "external-button",
    "Add Product",
    "add product",
    div
  );
};

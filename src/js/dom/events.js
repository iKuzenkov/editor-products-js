import {
  createDiv,
  createInput,
  createButton,
} from "../modules/ui/dinamic-elements";

export const onClickAddSectionInAside = (containerAside) => {
  const div = createDiv("div", "div-setting-sections", containerAside);
  createInput(
    "input",
    "input-in-section",
    "text",
    "in-section",
    "Enter name section",
    div
  );
  const buttonCreateSectionInMain = createButton(
    "button",
    "btn-adding-section-main",
    "+",
    "add section",
    div
  );
  return buttonCreateSectionInMain;
};

export const onClickAddSectionInMain = (containerMain) => {
  const div = createDiv("div", "section-created", containerMain);
  createInput(
    "input",
    "input-in-section",
    "text",
    "in-section",
    "Enter name section",
    div
  );
  createInput(
    "input",
    "input-in-section",
    "text",
    "in-section",
    "Enter description",
    div
  );
  const buttonCreateProducts = createButton(
    "button",
    "btn-add-section", // class need will be change, and formalaize styles
    "Add Product",
    "add product",
    div
  );
};

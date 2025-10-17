import {
  createDiv,
  createInput,
  createButton,
  createCheckbox,
} from "../ui/dinamic-elements";

export const addSectionInMain = (e) => {
  // const dynamicDataAction = e.target.closest(".section-aside").dataset.action;
  // const containerMain = document.querySelector(".container-main");
  // const sections = document.querySelectorAll(".section-main");
  // const sectionExist = Array.from(sections).some(
  //   (el) => dynamicDataAction === el.dataset.action
  // );
  // if (sectionExist) {
  //   return;
  // }
  const dynamicDataAction = e.target.closest(".section-aside").dataset.action;
  const containerMain = document.querySelector(".container-main");
  const sections = document.querySelectorAll(".section-main");
  const sectionExist = Array.from(sections).some(
    (el) => dynamicDataAction === el.dataset.action
  );
  if (sectionExist) {
    return;
  }

  const div = createDiv(
    "div",
    "section-main",
    dynamicDataAction,
    containerMain
  );
  createDiv("div", "section-functions", dynamicDataAction, div);

  const sectionHeader = createDiv(
    "div",
    "section-header",
    dynamicDataAction,
    div
  );
  createCheckbox(
    "input",
    "checkbox-section",
    "checkbox",
    "checkbox-section-main",
    "checkbox-main",
    sectionHeader
  );
  createInput(
    "input",
    "input-section",
    "text",
    "in-section",
    "Enter name",
    sectionHeader
  );
  createInput(
    "input",
    "input-section",
    "text",
    "in-section",
    "Enter description",
    sectionHeader
  );
  createButton(
    "button",
    "external-button-main",
    "add-product",
    "Add Product",
    "Add Product",
    sectionHeader
  );
  createDiv("div", "section-products", dynamicDataAction, div);
};

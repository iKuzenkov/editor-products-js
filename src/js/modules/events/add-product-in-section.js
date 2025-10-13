import {
  createDiv,
  createInput,
  createButton,
  createCheckbox,
  createInputWithPrice,
} from "../ui/dinamic-elements";

export const addProductInSection = (e) => {
  //   const sectionInMain = document.querySelector(".section-main");
  //   const div = createDiv("div", "product", sectionInMain);
  const sectionInMain = e.target.closest(".section-main");
  const containerMain = sectionInMain.parentNode;
  const div = createDiv("div", "product", containerMain);
  containerMain.insertBefore(div, sectionInMain.nextSiblings);
  createCheckbox(
    "input",
    "checkbox-product",
    "checkbox",
    "checkbox-product-section",
    "checkbox-product",
    div
  );
  createInput(
    "input",
    "input-product",
    "text",
    "in-product",
    "Enter name",
    div
  );
  createInput(
    "input",
    "input-product",
    "text",
    "in-product",
    "Enter description",
    div
  );
  createInputWithPrice(
    "input",
    "input-product",
    "text",
    `${0}`,
    "in-product",
    div
  );
  createButton(
    "button",
    "inner-button-product",
    "settings",
    "settings",
    "settings",
    div
  );
};

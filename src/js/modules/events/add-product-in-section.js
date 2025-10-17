import {
  createDiv,
  createInput,
  createButton,
  createCheckbox,
  createInputWithPrice,
} from "../ui/dinamic-elements";

export const addProductInSection = (e) => {
  const sectionMain = e.target.closest(".section-main");
  const dynamicDataAction = sectionMain.dataset.action;
  const sectionProducts = sectionMain.querySelector(".section-products");

  const innerProducts = sectionProducts.querySelectorAll(".product");
  const MAX_PRODUCTS_PER_SECTION = 12;
  if (innerProducts.length >= MAX_PRODUCTS_PER_SECTION) {
    return;
  }

  const div = createDiv("div", "product", dynamicDataAction, sectionProducts);
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

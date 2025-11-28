import { createElement, generateRandomId } from "../ui/dinamic-elements";
import { saveToProductLS } from "../local-storage/local-storage";

export const addProductInSection = (e) => {
  const sectionMain = e.target.closest(".section-main");
  const sectionID = sectionMain.dataset.action;
  const sectionProducts = sectionMain.querySelector(".section-products");
  const productID = generateRandomId();

  const innerProducts = sectionProducts.querySelectorAll(".product");
  const numberProduct = innerProducts.length + 1;

  const MAX_PRODUCTS_PER_SECTION = 20;
  if (innerProducts.length >= MAX_PRODUCTS_PER_SECTION) return;

  const div = createElement(
    "div",
    {
      classList: ["product"],
      attrs: { "data-action": sectionID, id: productID },
    },
    sectionProducts
  );

  const layout = createElement(
    "div",
    {
      classList: ["number-checkbox-layout"],
    },
    div
  );

  createElement(
    "span",
    {
      classList: ["product-number"],
      text: numberProduct,
    },
    layout
  );

  createElement(
    "input",
    {
      classList: ["input-product", "product-checkbox"],
      attrs: {
        type: "checkbox",
        name: "in-product",
      },
    },
    layout
  );

  const imgWrapper = createElement(
    "div",
    {
      classList: ["img-upload-wrapper"],
      attrs: { "data-action": "image-product" },
    },
    div
  );

  createElement(
    "input",
    {
      classList: ["input-img"],
      attrs: {
        type: "file",
        name: "in-product",
        accept: "image/*",
        loading: "lazy",
        alt: "product image",
        "data-action": "loading-image-product",
      },
    },
    imgWrapper
  );

  createElement(
    "span",
    { classList: ["img-placeholder"], text: "+" },
    imgWrapper
  );

  createElement(
    "input",
    {
      classList: ["input-product", "input-name"],
      attrs: {
        type: "text",
        name: "in-product",
        value: "",
        placeholder: "Enter name",
        "data-action": sectionID,
      },
    },
    div
  );

  createElement(
    "input",
    {
      classList: ["input-product", "input-description"],
      attrs: {
        type: "text",
        name: "in-product",
        placeholder: "Enter description",
      },
    },
    div
  );

  createElement(
    "input",
    {
      classList: ["input-product", "input-price"],
      attrs: {
        type: "text",
        name: "in-product",
        placeholder: "$0.00",
      },
    },
    div
  );
  createElement(
    "button",
    {
      classList: ["inner-button-product"],
      text: "settings",
      attrs: { type: "button", title: "settings", "data-action": "settings" },
    },
    div
  );
  createElement(
    "button",
    {
      classList: ["inner-button-product"],
      text: "❌",
      attrs: {
        id: 9,
        type: "button",
        title: "Remove Product",
        "data-action": sectionID,
      },
    },
    div
  );
  const data = {
    product_data_action: sectionID,
    id: productID,
    name: "",
    description: "",
    price: "",
    numberProduct,
  };
  saveToProductLS(data);
};

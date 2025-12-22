import { createElement } from "../../interaction helpers/create-elements";
import { generateRandomId } from "../../interaction helpers/random-id";
import { saveToProductLS } from "../../local-storage/local-storage";

export const addProductInSection = (e) => {
  const sectionMain = e.target.closest('[data-name="main"]');
  if (!sectionMain) return;

  const dataAction = sectionMain.dataset.action;
  const productID = generateRandomId(8, 36);
  const sectionProducts = sectionMain.querySelector(
    '[data-name="all-products"]'
  );

  const innerProducts = sectionProducts.querySelectorAll(
    '[data-name="product"]'
  );
  const numberProduct = innerProducts.length + 1;

  const MAX_PRODUCTS_PER_SECTION = 20;
  if (innerProducts.length >= MAX_PRODUCTS_PER_SECTION) return;

  const div = createElement(
    "div",
    {
      classList: ["product"],
      attrs: {
        "data-action": dataAction,
        "data-name": "product",
        id: productID,
      },
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
      attrs: { "data-number": "number" },
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
        "data-action": dataAction,
        "data-name": "name",
        "data-product": "name",
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
        "data-description": "description",
        "data-product": "description",
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
        "data-price": "price",
        "data-product": "price",
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
        "data-action": dataAction,
      },
    },
    div
  );
  const data = {
    product_data_action: dataAction,
    id: productID,
    name: "",
    description: "",
    price: "",
    numberProduct,
  };
  saveToProductLS(data);
};

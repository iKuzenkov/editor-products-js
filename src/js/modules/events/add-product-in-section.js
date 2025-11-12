import { createElement } from "../ui/dinamic-elements";

export const addProductInSection = (e) => {
  const sectionMain = e.target.closest(".section-main");
  const dynamicDataAction = sectionMain.dataset.action;
  const sectionProducts = sectionMain.querySelector(".section-products");

  const innerProducts = sectionProducts.querySelectorAll(".product");
  const MAX_PRODUCTS_PER_SECTION = 12;
  if (innerProducts.length >= MAX_PRODUCTS_PER_SECTION) return;

  const div = createElement(
    "div",
    { classList: ["product"], attrs: { "data-action": dynamicDataAction } },
    sectionProducts
  );
  createElement(
    "input",
    {
      classList: ["checkbox-product"],
      attrs: {
        type: "checkbox",
        name: "checkbox-product-section",
        "data-action": dynamicDataAction,
      },
    },
    div
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
        "data-action": dynamicDataAction,
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
        "data-action": dynamicDataAction,
      },
    },
    div
  );
};

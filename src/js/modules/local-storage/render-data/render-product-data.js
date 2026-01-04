import { createElement } from "../../interaction-helpers/create-elements";

export const renderProductData = ({
  product_data_action,
  id,
  name,
  description,
  price,
  image,
  numberProduct,
}) => {
  const sectionMain = document.querySelector(
    `[data-name="main"][data-action="${product_data_action}"]`
  );
  if (!sectionMain) return;
  const sectionProducts = sectionMain.querySelector(
    '[data-name="all-products"]'
  );

  const div = createElement(
    "div",
    {
      classList: ["product"],
      attrs: { "data-action": product_data_action, "data-name": "product", id },
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

  if (image) {
    imgWrapper.innerHTML = `<img src="${image}" alt="product image">`;
  } else {
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
  }

  createElement(
    "input",
    {
      classList: ["input-product", "input-name"],
      attrs: {
        type: "text",
        name: "in-product",
        value: name,
        placeholder: "Enter name",
        "data-action": product_data_action,
        "data-name": "name",
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
        value: description,
        placeholder: "Enter description",
        "data-description": "description",
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
        value: price,
        placeholder: "$0.00",
        "data-price": "price",
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
        "data-action": product_data_action,
      },
    },
    div
  );
};

import { createElement } from "../interaction helpers/create-elements";

export const renderAsideData = ({ aside_data_action, id, name, number }) => {
  const containerAside = document.querySelector("#container-aside");
  if (!containerAside) return console.error("No #container-aside in DOM");

  const div = createElement(
    "div",
    {
      classList: ["section-aside"],
      attrs: { "data-action": aside_data_action, "data-name": "aside", id },
    },
    containerAside
  );

  createElement(
    "span",
    {
      classList: ["section-aside-number"],
      text: number,
      attrs: { "data-aside-number": "number" },
    },
    div
  );

  createElement(
    "input",
    {
      classList: ["input-section"],
      attrs: {
        value: name,
        type: "text",
        name: "in-section",
        placeholder: "Enter name section",
        "data-input": "aside",
      },
    },
    div
  );
  createElement(
    "button",
    {
      classList: ["inner-button"],
      text: "+",
      attrs: {
        title: "add section",
        "data-action": "add-section-main",
      },
    },
    div
  );
};

export const renderMainData = ({
  section_data_action,
  id,
  name,
  description,
  number,
}) => {
  const containerMain = document.querySelector("#container-main");
  if (!containerMain) return console.error("No #container-main in DOM");

  const div = createElement(
    "div",
    {
      classList: ["section-main"],
      attrs: { "data-action": section_data_action, "data-name": "main", id },
    },
    containerMain
  );
  const logicButtonHandler = createElement(
    "div",
    {
      classList: ["product-functions"],
      attrs: {
        "data-action": section_data_action,
        "data-functions": "panel-functions",
      },
    },
    div
  );
  createElement(
    "span",
    {
      classList: ["section-main-number"],
      text: number,
      attrs: { "data-main-number": "number" },
    },
    logicButtonHandler
  );
  createElement(
    "button",
    {
      classList: ["button-functions"],
      text: "⬅️",
      attrs: {
        id: 1,
        type: "button",
        title: "Add Text in Start",
        "data-action": section_data_action,
      },
    },
    logicButtonHandler
  );
  createElement(
    "button",
    {
      classList: ["button-functions"],
      text: "➡️",
      attrs: {
        id: 2,
        type: "button",
        title: "Add Text in End",
        "data-action": section_data_action,
      },
    },
    logicButtonHandler
  );
  createElement(
    "button",
    {
      classList: ["button-functions"],
      text: "🗑️",
      attrs: {
        id: 3,
        type: "button",
        title: "Delete the Text",
        "data-action": section_data_action,
      },
    },
    logicButtonHandler
  );
  createElement(
    "button",
    {
      classList: ["button-functions"],
      text: "🔁",
      attrs: {
        id: 4,
        type: "button",
        title: "Replace the Text",
        "data-action": section_data_action,
      },
    },
    logicButtonHandler
  );
  createElement(
    "button",
    {
      classList: ["button-functions"],
      text: "🎨",
      attrs: {
        id: 5,
        type: "button",
        title: "Highlight the Text",
        "data-action": section_data_action,
      },
    },
    logicButtonHandler
  );
  createElement(
    "button",
    {
      classList: ["button-functions"],
      text: "❌",
      attrs: {
        id: 6,
        type: "button",
        title: "Remove Section",
        "data-action": section_data_action,
      },
    },
    logicButtonHandler
  );
  createElement(
    "button",
    {
      classList: ["button-functions"],
      text: "☝️",
      attrs: {
        id: 8,
        type: "button",
        title: "Hide",
        "data-action": section_data_action,
      },
    },
    logicButtonHandler
  );
  createElement(
    "input",
    {
      classList: ["input-function"],
      attrs: {
        type: "text",
        name: "in-section",
        placeholder: "Enter text",
        "data-name": "input-in-functions",
      },
    },
    logicButtonHandler
  );

  const sectionHeader = createElement(
    "div",
    {
      classList: ["section-header"],
      attrs: { "data-action": section_data_action },
    },
    div
  );
  createElement(
    "input",
    {
      classList: ["checkbox-section"],
      attrs: {
        type: "checkbox",
        name: "checkbox-section-main",
        "data-action": section_data_action,
      },
    },
    sectionHeader
  );
  createElement(
    "input",
    {
      classList: ["input-section", "name-section"],
      attrs: {
        value: name,
        type: "text",
        name: "in-section",
        placeholder: "Enter name",
        "data-input": "main",
        "data-name": "name",
      },
    },
    sectionHeader
  );
  createElement(
    "input",
    {
      classList: ["input-section", "description-section"],
      attrs: {
        value: description,
        type: "text",
        name: "in-section",
        placeholder: "Enter description",
        "data-description": "description",
      },
    },
    sectionHeader
  );
  createElement(
    "button",
    {
      classList: ["external-button-main"],
      text: "Add Product",
      attrs: { title: "Add Product", "data-action": "add-product" },
    },
    sectionHeader
  );
  createElement(
    "div",
    {
      classList: ["section-products"],
      attrs: {
        "data-action": section_data_action,
        "data-name": "all-products",
      },
    },
    div
  );
};

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

import { createElement } from "../../interaction-helpers/create-elements";

/**
 * Renders main section and calculates products count from LocalStorage
 * @returns {void}
 */
export const renderMainData = ({
  section_data_action,
  id,
  name,
  description,
  number,
}) => {
  const containerMain = document.querySelector("#container-main");
  if (!containerMain) return console.error("No #container-main in DOM");

  const data = JSON.parse(localStorage.getItem("data_product") || "[]");
  const products = data.filter(
    (product) => product.product_data_action === section_data_action
  );
  const quantityProducts = products.length;

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
      classList: ["quantity-sections"],
      text: `${quantityProducts}/20`,
      attrs: { title: "quantity", "data-action": "quantity" },
    },
    logicButtonHandler
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

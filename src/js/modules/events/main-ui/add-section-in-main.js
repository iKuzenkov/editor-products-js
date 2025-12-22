import { createElement } from "../../interaction-helpers/create-elements";
import { generateRandomId } from "../../interaction-helpers/random-id";
import { saveToMainLS } from "../../local-storage/local-storage";

export const addSectionInMain = (e) => {
  const section = e.target.closest('[data-name="aside"]');
  if (!section) return;

  const sectionID = generateRandomId(8, 36);
  const dataAction = section.dataset.action;
  const numberSection = section.querySelector("span").textContent;

  const containerMain = document.querySelector("#container-main");
  if (!containerMain) return console.error("No #container-main in Dom");

  const sections = Array.from(document.querySelectorAll('[data-name="main"]'));
  const sectionExist = sections.some((el) => dataAction === el.dataset.action);
  if (sectionExist) return;

  const sectionTag = createElement(
    "section",
    {
      classList: ["section-main"],
      attrs: { "data-action": dataAction, "data-name": "main", id: sectionID },
    },
    containerMain
  );
  const logicButtonHandler = createElement(
    "div",
    {
      classList: ["product-functions"],
      attrs: { "data-action": dataAction, "data-functions": "panel-functions" },
    },
    sectionTag
  );
  createElement(
    "span",
    {
      classList: ["section-main-number"],
      text: numberSection,
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
        "data-action": dataAction,
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
        "data-action": dataAction,
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
        "data-action": dataAction,
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
        "data-action": dataAction,
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
        "data-action": dataAction,
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
        "data-action": dataAction,
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
        "data-action": dataAction,
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
      attrs: { "data-action": dataAction },
    },
    sectionTag
  );

  createElement(
    "input",
    {
      classList: ["input-section", "header-checkbox"],
      attrs: {
        type: "checkbox",
        name: "in-header",
      },
    },
    sectionHeader
  );

  createElement(
    "input",
    {
      classList: ["input-section", "name-section"],
      attrs: {
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
        type: "text",
        name: "in-section",
        placeholder: "Enter description",
        "data-input": "description",
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
      attrs: { "data-action": dataAction, "data-name": "all-products" },
    },
    sectionTag
  );

  const data = {
    section_data_action: dataAction,
    id: sectionID,
    name: "",
    description: "",
    number: numberSection,
  };
  saveToMainLS(data);
};

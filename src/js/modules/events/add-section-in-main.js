import { createElement } from "../ui/dinamic-elements";

export const addSectionInMain = (e) => {
  const dynamicDataAction = e.target.closest(".section-aside").dataset.action;
  const inputAsideValue = document.querySelector(".input-section").value;
  const containerMain = document.querySelector(".container-main");
  const sections = document.querySelectorAll(".section-main");
  const sectionExist = Array.from(sections).some(
    (el) => dynamicDataAction === el.dataset.action
  );
  if (sectionExist) return;

  const div = createElement(
    "div",
    {
      classList: ["section-main"],
      attrs: { "data-action": dynamicDataAction },
    },
    containerMain
  );

  const logicButtonHandler = createElement(
    "div",
    {
      classList: ["product-functions"],
      attrs: { "data-action": dynamicDataAction },
    },
    div
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
        "data-action": dynamicDataAction,
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
        "data-action": dynamicDataAction,
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
        "data-action": dynamicDataAction,
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
        "data-action": dynamicDataAction,
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
        "data-action": dynamicDataAction,
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
        "data-action": dynamicDataAction,
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
        "data-action": dynamicDataAction,
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
      },
    },
    logicButtonHandler
  );

  const sectionHeader = createElement(
    "div",
    {
      classList: ["section-header"],
      attrs: { "data-action": dynamicDataAction },
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
        "data-action": dynamicDataAction,
      },
    },
    sectionHeader
  );

  createElement(
    "input",
    {
      classList: ["input-section"],
      attrs: {
        type: "text",
        name: "in-section",
        placeholder: "Enter name",
        value: `${inputAsideValue}`,
      },
    },
    sectionHeader
  );
  createElement(
    "input",
    {
      classList: ["input-section"],
      attrs: {
        type: "text",
        name: "in-section",
        placeholder: "Enter description",
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
      attrs: { "data-action": dynamicDataAction },
    },
    div
  );
};

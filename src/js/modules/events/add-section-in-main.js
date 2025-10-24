import { createElement } from "../ui/dinamic-elements";

export const addSectionInMain = (e) => {
  const dynamicDataAction = e.target.closest(".section-aside").dataset.action;
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

  const buttonsFunctionsContainer = createElement(
    "div",
    {
      classList: ["section-functions"],
      attrs: { "data-action": dynamicDataAction },
    },
    div
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
        "data-action": "checkbox-main",
      },
    },
    sectionHeader
  );

  createElement(
    "input",
    {
      classList: ["input-section"],
      attrs: { type: "text", name: "in-section", placeholder: "Enter name" },
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

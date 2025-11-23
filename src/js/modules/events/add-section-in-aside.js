import { createElement, generateRandomId } from "../ui/dinamic-elements";
import { saveToAsideLS } from "../local-storage/local-storage";

export const addSectionInAside = (e) => {
  const containerAside = document.querySelector(".container-aside");
  const sectionAside = Array.from(
    containerAside.querySelectorAll(".section-aside")
  );

  const dynamicDataAction = generateRandomId();
  const asideID = generateRandomId();
  const numberSection = sectionAside.length + 1;

  const MAX_SECTIONS_ASIDE = 20;
  if (sectionAside.length >= MAX_SECTIONS_ASIDE) return;

  const div = createElement(
    "div",
    {
      classList: ["section-aside"],
      attrs: { "data-action": dynamicDataAction, id: asideID },
    },
    containerAside
  );

  createElement(
    "span",
    {
      classList: ["section-aside-number"],
      text: numberSection,
    },
    div
  );

  createElement(
    "input",
    {
      classList: ["input-section", "local-storage"],
      attrs: {
        type: "text",
        name: "in-section",
        placeholder: "Enter name section",
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

  const data = {
    aside_data_action: dynamicDataAction,
    id: asideID,
    name: "",
    number: numberSection,
  };
  saveToAsideLS(data);
};

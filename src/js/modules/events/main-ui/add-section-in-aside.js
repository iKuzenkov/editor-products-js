import { createElement } from "../../interaction-helpers/create-elements";
import { generateRandomId } from "../../interaction-helpers/random-id";
import { saveToAsideLS } from "../../local-storage/local-storage";

export const addSectionInAside = (e) => {
  const containerAside = document.querySelector("#container-aside");
  if (!containerAside) return console.error("No #container-aside in DOM");

  const quantitySection = containerAside.querySelector(
    '[data-action="quantity"]'
  );

  const sectionAside = containerAside.querySelectorAll('[data-name="aside"]');
  const numberSection = sectionAside.length + 1;

  const dataAction = generateRandomId(8, 36);
  const asideID = generateRandomId(8, 36);

  const MAX_SECTIONS_ASIDE = 20;
  if (sectionAside.length >= MAX_SECTIONS_ASIDE) return;

  quantitySection.textContent = `${numberSection}/20`;

  const div = createElement(
    "div",
    {
      classList: ["section-aside"],
      attrs: { "data-action": dataAction, "data-name": "aside", id: asideID },
    },
    containerAside
  );

  createElement(
    "span",
    {
      classList: ["section-aside-number"],
      text: numberSection,
      attrs: { "data-aside-number": "number" },
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

  const data = {
    aside_data_action: dataAction,
    id: asideID,
    name: "",
    number: numberSection,
  };
  saveToAsideLS(data);
};

import { createElement } from "../../interaction-helpers/create-elements";
import { clearInputValue } from "../utils/clearElements";
import { saveData } from "../utils/save-state-function-ls";

/**
 * @param {HTMLElement} functionSpace - container for input + button
 * @returns {void}
 */
const dynamicElements = (functionSpace) => {
  createElement(
    "input",
    {
      classList: ["input-replace"],
      attrs: {
        type: "text",
        name: "in-section",
        placeholder: "Value, for replace",
        "data-input-replace": "replace",
      },
    },
    functionSpace
  );
  createElement(
    "button",
    {
      classList: ["button-replace"],
      text: "Replace",
      attrs: {
        id: 7,
        type: "button",
        title: "Replace a value",
        "data-button-replace": "replace",
      },
    },
    functionSpace
  );
};

/**
 * adds dynamic elements input + button
 * buttonReplace && inputReplace - protection against re-addition
 * @param {Event} e - button click
 * @returns {Void}
 */
export const helperElements = (e) => {
  const section = e.target.closest('[data-name="main"]');
  if (!section) return;

  const functionSpace = section.querySelector(
    '[data-functions="panel-functions"]'
  );
  if (!functionSpace) return;

  const inputReplace = section.querySelector('[data-input-replace="replace"]');
  const buttonReplace = section.querySelector(
    '[data-button-replace="replace"]'
  );
  if (buttonReplace && inputReplace) return;

  dynamicElements(functionSpace);
};

/**
 * @param {HTMLInputElement[]} actionInputs - target input elements
 * @param {string} valueToSetUp - new value for setup to inputs
 * @param {string} valueToReplace - old value which will be replaced
 * @param {string} dataActionSection
 * @returns {void}
 */
const replaceValuesInInputs = (
  actionInputs,
  valueToSetUp,
  valueToReplace,
  dataActionSection
) => {
  const updatedNames = actionInputs.map((el) =>
    el.value.includes(valueToReplace)
      ? (el.value = el.value.replace(valueToReplace, valueToSetUp))
      : null
  );
  saveData(updatedNames, dataActionSection, "data_product");
};

/**
 * @param  {HTMLElement[]} - ...elements - will be removed input, after work function
 * @returns {void}
 */
const deletedElementsAfterWork = (...elements) => {
  for (const el of elements) el.remove();
};

/**
 * replaces a text value (from .input-replace) with another value (from .input-function)
 * across all (.input-product[data-action]) inside the current section
 * After working cleaning and removed the helper elements
 * @param {Event} e - button click
 * @returns {void}
 */
export const replaceText = (e) => {
  const section = e.target.closest('[data-name="main"]');
  if (!section) return;

  const dataActionSection = section.dataset.action;

  const inputValue = section.querySelector('[data-name="input-in-functions"]');
  const inputValueForReplace = section.querySelector(
    '[data-input-replace="replace"]'
  );
  const buttonReplace = section.querySelector(
    '[data-button-replace="replace"]'
  );

  let valueToSetUp = inputValue.value;
  let valueToReplace = inputValueForReplace.value;

  const actionInputs = Array.from(
    section.querySelectorAll('[data-product="name"]')
  );

  replaceValuesInInputs(
    actionInputs,
    valueToSetUp,
    valueToReplace,
    dataActionSection
  );
  clearInputValue(inputValue);
  deletedElementsAfterWork(inputValueForReplace, buttonReplace);
};

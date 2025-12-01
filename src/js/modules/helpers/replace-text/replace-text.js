import { createElement } from "../../patterns/create-elements";
import { clearInputValue } from "../utils/clearElements";

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
      },
    },
    functionSpace
  );
};

/**
 * adds dynamic elements input + button
 * @param {Event} e - button click
 * @returns {Void}
 */
export const helperElements = (e) => {
  const section = e.target.closest(".section-main");
  if (!section) return;

  const functionSpace = section.querySelector(".product-functions");
  if (!functionSpace) return;

  const inputReplace = section.querySelector(".input-replace");
  const buttonReplace = section.querySelector(".button-replace");
  if (buttonReplace && inputReplace) return;

  dynamicElements(functionSpace);
};

/**
 * @param {HTMLInputElement[]} actionInputs - target input elements
 * @param {string} valueToSetUp - new value for setup to inputs
 * @param {string} valueToReplace - old value which will be replaced
 * @returns {void}
 */
const replaceValuesInInputs = (actionInputs, valueToSetUp, valueToReplace) => {
  actionInputs.forEach((el) =>
    el.value.includes(valueToReplace)
      ? (el.value = el.value.replace(valueToReplace, valueToSetUp))
      : null
  );
};

/**
 * @param  {HTMLElement[]} - ...elements - will be removed input, after work function
 * @returns {void}
 */
const deletedElementsAfterWork = (...elements) => {
  for (const el of elements) el?.remove();
};

/**
 * replaces a text value (from .input-replace) with another value (from .input-function)
 * across all (.input-product[data-action]) inside the current section
 * After working cleaning and removed the helper elements
 * @param {Event} e - button click
 * @returns {void}
 */
export const replaceText = (e) => {
  const section = e.target.closest(".section-main");
  if (!section) return;

  const inputValue = section.querySelector(".input-function");
  if (!inputValue) return;
  const inputValueForReplace = section.querySelector(".input-replace");
  if (!inputValueForReplace) return;

  const buttonReplace = section.querySelector(".button-replace");
  if (!buttonReplace) return;

  let valueToSetUp = inputValue.value;
  let valueToReplace = inputValueForReplace.value;

  const actionInputs = Array.from(
    section.querySelectorAll(".input-product[data-action]")
  );
  if (!actionInputs.length) return;

  replaceValuesInInputs(actionInputs, valueToSetUp, valueToReplace);
  clearInputValue(inputValue);
  deletedElementsAfterWork(inputValueForReplace, buttonReplace);
};

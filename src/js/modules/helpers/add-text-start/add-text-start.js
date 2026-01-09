import { clearInputValue } from "../utils/clear-elements";
import { saveData } from "../utils/save-state-function-ls";

/**
 * Adds a value in start the input from [data-name="input-in-functions"]
 * across all [data-product="name"] inside the current section
 * @param {HTMLInputElement[]} inputs
 * @param {string} valueToAdd
 *  * @param {string} dataActionSection
 *  @returns {void}
 */
const replaceValuesInInputs = (inputs, valueToAdd, dataActionSection) => {
  const updatedNames = inputs.map((el) => {
    return (el.value = `${valueToAdd} ${el.value.trim()}`);
  });
  saveData(updatedNames, dataActionSection, "data_product");
};

/**
 * Getting DOM elements
 * After working the cleaning input value
 * @param {Event} e - button click event
 * @returns {void}
 */
export const addTextStart = (e) => {
  const section = e.target.closest('[data-name="main"]');
  if (!section) return;
  const dataActionSection = section.dataset.action;

  const inputValue = section.querySelector('[data-name="input-in-functions"]');
  const valueToAdd = inputValue.value.trim();

  const inputs = Array.from(section.querySelectorAll('[data-product="name"]'));

  replaceValuesInInputs(inputs, valueToAdd, dataActionSection);
  clearInputValue(inputValue);
};

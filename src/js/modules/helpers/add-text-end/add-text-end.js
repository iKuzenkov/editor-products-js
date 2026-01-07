import { clearInputValue } from "../utils/clearElements";
import { saveData } from "../utils/save-state-function-ls";

/**
 * Adds a value in end the input from [data-name="input-in-functions"]
 * across all [data-product="name"] inside the current section
 * @param {HTMLInputELement[]} actionInputs
 * @param {string} valueToAdd
 * @param {string} dataActionSection
 * @returns {void}
 */
const replaceValuesInInputs = (actionInputs, valueToAdd, dataActionSection) => {
  const updatedNames = actionInputs.map((el) => {
    return (el.value = `${el.value.trim()} ${valueToAdd}`);
  });
  saveData(updatedNames, dataActionSection, "data_product");
};

/**
 * Getting DOM elements
 * After working the cleaning input value
 * @param {Event} e - button click event
 * @returns {void}
 */
export const addTextEnd = (e) => {
  const section = e.target.closest('[data-name="main"]');
  if (!section) return;
  const dataActionSection = section.dataset.action;

  const inputValue = section.querySelector('[data-name="input-in-functions"]');
  const valueToAdd = inputValue.value.trim();

  const actionInputs = Array.from(
    section.querySelectorAll('[data-product="name"]')
  );

  replaceValuesInInputs(actionInputs, valueToAdd, dataActionSection);
  clearInputValue(inputValue);
};

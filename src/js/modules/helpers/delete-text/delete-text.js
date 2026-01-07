import { clearInputValue } from "../utils/clearElements";
import { saveData } from "../utils/save-state-function-ls";

/**
 * Removes a value from [data-name="input-in-functions"]
 * across all [data-product="name"] inside the current section
 * @param {HTMLInputElement[]} inputElements
 * @param {string} valueToDelete
 * @param {string} dataActionSection
 * @returns {void}
 */
const replaceValuesInInputs = (
  inputElements,
  valueToDelete,
  dataActionSection
) => {
  const updatedNames = inputElements.map(
    (el) => (el.value = el.value.replaceAll(valueToDelete, ""))
  );
  saveData(updatedNames, dataActionSection, "data_product");
};

/**
 * Getting DOM elements
 * After working the cleaning input value
 * .trim() to input.value, not need, - the user should be able to enter a space
 * @param {Event} e - button click event
 * @returns {void}
 */
export const deleteText = (e) => {
  const section = e.target.closest('[data-name="main"]');
  if (!section) return;
  const dataActionSection = section.dataset.action;

  const inputValue = section.querySelector('[data-name="input-in-functions"]');
  let valueToDelete = inputValue.value;

  const inputElements = Array.from(
    section.querySelectorAll('[data-product="name"]')
  );

  replaceValuesInInputs(inputElements, valueToDelete, dataActionSection);
  clearInputValue(inputValue);
};

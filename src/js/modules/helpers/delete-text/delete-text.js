import { clearInputValue } from "../utils/clearElements";

/**
 * Removes a value from .input-function
 * across all .input-product[data-action] inside the current section
 * @param {HTMLInputElement[]} actionInputs
 * @param {string} valueToDelete
 * @returns {void}
 */
const replaceValuesInInputs = (actionInputs, valueToDelete) => {
  actionInputs.forEach((el) =>
    el.value.includes(valueToDelete)
      ? (el.value = el.value.replaceAll(valueToDelete, ""))
      : null
  );
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

  const inputValue = section.querySelector('[data-name="input-in-functions"]');
  let valueToDelete = inputValue.value;

  const actionInputs = Array.from(
    section.querySelectorAll('[data-product="name"]')
  );

  replaceValuesInInputs(actionInputs, valueToDelete);
  clearInputValue(inputValue);
};

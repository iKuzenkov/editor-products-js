import { clearInputValue } from "./utils/clearElements";

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
      ? (el.value = el.value.split(valueToDelete).join(""))
      : null
  );
};

/**
 * After working the cleaning the helper elements
 * @param {Event} e - button click event
 * @returns {void}
 */

export const deleteText = (e) => {
  const section = e.target.closest(".section-main");
  if (!section) return;

  const inputValue = section.querySelector(".input-function");
  if (!inputValue) return;
  let valueToDelete = inputValue.value;

  const actionInputs = Array.from(
    section.querySelectorAll(".input-product[data-action]")
  );
  if (!actionInputs) return;

  replaceValuesInInputs(actionInputs, valueToDelete);
  clearInputValue(inputValue);
};

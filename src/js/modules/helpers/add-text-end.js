import { clearInputValue } from "./utils/clearElements";

/**
 * Adds a value in end the input from .input-function
 * across all .input-product[data-action] inside the current section
 * @param {HTMLInputELement[]} actionInputs
 * @param {string} valueToAdd
 * @returns {void}
 */

const replaceValuesInInputs = (actionInputs, valueToAdd) => {
  actionInputs.forEach((el) => (el.value = `${el.value.trim()} ${valueToAdd}`));
};

/**
 * Getting DOM elements
 * After working the cleaning input value
 * @param {Event} e - button click event
 * @returns {void}
 */

export const addTextEnd = (e) => {
  const section = e.target.closest(".section-main");
  if (!section) return;

  const inputValue = section.querySelector(".input-function");
  if (!inputValue) return;
  const valueToAdd = inputValue.value.trim();

  const actionInputs = Array.from(
    section.querySelectorAll(".input-product[data-action]")
  );
  if (!actionInputs.length) return;

  replaceValuesInInputs(actionInputs, valueToAdd);
  clearInputValue(inputValue);
};

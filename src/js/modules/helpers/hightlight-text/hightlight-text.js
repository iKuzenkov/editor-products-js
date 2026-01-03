import { clearInputValue } from "../utils/clearElements";

let timeoutId;

/**
 * remove border-bottom after delay
 * clearTimeout(timeoutId) - timeout clearing has been implemented
 * @param {HTMLInputElement[]} inputs
 * @param {number} delay
 */
const removeBorderAfterDelay = (inputs, delay) => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    inputs.forEach((el) => el.classList.remove("border-orange"));
  }, delay);
};

/**
 * setup border-bottom for input[data-action], if have value from .input-function
 * @param {HTMLInputElement[]} inputs
 * @param {string} text
 */
const replaceValuesInInputs = (inputs, text) => {
  inputs.forEach((el) => {
    if (el.value.includes(text)) el.classList.add("border-orange");
  });
  removeBorderAfterDelay(inputs, 10000);
};

/**
 * Getting DOM elements
 * After working the cleaning input value
 * @param {Event} e - button click
 * @returns {void}
 */
export const highlightText = (e) => {
  const section = e.target.closest('[data-name="main"]');
  if (!section) return;

  const inputValue = section.querySelector('[data-name="input-in-functions"]');
  const text = inputValue.value.trim();
  if (text === "") return;

  const inputs = Array.from(section.querySelectorAll('[data-product="name"]'));

  replaceValuesInInputs(inputs, text);
  clearInputValue(inputValue);
};

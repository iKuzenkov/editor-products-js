/**
 * Adds a value from .input-function
 * to all .input-product with data-action inside the section
 * @param {Event} e - add button click event
 * @returns {void} - returns nothing
 */
export const addTextStart = (e) => {
  const section = e.target.closest(".section-main");
  if (!section) return;

  const inputValue = section.querySelector(".input-function");
  if (!inputValue) return;
  const valueToAdd = inputValue.value.trim();

  const actionInputs = Array.from(
    section.querySelectorAll(".input-product[data-action]")
  );
  if (!actionInputs) return;

  actionInputs.forEach((el) => (el.value = `${valueToAdd} ${el.value.trim()}`));

  inputValue.value = "";
};

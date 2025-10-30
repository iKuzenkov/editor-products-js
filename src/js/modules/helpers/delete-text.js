/**
 * Removes a value from .input-function
 * to all .input-product with data-action inside the section
 * @param {Event} e - add button click event
 * @returns {void} - returns nothing
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

  actionInputs.forEach((el) =>
    el.value.includes(valueToDelete)
      ? (el.value = el.value.split(valueToDelete).join(""))
      : null
  );

  inputValue.value = "";
};

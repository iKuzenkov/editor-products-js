import { createElement } from "../ui/dinamic-elements";

const dynamicElements = (functionSpace) => {
  createElement(
    "input",
    {
      classList: ["input-replace"],
      attrs: {
        type: "text",
        name: "in-section",
        placeholder: "Enter a value, for replaced",
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

export const helperElements = (e) => {
  const section = e.target.closest(".section-main");
  if (!section) return;

  const functionSpace = section.querySelector(".product-functions");
  if (!functionSpace) return;

  dynamicElements(functionSpace);
};

const replaceValuesInInputs = (actionInputs, valueToSetUp, valueToReplace) => {
  actionInputs.forEach((el) =>
    el.value.includes(valueToReplace)
      ? (el.value = el.value.replace(valueToReplace, valueToSetUp))
      : null
  );
};

const clearAfterWork = (inputValue) => (inputValue.value = "");

const deletedElementsAfterWork = (...elements) => {
  for (const el of elements) el.remove?.();
};

export const replaceText = (e) => {
  const section = e.target.closest(".section-main");
  if (!section) return;

  const inputValue = section.querySelector(".input-function");
  if (!inputValue) return;
  const inputValueForReplace = section.querySelector(".input-replace");
  if (!inputValueForReplace) return;

  const buttonForReplace = section.querySelector(".button-replace");
  if (!buttonForReplace) return;

  let valueToSetUp = inputValue.value;
  let valueToReplace = inputValueForReplace.value;

  const actionInputs = Array.from(
    section.querySelectorAll(".input-product[data-action]")
  );

  replaceValuesInInputs(actionInputs, valueToSetUp, valueToReplace);
  clearAfterWork(inputValue);
  deletedElementsAfterWork(inputValueForReplace, buttonForReplace);
};

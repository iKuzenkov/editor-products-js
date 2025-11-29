import { createElement } from "../patterns/create-elements";

export const settingProduct = () => {
  const modal = createElement(
    "div",
    {
      classList: ["modal"],
      attrs: {
        id: "modal",
      },
    },
    document.body
  );
  const overlay = createElement(
    "div",
    {
      classList: ["modal-overlay"],
    },
    modal
  );

  const modalContent = createElement(
    "div",
    {
      classList: ["modal-content"],
    },
    modal
  );
  const generalContainer = createElement(
    "div",
    {
      classList: ["modal-general-container"],
    },
    modalContent
  );

  const containerFields = createElement(
    "div",
    {
      classList: ["fields-container"],
    },
    generalContainer
  );
  createElement(
    "input",
    {
      classList: ["input-modal", "field-styles"],
      attrs: {
        placeholder: "Enter name",
        type: "text",
        name: "product-name",
      },
    },
    containerFields
  );

  createElement(
    "textarea",
    {
      classList: ["modal-textarea", "field-styles"],
      attrs: {
        placeholder: "Enter description",
        rows: "5",
        cols: "30",
        maxlength: "300",
        name: "product-description",
      },
    },
    containerFields
  );
  createElement(
    "input",
    {
      classList: ["modal-price", "field-styles"],
      attrs: {
        placeholder: "$0.00",
        name: "product-price",
      },
    },
    containerFields
  );
  const containerOptions = createElement(
    "div",
    {
      classList: ["options-modal"],
    },
    modalContent
  );
  createElement(
    "input",
    {
      classList: ["checkbox-modal"],
      attrs: { id: 1, type: "checkbox" },
    },
    containerOptions
  );
  createElement(
    "label",
    {
      classList: ["label-modal"],
      text: "Apply discount |",
      attrs: { for: 1, type: "checkbox" },
    },
    containerOptions
  );
  createElement(
    "input",
    {
      classList: ["checkbox-modal"],
      attrs: { id: 2, type: "checkbox" },
    },
    containerOptions
  );
  createElement(
    "label",
    {
      classList: ["label-modal"],
      text: "Out of stock |",
      attrs: { for: 2, type: "checkbox" },
    },
    containerOptions
  );
  createElement(
    "input",
    {
      classList: ["checkbox-modal"],
      attrs: { id: 3, type: "checkbox" },
    },
    containerOptions
  );
  createElement(
    "label",
    {
      classList: ["label-modal"],
      text: "Delivery |",
      attrs: { for: 3, type: "checkbox" },
    },
    containerOptions
  );
  createElement(
    "input",
    {
      classList: ["checkbox-modal"],
      attrs: { id: 4, type: "checkbox" },
    },
    containerOptions
  );
  createElement(
    "label",
    {
      classList: ["label-modal"],
      text: "Pick-up |",
      attrs: { for: 4, type: "checkbox" },
    },
    containerOptions
  );
  const containerButton = createElement(
    "div",
    {
      classList: ["button-container"],
    },
    modalContent
  );

  const closeButton = createElement(
    "button",
    {
      classList: ["close-modal"],
      text: "Close",
    },
    containerButton
  );
  const saveButton = createElement(
    "button",
    {
      classList: ["save-modal"],
      text: "Save",
    },
    containerButton
  );

  overlay.addEventListener("click", () => modal.remove());
  closeButton.addEventListener("click", () => modal.remove());
  // saveButton.addEventListener("click", () => );
};

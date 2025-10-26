import { createElement } from "../ui/dinamic-elements";

export const settingProduct = (e) => {
  const product = e.target.closest(".inner-button-product");
  const dynamicDataAction = product.dataset.action;

  const modal = createElement(
    "div",
    {
      classList: ["modal"],
      attrs: {
        id: "modal",
        "data-action": dynamicDataAction,
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

  const imgWrapper = createElement(
    "div",
    {
      classList: ["img-upload-wrapper"],
      attrs: { "data-action": "image-product" },
    },
    generalContainer
  );

  createElement(
    "input",
    {
      classList: ["input-img"],
      attrs: {
        type: "file",
        name: "in-product",
        accept: "image/*",
        loading: "lazy",
        alt: "product image",
        "data-action": "loading-image-product",
      },
    },
    imgWrapper
  );

  createElement(
    "span",
    { classList: ["img-placeholder"], text: "+" },
    imgWrapper
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
      text: "Options: ",
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
      text: "Add Option 1",
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
      text: "Add Option 2",
      attrs: { for: 2, type: "checkbox" },
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

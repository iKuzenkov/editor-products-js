import { createElement } from "../../interaction-helpers/create-elements";

/**
 * getting the section data, and rendering.
 * below in function - getting product data, from this section [LS]. Filter by data-action.
 * @param {Object{}} sectionData - received from getSectionDataFromLS function
 * @returns {void}
 */
export const renderSectionData = (sectionData) => {
  const container = document.querySelector('[data-container="container"]');
  if (!container) return console.error("No [data-container] in DOM");

  const { name, description, section_data_action } = sectionData;

  const section = createElement(
    "section",
    {
      classList: ["section-modal"],
      attrs: { "data-section": "modal" },
    },
    container
  );

  const header = createElement(
    "header",
    {
      classList: ["header-modal"],
      attrs: { "data-header": "modal" },
    },
    section
  );

  const nameSection = createElement(
    "div",
    {
      classList: ["name-section-modal"],
      text: name,
    },
    header
  );

  const descriptionSection = createElement(
    "div",
    {
      classList: ["name-description-modal"],
      text: description,
    },
    header
  );

  const productSection = createElement(
    "div",
    {
      classList: ["product-section-modal"],
      attrs: { "data-product": "layout" },
    },
    section
  );

  const product = JSON.parse(localStorage.getItem("data_product") || "[]");
  product
    .filter((p) => p.product_data_action === section_data_action)
    .forEach((p) => renderProductData(p, productSection));
};

/**
 * getting the product data, and rendering.
 * @param {Object{}} productData
 * @param {HTMLDivElement} container
 * @returns {void}
 */
const renderProductData = (productData, container) => {
  const { image, name, description, price } = productData;
  if (!image || !name || !description || !price) return;

  const product = createElement(
    "div",
    {
      classList: ["product-modal"],
    },
    container
  );

  createElement(
    "img",
    {
      classList: ["image-modal"],
      attrs: { src: `${image}`, alt: "image" },
    },
    product
  );

  createElement(
    "div",
    {
      classList: ["name-product-modal"],
      text: name,
    },
    product
  );

  createElement(
    "div",
    {
      classList: ["description-product-modal"],
      text: description,
    },
    product
  );

  createElement(
    "div",
    {
      classList: ["price-product-modal"],
      text: `$${price}`,
    },
    product
  );
};

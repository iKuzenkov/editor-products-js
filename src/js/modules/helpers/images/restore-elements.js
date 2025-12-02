import { createElement } from "../../patterns/create-elements";

/**
 * Restoring elements after deletion, to be able to re-add the image.
 * @param {HTMLDivElement} parentImage
 * @returns {void}
 */

export const restoreImgElements = (parentImage) => {
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
    parentImage
  );
  createElement(
    "span",
    {
      classList: ["img-placeholder"],
      text: "+",
    },
    parentImage
  );
};

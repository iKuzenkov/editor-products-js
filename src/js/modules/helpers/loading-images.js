import { createElement } from "../ui/dinamic-elements";

/**
 * opening the window when clicking the img (choose img from local folder)
 * @param {Event} e
 * @returns {void}
 */
export const upLoadImages = (e) => {
  const wrapper = e.target.closest('[data-action="image-product"]');
  if (!wrapper) return;
  const fileInput = wrapper.querySelector(
    '[data-action="loading-image-product"]'
  );
  if (!fileInput) return;
  fileInput?.click();
};

/**
 * loading the img from open window
 * @param {Event} e
 * @returns {void}
 */
export const loadingImages = (e) => {
  if (e.target.matches('[data-action="loading-image-product"]')) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const product = e.target.closest(".product");
      const base64 = reader.result;

      product.querySelector(
        '[data-action="image-product"]'
      ).innerHTML = `<img src="${base64}" alt="product image">`;

      let data = JSON.parse(localStorage.getItem("dataMainProduct") || "[]");
      data = data.map((item) =>
        item.id === product.id ? { ...item, image: base64 } : item
      );
      localStorage.setItem("dataMainProduct", JSON.stringify(data));
    };
    reader.readAsDataURL(file);
  }
};

/**
 * restoring elements after deletion, to be able to re-add the image
 * @param {HTMLDivElement} parentImage
 * @returns {void}
 */
const repairTags = (parentImage) => {
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

/**
 * removes a img element when double clicking the img-box
 * @param {Event} e - dblclick
 * @returns {void}
 */
export const removeImages = (e) => {
  const product = e.target.closest(".product");
  let parentImage = product.querySelector('[data-action="image-product"]');
  let image = product.querySelector("img");
  image?.remove();

  let data = JSON.parse(localStorage.getItem("dataMainProduct") || "[]");
  data = data.map((item) =>
    item.id === product.id ? { ...item, image: null } : item
  );
  localStorage.setItem("dataMainProduct", JSON.stringify(data));

  repairTags(parentImage);
};

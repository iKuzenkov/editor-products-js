import { loadingImagesLS, removeImagesLS } from "./loading-images-ls";
import { restoreImgElements } from "./restore-elements";

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
  fileInput.click();
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
      const product = e.target.closest('[data-name="product"]');
      const base64 = reader.result;

      const createTagImage = (product.querySelector(
        '[data-action="image-product"]'
      ).innerHTML = `<img src="${base64}" alt="product image">`);

      loadingImagesLS(product, base64);
    };
    reader.readAsDataURL(file);
  }
};

/**
 * removes a img element when double clicking the img-box
 * @param {Event} e - dblclick
 * @returns {void}
 */
export const removeImages = (e) => {
  const product = e.target.closest('[data-name="product"]');
  let parentImage = product.querySelector('[data-action="image-product"]');
  let image = product.querySelector("img");
  image.remove();

  removeImagesLS(product);
  restoreImgElements(parentImage);
};

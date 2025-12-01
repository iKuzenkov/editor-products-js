import { updateProductLS, updateProductNumberLS } from "./remove-products-ls";

/**
 * Removes the element from DOM
 * @param {HTMLDivElement} product
 * @returns {void}
 */
const deleteProduct = (product) => product?.remove();

/**
 * Recalculating product numbers after deleting an item.
 * @param {HTMLDivElement} sectionMain
 * @returns {void}
 */
const updateProductNumber = (sectionMain) => {
  const sectionDataAction = sectionMain.dataset.action;
  const sectionProducts = Array.from(sectionMain.querySelectorAll(".product"));
  if (!sectionProducts.length) return;

  const newNumberProducts = sectionProducts.map((el, i) => {
    const productNumber = el.querySelector(".product-number");
    const num = i + 1;
    if (productNumber) productNumber.textContent = num;
    return num;
  });

  updateProductNumberLS(sectionDataAction, newNumberProducts);
};

/**
 * Removes a product element when clicking the "❌" button, inside it
 * @param {Event} - button click
 * @returns {void}
 */
export const removeProduct = (e) => {
  const product = e.target.closest(".product");
  if (!product) return;

  const sectionMain = product.closest(".section-main");
  if (!sectionMain) return;

  const id = product.id;
  if (!id) return;

  deleteProduct(product);
  updateProductLS(id);
  updateProductNumber(sectionMain);
};

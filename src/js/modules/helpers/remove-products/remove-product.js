import { updateProductLS, updateProductNumberLS } from "./remove-products-ls";

/**
 * removes the element from DOM
 * @param {HTMLDivElement} product
 * @returns {void}
 */
const deleteProduct = (product) => product.remove();

/**
 * recalculating product numbers after deleting an item.
 * @param {HTMLDivElement} sectionMain
 * @returns {void}
 */
const updateProductNumber = (sectionMain) => {
  const sectionDataAction = sectionMain.dataset.action;
  const sectionProducts = Array.from(
    sectionMain.querySelectorAll('[data-name="product"]')
  );
  if (!sectionProducts.length) return;

  const newNumberProducts = sectionProducts.map((el, i) => {
    const productNumber = el.querySelector('[data-number="number"]');
    const num = i + 1;
    if (productNumber) productNumber.textContent = num;
    return num;
  });

  updateProductNumberLS(sectionDataAction, newNumberProducts);
};

const refreshQuantityProducts = (sectionMain) => {
  const quantityOutput = sectionMain.querySelector(
    '[data-action="quantity-products"]'
  );
  const allProducts = Array.from(
    sectionMain.querySelectorAll('[data-name="product"]')
  );

  const quantityProducts = allProducts.length;
  quantityOutput.textContent = `${quantityProducts}/20`;
};

/**
 * removes a product element when clicking the "❌" button, inside it
 * @param {Event} - button click
 * @returns {void}
 */
export const removeProduct = (e) => {
  const product = e.target.closest('[data-name="product"]');
  if (!product) return;

  const sectionMain = product.closest('[data-name="main"]');
  if (!sectionMain) return;

  const id = product.id;
  if (!id) return;

  deleteProduct(product);
  updateProductLS(id);
  updateProductNumber(sectionMain);
  refreshQuantityProducts(sectionMain);
};

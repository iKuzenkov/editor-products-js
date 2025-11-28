/**
 * Removes the element from DOM
 * @param {HTMLDivElement} product
 * @returns {void}
 */
const deleteProduct = (product) => product?.remove();

/**
 * Updates the array, removes the object from LS
 * @param {id} productID
 * @returns {void}
 */
const updateLS = (id) => {
  let data = JSON.parse(localStorage.getItem("dataMainProduct") || "[]");
  data = data.filter((item) => item.id !== id);
  localStorage.setItem("dataMainProduct", JSON.stringify(data));
};

/**
 * Saving to local storage.
 * @param {randomDataAction} dataAction
 * @param {[]} newNumberProducts
 */
const updateProductNumberLS = (sectionDataAction, newNumberProducts) => {
  let data = JSON.parse(localStorage.getItem("dataMainProduct") || "[]");
  let counter = 0;
  data = data.map((el) => {
    if (el.product_data_action === sectionDataAction) {
      return { ...el, numberProduct: newNumberProducts[counter++] };
    }
    return el;
  });
  localStorage.setItem("dataMainProduct", JSON.stringify(data));
};

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
  updateLS(id);
  updateProductNumber(sectionMain);
};

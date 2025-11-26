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
 * @param {[]} newNumberProducts
 */
const updateProductNumberLS = (newNumberProducts) => {
  let data = JSON.parse(localStorage.getItem("dataMainProduct") || "[]");
  data = data.map((el, i) => {
    return { ...el, numberProduct: newNumberProducts[i] };
  });
  localStorage.setItem("dataMainProduct", JSON.stringify(data));
};

/**
 * Recalculating product numbers after deleting an item.
 * @param {HTMLDivElement} sectionMain
 * @returns {void}
 */
const updateProductNumber = (sectionMain) => {
  const sectionProducts = Array.from(sectionMain.querySelectorAll(".product"));
  if (!sectionProducts) return;

  const newNumberProducts = sectionProducts.map((el, i) => {
    const productNumber = el.querySelector(".product-number");
    if (!productNumber) return;
    productNumber.textContent = i + 1;
    return productNumber.textContent;
  });

  updateProductNumberLS(newNumberProducts);
};

/**
 * Removes a product element when clicking the "❌" button, inside it
 * @param {Event} - button click
 * @returns {void}
 */
export const removeProduct = (e) => {
  const sectionMain = e.target.closest(".section-main");
  if (!sectionMain) return;
  const product = e.target.closest(".product");
  if (!product) return;
  const id = product.id;
  if (!id) return;

  deleteProduct(product);
  updateLS(id);
  updateProductNumber(sectionMain);
};

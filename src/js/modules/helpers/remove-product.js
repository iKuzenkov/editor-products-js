/**
 * Removes the element from DOM
 * @param {HTMLDivElement} product
 * @returns {void}
 */
const deleteProduct = (product) => product.remove();

/**
 * Updates the array, removes the object from LS
 * @param {id} productID
 * @returns {void}
 */
const updateLS = (productID) => {
  let data = JSON.parse(localStorage.getItem("dataMainProduct") || "[]");
  data = data.filter((item) => item.id !== productID);
  localStorage.setItem("dataMainProduct", JSON.stringify(data));
};

/**
 * Removes a product element when clicking the "❌" button, inside it
 * @param {Event} - button click
 * @returns {void}
 */
export const removeProduct = (e) => {
  const product = e.target.closest(".product");
  if (!product) return;
  const productID = product.id;
  if (!productID) return;

  deleteProduct(product);
  updateLS(productID);
};

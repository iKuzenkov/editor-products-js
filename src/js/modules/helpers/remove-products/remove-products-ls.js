/**
 * Updates the array, removes the object from LS
 * @param {id} productID
 * @returns {void}
 */
export const updateProductLS = (id) => {
  let data = JSON.parse(localStorage.getItem("dataMainProduct") || "[]");
  data = data.filter((item) => item.id !== id);
  localStorage.setItem("dataMainProduct", JSON.stringify(data));
};

/**
 * Saving to local storage.
 * @param {randomDataAction} dataAction
 * @param {[]} newNumberProducts
 */
export const updateProductNumberLS = (sectionDataAction, newNumberProducts) => {
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

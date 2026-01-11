/**
 * save the image in LocalStorage
 * @param {HTMLDivElement} product
 * @param {FileReader} base64
 * @return {void}
 */
export const loadingImagesLS = (product, base64) => {
  let data = JSON.parse(localStorage.getItem("data_product") || "[]");
  data = data.map((item) =>
    item.id === product.id ? { ...item, image: base64 } : item
  );
  localStorage.setItem("data_product", JSON.stringify(data));
};

/**
 * save the updated state in LocalStorage
 * @param {HTMLDivElement} product
 * @return {void}
 */
export const removeImagesLS = (product) => {
  let data = JSON.parse(localStorage.getItem("data_product") || "[]");
  data = data.map((item) =>
    item.id === product.id ? { ...item, image: null } : item
  );
  localStorage.setItem("data_product", JSON.stringify(data));
};

import {
  saveDataToAsideLS,
  saveDataToMainLS,
  saveDataToProductLS,
} from "./save-ls";

/**
 * object destructuring. Assigning values ​​to elements.
 * @param {Object} params
 */
const assigningValues = (params) => {
  const { element, data } = params;

  element.asideInputs.forEach((el, i) => (el.value = data.section.name[i]));
  element.nameSections.forEach((el, i) => (el.value = data.section.name[i]));
  element.nameDescriptions.forEach(
    (el, i) => (el.value = data.section.description[i])
  );
  element.removeImages.forEach((el) => el.remove());
  element.allSpansInImages.forEach((el) => el.remove());
  element.addImages.forEach(
    (el, i) =>
      (el.innerHTML = `<img src=${data.product.image[i]} alt="product image">`)
  );
  element.productNames.forEach((el, i) => (el.value = data.product.name[i]));
  element.productDescriptions.forEach(
    (el, i) => (el.value = data.product.description[i])
  );
  element.productPrices.forEach((el, i) => (el.value = data.product.price[i]));
};

/**
 * getting elements, created object.
 * @param {Object} section
 * @param {Object} product
 * @param {HTMLDivElement} containerAside
 * @param {HTMLDivElement} containerMain
 */
const getElements = (section, product, containerAside, containerMain) => {
  const asideInputs = containerAside.querySelectorAll('[data-input="aside"]');
  const nameSections = containerMain.querySelectorAll('[data-input="main"]');
  const nameDescriptions = containerMain.querySelectorAll(
    '[data-input="description"]'
  );
  const removeImages = containerMain.querySelectorAll(
    '[data-action="loading-image-product"]'
  );
  const allSpansInImages = containerMain.querySelectorAll(".img-placeholder");
  const addImages = containerMain.querySelectorAll(
    '[data-action="image-product"]'
  );
  const productNames = containerMain.querySelectorAll('[data-product="name"]');
  const productDescriptions = containerMain.querySelectorAll(
    '[data-product="description"]'
  );
  const productPrices = containerMain.querySelectorAll(
    '[data-product="price"]'
  );

  const params = {
    element: {
      asideInputs,
      nameSections,
      nameDescriptions,
      removeImages,
      allSpansInImages,
      addImages,
      productNames,
      productDescriptions,
      productPrices,
    },
    data: {
      section,
      product,
    },
  };
  assigningValues(params);
};

/**
 * getting elements, object destructuring, saving state.
 * @param {Object} generalData
 */
export const entryData = (generalData) => {
  const containerAside = document.querySelector("#container-aside");
  if (!containerAside) return console.error("No #container-aside in DOM");
  const containerMain = document.querySelector("#container-main");
  if (!containerMain) return console.error("No #container-main in DOM");

  const { section, product } = generalData;

  getElements(section, product, containerAside, containerMain);
  saveDataToAsideLS(section);
  saveDataToMainLS(section);
  saveDataToProductLS(product);
};

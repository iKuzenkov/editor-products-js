const addAsideSection = () => {
  const addAsideSection = document.querySelector('[data-action="add-section"]');
  for (let i = 0; i <= 2; i++) addAsideSection.click();
};

const addMainSection = () => {
  const addMainSection = document.querySelectorAll(
    '[data-action="add-section-main"]'
  );
  addMainSection.forEach((el) => el.click());
};

const addProduct = () => {
  const addProduct = document.querySelectorAll('[data-action="add-product"]');
  addProduct.forEach((el, i) => {
    if (i === 0) for (let i = 0; i <= 2; i++) el.click();
    else for (let i = 0; i <= 1; i++) el.click();
  });
};

/**
 * сalling functions to add UI.
 * @returns {void}
 */
export const clickElements = () => {
  addAsideSection();
  addMainSection();
  addProduct();
};

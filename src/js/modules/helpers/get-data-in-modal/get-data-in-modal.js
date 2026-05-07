/**
 * array of selector (index 0 - from, 1 - to)
 */
const pairs = [
  ["[data-name='name']", "[data-name='name-in-modal']"],
  [
    "[data-description='description']",
    "[data-description='description-in-modal']",
  ],
  ["[data-price='price']", "[data-price='price-in-modal']"],
];

/**
 * getting data from the product, and assigning it to a modal window
 * @param {Event} e - button click
 * @returns {void}
 */
export const getDataInModal = (e) => {
  const product = e.target.closest('[data-name="product"]');
  if (!product) return;

  pairs.forEach(([from, to]) => {
    const getData = product.querySelector(from);
    const assignData = document.querySelector(to);

    if (getData && assignData) assignData.value = getData.value;
  });
};

import {
  updateAsideName,
  updateMainName,
  updateProductName,
} from "./update-name";

export const updateNameAsideInLS = (e) => {
  const section = e.target.closest('[data-name="aside"]');
  const dataAction = section.dataset.action;
  const value = e.target.value;
  updateAsideName(dataAction, value);
};

export const updateNameMainInLS = (e) => {
  const section = e.target.closest('[data-name="main"]');
  const dataAction = section.dataset.action;
  const nameValue = section.querySelector('[data-name="name"]').value;
  const descriptionValue = section.querySelector(
    '[data-description="description"]'
  ).value;
  updateMainName(dataAction, nameValue, descriptionValue);
};

export const updateNameProductInLS = (e) => {
  const product = e.target.closest('[data-name="product"]');
  if (!product) return;
  const productID = product.id;
  const nameValue = product.querySelector('[data-name="name"]').value;
  const descriptionValue = product.querySelector(
    '[data-description="description"]'
  ).value;
  const priceValue = product.querySelector('[data-price="price"]').value;
  updateProductName(productID, nameValue, descriptionValue, priceValue);
};

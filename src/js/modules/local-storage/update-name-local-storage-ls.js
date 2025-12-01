import {
  updateAsideName,
  updateMainName,
  updateProductName,
} from "./update-name-local-storage";

export const updateNameAsideInLS = (e) => {
  if (!e.target.classList.contains("input-section")) return;
  const section = e.target.closest(".section-aside");
  const dataAction = section.dataset.action;
  const value = e.target.value;
  updateAsideName(dataAction, value);
};

export const updateNameMainInLS = (e) => {
  if (!e.target.classList.contains("input-section")) return;
  const section = e.target.closest(".section-main");
  const dataAction = section.dataset.action;
  const nameValue = section.querySelector(".name-section").value;
  const descriptionValue = section.querySelector(".description-section").value;
  updateMainName(dataAction, nameValue, descriptionValue);
};

export const updateNameProductInLS = (e) => {
  if (
    !e.target.classList.contains("input-name") &&
    !e.target.classList.contains("input-description") &&
    !e.target.classList.contains("input-price")
  ) {
    return;
  }

  const product = e.target.closest(".product");
  if (!product) return;
  const productID = product.id;
  const nameValue = product.querySelector(".input-name").value;
  const descriptionValue = product.querySelector(".input-description").value;
  const priceValue = product.querySelector(".input-price").value;
  updateProductName(productID, nameValue, descriptionValue, priceValue);
};

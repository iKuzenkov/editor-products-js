export const getDataInModal = (e) => {
  const product = e.target.closest(".product");
  let nameProduct = product.querySelector(".input-name");
  let descriptionProduct = product.querySelector(".input-description");
  let priceProduct = product.querySelector(".input-price");
  let nameModal = document.querySelector(".input-modal");
  let descriptionModal = document.querySelector(".modal-textarea");
  let priceModal = document.querySelector(".modal-price");

  nameModal.value = nameProduct.value;
  descriptionModal.value = descriptionProduct.value;
  priceModal.value = priceProduct.value;
};

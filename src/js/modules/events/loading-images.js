export const upLoadImages = (e) => {
  const wrapper = e.target.closest('[data-action="image-product"]');
  if (!wrapper) return;
  const fileInput = wrapper.querySelector(
    '[data-action="loading-image-product"]'
  );
  if (!fileInput) return;
  fileInput.click();
};

export const loadingImages = (e) => {
  if (e.target.matches('[data-action="loading-image-product"]')) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      e.target.closest(
        '[data-action="image-product"]'
      ).innerHTML = `<img src="${reader.result}" loading="lazy" alt="product image">`;
    };
    reader.readAsDataURL(file);
  }
};

import { addSectionInAside } from "./add-section-in-aside";
import { addSectionInMain } from "./add-section-in-main";
import { addProductInSection } from "./add-product-in-section";
import { settingProduct } from "../ui/modals";

export const setupDelegatedEvents = () => {
  const containerAside = document.querySelector(".container-aside");
  const containerMain = document.querySelector(".container-main");

  containerAside.addEventListener("click", (e) => {
    if (e.target.closest('[data-action="add-section"]')) {
      addSectionInAside(e);
    }

    if (e.target.closest('[data-action="add-section-main"]')) {
      addSectionInMain(e);
    }
  });

  containerMain.addEventListener("click", (e) => {
    if (e.target.closest('[data-action="add-product"]')) {
      addProductInSection(e);
    }

    if (e.target.closest('[data-action="settings"]')) {
      settingProduct(e);
    }
  });
};

document.addEventListener("click", (e) => {
  const wrapper = e.target.closest(".img-upload-wrapper");
  if (wrapper) {
    const fileInput = wrapper.querySelector(".input-img");
    fileInput.click();
  }
});

document.addEventListener("change", (e) => {
  if (e.target.matches(".input-img")) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      e.target.closest(
        ".img-upload-wrapper"
      ).innerHTML = `<img src="${reader.result}" loading="lazy" alt="product image">`;
    };
    reader.readAsDataURL(file);
  }
});

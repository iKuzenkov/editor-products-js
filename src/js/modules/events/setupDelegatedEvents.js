import { addSectionInAside } from "./add-section-in-aside";
import { addSectionInMain } from "./add-section-in-main";
import { addProductInSection } from "./add-product-in-section";

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

    // if (e.target.closest('[data-action="settings"]')) {
    //   settingProduct(e);
    // }
  });
};

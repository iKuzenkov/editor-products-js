import { addSectionInAside } from "./add-section-in-aside";
import { addSectionInMain } from "./add-section-in-main";
import { addProductInSection } from "./add-product-in-section";
import { addTextStart } from "../helpers/add-text-start";
import { addTextEnd } from "../helpers/add-text-end";
import { deleteText } from "../helpers/delete-text";
import { replaceText } from "../helpers/replace-text";
import { hightlightText } from "../helpers/hightlight-text";
import { autoFixText } from "../helpers/auto-fix-text";
import { upLoadImages, loadingImages } from "./loading-images";
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

    if (e.target.closest('[id="1"]')) {
      addTextStart(e);
    }

    if (e.target.closest('[id="2"]')) {
      addTextEnd(e);
    }

    if (e.target.closest('[id="3"]')) {
      deleteText(e);
    }

    if (e.target.closest('[id="4"]')) {
      replaceText(e);
    }

    if (e.target.closest('[id="5"]')) {
      hightlightText(e);
    }

    if (e.target.closest('[id="6"]')) {
      autoFixText(e);
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target.closest('[data-action="image-product"]')) {
      upLoadImages(e);
    }
  });

  document.addEventListener("change", (e) => {
    if (e.target.matches('[data-action="loading-image-product"]')) {
      loadingImages(e);
    }
  });
};

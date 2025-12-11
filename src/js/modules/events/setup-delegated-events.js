import { autofill } from "../ui/autofill data/autofill";
import { storeModal } from "../ui/store modal/store-modal";
import { addSectionInAside } from "./add-section-in-aside";
import { addSectionInMain } from "./add-section-in-main";
import { addProductInSection } from "./add-product-in-section";
import { addTextStart } from "../helpers/add-text-start/add-text-start";
import { addTextEnd } from "../helpers/add-text-end/add-text-end";
import { deleteText } from "../helpers/delete-text/delete-text";
import { helperElements } from "../helpers/replace-text/replace-text";
import { replaceText } from "../helpers/replace-text/replace-text";
import { highlightText } from "../helpers/hightlight-text/hightlight-text";
import { removeSection } from "../helpers/remove-section/remove-section";
import { removeProduct } from "../helpers/remove-products/remove-product";
import { hideShow } from "../helpers/hide/hide";
import {
  upLoadImages,
  loadingImages,
  removeImages,
} from "../helpers/images/loading-images";
import { settingProduct } from "../ui/modals";
import { getDataInModal } from "../helpers/get-data-in-modal/get-data-in-modal";
import {
  updateNameAsideInLS,
  updateNameMainInLS,
  updateNameProductInLS,
} from "../local-storage/update-name-ls";

export const setupDelegatedEvents = () => {
  const containerHeader = document.querySelector("#container-header");
  if (!containerHeader) return console.error("No #container-header in DOM");
  const containerAside = document.querySelector("#container-aside");
  if (!containerAside) return console.error("No #container-aside in DOM");
  const containerMain = document.querySelector("#container-main");
  if (!containerMain) return console.error("No #container-main in DOM");

  containerHeader.addEventListener("click", (e) => {
    if (e.target.closest('[data-action="store"]')) storeModal(e);
    if (e.target.closest('[data-action="autofill"]')) autofill(e);
  });

  containerAside.addEventListener("click", (e) => {
    if (e.target.closest('[data-action="add-section"]')) addSectionInAside(e);
    if (e.target.closest('[data-action="add-section-main"]'))
      addSectionInMain(e);
  });

  containerMain.addEventListener("click", (e) => {
    if (e.target.closest('[data-action="add-product"]')) addProductInSection(e);
    if (e.target.closest('[data-action="settings"]'))
      settingProduct(e), getDataInModal(e);
    if (e.target.closest('[id="1"]')) addTextStart(e);
    if (e.target.closest('[id="2"]')) addTextEnd(e);
    if (e.target.closest('[id="3"]')) deleteText(e);
    if (e.target.closest('[id="4"]')) helperElements(e);
    if (e.target.closest('[id="7"]')) replaceText(e);
    if (e.target.closest('[id="5"]')) highlightText(e);
    if (e.target.closest('[id="6"]')) removeSection(e);
    if (e.target.closest('[id="9"]')) removeProduct(e);
    if (e.target.closest('[id="8"]')) hideShow(e);
  });

  containerAside.addEventListener("input", (e) => updateNameAsideInLS(e));
  containerMain.addEventListener("input", (e) => updateNameProductInLS(e));
  containerMain.addEventListener("input", (e) => updateNameMainInLS(e));

  document.addEventListener("click", (e) => {
    if (e.target.closest('[data-action="image-product"]')) upLoadImages(e);
  });

  document.addEventListener("change", (e) => {
    if (e.target.matches('[data-action="loading-image-product"]'))
      loadingImages(e);
  });

  document.addEventListener("dblclick", (e) => {
    if (e.target.closest('[data-action="image-product"]')) removeImages(e);
  });
};

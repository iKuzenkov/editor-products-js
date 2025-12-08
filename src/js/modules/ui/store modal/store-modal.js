import { getSectionDataFromLS } from "./get-section-data-ls";
import { createElement } from "../../patterns/create-elements";

/**
 * Creating modal window.
 * @param {Event} e - button click
 * @returns {void}
 */
export const storeModal = (e) => {
  const modal = createElement(
    "div",
    {
      classList: ["modal-store"],
      attrs: { id: "modal" },
    },
    document.body
  );
  const overlay = createElement(
    "div",
    {
      classList: ["modal-overlay-store"],
    },
    modal
  );
  const modalContent = createElement(
    "div",
    {
      classList: ["modal-content-store"],
    },
    modal
  );
  const generalContainer = createElement(
    "div",
    {
      classList: ["modal-general-container-store"],
      attrs: { "data-container": "container" },
    },
    modalContent
  );

  const containerButton = createElement(
    "div",
    {
      classList: ["button-container-store"],
    },
    modalContent
  );
  const closeButton = createElement(
    "button",
    {
      classList: ["close-modal-store"],
      text: "Close",
    },
    containerButton
  );

  overlay.addEventListener("click", () => modal.remove());
  closeButton.addEventListener("click", () => modal.remove());

  getSectionDataFromLS();
};

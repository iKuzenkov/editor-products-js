import { createElement } from "../ui/dinamic-elements";

export const settingProduct = (e) => {
  const product = e.target.closest(".inner-button-product");
  const dynamicDataAction = product.dataset.action;

  const modal = createElement(
    "div",
    {
      classList: ["modal"],
      attrs: {
        id: "modal",
        "data-action": dynamicDataAction,
      },
    },
    document.body
  );
  const overlay = createElement(
    "div",
    {
      classList: ["modal-overlay"],
    },
    modal
  );

  const modalContent = createElement(
    "div",
    {
      classList: ["modal-content"],
    },
    modal
  );

  const closeButton = createElement(
    "button",
    {
      classList: ["close-modal"],
      text: "close",
    },
    modalContent
  );

  overlay.addEventListener("click", () => modal.remove());
  closeButton.addEventListener("click", () => modal.remove());
};

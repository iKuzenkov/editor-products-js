import { hideElements } from "../../interaction-helpers/hide-elements";

/**
 * @param {Event} e - button click
 * @returns {void}
 */
export const hideShow = (e) => {
  hideElements(e, '[data-name="main"]', '[data-name="all-products"]', {
    text: { hide: "☝️", show: "👇" },
    attrs: { title: { hide: "hide", show: "show" } },
  });
};

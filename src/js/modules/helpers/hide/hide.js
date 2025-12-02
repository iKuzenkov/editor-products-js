import { hideElements } from "../../patterns/hide-elements";

/**
 * hideElements()- send the arguments to the pattern
 * @param {Event} e - button click
 * @returns {void}
 */
export const hideShow = (e) => {
  hideElements(e, '[data-name="main"]', '[data-name="all-products"]', {
    text: { hide: "☝️", show: "👇" },
    attrs: { title: { hide: "hide", show: "show" } },
  });
};

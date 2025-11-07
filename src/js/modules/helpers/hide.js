import { hideElements } from "../ui/dinamic-elements";

/**
 * hideElements()- send the arguments to the pattern
 * @param {Event} e - button click
 * @returns {void}
 */
export const hideShow = (e) => {
  hideElements(e, ".section-main", ".section-products", {
    text: { hide: "☝️", show: "👇" },
    attrs: { title: { hide: "hide", show: "show" } },
  });
};

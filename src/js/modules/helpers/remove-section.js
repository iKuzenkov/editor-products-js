/**
 * Strict comparison by data-action
 * Removing both containers
 * @param {HTMLDivElement[]} aside
 * @param {HTMLDivElement} main
 * @returns {void}
 */

const removeSectionHandler = (aside, main) => {
  if (!aside.length && !main) return;
  aside.find((el) => {
    if (el.dataset.action === main.dataset.action) el.remove(), main.remove();
  });
};

/**
 * Getting container aside and main sections
 * @param {Event} e - button click
 * @returns {void}
 */
export const removeSection = (e) => {
  const asideSection = Array.from(document.querySelectorAll(".section-aside"));
  const mainSection = e.target.closest(".section-main");
  if (!asideSection && mainSection) return;
  removeSectionHandler(asideSection, mainSection);
};

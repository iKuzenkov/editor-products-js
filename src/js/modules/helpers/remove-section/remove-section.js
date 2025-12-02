import {
  updateProductLS,
  updateAsideLS,
  updateMainLS,
  savingStateNumbersAsideLS,
  savingStateNumbersMainLS,
} from "./remove-section-ls";

/**
 * Strict comparison by data-action
 * Removing both containers
 * @param {HTMLDivElement[]} aside
 * @param {HTMLDivElement} main
 * @returns {void}
 */
const removeSectionHandler = (aside, main) => {
  if (!aside.length && !main) return;
  aside.forEach((el) => {
    if (el.dataset.action === main.dataset.action) el.remove(), main.remove();
  });
};

/**
 * Sections are numbered from main elements (creating a Section)
 * @param {[]} - asideSection
 * @returns {void}
 */
const updateNumberMainSections = (asideSection) => {
  const mainSections = Array.from(
    document.querySelectorAll('[data-name="main"]')
  );

  mainSections.forEach((main) => {
    const mainAction = main.dataset.action;
    const asideElement = asideSection.find(
      (el) => el.dataset.action === mainAction
    );

    const asideNumber = asideElement.querySelector(
      '[data-aside-number="number"]'
    ).textContent;

    main.querySelector('[data-main-number="number"]').textContent = asideNumber;
  });
  savingStateNumbersAsideLS();
  savingStateNumbersMainLS();
};

/**
 * Recalculation of section numbers after deletion (aside block)
 */
const updateNumberAsideSections = () => {
  const asideSection = Array.from(
    document.querySelectorAll('[data-name="aside"]')
  );

  asideSection.forEach((el, i) => {
    const numberSection = el.querySelector('[data-aside-number="number"]');
    numberSection.textContent = i + 1;
  });
  updateNumberMainSections(asideSection);
};

/**
 * Getting container aside and main sections
 * @param {Event} e - button click
 * @returns {void}
 */
export const removeSection = (e) => {
  const asideSection = Array.from(
    document.querySelectorAll('[data-name="aside"]')
  );
  const mainSection = e.target.closest('[data-name="main"]');
  const mainID = mainSection.id;

  removeSectionHandler(asideSection, mainSection);
  updateProductLS(mainSection);
  updateMainLS(mainID);
  updateAsideLS(mainSection);
  updateNumberAsideSections();
};

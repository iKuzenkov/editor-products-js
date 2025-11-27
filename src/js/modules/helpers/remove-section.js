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
    if (el.dataset.action === main.dataset.action) el?.remove(), main?.remove();
  });
};

/**
 * Updates the array, removes object from LS
 * @param {HTMLDivElement} main
 */
const updateProductLS = (mainSection) => {
  let data = JSON.parse(localStorage.getItem("dataMainProduct") || "[]");
  data = data.filter((item) => item.secid !== mainSection.dataset.action);
  localStorage.setItem("dataMainProduct", JSON.stringify(data));
};

/**
 * Updates the array, removes object from LS
 * @param {HTMLDivElement} main
 */
const updateAsideLS = (mainSection) => {
  let data = JSON.parse(localStorage.getItem("dataAside") || "[]");
  data = data.filter(
    (item) => item.aside_data_action !== mainSection.dataset.action
  );
  localStorage.setItem("dataAside", JSON.stringify(data));
};

/**
 * Updates the array, removes object from LS
 * @param {id} - main section id
 */
const updateMainLS = (mainID) => {
  let data = JSON.parse(localStorage.getItem("dataMain") || "[]");
  data = data.filter((item) => item.id !== mainID);
  localStorage.setItem("dataMain", JSON.stringify(data));
};

/**
 * Sections are numbered from main elements (creating a Section)
 * @param {[]} - asideSection
 * @returns {void}
 */
const updateNumberMainSections = (asideSection) => {
  const mainSections = Array.from(document.querySelectorAll(".section-main"));

  mainSections.forEach((main) => {
    const mainAction = main.dataset.action;
    const asideElement = asideSection.find(
      (el) => el.dataset.action === mainAction
    );

    const asideNumber = asideElement.querySelector(
      ".section-aside-number"
    ).textContent;

    main.querySelector(".section-main-number").textContent = asideNumber;
  });
};

/**
 * Recalculation of section numbers after deletion (aside block)
 */
const updateNumberAsideSections = () => {
  const asideSection = Array.from(document.querySelectorAll(".section-aside"));

  asideSection.forEach((el, i) => {
    const numberSection = el.querySelector(".section-aside-number");
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
  const asideSection = Array.from(document.querySelectorAll(".section-aside"));
  const mainSection = e.target.closest(".section-main");
  const mainID = mainSection.id;

  removeSectionHandler(asideSection, mainSection);
  updateProductLS(mainSection);
  updateMainLS(mainID);
  updateAsideLS(mainSection);
  updateNumberAsideSections();
  // updateNumberMainSections();
};

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
};

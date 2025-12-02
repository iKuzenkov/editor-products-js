/**
 * Updates the array, removes object from LS
 * @param {HTMLDivElement} main
 */
export const updateProductLS = (mainSection) => {
  let data = JSON.parse(localStorage.getItem("data_product") || "[]");
  data = data.filter(
    (item) => item.product_data_action !== mainSection.dataset.action
  );
  localStorage.setItem("data_product", JSON.stringify(data));
};

/**
 * Updates the array, removes object from LS
 * @param {HTMLDivElement} main
 */
export const updateAsideLS = (mainSection) => {
  let data = JSON.parse(localStorage.getItem("data_aside") || "[]");
  data = data.filter(
    (item) => item.aside_data_action !== mainSection.dataset.action
  );
  localStorage.setItem("data_aside", JSON.stringify(data));
};

/**
 * Updates the array, removes object from LS
 * @param {id} - main section id
 */
export const updateMainLS = (mainID) => {
  let data = JSON.parse(localStorage.getItem("data_main") || "[]");
  data = data.filter((item) => item.id !== mainID);
  localStorage.setItem("data_main", JSON.stringify(data));
};

/**
 * Rendering of the new (last state) section numbers after refreshing the browser page.
 * @returns {void}
 */
export const savingStateNumbersAsideLS = () => {
  const asideSections = Array.from(
    document.querySelectorAll('[data-name="aside"]')
  );
  const number = asideSections.map(
    (el) => el.querySelector('[data-aside-number="number"]').textContent
  );

  let data = JSON.parse(localStorage.getItem("data_aside") || "[]");
  data = data.map((el, i) => {
    return {
      ...el,
      number: number[i],
    };
  });
  localStorage.setItem("data_aside", JSON.stringify(data));
};

/**
 * Rendering of the new (last state) section numbers after refreshing the browser page.
 * @returns {void}
 */
export const savingStateNumbersMainLS = () => {
  const mainSections = Array.from(
    document.querySelectorAll('[data-name="main"]')
  );
  const number = mainSections.map(
    (el) => el.querySelector('[data-main-number="number"]').textContent
  );

  let data = JSON.parse(localStorage.getItem("data_main") || "[]");
  data = data.map((el, i) => {
    return {
      ...el,
      number: number[i],
    };
  });
  localStorage.setItem("data_main", JSON.stringify(data));
};

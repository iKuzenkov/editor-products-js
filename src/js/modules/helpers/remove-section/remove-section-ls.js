/**
 * Updates the array, removes object from LS
 * @param {HTMLDivElement} main
 */
export const updateProductLS = (mainSection) => {
  let data = JSON.parse(localStorage.getItem("dataMainProduct") || "[]");
  data = data.filter(
    (item) => item.product_data_action !== mainSection.dataset.action
  );
  localStorage.setItem("dataMainProduct", JSON.stringify(data));
};

/**
 * Updates the array, removes object from LS
 * @param {HTMLDivElement} main
 */
export const updateAsideLS = (mainSection) => {
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
export const updateMainLS = (mainID) => {
  let data = JSON.parse(localStorage.getItem("dataMain") || "[]");
  data = data.filter((item) => item.id !== mainID);
  localStorage.setItem("dataMain", JSON.stringify(data));
};

/**
 * Rendering of the new (last state) section numbers after refreshing the browser page.
 * @returns {void}
 */
export const savingStateNumbersAsideLS = () => {
  const asideSections = Array.from(document.querySelectorAll(".section-aside"));
  const number = asideSections.map(
    (el) => el.querySelector(".section-aside-number").textContent
  );

  let data = JSON.parse(localStorage.getItem("dataAside") || "[]");
  data = data.map((el, i) => {
    return {
      ...el,
      number: number[i],
    };
  });
  localStorage.setItem("dataAside", JSON.stringify(data));
};

/**
 * Rendering of the new (last state) section numbers after refreshing the browser page.
 * @returns {void}
 */
export const savingStateNumbersMainLS = () => {
  const mainSections = Array.from(document.querySelectorAll(".section-main"));
  const number = mainSections.map(
    (el) => el.querySelector(".section-main-number").textContent
  );

  let data = JSON.parse(localStorage.getItem("dataMain") || "[]");
  data = data.map((el, i) => {
    return {
      ...el,
      number: number[i],
    };
  });
  localStorage.setItem("dataMain", JSON.stringify(data));
};

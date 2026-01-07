/**
 * Saving the name of products after page reload
 * @param {Array[]} updatedNames
 * @param {string} dataActionSection
 * @param {string} lsKey
 */
export const saveData = (updatedNames, dataActionSection, lsKey) => {
  let data = JSON.parse(localStorage.getItem(lsKey) || "[]");
  data = data.map((p, i) => {
    if (p.product_data_action !== dataActionSection) {
      return p;
    }
    return { ...p, name: updatedNames[i] ?? p.name };
  });
  localStorage.setItem(lsKey, JSON.stringify(data));
};

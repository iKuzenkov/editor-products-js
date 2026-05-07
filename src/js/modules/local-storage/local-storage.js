/**
 * functions for saving and loading data
 */

export const saveToAsideLS = (item) => {
  let data = JSON.parse(localStorage.getItem("data_aside") || "[]");
  data.push(item);
  localStorage.setItem("data_aside", JSON.stringify(data));
};
export const loadAsideFromLS = () => {
  let data = JSON.parse(localStorage.getItem("data_aside") || "[]");
  return data;
};

export const saveToMainLS = (item) => {
  let data = JSON.parse(localStorage.getItem("data_main") || "[]");
  data.push(item);
  localStorage.setItem("data_main", JSON.stringify(data));
};

export const loadMainFromLS = () => {
  let data = JSON.parse(localStorage.getItem("data_main") || "[]");
  return data;
};

export const saveToProductLS = (item) => {
  let data = JSON.parse(localStorage.getItem("data_product") || "[]");
  data.push(item);
  localStorage.setItem("data_product", JSON.stringify(data));
};

export const loadProductFromLS = () => {
  let data = JSON.parse(localStorage.getItem("data_product") || "[]");
  return data;
};

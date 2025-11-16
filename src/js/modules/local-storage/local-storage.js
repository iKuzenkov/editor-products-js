export const saveToAsideLS = (item) => {
  let data = JSON.parse(localStorage.getItem("dataAside") || "[]");
  data.push(item);
  localStorage.setItem("dataAside", JSON.stringify(data));
};
export const loadAsideFromLS = () => {
  let data = JSON.parse(localStorage.getItem("dataAside") || "[]");
  return data;
};

export const saveToMainLS = (item) => {
  let data = JSON.parse(localStorage.getItem("dataMain") || "[]");
  data.push(item);
  localStorage.setItem("dataMain", JSON.stringify(data));
};

export const loadMainFromLS = () => {
  let data = JSON.parse(localStorage.getItem("dataMain") || "[]");
  return data;
};

export const saveToProductLS = (item) => {
  let data = JSON.parse(localStorage.getItem("dataMainProduct") || "[]");
  data.push(item);
  localStorage.setItem("dataMainProduct", JSON.stringify(data));
};

export const loadProductFromLS = () => {
  let data = JSON.parse(localStorage.getItem("dataMainProduct") || "[]");
  return data;
};

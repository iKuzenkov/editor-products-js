export const saveToLS = (item) => {
  let data = JSON.parse(localStorage.getItem("data") || "[]");
  if (!Array.isArray(data)) {
    data = [];
  }
  data.push(item);
  localStorage.setItem("data", JSON.stringify(data));
};

export const loadFromLS = () => {
  let data = JSON.parse(localStorage.getItem("data") || "[]");
  if (!Array.isArray(data)) {
    data = [];
  }
  return data;
};

export const saveToLS = (item) => {
  let data = JSON.parse(localStorage.getItem("dataFromAside") || "[]");
  data.push(item);
  localStorage.setItem("dataFromAside", JSON.stringify(data));
};

export const loadFromLS = () => {
  let data = JSON.parse(localStorage.getItem("dataFromAside") || "[]");
  return data;
};

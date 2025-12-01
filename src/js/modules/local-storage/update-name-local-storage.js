export const updateAsideName = (dataAction, newName) => {
  let data = JSON.parse(localStorage.getItem("dataAside") || "[]");
  data = data.map((item) =>
    item.aside_data_action === dataAction ? { ...item, name: newName } : item
  );
  localStorage.setItem("dataAside", JSON.stringify(data));
};

export const updateMainName = (dataAction, newName, newDescription) => {
  let data = JSON.parse(localStorage.getItem("dataMain") || "[]");
  data = data.map((item) =>
    item.section_data_action === dataAction
      ? { ...item, name: newName, description: newDescription }
      : item
  );
  localStorage.setItem("dataMain", JSON.stringify(data));
};

export const updateProductName = (id, newName, newDescription, newPrice) => {
  let data = JSON.parse(localStorage.getItem("dataMainProduct") || "[]");
  data = data.map((item) =>
    item.id === id
      ? { ...item, name: newName, description: newDescription, price: newPrice }
      : item
  );
  localStorage.setItem("dataMainProduct", JSON.stringify(data));
};

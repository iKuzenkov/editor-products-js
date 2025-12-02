export const updateAsideName = (dataAction, newName) => {
  let data = JSON.parse(localStorage.getItem("data_aside") || "[]");
  data = data.map((item) =>
    item.aside_data_action === dataAction ? { ...item, name: newName } : item
  );
  localStorage.setItem("data_aside", JSON.stringify(data));
};

export const updateMainName = (dataAction, newName, newDescription) => {
  let data = JSON.parse(localStorage.getItem("data_main") || "[]");
  data = data.map((item) =>
    item.section_data_action === dataAction
      ? { ...item, name: newName, description: newDescription }
      : item
  );
  localStorage.setItem("data_main", JSON.stringify(data));
};

export const updateProductName = (id, newName, newDescription, newPrice) => {
  let data = JSON.parse(localStorage.getItem("data_product") || "[]");
  data = data.map((item) =>
    item.id === id
      ? { ...item, name: newName, description: newDescription, price: newPrice }
      : item
  );
  localStorage.setItem("data_product", JSON.stringify(data));
};

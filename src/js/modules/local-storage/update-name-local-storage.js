const updateAsideName = (dataAction, newName) => {
  let data = JSON.parse(localStorage.getItem("dataAside") || "[]");
  data = data.map((item) =>
    item.aside_data_action === dataAction ? { ...item, name: newName } : item
  );
  localStorage.setItem("dataAside", JSON.stringify(data));
};

export const updateNameAsideInLS = (e) => {
  if (!e.target.classList.contains("input-section")) return;
  const section = e.target.closest(".section-aside");
  const dataAction = section.dataset.action;
  const value = e.target.value;
  updateAsideName(dataAction, value);
};

const updateMainName = (dataAction, newName, newDescription) => {
  let data = JSON.parse(localStorage.getItem("dataMain") || "[]");
  data = data.map((item) =>
    item.section_data_action === dataAction
      ? { ...item, name: newName, description: newDescription }
      : item
  );
  localStorage.setItem("dataMain", JSON.stringify(data));
};

export const updateNameMainInLS = (e) => {
  if (!e.target.classList.contains("input-section")) return;
  const section = e.target.closest(".section-main");
  const dataAction = section.dataset.action;
  const nameValue = section.querySelector(".name-section").value;
  const descriptionValue = section.querySelector(".description-section").value;
  updateMainName(dataAction, nameValue, descriptionValue);
};

const updateProductName = (id, newName, newDescription, newPrice) => {
  let data = JSON.parse(localStorage.getItem("dataMainProduct") || "[]");
  data = data.map((item) =>
    item.id === id
      ? { ...item, name: newName, description: newDescription, price: newPrice }
      : item
  );
  localStorage.setItem("dataMainProduct", JSON.stringify(data));
};

export const updateNameProductInLS = (e) => {
  if (
    !e.target.classList.contains("input-name") &&
    !e.target.classList.contains("input-description") &&
    !e.target.classList.contains("input-price")
  ) {
    return;
  }

  const product = e.target.closest(".product");
  if (!product) return;
  const productID = product.id;
  const nameValue = product.querySelector(".input-name").value;
  const descriptionValue = product.querySelector(".input-description").value;
  const priceValue = product.querySelector(".input-price").value;
  updateProductName(productID, nameValue, descriptionValue, priceValue);
};

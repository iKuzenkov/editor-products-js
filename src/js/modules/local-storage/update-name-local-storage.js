const updateName = (id, newName) => {
  let data = JSON.parse(localStorage.getItem("data") || "[]");
  data = data.map((item) =>
    item.id === id ? { ...item, name: newName } : item
  );
  localStorage.setItem("data", JSON.stringify(data));
};

export const updateNameInLS = (e) => {
  if (!e.target.classList.contains("input-section")) return;
  const parentDiv = e.target.closest(".section-aside");
  const id = parentDiv.dataset.action;
  const value = e.target.value;
  updateName(id, value);
};

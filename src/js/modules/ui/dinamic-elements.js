const container = document.querySelector("#container-sections-creation");

const createBtn = (element, elementClass, text, title, place) => {
  if (!place) {
    return console.error("Container not found");
  }
  const el = document.createElement(element);
  el.classList.add(elementClass);
  el.textContent = text;
  el.title = title;
  place.append(el);
  return el;
};

export const createButton = () => {
  return createBtn("button", "btn-add-section", "➕", "add section", container);
};

const createBlock = (element, elementClass, place) => {
  const el = document.createElement(element);
  el.classList.add(elementClass);
  place.append(el);
  return el;
};

export const createDiv = () => {
  return createBlock("div", "added-section", container);
};

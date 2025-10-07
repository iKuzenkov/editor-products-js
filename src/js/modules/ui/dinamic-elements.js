const container = document.querySelector("#container-sections-creation");

const createBtn = (element, elementClass, text, title, space) => {
  if (!space) {
    return console.error("Container not found");
  }
  const el = document.createElement(element);
  el.classList.add(elementClass);
  el.textContent = text;
  el.title = title;
  space.append(el);
  return el;
};

const createBlock = (element, elementClass, space) => {
  if (!space) {
    return console.error("Container not found");
  }
  const el = document.createElement(element);
  el.classList.add(elementClass);
  space.append(el);
  return el;
};

const createInp = (element, elementClass, type, placeholder, space) => {
  if (!space) {
    return console.error("Div (section) not found");
  }
  const el = document.createElement(element);
  el.classList.add(elementClass);
  el.type = type;
  el.placeholder = placeholder;
  space.append(el);
  return el;
};

export const createButton = () => {
  return createBtn("button", "btn-add-section", "➕", "add section", container);
};

export const createDiv = () => {
  return createBlock("div", "div-added-section", container);
};

export const createInput = (parent) => {
  return createInp(
    "input",
    "input-name-section",
    "text",
    "Enter section name",
    parent
  );
};

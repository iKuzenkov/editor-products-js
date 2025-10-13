const createBtn = (element, elementClass, dataAction, text, title, space) => {
  if (!space) {
    return console.error("Container not found (button)");
  }
  const el = document.createElement(element);
  el.classList.add(elementClass);
  el.dataset.action = dataAction;
  el.textContent = text;
  el.title = title;
  space.append(el);
  return el;
};

const createBlock = (element, elementClass, space) => {
  if (!space) {
    return console.error("Container not found (div)");
  }
  const el = document.createElement(element);
  el.classList.add(elementClass);
  space.append(el);
  return el;
};

const createInp = (element, elementClass, type, name, placeholder, space) => {
  if (!space) {
    return console.error("Container not found (input)");
  }
  const el = document.createElement(element);
  el.classList.add(elementClass);
  el.type = type;
  el.name = name;
  el.placeholder = placeholder;
  space.append(el);
  return el;
};

const createChk = (element, elementClass, type, name, dataAction, space) => {
  if (!space) {
    return console.error("Container not found (checkbox)");
  }
  const el = document.createElement(element);
  el.classList.add(elementClass);
  el.type = type;
  el.name = name;
  el.dataset.action = dataAction;
  space.append(el);
  return el;
};

export const createButton = createBtn;
export const createDiv = createBlock;
export const createInput = createInp;
export const createCheckbox = createChk;

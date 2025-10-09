const createBtn = (element, elementClass, text, title, space) => {
  if (!space) {
    return console.error("Container not found (button)");
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

export const createButton = createBtn;
export const createDiv = createBlock;
export const createInput = createInp;

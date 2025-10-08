const container = document.querySelector("#container-sections-creation");

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
    return console.error("Div not found (input)");
  }
  const el = document.createElement(element);
  el.classList.add(elementClass);
  el.type = type;
  el.name = name;
  el.placeholder = placeholder;
  space.append(el);
  return el;
};

export const createButton = (parentBlockAddedSection) => {
  if (parentBlockAddedSection) {
    return createBtn(
      "button",
      "btn-adding-section-main",
      "+",
      "add section",
      parentBlockAddedSection
    );
  }
  return createBtn("button", "btn-add-section", "➕", "add section", container);
};

export const createDiv = (mainConainer) => {
  if (mainConainer) {
    return createBlock("div", "section-created", mainConainer);
  }
  return createBlock("div", "div-setting-sections", container);
};

export const createInput = (parent) => {
  return createInp(
    "input",
    "input-name-section",
    "text",
    "name-section",
    "Enter section name",
    parent
  );
};

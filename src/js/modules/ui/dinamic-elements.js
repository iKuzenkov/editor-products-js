const createBtn = (place, element, elementClass, text, title) => {
  if (!place) {
    return console.error("Container not found");
  }
  const button = document.createElement(element);
  button.classList.add(elementClass);
  button.textContent = text;
  button.title = title;
  place.append(button);
  return button;
};

export const createButton = () => {
  const container = document.querySelector("#container-sections-creation");
  return createBtn(container, "button", "add-section", "➕", "add section");
};

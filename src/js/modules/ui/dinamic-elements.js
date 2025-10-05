const createBtn = (place, element, elementClass, text) => {
  if (!place) {
    return console.error("Container not found");
  }
  const button = document.createElement(element);
  button.classList.add(elementClass);
  button.textContent = text;
  place.append(button);
  return button;
};

export const createButton = () => {
  const container = document.querySelector("#container-sections-creation");
  return createBtn(container, "button", "add-section", "Add Section");
};

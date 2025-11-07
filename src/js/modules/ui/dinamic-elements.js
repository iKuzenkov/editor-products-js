export const createElement = (tag, options = {}, parent) => {
  if (!parent) {
    console.log("Container not found: ", tag);
    return null;
  }
  const el = document.createElement(tag);
  if (options.classList) el.classList.add(...options.classList);
  if (options.text) el.textContent = options.text;
  if (options.attrs)
    Object.entries(options.attrs).forEach(([k, v]) => el.setAttribute(k, v));
  if (parent) parent?.append(el);
  return el;
};

export const generateRandomDataAction = (length = 8, prefix = "id") => {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return `${prefix}-${result}-${Date.now().toString(36)}`;
};

/**
 * class switch on an element
 * @param {HTMLDivElement} child - child element class
 * @returns {void}
 */
const hideHandler = (child) => child?.classList.toggle("hide");

/**
 * checks if a class exists
 *@param {HTMLDivElement} - child element class,
 *@param {HTMLButtonElement} buttonElement - click button
 *@param {Object} options , - used to the swich patterns
 */
const textHandler = (child, buttonElement, options) => {
  const isHidden = !child?.classList.contains("hide");
  const state = isHidden ? "hide" : "show";
  buttonElement.textContent = options.text[state];
  buttonElement.title = options.attrs.title[state];
};

/**
 * hides elements by clicking on a button, call additional function
 * @param {Event} e - get event from function
 * @param {HTMLDivElement} parentClass - parent element class, - which element was clicked on
 * @param {HTMLDivElement} childClass  - child element class, - parent on which the click was made
 * @param {Object} options - options for changing the state
 */
export const hideElements = (e, parentClass, childClass, options = {}) => {
  const buttonElement = e.target;
  const parent = e.target.closest(parentClass);
  const child = parent?.querySelector(childClass);
  hideHandler(child);
  textHandler(child, buttonElement, options);
};

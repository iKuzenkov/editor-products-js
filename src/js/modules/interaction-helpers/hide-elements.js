/**
 * class switch on an element
 * @param {HTMLDivElement} child - child element class
 */

const hideHandler = (child) => child.classList.toggle("hide");

/**
 * checks if a class exists
 *@param {HTMLDivElement} - child element class,
 *@param {HTMLButtonElement} buttonElement - click button
 *@param {Object} options , - used to the swich function
 */

const textHandler = (child, buttonElement, options) => {
  const isHidden = !child.classList.contains("hide");
  const state = isHidden ? "hide" : "show";
  buttonElement.textContent = options.text[state];
  buttonElement.title = options.attrs.title[state];
};

/**
 * hides elements by clicking on a button
 * @param {Event} e - get click event
 * @param {HTMLDivElement} parentSection - parent element, - which element was clicked on
 * @param {HTMLDivElement} childSection  - child element, - parent on which the click was made
 * @param {Object} options - options for changing the state
 */

export const hideElements = (e, parentSection, childSection, options = {}) => {
  const buttonElement = e.target;
  const parent = e.target.closest(parentSection);
  const child = parent.querySelector(childSection);
  hideHandler(child);
  textHandler(child, buttonElement, options);
};

/**
 * creates elements, accepts arguments (tag, attrs, parent)
 * @param {HTMLElement} tag - tag name
 * @param {Object} options - object includes attrb, properties (depends on the parameters passed)
 * @param {HTMLElement} parent - space to add
 * @returns - element
 */

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
  if (parent) parent.append(el);
  return el;
};

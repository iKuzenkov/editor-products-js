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

export const generateRandomDataAction = (length = 8, prefix = "id") => {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return `${prefix}-${result}-${Date.now().toString(36)}`;
};

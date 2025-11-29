/**
 * generate random id, - to bind elements to each other
 * @param {string} length - chars which created from random
 * @param {string} prefix - role as label
 * @returns {void}
 */
export const generateRandomId = (length = 8, prefix = "id") => {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return `${prefix}-${result}-${Date.now().toString(36)}`;
};

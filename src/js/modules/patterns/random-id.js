/**
 * generate random id, - to bind elements to each other
 * @param {Number} length - chars which created from random
 * @param {String} prefix - role as label
 * @param {Number} num - role as radix
 * @returns {void}
 */
export const generateRandomId = (length = 8, prefix = "da", num = 36) => {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return `${prefix}-${result}-${Date.now().toString(num)}`;
};

/**
 * generate random id, - to bind elements to each other
 * @param {Number} length - chars which created from random
 * @param {Number} num - role as radix
 * @returns - id
 */
export const generateRandomId = (length = 8, num = 36) => {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return `${result}-${Date.now().toString(num)}`;
};

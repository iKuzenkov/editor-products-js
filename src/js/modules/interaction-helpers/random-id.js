const ALLOWED_RADIX = [16, 36];

/**
 * Input data validation.
 * @param {Number} length
 * @param {Number} radix
 */
const isValidData = (length, radix) => {
  if (!Number.isInteger(length) || length < 1)
    throw new Error("length should be a positive integer");
  if (!ALLOWED_RADIX.includes(radix))
    throw new Error("radix should be 16 or 36");
};

/**
 * generate random id, - to bind elements to each other
 * @param {Number} length - chars which created from random
 * @param {Number} radix - role as radix
 * @returns {String} - id
 */
export const generateRandomId = (length = 8, radix = 36) => {
  isValidData(length, radix);

  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }

  return `${result}-${Date.now().toString(radix)}`;
};

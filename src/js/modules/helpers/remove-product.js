/**
 * Removes a product element when clicking the "❌" button, inside it
 * @param {Event} - button click
 * @returns {void}
 */
export const removeProduct = (e) => e.target.closest(".product")?.remove();

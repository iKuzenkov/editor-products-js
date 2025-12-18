/**
 * Clicking on delete buttons (delete all UI).
 */
const clearUI = () => {
  const deleteButtons = document.querySelectorAll('[id="6"]');
  deleteButtons.forEach((el) => el.click());
};

/**
 * localStorage - return in initial state.
 */
const clearLocalStorage = () => localStorage.clear();

/**
 * Calling functions to clear data.
 * @param {Event} e
 */
export const clearData = (e) => {
  clearUI();
  clearLocalStorage();
};

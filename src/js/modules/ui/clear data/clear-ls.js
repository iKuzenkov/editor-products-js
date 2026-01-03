/**
 * Removing UI elements.
 */
const clearUI = () => {
  const asideBlock = document.querySelectorAll('[data-name="aside"]');
  asideBlock.forEach((el) => el.remove());

  const mainSections = document.querySelectorAll('[data-name="main"]');
  mainSections.forEach((el) => el.remove());
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

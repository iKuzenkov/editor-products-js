import { onClickAddSectionInAside } from "./onClickAddSectionInAside";
import { onClickAddSectionInMain } from "./onClickAddSectionInMain";

export const setupDelegatedEvents = () => {
  const containerAside = document.querySelector(".container-aside");

  containerAside.addEventListener("click", (e) => {
    if (e.target.closest('[data-action="add-section"]')) {
      onClickAddSectionInAside(e);
    }
    if (e.target.closest('[data-action="add-section-main"]')) {
      onClickAddSectionInMain(e);
    }
  });
};

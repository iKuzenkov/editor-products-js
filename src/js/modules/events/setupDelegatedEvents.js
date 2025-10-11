import { onClickAddSectionInAside } from "./onClickAddSectionInAside";
import { onClickAddSectionInMain } from "./onClickAddSectionInMain";

export const setupDelegatedEvents = () => {
  const containerAside = document.querySelector(".container-aside");

  containerAside.addEventListener("click", (e) => {
    if (e.target.closest(".external-button")) {
      onClickAddSectionInAside(e);
    }
    if (e.target.closest(".inner-button")) {
      onClickAddSectionInMain(e);
    }
  });
};

import {
  createDiv,
  createInput,
  createButton,
} from "../modules/ui/dinamic-elements";

export function registerEvents(btnAddSection) {
  btnAddSection.addEventListener("click", () => {
    const block = createDiv();
    createInput(block);

    const btnAddingSectionWithProducts = createButton(block);
    btnAddingSectionWithProducts.addEventListener("click", () => {
      const mainConainer = document.querySelector("#container-section-created");

      const mainSection = createDiv(mainConainer);
      for (let i = 1; i <= 2; i++) {
        createInput(mainSection);
      }
    });
  });
}

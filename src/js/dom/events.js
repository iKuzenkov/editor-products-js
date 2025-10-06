import { createDiv, createInput } from "../modules/ui/dinamic-elements";

export function registerEvents(btnAddSection) {
  btnAddSection.addEventListener("click", () => {
    const section = createDiv();
    createInput(section);
  });
}

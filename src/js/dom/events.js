import {
  createDiv,
  createInput,
  createButton,
} from "../modules/ui/dinamic-elements";

export function registerEvents(btnContainer) {
  btnContainer.addEventListener("click", () => {
    const section = createDiv();
    createInput(section);
    createButton(section);
  });
}

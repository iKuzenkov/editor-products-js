import { createDiv } from "../modules/ui/dinamic-elements";

export function registerEvents(btnAddSection) {
  btnAddSection.addEventListener("click", createDiv);
}

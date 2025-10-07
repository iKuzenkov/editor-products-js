import "../../styles/style.scss";
import { createButton } from "../modules/ui/dinamic-elements";
import { registerEvents } from "./events";

document.addEventListener("DOMContentLoaded", () => {
  const btnContainer = createButton();
  registerEvents(btnContainer);
});

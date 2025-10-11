import "../../styles/style.scss";
import { renderInitialUI } from "../modules/ui/renderInitialUI";
import { setupDelegatedEvents } from "../modules/events/setupDelegatedEvents";

document.addEventListener("DOMContentLoaded", () => {
  renderInitialUI();
  setupDelegatedEvents();
});

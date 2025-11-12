import "../../styles/style.scss";
import { renderInitialUI } from "../modules/ui/renderInitialUI";
import { setupDelegatedEvents } from "../modules/events/setupDelegatedEvents";
import { renderLocalStorage } from "../modules/local-storage/get-data-local-storage";

document.addEventListener("DOMContentLoaded", () => {
  renderInitialUI();
  setupDelegatedEvents();
  renderLocalStorage();
});

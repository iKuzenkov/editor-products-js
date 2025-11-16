import "../../styles/style.scss";
import { renderInitialUI } from "../modules/ui/renderInitialUI";
import { setupDelegatedEvents } from "../modules/events/setupDelegatedEvents";
import {
  renderAsideLocalStorage,
  renderMainLocalStorage,
  renderProductLocalStorage,
} from "../modules/local-storage/get-data-local-storage";

document.addEventListener("DOMContentLoaded", () => {
  renderInitialUI();
  setupDelegatedEvents();
  renderAsideLocalStorage();
  renderMainLocalStorage();
  renderProductLocalStorage();
});

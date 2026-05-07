import "../../styles/style.scss";
import { renderInitialUI } from "../modules/ui/render-initial-ui";
import { setupDelegatedEvents } from "../modules/events/setup-delegated-events";
import {
  renderAsideLocalStorage,
  renderMainLocalStorage,
  renderProductLocalStorage,
} from "../modules/local-storage/get-data";

document.addEventListener("DOMContentLoaded", () => {
  renderInitialUI();
  setupDelegatedEvents();
  renderAsideLocalStorage();
  renderMainLocalStorage();
  renderProductLocalStorage();
});

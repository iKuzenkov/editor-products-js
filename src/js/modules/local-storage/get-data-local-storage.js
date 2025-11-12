import { loadFromLS } from "./local-storage";
import { renderData } from "./render-data-local-storage";

export const renderLocalStorage = () => {
  const data = loadFromLS();
  data.forEach(renderData);
};

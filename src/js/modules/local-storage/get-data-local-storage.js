import {
  loadAsideFromLS,
  loadMainFromLS,
  loadProductFromLS,
} from "./local-storage";
import {
  renderAsideData,
  renderMainData,
  renderProductData,
} from "./render-data-local-storage";

export const renderAsideLocalStorage = () => {
  const data = loadAsideFromLS();
  data.forEach(renderAsideData);
};

export const renderMainLocalStorage = () => {
  const data = loadMainFromLS();
  data.forEach(renderMainData);
};

export const renderProductLocalStorage = () => {
  const data = loadProductFromLS();
  data.forEach(renderProductData);
};

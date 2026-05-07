import {
  loadAsideFromLS,
  loadMainFromLS,
  loadProductFromLS,
} from "./local-storage";
import { renderAsideData } from "./render-data/render-aside-data";
import { renderMainData } from "./render-data/render-main-data";
import { renderProductData } from "./render-data/render-product-data";

/**
 * rendering data from local storage
 */

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

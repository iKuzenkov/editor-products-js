import { clickElements } from "./click-elements";
import { destructuringData } from "./destructuring-data";

/**
 * the data will be used for the autofill function.
 * @param {Object} data
 */
export const dataInDOM = (data) => {
  clickElements();
  destructuringData(data);
};

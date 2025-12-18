import { clickElements } from "./click-elements";
import { destructuringData } from "./destructuring-data";

/**
 * The data will be used for the autofill function.
 * @param {Object} data
 */
export const dataInDOM = (data) => {
  clickElements();
  destructuringData(data);
};

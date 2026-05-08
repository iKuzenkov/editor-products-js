import { clearData } from "../clear-data/clear-ls";
import { api } from "../../interaction-helpers/api";
import { dataInDOM } from "./get-data";

/**
 * сolling a function that returns the received data from the passed address
 * @param {Event} e - button click
 * @returns {void}
 */
export const getData = async (e) => {
  clearData();

  const data = await api("https://raw.githubusercontent.com/iKuzenkov/portfolio-api-data/refs/heads/main/product-editor/menu-mock-data.json");
  dataInDOM(data);
};

import { clearData } from "../clear-data/clear-ls";
import { api } from "../../interaction-helpers/api";
import { dataInDOM } from "./get-data";

/**
 * сalling a function that returns the received data from the passed address
 * @param {Event} e - button click
 * @returns {void}
 */
export const getData = async (e) => {
  clearData();

  const data = await api("https://jsonhosting.com/api/json/8299afe0/raw");
  dataInDOM(data);
};

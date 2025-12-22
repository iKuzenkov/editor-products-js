import { api } from "../../interaction-helpers/api";
import { dataInDOM } from "./get-data";

/**
 * Calling a pattern that returns the received data from the passed address.
 * @param {Event} e - button click
 * @returns {void}
 */
export const getData = async (e) => {
  const dataExist = document.querySelector('[data-action="add-section-main"]');
  if (dataExist) return;

  const data = await api("https://jsonhosting.com/api/json/8299afe0/raw");
  if (!data) return console.error("Error : Data not received");
  dataInDOM(data);
};

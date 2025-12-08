import { renderSectionData } from "./render-data";

/**
 * Getting array with created sections, each section is the object.
 * Method forEach call callback function for each section.
 *  @returns {void}
 */
export const getSectionDataFromLS = () => {
  let sectionData = JSON.parse(localStorage.getItem("data_main") || "[]");
  sectionData.forEach(renderSectionData);
};

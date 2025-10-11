import { createButton } from "./dinamic-elements";

export const renderInitialUI = () => {
  const containerAside = document.querySelector(".container-aside");
  createButton(
    "button",
    "external-button-aside",
    "Add Section",
    "",
    containerAside
  );
};

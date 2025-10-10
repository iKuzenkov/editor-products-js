import "../../styles/style.scss";
import {
  createDiv,
  createInput,
  createButton,
} from "../modules/ui/dinamic-elements";
import { onClickAddSectionInAside, onClickAddSectionInMain } from "./events";

document.addEventListener("DOMContentLoaded", () => {
  const containerAside = document.querySelector(".container-aside");
  const containerMain = document.querySelector(".container-main");

  const buttonCreateSectionInAside = createButton(
    "button",
    "external-button",
    "Add Section",
    "",
    containerAside
  );

  buttonCreateSectionInAside.addEventListener("click", () => {
    const buttonCreateSectionInMain = onClickAddSectionInAside(containerAside);

    buttonCreateSectionInMain.addEventListener("click", () =>
      onClickAddSectionInMain(containerMain)
    );
  });
});

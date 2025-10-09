import "../../styles/style.scss";
import {
  createDiv,
  createInput,
  createButton,
} from "../modules/ui/dinamic-elements";
import { onClickAddSectionInAside, onClickAddSectionInMain } from "./events";

document.addEventListener("DOMContentLoaded", () => {
  const containerAside = document.querySelector("#container-sections-creation");
  const containerMain = document.querySelector("#container-section-created");

  const buttonCreateSectionInAside = createButton(
    "button",
    "btn-add-section",
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

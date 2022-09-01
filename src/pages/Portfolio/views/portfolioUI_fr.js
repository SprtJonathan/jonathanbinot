import { createElementFromTemplate } from "../../../components/helpers";
import Modal from "../../../components/Modal/Modal";

const portfolioContentFR = createElementFromTemplate(
  "div",
  { class: "portfolio--content", id: "homepage-content" },
  "<h1>Portfolio</h1>",
  ""
);

createElementFromTemplate(
  "div",
  { class: "portfolio--intro", id: "homepage-content" },
  "Voici mon portfolio. Vous avez ici la possibilité de cliquer sur le domaine qui vous intéresse et d'explorer les différents travaux et réalisations que j'ai pu effectuer. Pour commencer, cliquez sur l'une des tuiles ci-dessous.",
  portfolioContentFR
);

function createClickableTile(id, displayName, content) {
  const tileDiv = document.createElement("div");
  tileDiv.setAttribute("id", id);
  tileDiv.setAttribute("class", "tile--container");

  const tileTitle = document.createElement("h2");
  tileTitle.setAttribute("class", "tile--title");
  tileTitle.innerHTML = displayName;
  tileDiv.append(tileTitle);

  console.log(Modal(id + "-modal", displayName, content).htmlCode);
  const tileModal = Modal(id + "-modal", displayName, content);

  tileDiv.append(tileModal);

  let openModal = false;

  tileDiv.addEventListener("click", (e) => {
    e.target.id;
    openModal = true;
  });

  function toggleModal(element, value) {
    // console.log(value === true);
    if (value === true) {
      element.className = "modal--container";
    } else {
      element.className = "hidden";
    }
  }

  toggleModal(tileModal, openModal);

  return tileDiv;
}

portfolioContentFR.append(
  createClickableTile("webdev", "Développement Web", "Bonjour")
);

export { portfolioContentFR };

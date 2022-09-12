import {
  createElementFromTemplate,
  toggleModal,
} from "../../../components/helpers";
import Modal from "../../../components/Modal/Modal";
import {
  portfolioIntro,
  tileId,
  tileText,
  tileContent,
} from "./portfolio_text";

const lang = localStorage.getItem("language");
let importedPortfolioIntro;
if (lang === "fr") {
  importedPortfolioIntro = portfolioIntro.fr;
} else {
  importedPortfolioIntro = portfolioIntro.en;
}

const portfolioContainer = createElementFromTemplate(
  "div",
  { class: "portfolio", id: "" },
  ""
);
const portfolioHeader = createElementFromTemplate(
  "div",
  { class: "portfolio--header", id: "" },
  "<h1>Portfolio</h1>",
  portfolioContainer
);
const portfolioContent = createElementFromTemplate(
  "div",
  { class: "portfolio--content", id: "portfolio-content" },
  "",
  portfolioContainer
);

createElementFromTemplate(
  "div",
  { class: "portfolio--intro", id: "homepage-content" },
  importedPortfolioIntro,
  portfolioHeader
);

function createClickableTile(id, displayName, content, className) {
  let contentClass;
  if (!className) {
    contentClass = "";
  }

  const tileDiv = document.createElement("div");
  tileDiv.setAttribute("id", id);
  tileDiv.setAttribute("class", className + " tile--container");

  const tileTitle = document.createElement("h2");
  tileTitle.setAttribute("class", "tile--title");
  tileTitle.innerHTML = displayName;
  tileDiv.append(tileTitle);

  const tileModal = Modal(
    id + "-modal",
    displayName,
    content,
    "modal-fullscreen"
  );

  console.log(tileModal.htmlCode);
  portfolioContainer.append(tileModal.htmlCode);

  tileDiv.addEventListener("click", () => {
    toggleModal(tileModal.htmlCode, portfolioContainer);
  });

  tileModal.closeButton.addEventListener("click", () => {
    toggleModal(tileModal.htmlCode);
  });

  return tileDiv;
}

for (let i = 0; i < tileContent.length; i++) {
  portfolioContent.append(
    createClickableTile(
      tileId[i],
      tileText[i],
      tileContent[i].innerHTML,
      "tile--container--" + tileId[i]
    )
  );
}

export { portfolioContainer };

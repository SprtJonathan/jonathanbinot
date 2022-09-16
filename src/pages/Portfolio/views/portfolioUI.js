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

import Carousel from "../../../components/Carousel/Carousel";
import HLA1 from "../../../assets/images/portfolio/gamedev/source-2/hla-1.jpg";
import HLA2 from "../../../assets/images/portfolio/gamedev/source-2/hla-2.jpg";
import HLA3 from "../../../assets/images/portfolio/gamedev/source-2/hla-3.jpg";
import HLA4 from "../../../assets/images/portfolio/gamedev/source-2/hla-4.jpg";
import HLA5 from "../../../assets/images/portfolio/gamedev/source-2/hla-5.jpg";
import HLA6 from "../../../assets/images/portfolio/gamedev/source-2/hla-6.jpg";

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

function createClickableTile(
  id,
  displayName,
  content,
  className,
  modalBackgroundName
) {
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
    "modal-fullscreen",
    modalBackgroundName
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
const carouselMedias = [
  {
    type: "image",
    title: "Half-Life Alyx (VR) - Intro",
    link: HLA1,
    description: "dddd",
  },
  {
    type: "image",
    title: "Half-Life Alyx (VR) - Intro",
    link: HLA2,
    description: "",
  },
  {
    type: "image",
    title: "Half-Life Alyx (VR) - Intro",
    link: HLA3,
    description: "",
  },
  {
    type: "image",
    title: "Half-Life Alyx (VR) - Intro",
    link: HLA4,
    description: "",
  },
  {
    type: "image",
    title: "Half-Life Alyx (VR) - Intro",
    link: HLA5,
    description: "",
  },
  {
    type: "image",
    title: "Half-Life Alyx (VR) - Intro",
    link: HLA6,
    description: "",
  },
  {
    type: "video",
    title: "Half-Life Alyx (VR) - Intro",
    link: "https://thumbs.gfycat.com/GrossPaltryIberianlynx-mobile.mp4",
    description: "Vidéo Half life Alyx",
  },
];

const carouselGames = Carousel("source-2", carouselMedias, "");
portfolioContainer.append(carouselGames);

for (let i = 0; i < tileContent.length; i++) {
  portfolioContent.append(
    createClickableTile(
      tileId[i],
      tileText[i],
      tileContent[i].innerHTML,
      "tile--container--" + tileId[i],
      tileId[i]
    )
  );
}

export { portfolioContainer };

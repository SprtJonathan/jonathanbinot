import {
  createElementFromTemplate,
  createListOfLinks,
} from "../../../../../components/helpers";
import Carousel from "../../../../../components/Carousel/Carousel";
import gamedevText from "./gamedev_text";
import HLA1 from "../../../../../assets/images/portfolio/gamedev/source-2/hla-1.jpg";
import HLA2 from "../../../../../assets/images/portfolio/gamedev/source-2/hla-2.jpg";
import HLA3 from "../../../../../assets/images/portfolio/gamedev/source-2/hla-3.jpg";
import HLA4 from "../../../../../assets/images/portfolio/gamedev/source-2/hla-4.jpg";
import HLA5 from "../../../../../assets/images/portfolio/gamedev/source-2/hla-5.jpg";
import HLA6 from "../../../../../assets/images/portfolio/gamedev/source-2/hla-6.jpg";

const lang = localStorage.getItem("language");
let gamedevTitle, importedGamedevText;
if (lang === "fr") {
  gamedevTitle = gamedevText.fr.gamedevTitle;
  importedGamedevText = gamedevText.fr;
} else {
  gamedevTitle = gamedevText.en.gamedevTitle;
  importedGamedevText = gamedevText.en;
}

const gamedevContent = createElementFromTemplate(
  "div",
  { id: "gamedev-content", class: "portfolio--modal-content" },
  "",
  ""
);

createElementFromTemplate(
  "p",
  {},
  importedGamedevText.modalIntroText,
  gamedevContent
);

createElementFromTemplate(
  "h3",
  {},
  importedGamedevText.firstCategoryName,
  gamedevContent
);

createElementFromTemplate(
  "p",
  {},
  importedGamedevText.firstCategoryDescription,
  gamedevContent
);

const carouselMedias = [
  {
    title: "Half-Life Alyx (VR) - Intro",
    link: HLA1,
    description: "dddd",
  },
  {
    title: "Half-Life Alyx (VR) - Intro",
    link: HLA2,
    description: "",
  },
  {
    title: "Half-Life Alyx (VR) - Intro",
    link: HLA3,
    description: "",
  },
  {
    title: "Half-Life Alyx (VR) - Intro",
    link: HLA4,
    description: "",
  },
  {
    title: "Half-Life Alyx (VR) - Intro",
    link: HLA5,
    description: "",
  },
  {
    title: "Half-Life Alyx (VR) - Intro",
    link: HLA6,
    description: "",
  },
];

const carouselGames = Carousel("source-2", carouselMedias, "");

gamedevContent.append(carouselGames);

export { gamedevTitle, gamedevContent };

import {
  createElementFromTemplate,
  createMultipleMediaSection,
} from "../../../../../components/helpers";
import Carousel from "../../../../../components/Carousel/Carousel";
import gamedevText from "./gamedev_text";
import HLA1 from "../../../../../assets/images/portfolio/gamedev/source-2/hla-1.jpg";
import HLA2 from "../../../../../assets/images/portfolio/gamedev/source-2/hla-2.jpg";
import HLA3 from "../../../../../assets/images/portfolio/gamedev/source-2/hla-3.jpg";
import HLA4 from "../../../../../assets/images/portfolio/gamedev/source-2/hla-4.jpg";
import HLA5 from "../../../../../assets/images/portfolio/gamedev/source-2/hla-5.jpg";
import HLA6 from "../../../../../assets/images/portfolio/gamedev/source-2/hla-6.jpg";

import projectUdemyVideo from "../../../../../assets/videos/portfolio/unreal/udemy-project.mp4";
import poldekVideo from "../../../../../assets/videos/portfolio/unreal/poldek.mp4";

import blender1 from "../../../../../assets/images/portfolio/gamedev/blender/jonathan_player-model.gif";
import blender2 from "../../../../../assets/images/portfolio/gamedev/blender/poldek.png";
import blender3 from "../../../../../assets/images/portfolio/gamedev/blender/vending_machine.png";
import blender4 from "../../../../../assets/images/portfolio/gamedev/blender/trainstation_wagons.png";

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

createElementFromTemplate("hr", {}, "", gamedevContent);

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

const carouselGamesMedias = [
  {
    type: "video",
    title: "Half-Life Alyx (VR) - Intro",
    link: "https://thumbs.gfycat.com/GrossPaltryIberianlynx-mobile.mp4",
    description: "",
  },
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
];

const carouselGames = Carousel("source-2", carouselGamesMedias, "");

gamedevContent.append(carouselGames);

createElementFromTemplate("hr", {}, "", gamedevContent);

createElementFromTemplate(
  "h3",
  {},
  importedGamedevText.secondCategoryName,
  gamedevContent
);

createElementFromTemplate(
  "p",
  {},
  importedGamedevText.secondCategoryDescription,
  gamedevContent
);

const carouselUnrealMedias = [
  {
    type: "video",
    title: importedGamedevText.secondCategoryExamplesTitles[0],
    link: projectUdemyVideo,
    description: importedGamedevText.secondCategoryExamplesDescriptions[0],
  },
  {
    type: "video",
    title: importedGamedevText.secondCategoryExamplesTitles[1],
    link: poldekVideo,
    description: importedGamedevText.secondCategoryExamplesDescriptions[1],
  },
];

const carouselUnreal = Carousel("unreal", carouselUnrealMedias, "");

gamedevContent.append(carouselUnreal);

createElementFromTemplate("hr", {}, "", gamedevContent);

createElementFromTemplate(
  "h3",
  {},
  importedGamedevText.thirdCategoryName,
  gamedevContent
);

createElementFromTemplate(
  "p",
  {},
  importedGamedevText.thirdCategoryDescription,
  gamedevContent
);

const carouselBlenderMedias = [
  {
    type: "image",
    title: importedGamedevText.thirdCategoryExamplesTitles[0],
    link: blender1,
    description: importedGamedevText.thirdCategoryExamplesDescription[0],
  },
  {
    type: "image",
    title: importedGamedevText.thirdCategoryExamplesTitles[1],
    link: blender2,
    description: importedGamedevText.thirdCategoryExamplesDescription[1],
  },
  {
    type: "image",
    title: importedGamedevText.thirdCategoryExamplesTitles[2],
    link: blender3,
    description: importedGamedevText.thirdCategoryExamplesDescription[2],
  },
  {
    type: "image",
    title: importedGamedevText.thirdCategoryExamplesTitles[3],
    link: blender4,
    description: importedGamedevText.thirdCategoryExamplesDescription[3],
  },
];

const carouselBlender = Carousel("source-2", carouselBlenderMedias, "");

gamedevContent.append(carouselBlender);

createElementFromTemplate(
  "div",
  { class: "spacer--vertical--medium" },
  "",
  gamedevContent
);
export { gamedevTitle, gamedevContent };

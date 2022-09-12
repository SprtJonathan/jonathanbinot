import {
  webdevTitle,
  webdevContent,
} from "./contents/webdev/webdev_portfolioContent";
import {
  gamedevTitle,
  gamedevContent,
} from "./contents/gamedev/gamedev_portfolioContent";

const portfolioIntro = {
  fr: "Voici mon portfolio. Vous avez ici la possibilité de cliquer sur le domaine qui vous intéresse et d'explorer les différents travaux et réalisations que j'ai pu effectuer. Pour commencer, cliquez sur l'une des tuiles ci-dessous.",
  en: "This is my portfolio. Here you will be able to click on the category you want to see and to explore the different works and realizations I have done. To start, just click on one of the tiles down below.",
};
const tileId = ["webdev", "gamedev"];
const tileText = [webdevTitle, gamedevTitle];
const tileContent = [webdevContent, gamedevContent];

export { portfolioIntro, tileId, tileText, tileContent };

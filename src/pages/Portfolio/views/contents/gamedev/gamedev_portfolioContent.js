import {
  createElementFromTemplate,
  createListOfLinks,
} from "../../../../../components/helpers";
import Carousel from "../../../../../components/Carousel/Carousel";
import gamedevText from "./gamedev_text";

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

const carouselMedias = [
  {
    title: "Test",
    link: "https://media-exp1.licdn.com/dms/image/C4D16AQHAEnDBLhruAQ/profile-displaybackgroundimage-shrink_350_1400/0/1578566742298?e=1668643200&v=beta&t=K5nDyKtpk0deYd9HpryJ9CJXObWYQohqPUbKiUnQCtU",
    description: "BOnjour je suis ",
  },
  {
    title: "Test2",
    link: "https://i.imgur.com/n8dnuFB.png",
    description: "BOnjour je suis ",
  },
];

const carouselGames = Carousel(carouselMedias);

gamedevContent.append(carouselGames);

export { gamedevTitle, gamedevContent };

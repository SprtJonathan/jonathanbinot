import {
  createElementFromTemplate,
  createListOfLinks,
} from "../../../../../components/helpers";
import Carousel from "../../../../../components/Carousel/Carousel";
import gamedevText from "./video-editing_text";

const lang = localStorage.getItem("language");
let videoEditingTitle, importedVideoEditingText;
if (lang === "fr") {
  videoEditingTitle = gamedevText.fr.gamedevTitle;
  importedVideoEditingText = gamedevText.fr;
} else {
  videoEditingTitle = gamedevText.en.gamedevTitle;
  importedVideoEditingText = gamedevText.en;
}

const videoEditingContent = createElementFromTemplate(
  "div",
  { id: "gamedev-content", class: "portfolio--modal-content" },
  "",
  ""
);

createElementFromTemplate(
  "p",
  {},
  importedVideoEditingText.modalIntroText,
  videoEditingContent
);

createElementFromTemplate("hr", {}, "", videoEditingContent);

createElementFromTemplate(
  "h3",
  {},
  importedVideoEditingText.firstCategoryName,
  videoEditingContent
);

createElementFromTemplate(
  "p",
  {},
  importedVideoEditingText.firstCategoryDescription,
  videoEditingContent
);

createElementFromTemplate("hr", {}, "", videoEditingContent);

createElementFromTemplate(
  "h3",
  {},
  importedVideoEditingText.secondCategoryName,
  videoEditingContent
);

createElementFromTemplate(
  "p",
  {},
  importedVideoEditingText.secondCategoryDescription,
  videoEditingContent
);

createElementFromTemplate("hr", {}, "", videoEditingContent);

createElementFromTemplate(
  "h3",
  {},
  importedVideoEditingText.thirdCategoryName,
  videoEditingContent
);

createElementFromTemplate(
  "p",
  {},
  importedVideoEditingText.thirdCategoryDescription,
  videoEditingContent
);

createElementFromTemplate(
  "div",
  { class: "spacer--vertical--medium" },
  "",
  videoEditingContent
);
export { videoEditingTitle, videoEditingContent };

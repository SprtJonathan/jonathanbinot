import {
  createElementFromTemplate,
  createListOfLinks,
} from "../../../../../components/helpers";
import Carousel from "../../../../../components/Carousel/Carousel";
import videoEditingText from "./video-editing_text";

const lang = localStorage.getItem("language");
let videoEditingTitle, importedVideoEditingText;
if (lang === "fr") {
  videoEditingTitle = videoEditingText.fr.videoEditingTitle;
  importedVideoEditingText = videoEditingText.fr;
} else {
  videoEditingTitle = videoEditingText.en.videoEditingTitle;
  importedVideoEditingText = videoEditingText.en;
}

const videoEditingContent = createElementFromTemplate(
  "div",
  { id: "videoEditing-content", class: "portfolio--modal-content" },
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
  "WIP",
  videoEditingContent
);

export { videoEditingTitle, videoEditingContent };

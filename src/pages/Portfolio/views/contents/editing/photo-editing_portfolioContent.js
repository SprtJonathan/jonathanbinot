import {
  createElementFromTemplate,
  createListOfLinks,
} from "../../../../../components/helpers";
import Carousel from "../../../../../components/Carousel/Carousel";
import gamedevText from "./photo-editing_text";

const lang = localStorage.getItem("language");
let photoEditingTitle, importedPhotoEditingText;
if (lang === "fr") {
  photoEditingTitle = gamedevText.fr.gamedevTitle;
  importedPhotoEditingText = gamedevText.fr;
} else {
  photoEditingTitle = gamedevText.en.gamedevTitle;
  importedPhotoEditingText = gamedevText.en;
}

const photoEditingContent = createElementFromTemplate(
  "div",
  { id: "gamedev-content", class: "portfolio--modal-content" },
  "",
  ""
);

createElementFromTemplate(
  "p",
  {},
  importedPhotoEditingText.modalIntroText,
  photoEditingContent
);

createElementFromTemplate("hr", {}, "", photoEditingContent);

createElementFromTemplate(
  "h3",
  {},
  importedPhotoEditingText.firstCategoryName,
  photoEditingContent
);

createElementFromTemplate(
  "p",
  {},
  importedPhotoEditingText.firstCategoryDescription,
  photoEditingContent
);

createElementFromTemplate("hr", {}, "", photoEditingContent);

createElementFromTemplate(
  "h3",
  {},
  importedPhotoEditingText.secondCategoryName,
  photoEditingContent
);

createElementFromTemplate(
  "p",
  {},
  importedPhotoEditingText.secondCategoryDescription,
  photoEditingContent
);

createElementFromTemplate("hr", {}, "", photoEditingContent);

createElementFromTemplate(
  "h3",
  {},
  importedPhotoEditingText.thirdCategoryName,
  photoEditingContent
);

createElementFromTemplate(
  "p",
  {},
  importedPhotoEditingText.thirdCategoryDescription,
  photoEditingContent
);

createElementFromTemplate(
  "div",
  { class: "spacer--vertical--medium" },
  "",
  photoEditingContent
);
export { photoEditingTitle, photoEditingContent };

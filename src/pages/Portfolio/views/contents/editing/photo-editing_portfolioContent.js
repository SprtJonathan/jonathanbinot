import {
  createElementFromTemplate,
} from "../../../../../components/helpers";
import Carousel from "../../../../../components/Carousel/Carousel";
import photoEditingText from "./photo-editing_text";

const lang = localStorage.getItem("language");
let photoEditingTitle, importedPhotoEditingText;
if (lang === "fr") {
  photoEditingTitle = photoEditingText.fr.photoEditingTitle;
  importedPhotoEditingText = photoEditingText.fr;
} else {
  photoEditingTitle = photoEditingText.en.photoEditingTitle;
  importedPhotoEditingText = photoEditingText.en;
}

const photoEditingContent = createElementFromTemplate(
  "div",
  { id: "photoEditing-content", class: "portfolio--modal-content" },
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

createElementFromTemplate("h3", {}, "WIP", photoEditingContent);

export { photoEditingTitle, photoEditingContent };

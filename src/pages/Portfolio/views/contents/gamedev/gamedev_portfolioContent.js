import {
  createElementFromTemplate,
  createListOfLinks,
} from "../../../../../components/helpers";
import webdevText from "./gamedev_text";

const lang = localStorage.getItem("language");
let importedWebdevText;
if (lang === "fr") {
  importedWebdevText = webdevText.fr;
} else {
  importedWebdevText = webdevText.en;
}

const webdevContent = createElementFromTemplate(
  "div",
  { id: "webdev-content", class: "portfolio--modal-content" },
  "",
  ""
);

createElementFromTemplate(
  "p",
  {},
  importedWebdevText.modalIntroText,
  webdevContent
);

createElementFromTemplate(
  "h3",
  {},
  importedWebdevText.firstFormationTitle,
  webdevContent
);

createListOfLinks(
  importedWebdevText.webdevLinks,
  importedWebdevText.webdevTitles,
  webdevContent
);

createElementFromTemplate(
  "h3",
  {},
  importedWebdevText.secondFormationTitle,
  webdevContent
);

createListOfLinks(
  importedWebdevText.frontendLinks,
  importedWebdevText.frontendTitles,
  webdevContent
);

createElementFromTemplate(
  "p",
  {},
  importedWebdevText.personalProjectFailed,
  webdevContent
);

createElementFromTemplate(
  "p",
  {},
  importedWebdevText.personalProjectRebooted,
  webdevContent
);

createElementFromTemplate(
  "h3",
  {},
  importedWebdevText.jsBaseTitle,
  webdevContent
);

const jsBase = createElementFromTemplate(
  "div",
  { class: "iframe--wrapper" },
  "",
  webdevContent
);

createElementFromTemplate(
  "iframe",
  {
    class: "iframe",
    src: "https://sprtjonathan.github.io/js-project-base/  ",
    frameborder: "0",
  },
  "",
  jsBase
);

createElementFromTemplate(
  "p",
  {},
  importedWebdevText.administrativeManagerDescription,
  webdevContent
);

createElementFromTemplate(
  "p",
  {},
  importedWebdevText.developperMotto,
  webdevContent
);

export default webdevContent;

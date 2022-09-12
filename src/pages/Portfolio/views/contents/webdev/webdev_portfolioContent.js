import {
  createElementFromTemplate,
  createListOfLinks,
} from "../../../../../components/helpers";
import webdevText from "./webdev_text";

const lang = localStorage.getItem("language");
let webdevTitle, importedWebdevText;
if (lang === "fr") {
  webdevTitle = webdevText.fr.modalTitle;
  importedWebdevText = webdevText.fr;
} else {
  webdevTitle = webdevText.en.modalTitle;
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

createElementFromTemplate("hr", {}, "", webdevContent);
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

createElementFromTemplate("hr", {}, "", webdevContent);
createElementFromTemplate(
  "p",
  {},
  importedWebdevText.administrativeManagerDescription,
  webdevContent
);

createElementFromTemplate(
  "h3",
  {},
  importedWebdevText.administrativeManagerTitle,
  webdevContent
);

const adminManager = createElementFromTemplate(
  "div",
  { class: "iframe--wrapper" },
  "",
  webdevContent
);

createElementFromTemplate(
  "iframe",
  {
    class: "iframe",
    src: "https://sprtjonathan.github.io/AdministrativeManager/",
    frameborder: "0",
  },
  "",
  adminManager
);

createElementFromTemplate(
  "p",
  {},
  importedWebdevText.developperMotto,
  webdevContent
);

createElementFromTemplate(
  "div",
  { class: "spacer--vertical--medium" },
  "",
  webdevContent
);

export { webdevTitle, webdevContent };

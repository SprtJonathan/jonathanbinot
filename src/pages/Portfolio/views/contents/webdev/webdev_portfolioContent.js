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

const demoJSBaseButton = createElementFromTemplate(
  "button",
  { class: "iframe--button" },
  importedWebdevText.administrativeManagerToggleButton,
  webdevContent
);

const jsBase = createElementFromTemplate(
  "div",
  { class: "iframe--wrapper" },
  "",
  webdevContent
);

const jsBaseDemo = createElementFromTemplate(
  "iframe",
  {
    class: "iframe",
    src: "",
    frameborder: "0",
  },
  "",
  jsBase
);

demoJSBaseButton.addEventListener("click", (e) => {
  console.log(e);
  jsBaseDemo.src = "https://sprtjonathan.github.io/js-project-base/ ";
});

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

const demoAdminManagerButton = createElementFromTemplate(
  "button",
  { class: "iframe--button" },
  importedWebdevText.administrativeManagerToggleButton,
  webdevContent
);

const adminManager = createElementFromTemplate(
  "div",
  { class: "iframe--wrapper" },
  "",
  webdevContent
);

const adminManagerDemo = createElementFromTemplate(
  "iframe",
  {
    class: "iframe",
    src: "",
    frameborder: "0",
  },
  "",
  adminManager
);

demoAdminManagerButton.addEventListener("click", (e) => {
  console.log(e);
  adminManagerDemo.src =
    "https://sprtjonathan.github.io/AdministrativeManager/";
});

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

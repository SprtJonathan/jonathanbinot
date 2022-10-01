import { createElementFromTemplate } from "../../components/helpers";

import flagFr from "../../assets/images/languages/FR.png";
import flagEn from "../../assets/images/languages/EN.png";

export function LanguageSelector() {
  const lang = localStorage.getItem("language");

  if (lang != null && lang == "fr") {
    window.location.href = "/";
  } else if (lang != null && lang == "en") {
    window.location.href = "/";
  }

  const selector = document.createElement("main");
  selector.innerHTML += "<h1>Choix de la langue / Select language</h1>";

  const errorDiv = createElementFromTemplate(
    "div",
    { class: "error-404--go-back" },
    "",
    selector
  );

  const setLangFRLink = createElementFromTemplate(
    "a",
    { class: "error-404--go-back--button", href: "/" },
    "",
    errorDiv
  );

  const frLinkContentDiv = createElementFromTemplate(
    "div",
    { class: "error-404--go-back--link" },
    "",
    setLangFRLink
  );

  createElementFromTemplate(
    "img",
    { class: "language-flag", src: flagFr, width: 64, height: 64 },
    "",
    frLinkContentDiv
  );
  createElementFromTemplate("br", {}, "", frLinkContentDiv);
  createElementFromTemplate(
    "div",
    { class: "error-404--go-back--text" },
    "Retour à la page d'accueil",
    frLinkContentDiv
  );

  const setLangENLink = createElementFromTemplate(
    "a",
    { class: "error-404--go-back--button", href: "/" },
    "",
    errorDiv
  );

  const enLinkContentDiv = createElementFromTemplate(
    "div",
    { class: "error-404--go-back--link" },
    "",
    setLangENLink
  );

  createElementFromTemplate(
    "img",
    { class: "language-flag", src: flagEn, width: 64, height: 64 },
    "",
    enLinkContentDiv
  );
  createElementFromTemplate("br", {}, "", setLangENLink);
  createElementFromTemplate(
    "div",
    { class: "error-404--go-back--text" },
    "Retour à la page d'accueil",
    enLinkContentDiv
  );

  frLinkContentDiv.addEventListener("click", (e) => {
    localStorage.setItem("language", "fr");
  });
  enLinkContentDiv.addEventListener("click", (e) => {
    localStorage.setItem("language", "en");
  });

  return selector;
}

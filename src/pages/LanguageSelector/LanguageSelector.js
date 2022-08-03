import flagFr from "../../assets/images/languages/FR.png";
import flagEn from "../../assets/images/languages/EN.png";

export function LanguageSelector() {
  const lang = localStorage.getItem("language");

  if (lang != null && lang == "fr") {
    window.location.href = "/" + lang + "/";
  } else if (lang != null && lang == "en") {
    window.location.href = "/" + lang + "/";
  }

  const selector = document.createElement("main");
  selector.innerHTML += "<h1>Choix de la langue / Select language</h1>";
  selector.innerHTML += `
  <div class="error-404--go-back">
    <a class="error-404--go-back--button" href="/fr/">
      <div class="error-404--go-back--link"><img class="language-flag" src="${flagFr}" width=64 height=64> 
        </br> 
        <div class="error-404--go-back--text">Retour à la page d'accueil</div>
      </div>
    </a>
    <a class="error-404--go-back--button" href="/en/">
      <div class="error-404--go-back--link"><img class="language-flag" src="${flagEn}" width=64 height=64>
        </br> 
        <div class="error-404--go-back--text">Go back to the homepage</div>
      </div>
    </a>
  </div>
  `;
  return selector;
}

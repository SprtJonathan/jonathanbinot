import flagFr from "../../assets/images/languages/FR.png";
import flagEn from "../../assets/images/languages/EN.png";

export function LanguageSelector() {
  const lang = localStorage.getItem("language");
  const selector = document.createElement("main");
  selector.innerHTML += "<h1>Choix</h1>";
  selector.innerHTML += `<a class="navbar--button"
  href="/${lang}/${window.location.pathname.split("/")[2]}"
>
  <img id="select-fr" class="language-flag" src="${flagFr}" width=48 height=48>
</a>
<a class="navbar--button"
  href="/${lang}/${window.location.pathname.split("/")[2]}"
>
  <img id="select-en" class="language-flag" src="${flagEn}" width=48 height=48>
</a>`;
  return selector;
}

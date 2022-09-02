import flagFr from "../../../assets/images/languages/FR.png";
import flagEn from "../../../assets/images/languages/EN.png";

const errorUI = document.createElement("div");

errorUI.innerHTML = `
<h1>ERREUR 404</h1>
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

export default errorUI;

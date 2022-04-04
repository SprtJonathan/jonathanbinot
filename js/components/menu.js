/* Fichier dédié à la gestion du composant menu du site */

// const websiteLang = localStorage.getItem("lang"); // Variable dédiée utilisée pour connaître la langue du site
// console.log(websiteLang)

// Nom de pages (langue par défaut)
let pageNames = [
  `<i class="fa-solid fa-house"></i>`,
  "Mon CV",
  "Portfolio",
  "Contact",
]; // Ajouter autant de pages que souhaité en ajoutant un nom dans le tableau
// Nom de pages (langue supplémentaire)
// let pageNamesSecondaryLanguage = ["Homepage", "Page 2"]

let pageLinks = ["../index.html", "./resume.html", "./portfolio.html", "isContactPressed()"]; // Links to the different pages (has to be in order)

class Menu extends HTMLElement {
  constructor(theme, navbarExpanded) {
    super();
    this.theme = "";
    this.navbarExpanded = false;
  }

  connectedCallback() {
    const navbar = createHTMLCode("nav", ["id", "class"], ["navbar", "navbar"]);
    const navbarUl = createHTMLCode(
      "ul",
      ["id", "class"],
      ["navbar-buttons-block", "navbar--block"],
      navbar
    );

    //if (websiteLang == "fr") { // Commenté par défaut. A décommenter si plusieurs langues sont utiliées

    for (i = 0; i < pageNames.length; i++) {
      let navbarLi = createHTMLCode("li", "class", "navbar--li", navbarUl);

      let navbarLink = createHTMLCode(
        "a",
        "class",
        "navbar--button",
        navbarLi,
        pageNames[i]
      );
      navbarLink.setAttribute("id", pageNames[i].toLowerCase() + "-button");
      if (pageLinks[i]) {
        if (!pageLinks[i].startsWith(".") && pageLinks[i]) {
          navbarLink.setAttribute("href", "#" + pageNames[i]);
          navbarLink.setAttribute("onclick", pageLinks[i]);
        } else if (pageLinks[i].startsWith(".")) {
          navbarLink.setAttribute("href", pageLinks[i]);
        }
      }
    }
    //}
    /*if (websiteLang == "en") { // Commenté par défaut. A décommenter si plusieurs langues sont utiliées
      for (i = 0; i < pageNamesSecondaryLanguage.length; i++) {
        createHTMLCode(
          "li",
          "class",
          "navbar--button",
          navbarUl,
          pageNamesSecondaryLanguage[i]
        );
      }
    }*/

    /* const nightmodeLi = createHTMLCode( // Button supplémentaire du menu pour changer le thème du site (si mode sombre)
      "li",
      "class",
      "dark-mode-button",
      navbarUl
    );
    
     const nightmodeSunIcon = createHTMLCode(
      "i",
      "class",
      "fa fa-solid fa-sun",
      nightmodeLi
    );

    const nightmodeLabel = createHTMLCode(
      "label",
      "class",
      "switch",
      nightmodeLi
    );
    createHTMLCode(
      "input",
      ["type", "id", "onclick", "aria-label"],
      [
        "checkbox",
        "dark-mode-button",
        "toggleTheme()",
        "Changer le thème de la page",
      ],
      nightmodeLabel
    );

    createHTMLCode("span", "class", "slider round", nightmodeLabel);

    const nightmodeMoonIcon = createHTMLCode(
      "i",
      "class",
      "fa fa-solid fa-moon",
      nightmodeLi
    );
    */

    let componentTag = document.getElementsByTagName("website-menu");
    console.log(componentTag);
    componentTag[0].appendChild(navbar);
  }
}
customElements.define("website-menu", Menu);

// élément présent sur chaque page permettant d'identifier la page actuelle
let pageName = document.getElementById("page-marker").innerHTML;

// La fonction suivante permet de changer le style des boutons du menu afin de donner un retour visuel sur la page actuelle
setActivePage();

function setActivePage() {
  for (i = 0; i < pageNames.length; i++) {
    if (pageName == pageNames[i]) {
      document.getElementById(
        pageNames[i].toLowerCase() + "-button"
      ).className = "active navbar--button";
    } else {
      document.getElementById(
        pageNames[i].toLowerCase() + "-button"
      ).className = "navbar--button";
      console.log(pageNames[i] == pageName);
    }
  }
}

/* // Fonction permettant de changer le thème du site (en cas de mode sombre)
function toggleTheme() {
  Menu.theme = localStorage.getItem("theme");
  if (Menu.theme == "darkMode") {
    //darkModeButton.innerHTML = `<i class="fa fa-solid fa-moon"></i>`;
    document.documentElement.setAttribute("data-theme", ""); // sets the data-theme attribute
    localStorage.setItem("theme", ""); // stores theme value on local storage
    darkModeButton.removeAttribute("checked");
  } else {
    //darkModeButton.innerHTML = `<i class="fa fa-solid fa-sun"></i>`;
    document.documentElement.setAttribute("data-theme", "darkMode"); // sets the data-theme attribute
    localStorage.setItem("theme", "darkMode"); // stores theme value on local storage
    darkModeButton.setAttribute("checked", "");
  }
}
*/

/* // Changer la langue du site
function setLanguageFr() {
  localStorage.setItem("language", "fr");
  location.reload();
}

function setLanguageEn() {
  localStorage.setItem("language", "en");
  location.reload();
}
*/

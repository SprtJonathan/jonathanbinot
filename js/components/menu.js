/* Fichier dédié à la gestion du composant menu du site */

class Menu extends HTMLElement {
  constructor(theme, navbarExpanded, contactPressed) {
    super();
    this.theme = "";
    this.navbarExpanded = false;
    this.contactPressed = false;
  }

  connectedCallback() {
    this.innerHTML = `
    <header class="header--classic">
      <button id="menu-button" class="open-menu" onclick="expandNavbar()">
      <i class="fa fa fa-solid fa-chevron-left"></i>
      </button>
      <ul id="navbar" class="navbar--folded">
        <li>
          <a id="menu-page-homepage" href="" class="active"
            >HOMEPAGE</a
          >
        </li>
        <li>
          <a id="menu-page-resume"  href="./resume.html" class="cv-page"
            >MY RESUME</a
          >
        </li>
        <li>
          <a id="menu-page-portfolio" href="./portfolio.html" class="portfolio-page"
            >MY PORTFOLIO</a
          >
        </li>
        <li>
          <a id="menu-page-contact" href="#contact" class="contact-page" onclick="isContactPressed()">
            CONTACT
          </a>
        </li>
        <li>
          <button onclick="setLanguageFr()" class="flag fr">
            <img
              src="/public/assets/images/FR.png"
              alt="version FR"
              class="fr-flag"
              height="32"
              width="32"
            />
          </button>
        </li>
        <li class="dark-mode-button">
        <i class="fa fa-solid fa-sun"></i>
          <!-- Rounded switch -->
          <label class="switch">
            <input type="checkbox" id="dark-mode-button" onclick="toggleTheme()" aria-label="Toggle themes"/>
            <span class="slider round"></span>
            <i class="fa fa-solid fa-moon"></i>
          </label>
          <i class="fa fa-solid fa-moon"></i>
        </li>
      </ul>
    </header>
  `;
  }
}

customElements.define("website-menu", Menu);

/* Reste des fonctions associées au menu */

if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "");
}
Menu.theme = localStorage.getItem("theme");

document.documentElement.setAttribute("data-theme", Menu.theme); // sets the data-theme attribute

let darkModeButton = document.getElementById("dark-mode-button");

if (Menu.theme == "darkMode") {
  darkModeButton.setAttribute("checked", "");
}

let pageName = document.getElementById("page-marker").textContent;

let homepageMenuButton = document.getElementById("menu-page-homepage");
let resumeMenuButton = document.getElementById("menu-page-resume");
let portfolioMenuButton = document.getElementById("menu-page-portfolio");
let contactMenuButton = document.getElementById("menu-page-contact");

setActivePage();

function setActivePage() {
  switch (pageName) {
    case "homepage":
      homepageMenuButton.className = "active menu--button homepage";
      resumeMenuButton.className = "menu--button cv-page";
      portfolioMenuButton.className = "menu--button portfolio-page";
      contactMenuButton.className = "menu--button contact-page";
      break;
    case "resume":
      homepageMenuButton.className = "menu--button homepage";
      resumeMenuButton.className = "active menu--button cv-page";
      portfolioMenuButton.className = "menu--button portfolio-page";
      contactMenuButton.className = "menu--button contact-page";
      break;
    case "portfolio":
      homepageMenuButton.className = "menu--button homepage";
      resumeMenuButton.className = "menu--button cv-page";
      portfolioMenuButton.className = "active menu--button portfolio-page";
      contactMenuButton.className = "menu--button contact-page";
      break;
  }
}

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
function setLanguageFr() {
  localStorage.setItem("language", "fr");
  location.reload();
}

function expandNavbar() {
  let navbarElement = document.getElementById("navbar");
  let openMenuButton = document.getElementById("menu-button");
  Menu.navbarExpanded = !Menu.navbarExpanded;
  if (Menu.navbarExpanded) {
    navbarElement.className = "navbar--expanded";
    openMenuButton.className = "open-menu--opened";
    openMenuButton.innerHTML = `<svg data-v-5c998570="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right"><path data-v-5c998570="" fill="currentColor" d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" class=""></path></svg>`;

    console.log(Menu.navbarExpanded);
  } else {
    navbarElement.className = "navbar--folded";
    openMenuButton.className = "open-menu";
    openMenuButton.innerHTML = `<svg data-v-5c998570="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-left"><path data-v-5c998570="" fill="currentColor" d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z" class=""></path></svg>`;
  }
}

let contactFormBlock = document.getElementById("contact-form-block");
contactFormBlock.style.display = "none";

function isContactPressed() {
  Menu.contactPressed = !Menu.contactPressed;
  if (Menu.contactPressed) {
    contactFormBlock.style.display = "flex";
    homepageMenuButton.className = "menu--button homepage";
    resumeMenuButton.className = "menu--button cv-page";
    portfolioMenuButton.className = "menu--button portfolio-page";
    contactMenuButton.className = "active menu--button contact-page";
  } else {
    contactFormBlock.style.display = "none";
    setActivePage();
  }
  console.log(Menu.contactPressed);
}

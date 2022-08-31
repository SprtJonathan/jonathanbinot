import Modal from "../Modal/Modal";
import flagFr from "../../assets/images/languages/FR.png";
import flagEn from "../../assets/images/languages/EN.png";

export function Header(activePage) {
  const currentPage = activePage;

  const lang = localStorage.getItem("language");

  const navbar = document.createElement("nav");
  navbar.setAttribute("class", "navbar");
  navbar.setAttribute("id", "navbar-container");

  const navbarDisplayButton = document.createElement("div");
  navbarDisplayButton.setAttribute("id", "display-menu-button");
  navbarDisplayButton.setAttribute("class", "navbar--toggle");
  navbarDisplayButton.innerHTML = `<i class="navbar--toggle--icon fa-solid fa-bars" id="display-menu-icon"></i>`;

  const nav = document.createElement("div");
  nav.setAttribute("class", "hidden navbar--menu");
  nav.setAttribute("id", "navbar");

  navbar.append(nav);

  let homepageClass = "navbar--button";
  let resumeClass = "navbar--button";
  let portfolioClass = "navbar--button";

  const setActivePage = (page) => {
    if (page == "home") {
      homepageClass = "navbar--button active";
      resumeClass = "navbar--button";
      portfolioClass = "navbar--button";
    } else if (page == "resume") {
      homepageClass = "navbar--button";
      resumeClass = "navbar--button active";
      portfolioClass = "navbar--button";
    } else if (page == "portfolio") {
      homepageClass = "navbar--button";
      resumeClass = "navbar--button";
      portfolioClass = "navbar--button active";
    }
  };

  setActivePage(currentPage);

  if (lang == "fr") {
    /* French version of the header */
    nav.innerHTML = `
      <ul id="navbar-buttons-block" class="navbar--block">
      <div class="modal--blur"></div>
        <li class="navbar--li">
          <a
            class="${homepageClass}"
            id='home'
            href="/${lang}/"
            
          >
            <i class="fa-solid fa-house"></i>
          </a>
        </li>
        <li class="navbar--li">
          <a class="${resumeClass}" id="resume" href="/${lang}/resume" >
            Mon CV
          </a>
        </li>
        <li class="navbar--li">
          <a
            class="${portfolioClass}"
            id="portfolio"
            href="/${lang}/portfolio"
            
          >
            Portfolio
          </a>
        </li>
        <li class="navbar--li">
          <a class="navbar--button"
             id="contact-button" 
             data-target="contact-modal"
             data-toggle="modal"
          >
            Contact
          </a>
        </li>
        <li class="navbar--li">
          <a class="navbar--button" id="language-menu-button">
            Langue
          </a>
          <div id="language-menu" class="hidden">
            <a class="navbar--button">
              <img id="select-fr" class="language-flag" src="${flagFr}" width=48 height=48>
            </a>
            <a class="navbar--button"
            >
              <img id="select-en" class="language-flag" src="${flagEn}" width=48 height=48>
            </a>
          </div>
        </li>
      </ul>
  `;
    const contactForm = `
      <form class="contact-form">
          <!--<div class="contact-form--category contact-form name">
              <label for="name">Nom</label>
              <input class="contact-form--input" type="text" name="name" />
          </div>
          <div class="contact-form--category contact-form email">
              <label for="email">Email</label>
              <input class="contact-form--input" type="email" name="email" />
          </div>
          <div class="contact-form--category contact-form object">
              <label for="object">Objet</label>
              <input class="contact-form--input" type="text" name="object" />
          </div>
          <div class="contact-form--category contact-form message">
              <label for="message">Message</label>
              <textarea class="contact-form--input" name="message"></textarea>
          </div>-->
          <div class="contact-form--buttons">
              <!--<input type="submit" id="send-email" class="button button--base"  value="Envoyer"/>      
              <button id="close-modal-cancel" class="button button--base--inverted">Annuler</button>-->
              <a class="contact-form--link" href="mailto:jonathanbinot@gmail.com"
              >Me contacter par Mail <i class="fas fa-external-link-alt"></i
            ></a>
          </div>
          
      </form>
  `;
    navbar.append(Modal("contact-modal", "Contactez moi", contactForm));
    navbar.append(navbarDisplayButton);
  } else {
    /* English version of the header */
    nav.innerHTML = `
      <ul id="navbar-buttons-block" class="navbar--block">
      <div class="modal--blur"></div>
        <li class="navbar--li">
          <a
            class="${homepageClass}"
            id='home'
            href="/${lang}/"
            
          >
            <i class="fa-solid fa-house"></i>
          </a>
        </li>
        <li class="navbar--li">
          <a class="${resumeClass}" id="resume" href="/${lang}/resume" >
            My resume
          </a>
        </li>
        <li class="navbar--li">
          <a
            class="${portfolioClass}"
            id="portfolio"
            href="/${lang}/portfolio"
            
          >
            Portfolio
          </a>
        </li>
        <li class="navbar--li">
          <a class="navbar--button"
             id="contact-button" 
             data-target="contact-modal"
             data-toggle="modal"
          >
            Contact me
          </a>
        </li>
        <li class="navbar--li">
          <a class="navbar--button" id="language-menu-button">
            Switch language
          </a>
          <div id="language-menu" class="hidden">
            <a class="navbar--button"
              
            >
              <img id="select-fr" class="language-flag" src="${flagFr}" width=48 height=48>
            </a>
            <a class="navbar--button"
              
            >
              <img id="select-en" class="language-flag" src="${flagEn}" width=48 height=48>
            </a>
          </div>
        </li>
      </ul>
  `;
    const contactForm = `
      <form class="contact-form">
          <!--<div class="contact-form--category contact-form name">
              <label for="name">Name</label>
              <input class="contact-form--input" type="text" name="name" />
          </div>
          <div class="contact-form--category contact-form email">
              <label for="email">Email</label>
              <input class="contact-form--input" type="email" name="email" />
          </div>
          <div class="contact-form--category contact-form object">
              <label for="object">Object</label>
              <input class="contact-form--input" type="text" name="object" />
          </div>
          <div class="contact-form--category contact-form message">
              <label for="message">Message</label>
              <textarea class="contact-form--input" name="message"></textarea>
          </div>
          <div class="contact-form--buttons">
            <input type="submit" id="send-email" class="button button--base"  value="Send"/>      
            <button id="close-modal-cancel" class="button button--base--inverted">Cancel</button>
          </div>-->
          <div class="contact-form--buttons">
              <!--<input type="submit" id="send-email" class="button button--base"  value="Send"/>      
              <button id="close-modal-cancel" class="button button--base--inverted">Cancel</button>-->
              <a class="contact-form--link" href="mailto:jonathanbinot@gmail.com"
              >Write me an email <i class="fas fa-external-link-alt"></i
            ></a>
          </div>
      </form>
  `;
    navbar.append(Modal("contact-modal", "Contact me", contactForm));
    navbar.append(navbarDisplayButton);
  }

  /**
   * If the class name of the element with the id "language-menu" is "hidden", then change the class
   * name to "navbar--li--dropdown". Otherwise, change the class name to "hidden".
   * </code>
   */
  function switchLanguageMenu() {
    if (document.getElementById("language-menu").className === "hidden") {
      document.getElementById("language-menu").className =
        "navbar--li--dropdown";
    } else {
      document.getElementById("language-menu").className = "hidden";
    }
  }

  /* Setting the language of the website. */
  function setLang(lang) {
    console.log("Changement en " + lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang;

    window.location.href =
      "/" + lang + "/" + window.location.pathname.split("/")[2];
  }

  /**
   * If the value is true, then the modal is shown, otherwise it is hidden.
   * </code>
   * @param id - the id of the element you want to toggle
   * @param value - true/false
   */
  function toggleModal(id, value) {
    // console.log(value === true);
    if (value === true) {
      document.getElementById(id).className = "modal--container";
    } else {
      document.getElementById(id).className = "hidden";
    }
  }

  const body = document.querySelector("body");
  body.addEventListener("click", (e) => {
    // console.log(e.target);

    if (e.target.id === "contact-button") {
      toggleModal("contact-modal", true);
    } else if (e.target.id === "close-modal") {
      e.preventDefault();
      toggleModal("contact-modal", false);
    } else if (e.target.id === "close-modal-cancel") {
      e.preventDefault();
      toggleModal("contact-modal", false);
    } else if (e.target.id === "send-email") {
      sendEmail();
    } else if (e.target.id === "language-menu-button") {
      e.preventDefault();
      switchLanguageMenu();
    } else if (e.target.id === "select-fr") {
      setLang("fr");
    } else if (e.target.id === "select-en") {
      setLang("en");
    } else if (
      e.target.id === "display-menu-button" ||
      e.target.id === "display-menu-icon"
    ) {
      toggleMenu();
    }

    // const menuButtons = {
    //   "contact-button": toggleModal("contact-modal", true),
    //   "close-modal": toggleModal("contact-modal", false),
    // };
    // console.log(e.target.id);
    // return menuButtons[e.target.id];
  });

  let displayMenu = false;

  function toggleMenu() {
    // console.log(displayMenu);
    displayMenu = !displayMenu;
    retractMenu();
  }

  function retractMenu() {
    if (displayMenu) {
      document.getElementById("navbar").className = "navbar--menu";
      document.getElementById("display-menu-icon").className =
        "navbar--toggle--icon--after fa-solid fa-bars";
    } else {
      document.getElementById("navbar").className = "navbar--slided navbar";
      document.getElementById("display-menu-icon").className =
        "navbar--toggle--icon fa-solid fa-bars";
    }
  }

  function sendEmail() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const name = urlParams.get("name");
    const email = urlParams.get("email");
    const object = urlParams.get("object");
    const message = urlParams.get("message");

    const templateParams = {
      name: name,
      email: email,
      object: object,
      message: message,
    };
    localStorage.setItem("email", JSON.stringify(templateParams));
    console.log(
      "email : " +
        templateParams.name +
        " " +
        templateParams.email +
        " " +
        templateParams.object +
        " " +
        templateParams.message
    );
  }

  return navbar;
}

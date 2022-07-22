import Modal from "../Modal/Modal";

export function Header(activePage) {
  const nav = document.createElement("nav");
  nav.setAttribute("class", "navbar");
  nav.setAttribute("id", "navbar");

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

  setActivePage(activePage);

  nav.innerHTML = `
      <ul id="navbar-buttons-block" class="navbar--block">
        <li class="navbar--li">
          <a
            class="${homepageClass}"
            id='home'
            href="../index.html"
          >
            <i class="fa-solid fa-house"></i>
          </a>
        </li>
        <li class="navbar--li">
          <a class="${resumeClass}" id="resume" href="./resume.html">
            Mon CV
          </a>
        </li>
        <li class="navbar--li">
          <a
            class="${portfolioClass}"
            id="portfolio"
            href="./portfolio.html"
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
      </ul>
  `;

  const contactForm = `
      <form class="contact-form">
          <div class="contact-form--category contact-form name">
              <label for="name">Name</label>
              <input type="text" name="name" />
          </div>
          <div class="contact-form--category contact-form email">
              <label for="email">Email</label>
              <input type="email" name="email" />
          </div>
          <div class="contact-form--category contact-form object">
              <label for="object">Objet</label>
              <input type="text" name="object" />
          </div>
          <div class="contact-form--category contact-form message">
              <label for="message">Message</label>
              <textarea name="message"></textarea>
          </div>
          <div>
              <input class="button" type="submit" value="Envoyer" />
          </div>
      </form>
  `;
  nav.append(Modal("contact-modal", "Me contacter", contactForm));

  function toggleModal(id, value) {
    console.log(value === true);
    if (value === true) {
      document.getElementById("contact-modal").className = "modal-container";
    } else {
      document.getElementById("contact-modal").className = "hidden";
    }
  }

  // Get event listener for body query selector
  const body = document.querySelector("body");
  body.addEventListener("click", (e) => {
    console.log(e.target);

    if (e.target.id === "contact-button") {
      toggleModal("contact-modal", true);
    } else if (e.target.id === "close-modal") {
      toggleModal("contact-modal", false);
    }

    // const menuButtons: any = {
    //   "contact-button": toggleModal("contact-modal", true),
    //   "close-button": toggleModal("contact-modal", true),
    // };

    // menuButtons[e.target.id];
  });
  window.onscroll = function () {
    retractMenu();
  };

  function retractMenu() {
    const menuHideValue = 100;

    if (window.scrollY > menuHideValue) {
      document.getElementById("navbar").className = "navbar--slided navbar";
    } else {
      document.getElementById("navbar").className = "navbar";
    }
  }

  return nav;
}

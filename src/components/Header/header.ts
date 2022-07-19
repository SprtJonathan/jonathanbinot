import "./style.css";

import { ContactModal, toggleModal } from "../ContactModal/ContactModal";

export function Header() {
  const nav = document.createElement("nav");
  nav.setAttribute("class", "navbar");
  nav.setAttribute("id", "navbar");
  let modalClassName: string = "hidden";

  // Get event listener for body query selector
  const body: HTMLBodyElement = document.querySelector("body");
  body.addEventListener("click", (e: any) => {
    console.log(e.target);

    const menuButtons: any = {
      "contact-button": toggleModal(),
      "close-modal": toggleModal(),
    };

    console.log(e.target.id);
    menuButtons[e.target.id]();
  });

  nav.innerHTML = `
      <ul id="navbar-buttons-block" class="navbar--block">
        <li class="navbar--li">
          <a
            class="active navbar--button"
            id='<i class="fa-solid fa-house"></i>-button'
            href="../index.html"
          >
            <i class="fa-solid fa-house"></i>
          </a>
        </li>
        <li class="navbar--li">
          <a class="navbar--button" id="mon cv-button" href="./resume.html">
            Mon CV
          </a>
        </li>
        <li class="navbar--li">
          <a
            class="navbar--button"
            id="portfolio-button"
            href="./portfolio.html"
          >
            Portfolio
          </a>
        </li>
        <li class="navbar--li">
          <div
            class="navbar--button"
            id="contact-button"
            href="#Contact"
          >
            Contact
          </div>
        </li>
      </ul>
  `;
  nav.append(ContactModal());
  return nav;
}

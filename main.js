import { Header } from "./src/components/Header/Header";
import { Homepage } from "./src/pages/Homepage/Homepage";
import { Resume } from "./src/pages/Resume/Resume";
import { Portfolio } from "./src/pages/Portfolio/Portfolio";
import { InvalidRoute } from "./src/pages/InvalidRoute/InvalidRoute";
import { LanguageSelector } from "./src/pages/LanguageSelector/LanguageSelector";

import "./src/sass/main.scss";

const langList = ["", "fr", "en"];
const path = window.location.pathname;
const lang = path.split("/")[1];

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: InvalidRoute(),
  "": Homepage(),
  "/": Homepage(),
  "/resume": Resume(),
  "/portfolio": Portfolio(),
};

const handleLocation = async () => {
  document.documentElement.lang = lang;

  const pageName = path.split(lang)[1];

  const app = document.querySelector("#app");

  if (langList.includes(path.split("/")[1])) {
    if (!localStorage.getItem("language")) {
      localStorage.setItem("language", lang);
    }
  } else {
    return app.append(routes[404]);
  }

  if (pageName == undefined || lang == "") {
    return app.append(LanguageSelector());
  }
  const route = routes[pageName] || routes[404];

  console.log(pageName);

  if (route != routes[404]) {
    app.append(Header(pageName));
  }

  return app.append(route);
};

window.onpopstate = handleLocation;
window.route = route;


handleLocation();

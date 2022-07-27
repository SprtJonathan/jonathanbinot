import { Homepage } from "./src/pages/Homepage/Homepage";
import { Resume } from "./src/pages/Resume/Resume";
import { Portfolio } from "./src/pages/Portfolio/Portfolio";
import { InvalidRoute } from "./src/pages/InvalidRoute/InvalidRoute";
import { LanguageSelector } from "./src/pages/LanguageSelector/LanguageSelector";

import "./src/sass/main.scss";

const langList = ["", "fr", "en"];
const path = window.location.pathname;
const lang = path.split("/")[1];

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

  console.log(lang);

  const app = document.querySelector("#app");

  if (langList.includes(path.split("/")[1])) {
    localStorage.setItem("language", lang);
  } else {
    return app.append(routes[404]);
  }

  if (pageName == undefined || lang == "") {
    return app.append(LanguageSelector());
  }

  const route = routes[pageName] || routes[404];
  return app.append(route);
};

window.onpopstate = handleLocation;

handleLocation();

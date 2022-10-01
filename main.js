import { Header } from "./src/components/Header/Header";
import { Homepage } from "./src/pages/Homepage/Homepage";
import { Resume } from "./src/pages/Resume/Resume";
import { Portfolio } from "./src/pages/Portfolio/Portfolio";
import { InvalidRoute } from "./src/pages/InvalidRoute/InvalidRoute";
import { LanguageSelector } from "./src/pages/LanguageSelector/LanguageSelector";

import "./src/css/main.css";

console.log(window.location.pathname)
const path = window.location.pathname;
const lang = localStorage.getItem("language");
const routes = {
  404: InvalidRoute(),
  "": Homepage(),
  "/": Homepage(),
  "/resume": Resume(),
  "/portfolio": Portfolio(),
};

function handleLocation() {
  if (!lang || lang == undefined) {
    return app.append(LanguageSelector());
  }

  if (routes[path] == undefined) {
    return app.append(routes[404]);
  }
  app.append(Header(path));
  return app.append(routes[path]);
}

handleLocation();

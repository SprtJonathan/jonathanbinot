import { Homepage } from "./src/pages/Homepage/Homepage";
import { Resume } from "./src/pages/Resume/Resume";
import { Portfolio } from "./src/pages/Portfolio/Portfolio";
import { InvalidRoute } from "./src/pages/InvalidRoute/InvalidRoute";

import "./src/sass/main.scss";

const routes = {
  404: InvalidRoute(),
  "/": Homepage(),
  "/resume": Resume(),
  "/portfolio": Portfolio(),
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];

  const app = document.querySelector("#app");

  //console.log(route);
  app.append(route);
};

window.onpopstate = handleLocation;

handleLocation();

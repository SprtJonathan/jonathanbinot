import { Header } from "../../components/Header/Header";

export function InvalidRoute() {
  const error404 = document.createElement("main");
  error404.append(Header(""));

  error404.innerHTML += "<h1>ERREUR 404</h1>";
  return error404;
}

import { Header } from "../../components/Header/Header";

export function Portfolio() {
  const portfolio = document.createElement("main");
  portfolio.append(Header("portfolio"));
  portfolio.innerHTML += "<h1>Portfolio</h1>";
  return portfolio;
}

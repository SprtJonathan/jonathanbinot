import { portfolioContentFR } from "./views/portfolioUI_fr";
import { portfolioContentEN } from "./views/portfolioUI_en";

export function Portfolio() {
  const lang = localStorage.getItem("language");
  let portfolioContent;

  if (lang === "fr") {
    portfolioContent = portfolioContentFR;
  } else {
    portfolioContent = portfolioContentEN;
  }
  const portfolio = document.createElement("main");
  //portfolio.append(Header("portfolio"));
  portfolio.append(portfolioContent);
  return portfolio;
}

import { portfolioContainer } from "./views/portfolioUI";

export function Portfolio() {
  const portfolio = document.createElement("main");
  //portfolio.append(Header("portfolio"));
  portfolio.append(portfolioContainer);
  return portfolio;
}

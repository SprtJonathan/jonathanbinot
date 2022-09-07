import webdevContent from "./contents/webdev/portfolioContent_webdev";

const portfolioIntro = {
  fr: "Voici mon portfolio. Vous avez ici la possibilité de cliquer sur le domaine qui vous intéresse et d'explorer les différents travaux et réalisations que j'ai pu effectuer. Pour commencer, cliquez sur l'une des tuiles ci-dessous.",
  en: "This is my portfolio. Here you will be able to click on the category you want to see and to explore the different works and realizations I have done. To start, just click on one of the tiles down below.",
};
const tileText = {
  fr: [
    {
      tileTitle: "Développement web",
    },
  ],
  en: [{ tileTitle: "Web development" }],
};
const tileContent = [webdevContent];

export { portfolioIntro, tileText, tileContent };

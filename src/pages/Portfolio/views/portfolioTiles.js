const portfolioIntro = {
  fr: "Voici mon portfolio. Vous avez ici la possibilité de cliquer sur le domaine qui vous intéresse et d'explorer les différents travaux et réalisations que j'ai pu effectuer. Pour commencer, cliquez sur l'une des tuiles ci-dessous.",
  en: "This is my portfolio. Here you will be able to click on the category you want to see and to explore the different works and realizations I have done. To start, just click on one of the tiles down below.",
};
const tileText = {
  fr: [
    {
      tileTitle: "Développement web",
    },
    {
      tileTitle: "Montage photo",
    },
    {
      tileTitle: "Jeux vidéo (Unreal Engine 4/5)",
    },
    {
      tileTitle: "Jeux vidéo (Source 1/2)",
    },
  ],
  en: [{ tileTitle: "Web development" }, { tileTitle: "Photo editing" }],
};
const tileContent = {
  fr: [
    {
      tileInnerContent: `<p>Durant mes deux formations avec OpenClassrooms (développeur web et développeur d'applications JS et React), j'ai pu réaliser de nombreux projets, en voici la liste</p>
        <h3>Développeur Web : </h3>
        <li><a class="link" href="https://github.com/SprtJonathan/JonathanBinot_2_17112020">Transformez une maquette en site web avec HTML & CSS</a></li>
        <li><a class="link" href="https://github.com/SprtJonathan/JonathanBinot_3_14122020">Dynamisez une page web avec des animations CSS</a></li>
        <li><a class="link" href="https://github.com/SprtJonathan/JonathanBinot_4_30012021">Optimisez un site web existant</a></li>
        <li><a class="link" href="https://github.com/SprtJonathan/JonathanBinot_5_25022021">Construisez un site e-commerce en JavaScript</a></li>
        <li><a class="link" href="https://github.com/SprtJonathan/JonathanBinot_6_04042021">Construisez une API sécurisée pour une application d'avis gastronomiques</a></li>
        <li><a class="link" href="https://github.com/SprtJonathan/JonathanBinot_7_28042021">Créez un réseau social d’entreprise</a></li>
  
        <h3>Développeur Front-End / Développeur d'applications React Javascript : </h3>
        <li><a class="link" href="https://github.com/SprtJonathan/JonathanBinot_4_27092021">Créez une landing page avec Javascript</a></li>
        <li><a class="link" href="https://github.com/SprtJonathan/JonathanBinot_6_15102021">Créez un site accessible pour une plateforme de photographes</a></li>
        <li><a class="link" href="https://github.com/SprtJonathan/JonathanBinot_7_01122021">Développez un algorithme de recherche en JavaScript</a></li>
        <li><a class="link" href="https://github.com/SprtJonathan/JonathanBinot_9_14012022">Débuggez et testez un SaaS RH</a></li>
        <li><a class="link" href="https://github.com/SprtJonathan/JonathanBinot_10_25022022">Définissez les besoins pour une app de soutien scolaire</a></li>
        <li><a class="link" href="https://github.com/SprtJonathan/JonathanBinot_11_01042022">Développez une application Web avec React et React Router</a></li>
        <li><a class="link" href="https://github.com/SprtJonathan/JonathanBinot_12_25042022">Développez un tableau de bord d'analytics avec React</a></li>
        <li><a class="link" href="https://github.com/SprtJonathan/JonathanBinot_13_23052022">Utilisez une API pour un compte utilisateur bancaire avec React</a></li>
        <li><a class="link" href="https://github.com/SprtJonathan/JonathanBinot_2_17112020">Faites passer une librairie jQuery vers React</a></li>
        
        <p>Je me suis également essayé à des projets plus personnels. Par exemple, en souhaitant retravailler mon site web personnel, j'ai débuté un projet que j'avais sobrement nommé <a class="link" href="https://github.com/SprtJonathan/BasicJS">BasicJS</a> 
        et dont le but était de créer un projet de type starter pour tous mes projets web futurs. Je souhaitais faire en sorte de rendre possible la réutilisation de composants sans devoir réécrire leur code, à la manière d'un framework de type React/Vue, mais le tout en JS Vanilla.
        <br/></p>
        <p>
        J'ai récemment recréé un projet du même type mais sans utiliser ce système de composants que je n'avais pas réussi à rendre viable à ce moment là. Ce projet, nommé <a class="link" href="https://github.com/SprtJonathan/js-project-base">JS Project Base</a> 
        permet, comme son nom l'indique, de débuter un projet plus rapidement. Il contient une base de projet avec un index.html, un index.js contenant une simple fonction permettant de faire tourner le logo JS au clic, une base de CSS organisée à la manière de SASS avec un fichier maître 
        important le code de tous les fichiers dépendants, ceci afin de mieux organiser l'espace de travail du style et d'optimiser au mieux le code en facilitant la cohérence stylistique des pages et en évitant de réécrire du code déjà existant sur des pages précédentes. Car après tout : 
        <blockquote>Do not repeat yourself*</blockquote>
        <br/></p>
  
        <h3>JS Project Base</h3>
        <div class="iframe--wrapper">
          <iframe class="iframe" src="https://sprtjonathan.github.io/js-project-base/ "frameborder="0"></iframe>
        </div>
  
        <p>
        Enfin, je travaille actuellement pendant mon temps libre à un autre projet, débuté grâce à mon starter pack d'ailleurs
        <br/></p>
  
        <p>*Ne vous répétez pas : une des philosophies principales du développeur.
        `,
    },
    {
      tileInnerContent: "Montage photo",
    },
    {
      tileInnerContent: "JV Unreal",
    },
    {
      tileInnerContent: "JV Source",
    },
  ],
  en: [
    { tileInnerContent: "Web development" },
    { tileInnerContent: "Photo Editing" },
  ],
};

export { portfolioIntro, tileText, tileContent };

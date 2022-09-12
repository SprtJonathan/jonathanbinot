const gamedevText = {
  fr: {
    gamedevTitle: "Développement de Jeux Vidéo",
    modalIntroText: `Depuis un certain nombre d'années, pendant mon temps libre, je m'intéresse au développement de jeux vidéo. Je cherche à comprendre comment les différents jeux auquels je joue habituellement sont créés, j'apprends également (toujours en autodidacte) 
    à créer du contenu par moi même, que ce soit des maps (cartes de jeu), majoritairement sur Half-Life 2 et plus récemment Half-Life: Alyx (en VR), sur Dying Light grâce aux outils de modding, ou plus globalement des mécaniques de jeu sur Unreal Engine (4 et 5). Enfin je me 
    suis également essayé à la modélisation 3D grâce à l'outil gratuit Blender. J'ai réussi à créer quelques modèles simples ou a modifier des modèles déjà existants afin de les intégrer à différents jeux. Ci-dessous, vous trouverez différentes catégories montrant 
    quelques exemples de ce que j'ai pu réaliser au cours de ces quelques années. Aucun projet n'a réellement abouti mais chaque réalisation m'a permis de m'améliorer à chaque fois un peu plus.`,
    firstCategoryName: `Source² Engine (Half-Life: Alyx / VR) : `,
    firstCategoryDescription: `Depuis mars 2020, je me suis intéressé au moteur Source² de Valve, utilisé dans Half-Life Alyx: notamment. Ce moteur, bien que récent, partage de nombreux aspects avec son prédécesseur, sur lequel j'ai passé beaucoup de temps au cours de ces dernières années, 
    à apprendre des techniques de Level Design. J'ai pris un immense plaisir à y retourner et à approfondir mes bases. C'est un outil que je trouve très agréable à prendre en mains. 
    L'exemple suivant est une carte pour le jeu Half-Life Alyx sur laquelle je travail depuis un mois. Je continue mon processus d'apprentissage du moteur au fur et à mesure que je progresse sur la géométrie de la map. J'ai appris à utiliser quelques uns des outils intégrés au moteur :
    <br/>
    - Tile Meshing : modèles 3D programmés pour former des cheminements définis par l'utilisateur (par exemple, les tuyaux aux murs, les conduits d'aérations etc.)
    <br/>
    - Skybox 3D : utilisation d'une map externe afin de la "projeter" sur la map en cours afin d'optimiser l'affichage des modèles 3D à distance en les zoomant.
    <br/>
    - Scripted Sequences (Des entités permettant de scripter les animations de personnages afin de leur faire réaliser une action définie)
    <br/>
    - L'éclairage dynamique
    <br/>`,
    firstCategoryVideosDescription: [
      "Cette vidéo montre le début de la map, les tuyaux visibles ont étés placés grâce à l'outil de tile meshing",
      `Ici il est question de séquence scriptée. La créature (un headcrab) qui arrive du pilier est "appelée" par une entité qui la fait apparaître, et une autre entité (nommée "scripted sequence") se charge de lui faire faire son animation. Une fois l'animation terminée, l'intelligence artificelle par défaut du headcrab reprend la main.`,
      `Un autre exemple de séquence scriptée. Ici le zombie (nom donnée à ces presonnages non jouables dans le jeu Half-Life) effectue une animation de base (il pointe le projecteur du doigt). Une fois que le joueur passe la zone de détection (trigger), l'animation du pointage s'arrête et le zombie doit rejoindre la deuxième séquence scriptée en marchant. Arrivé à celle-ci, un output (une sortie activée lorsque le zombie arrive à destination) le fait ragdoll (active la physique du modèle 3D, ce qui cause sa chute). Une fois arrivé au sol, un autre output met sa valeur de vie à 0.`,
      `Dernier exemple de séquence scriptée. Cette fois-ci lorsque le joueur s'approche de la porte, un trigger déclenche la marche des soldats ainsi que le son de la radio qui se joue derrière la porte.`,
    ],
    firstCategoryPhotosSectionIntro: `Voici enfin une galerie montrant quelques photos de mon travail sur le moteur Source². Les images en format carré proviennent de captures d'écran en réalité virtuelle.`,
    secondFormationTitle: `Développeur Front-End / Développeur d'applications React Javascript : `,
    frontendLinks: [
      "https://github.com/SprtJonathan/JonathanBinot_4_27092021",
      "https://github.com/SprtJonathan/JonathanBinot_6_15102021",
      "https://github.com/SprtJonathan/JonathanBinot_7_01122021",
      "https://github.com/SprtJonathan/JonathanBinot_9_14012022",
      "https://github.com/SprtJonathan/JonathanBinot_10_25022022",
      "https://github.com/SprtJonathan/JonathanBinot_11_01042022",
      "https://github.com/SprtJonathan/JonathanBinot_12_25042022",
      "https://github.com/SprtJonathan/JonathanBinot_13_23052022",
      "https://github.com/SprtJonathan/JonathanBinot_2_17112020",
    ],
    frontendTitles: [
      "Créez une landing page avec Javascript",
      "Créez un site accessible pour une plateforme de photographes",
      "Développez un algorithme de recherche en JavaScript",
      "Débuggez et testez un SaaS RH",
      "Définissez les besoins pour une app de soutien scolaire",
      "Développez une application Web avec React et React Router",
      "Développez un tableau de bord d'analytics avec React",
      "Utilisez une API pour un compte utilisateur bancaire avec React",
      "Faites passer une librairie jQuery vers React",
    ],
    personalProjectFailed: `<mark class="blue-undeline">Je me suis également essayé à des projets plus personnels.</mark> Par exemple, en souhaitant retravailler mon site web personnel, j'ai débuté un projet que j'avais sobrement nommé <a class="link" href="https://github.com/SprtJonathan/BasicJS">BasicJS</a> 
    et dont le but était de créer un projet de type starter pour tous mes projets web futurs. Je souhaitais faire en sorte de rendre possible la réutilisation de composants sans devoir réécrire leur code, à la manière d'un framework de type React/Vue, mais le tout en JS Vanilla.`,
    personalProjectRebooted: `J'ai récemment recréé un projet du même type mais sans utiliser ce système de composants que je n'avais pas réussi à rendre viable à ce moment là. Ce projet, nommé <a class="link" href="https://github.com/SprtJonathan/js-project-base">JS Project Base</a> 
    permet, comme son nom l'indique, de débuter un projet plus rapidement. Il contient une base de projet avec un index.html, un index.js contenant une simple fonction permettant de faire tourner le logo JS au clic, une base de CSS organisée à la manière de SASS avec un fichier maître 
    important le code de tous les fichiers dépendants, ceci afin de mieux organiser l'espace de travail du style et d'optimiser au mieux le code en facilitant la cohérence stylistique des pages et en évitant de réécrire du code déjà existant sur des pages précédentes. Car après tout : 
    <blockquote>Do not repeat yourself*</blockquote>`,
    jsBaseTitle: "JS Project Base",
    administrativeManagerDescription: `Enfin, je travaille actuellement pendant mon temps libre sur un autre projet, débuté grâce à mon starter pack d'ailleurs`,
    developperMotto:
      "*Ne vous répétez pas : une des philosophies principales du développeur.",
  },
  en: {
    gamedevTitle: "Gamedev",
    modalIntroText: `During my two trainings with OpenClassrooms (web developer and developer of JS and React applications),
    I was able to carry out many projects, here is the list`,
    firstFormationTitle: `Web developer : `,
    webdevLinks: [
      "https://github.com/SprtJonathan/JonathanBinot_2_17112020",
      "https://github.com/SprtJonathan/JonathanBinot_3_14122020",
      "https://github.com/SprtJonathan/JonathanBinot_4_30012021",
      "https://github.com/SprtJonathan/JonathanBinot_5_25022021",
      "https://github.com/SprtJonathan/JonathanBinot_6_04042021",
      "https://github.com/SprtJonathan/JonathanBinot_7_28042021",
    ],
    webdevTitles: [
      "Turn a model into a website with HTML & CSS",
      "Energize a web page with CSS animations",
      "Optimize an existing website",
      "Build an e-commerce site in JavaScript",
      "Build a secure API for a food reviews app",
      "Create a corporate social network",
    ],
    secondFormationTitle: `Front-End developer / React Javascript apps developer : `,
    frontendLinks: [
      "https://github.com/SprtJonathan/JonathanBinot_4_27092021",
      "https://github.com/SprtJonathan/JonathanBinot_6_15102021",
      "https://github.com/SprtJonathan/JonathanBinot_7_01122021",
      "https://github.com/SprtJonathan/JonathanBinot_9_14012022",
      "https://github.com/SprtJonathan/JonathanBinot_10_25022022",
      "https://github.com/SprtJonathan/JonathanBinot_11_01042022",
      "https://github.com/SprtJonathan/JonathanBinot_12_25042022",
      "https://github.com/SprtJonathan/JonathanBinot_13_23052022",
      "https://github.com/SprtJonathan/JonathanBinot_2_17112020",
    ],
    frontendTitles: [
      "Create a landing page with JavaScript",
      "Create an accessible site for a platform of photographers",
      "Develop a search algorithm in JavaScript",
      "Debug and test an HR SaaS",
      "Define the needs for a tutoring app",
      "Develop a web application with React and React Router",
      "Build an analytics dashboard with React",
      "Use an API for a bank user account with React",
      "Move a jQuery library to React",
    ],
    personalProjectFailed: `I also tried my hand at more personal projects. For example, wanting to rework my personal website, I started a project that I had soberly named <a class="link" href="https://github.com/SprtJonathan/BasicJS">BasicJS</a >
    and whose goal was to create a starter type project for all my future web projects. I wanted to make it possible to reuse components without having to rewrite their code, like a React/Vue type framework, but all in JS Vanilla.`,
    personalProjectRebooted: `I recently recreated a project of the same type but without using this component system that I hadn't managed to make viable at the time. This project, named <a class="link" href="https://github.com/SprtJonathan/js-project-base">JS Project Base</a>
    allows, as its name suggests, to start a project more quickly. It contains a project base with an index.html, an index.js containing a simple function to rotate the JS logo on click, a CSS base organized like SASS with a master file
    importing the code of all the dependent files, this in order to better organize the workspace of the style and to better optimize the code by facilitating the stylistic consistency of the pages and avoiding rewriting code already existing on previous pages. Because after all:
    <blockquote>Do not repeat yourself*</blockquote>`,
    administrativeManagerDescription: `Finally, I am currently working in my free time on another project, started thanks to my starter pack by the way`,
    developperMotto:
      "*Don't repeat yourself: one of the main philosophies of the developer.",
  },
};

export default gamedevText;

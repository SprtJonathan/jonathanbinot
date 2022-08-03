import { Header } from "../../components/Header/Header";

import Banner from "../../assets/images/homepage/homepage-bg-1.jpg";
import JSLogo from "../../../javascript.svg";
import OCLogo from "../../assets/images/homepage/oc-logo.png";

export async function Homepage() {
  const lang = localStorage.getItem("language");

  let birthDate = new Date("02/14/1999");
  let ageOperation = Date.now() - birthDate.getTime();
  let ageDate = new Date(ageOperation);
  let birthYear = ageDate.getUTCFullYear();
  const age = Math.abs(birthYear - 1970);

  const homepage = document.createElement("main");
  homepage.setAttribute("class", "homepage");
  homepage.setAttribute("id", "homepage");
  //homepage.append(Header("home"));

  const menuHideValue = 100;
  console.log(document.getElementById("summary"));

  if (window.scrollY > menuHideValue) {
    document.getElementById("summary").style.transform = translateY("-80px");
  }

  if (lang == "fr") {
    homepage.innerHTML += `
  <section id="summary" class="intro--section intro--summary">
    <div class="homepage--title--block">
      <h1 class="text-light">
        <mark class="text-light blue-undeline">Jonathan Binot</mark> 
        <br />
        Développeur web - Frontend - Applications JS
      </h1>

      <div class="intro--inner-text--block">
        <p class="intro--inner-text">Bienvenue sur mon site web personnel.
          <br />
          Diverses pages vous sont ici proposées, vous y trouverez mon CV en
          français et en anglais, ainsi que mon portfolio dans les deux langues
          également.
          <br />          
          Mais avant tout, qui suis-je?
        </p>

      </div>
      <div
        class="homepage--title--background homepage--title--background--blur"
        style="background-image: url(${Banner})"
      >
      </div>
      <div
        class="homepage--title--background homepage--title--background--dark"
      >
      </div>
    </div>
  </section>

  <section class="intro--section intro--introduction">

    <p class="intro--inner-text">
      Je m'appelle Jonathan Binot, j'ai <span id="age">${age}</span> ans et je
      suis titulaire d'un diplôme de développeur web de niveau Bac +2 mais
      également de développeur d'applications Javascript
      <img src="${JSLogo}" height="18px" /> de niveau Bac +3 obtenus avec
      OpenClassrooms <img src="${OCLogo}" height="18px" />.<br /><br />Depuis
      tout petit, je suis passionné d'informatique et de jeux vidéo, si bien que
      j'ai décidé de me donner les moyens de travailler dans le domaine.
      L'informatique étant très vaste, il y a deux disciplines pour lesquelles
      j'ai envie de m'investir professionnellement : <br /><br />
    </p>

  </section>
  
  <section id="summary" class="intro--section intro--type webdev">
    <div class="homepage--title--block">
    <li class="text-light"><mark class="blue-undeline text-light">Le dévelop</mark>pement web</li>

      <div class="intro--inner-text--block">
        
      <div
        class="homepage--title--background homepage--title--background--blur"
        style="background-image: url(${Banner})"
      >
      </div>
      <div
        class="homepage--title--background homepage--title--background--dark"
      >
      </div>
    </div>
  </section>
    
  <section class="intro--section intro--type gamedev">
  
    <li>
      <mark class="blue-undeline">Le dévelop</mark>pement de jeux vidéo.<br /><br />
    </li>

  </section>


  <section class="intro--section intro--objectives--game">
      
    <p class="intro--objectives--text">
      Motivé pour atteindre mes objectifs, j'ai commencé très tôt à apprendre en
      autodidacte, avec mon ordinateur et les logiciels de développement à ma
      disposition. J'ai commencé sur FPS Creator (mais cette partie là ne compte
      pas vraiment) puis avec l'éditeur de niveaux de Half-Life² en regardant
      des tutoriels vidéo en ligne. Les années passant, j'ai commencé à me
      diversifier au niveau de mon apprentissage, en découvrant l'Unreal Engine
      3 (avec UDK) puis l'Unreal Engine 4.<br /><br />J'ai également été
      intéressé par l'apprentissage de différents logiciels de montage photo et
      vidéo (comme Photoshop, Sony Vegas, Adobe Premiere etc.), que je continue
      à utiliser régulièrement aujourd'hui. <br /><br />
      Enfin, avec la sortie de Half-Life: Alyx en VR ainsi que de ses outils de
      développement, j'ai découvert le développement sur Source² Engine (qui
      possède de fortes similitudes avec son prédécesseur de 2003) cette fois-ci. <br /><br />J'apprécie fortement apprendre de nouvelles
      techniques, et découvrir tout ce qu'il est possible de faire avec les
      moteurs de jeu modernes.
      </p>
      </section>

      <section class="intro--section intro--objectives--web">
    <p class="intro--objectives--text">
      Pour ce qui est du développement web, j'ai découvert cette discipline lors
      de ma première année à la fac Mathématiques-Infomratique de Lyon. Le
      cursus universitaire ne m'a malheureusement pas plu, mais l'unité
      d'enseignement "Introduction aux réseaux et au web" m'a fortement
      interessée. Grâce à elle, j'ai découvert le potentiel des langages HTML et
      CSS et après un an en tant que salarié dans la salle d'arcade familiale La
      Tête dans les Nuages, je me suis donné pour objectif de réaliser un site
      web personnel sur lequel se trouverait mon CV ainsi qu'une vitrine de mes
      réalisations. J'ai recommencé à apprendre en autodidacte grâce notamment
      aux cours gratuits en ligne sur le développement web.
      <br />
      <br />
      Aujourd'hui, vous vous trouvez sur la page d'accueil de ce site, et si
      vous avez pris le temps de lire ce texte, je vous en remercie et j'espère
      que vous comprenez ma determination à réaliser mes objectifs au travers de
      l'alternance.
      <br />
      <br />
      Vous avez maintenant le choix d'accéder à mon CV, à mon portfolio ou à me
      contacter directement en cliquant sur l'un des liens du menu en haut de la
      page. Bonne visite.
    </p>
  </section>
  `;
  } else {
    homepage.innerHTML += `
    <div class="homepage--title--block">
    <h1 class="homepage--title">
      <mark class="text-light blue-undeline">Jonathan Binot</mark> <br />
      Développeur web - Frontend - Applications JS
    </h1>
    <div
      class="homepage--title--background homepage--title--background--blur"
      style="background-image: url(${Banner})"
    ></div>
    <div
      class="homepage--title--background homepage--title--background--dark"
    ></div>
  </div>
  <section class="intro">
    <h2>Welcome to my personnal website.</h2>
    <h2>
      Different pages are available here, you will find my resume in English and
      in French, as well as my portfolio in the two languages too.<br />But before
      anything else, who am I?
    </h2>
  
    <p>
      My name is Jonathan Binot, I'm <span id="age">${age}</span> year old and I
      have a degree in web development with a level of Bachelor + 2, but also a
      degree in Javascript <img src="${JSLogo}" height="18px" /> app development with a level of Bachelor + 3 with OpenClassrooms
      <img src="${OCLogo}" height="18px" />.<br /><br />
      Since I was a child, I'm passionate about computer technology and video
      games, that's why I decided to give myself the means to work in the sector.
      Computer tech being a vast domain, there are two disciplins in which I would
      like to invest professionnaly : <br /><br />
    </p>
    <li><mark class="blue-undeline">Web</mark> development</li>
    <br /><br />
    <li><mark class="blue-undeline">Gam</mark>e development.<br /><br /></li>
    <p>
      Motivated to achieve my goals, I started learning on my own very early, with
      my computer and the software I had at my disposal. I started with FPS
      Creator (but that part doesn't really count) then with the Half-Life² level
      editor by watching video tutorials online. As the years went by, I started
      to learn new things, by discovering Unreal Engine 3 (with UDK) then Unreal
      Engine 4. Motivé pour atteindre mes objectifs, j'ai commencé très tôt à
      apprendre en autodidacte, avec mon ordinateur et les logiciels de
      développement à ma disposition. J'ai commencé sur FPS Creator (mais cette
      partie là ne compte pas vraiment) puis avec l'éditeur de niveaux de
      Half-Life² en regardant des tutoriels vidéo en ligne.
      <br /><br />More recently, I found a passion for virtual reality and I was
      finally able to invest in quality equipment thanks to the job I had found.
      Finally, with the release of Half-Life: Alyx in VR as well as its
      development tools, I discovered the development on Source² Engine (which has
      strong similarities with its predecessor from 2003) this time and I Also
      discovered the basics of virtual reality development on Unreal Engine 4 and
      the basics of the Unity engine less than a month ago. <br /><br />I really
      enjoy learning new techniques, and discovering all that is possible to do
      with modern game engines.
  
      <br />
      <br />
  
      As for web development, I discovered this discipline during my first year of
      university at the Mathematics-Computer Science high school of Lyon.
      Unfortunately, I did not like the way the university worked and the
      mathematics course we were learning, but the teaching unit "Introduction to
      networks and web dev" really interested me. Thanks to this, I discovered the
      potential of HTML and CSS and after a year as an employee in the family
      arcade room "La Tête dans les Nuages", I set myself the goal of creating a
      personal website on which would be my resume and a showcase of my
      achievements in the form of a portfolio. I started to learn on my own again
      thanks to the free Openclassrooms lessons in particular.
      <br />
      <br />
      Today you are on the home page of this website, and if you have taken the
      time to read this text, I thank you and I hope you understand my
      determination to achieve my goals through the work-study program.
      <br />
      <br />
      You now have the choice to access my resume, my portfolio or contact me
      directly by clicking on one of the menu links at the top of the page. Enjoy
      your visit.
    </p>
  </section>
`;
  }

  return homepage;
}

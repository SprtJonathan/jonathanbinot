import { Header } from "../../components/Header/Header";

import Banner from "../../assets/images/homepage/homepage-bg-1.jpg";
import JSLogo from "../../../javascript.svg";
import OCLogo from "../../assets/images/homepage/oc-logo.png";

export function Homepage() {
  let birthDate = new Date("02/14/1999");
  let ageOperation = Date.now() - birthDate.getTime();
  let ageDate = new Date(ageOperation);
  let birthYear = ageDate.getUTCFullYear();
  const age = Math.abs(birthYear - 1970);

  const homepage = document.createElement("main");
  homepage.setAttribute("class", "homepage");
  homepage.setAttribute("id", "homepage");
  homepage.append(Header("home"));

  homepage.innerHTML += `
    <div class="homepage--title--block">
      <h1 class="homepage--title"><mark class="text-light blue-undeline">Jonathan Binot</mark> <br/> Développeur web - Frontend - Applications JS</h1>
      <div class="homepage--title--background homepage--title--background--blur" style="background-image: url(${Banner})"></div>
      <div class="homepage--title--background homepage--title--background--dark"></div>
    </div>
    <section class="intro">
      <h2>Bienvenue sur mon site web personnel.</h2>
      <h2>
        Diverses pages vous sont ici proposées, vous y trouverez mon CV en
        français et en anglais, ainsi que mon portfolio dans les deux langues
        également.<br />Mais avant tout, qui suis-je?
      </h2>

      <p>
        Je m'appelle Jonathan Binot, j'ai <span id="age">${age}</span> ans
        et je suis titulaire d'un diplôme de développeur web de niveau Bac +2 mais également de développeur d'applications Javascript <img src=${JSLogo} height=18px></img>  de niveau Bac +3 obtenus avec OpenClassrooms <img src=${OCLogo} height=18px></img>.<br /><br />Depuis
        tout petit, je suis passionné d'informatique et de jeux vidéo, si bien
        que j'ai décidé de me donner les moyens de travailler dans le domaine.
        L'informatique étant très vaste, il y a deux disciplines pour
        lesquelles j'ai envie de m'investir professionnellement : <br /><br />
      </p>
      <li><mark class="blue-undeline">Le dévelop</mark>pement web</li>
      <br /><br />
      <li>
        <mark class="blue-undeline">Le dévelop</mark>pement de jeux vidéo.<br /><br />
      </li>
      <p>
        Motivé pour atteindre mes objectifs, j'ai commencé très tôt à
        apprendre en autodidacte, avec mon ordinateur et les logiciels de
        développement à ma disposition. J'ai commencé sur FPS Creator (mais
        cette partie là ne compte pas vraiment) puis avec l'éditeur de niveaux
        de Half-Life² en regardant des tutoriels vidéo en ligne. Les années
        passant, j'ai commencé à me diversifier au niveau de mon
        apprentissage, en découvrant l'Unreal Engine 3 (avec UDK) puis
        l'Unreal Engine 4.<br /><br />J'ai également été intéressé par
        l'apprentissage de différents logiciels de montage photo et vidéo
        (comme Photoshop, Sony Vegas, Adobe Premiere etc.), que je continue à
        utiliser régulièrement aujourd'hui. <br /><br />Plus récemment, je me
        suis trouvé une passion dans la réalité virtuelle et j'ai enfin pu
        investir dans du matériel de qualité grâce à l'emploi que j'avais
        trouvé. Enfin, avec la sortie de Half-Life: Alyx en VR ainsi que de
        ses outils de développement, j'ai découvert le développement sur
        Source² Engine (qui possède de fortes similitudes avec son
        prédécesseur de 2003) cette fois-ci et j'ai également découvert les
        bases du développement en réalité virtuelle sur Unreal Engine 4 et les
        bases du moteur Unity il y a moins d'un mois. <br /><br />J'apprécie
        fortement apprendre de nouvelles techniques, et découvrir tout ce
        qu'il est possible de faire avec les moteurs de jeu modernes.

        <br />
        <br />

        Pour ce qui est du développement web, j'ai découvert cette discipline
        lors de ma première année à la fac Mathématiques-Infomratique de Lyon.
        Le cursus universitaire ne m'a malheureusement pas plu, mais l'unité
        d'enseignement "Introduction aux réseaux et au web" m'a fortement
        interessée. Grâce à elle, j'ai découvert le potentiel des langages
        HTML et CSS et après un an en tant que salarié dans la salle d'arcade
        familiale La Tête dans les Nuages, je me suis donné pour objectif de
        réaliser un site web personnel sur lequel se trouverait mon CV ainsi
        qu'une vitrine de mes réalisations. J'ai recommencé à apprendre en
        autodidacte grâce notamment aux cours gratuits en ligne sur le
        développement web.
        <br />
        <br />
        Aujourd'hui, vous vous trouvez sur la page d'accueil de ce site, et si
        vous avez pris le temps de lire ce texte, je vous en remercie et
        j'espère que vous comprenez ma determination à réaliser mes objectifs
        au travers de l'alternance.
        <br />
        <br />
        Vous avez maintenant le choix d'accéder à mon CV, à mon portfolio ou à
        me contacter directement en cliquant sur l'un des liens du menu en
        haut de la page. Bonne visite.
      </p>
    </section>
  `;

  return homepage;
}

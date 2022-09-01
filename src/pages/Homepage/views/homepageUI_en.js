import { createElementFromTemplate } from "../../../components/helpers";

import hpBgOne from "../../../assets/images/homepage/homepage-bg-1.jpg";
import hpBgTwo from "../../../assets/images/homepage/homepage-bg-3.png";
import webdevImage from "../../../assets/images/homepage/webdev.png";
import gamedevImage from "../../../assets/images/homepage/gamedev.png";
import JSLogo from "../../../../javascript.svg";
import OCLogo from "../../../assets/images/homepage/oc-logo.png";

let birthDate = new Date("02/14/1999");
let ageOperation = Date.now() - birthDate.getTime();
let ageDate = new Date(ageOperation);
let birthYear = ageDate.getUTCFullYear();
const age = Math.abs(birthYear - 1970);

const homepageContentEN = createElementFromTemplate(
  "div",
  { class: "hoempage--content", id: "homepage-content" },
  "",
  ""
);

homepageContentEN.innerHTML += `
<section id="summary" class="intro--section intro--name">
  <div class="homepage--title--block">
    <h1 class="text-light">
      <mark class="text-light blue-undeline">Jonathan Binot</mark>
      <br />
      Web developer - Frontend - JS Apps
    </h1>
  </div>
</section>

<section class="intro--section intro--summary">
  <div class="intro--inner-text--block">
    <p class="intro--inner-text">
      Welcome to my personnal website
      <br />
      Different pages are available here, you will find my resume in English and
      in French, as well as my portfolio in the two languages too.
      <br />
      But before anything else, who am I?
    </p>
  </div>
</section>

<section class="intro--section intro--introduction">
  <p class="intro--inner-text">
    My name is Jonathan Binot, I'm <span id="age">${age}</span> year old and I
    have a degree in web development with a level of Bachelor + 2, but also a
    degree in web development with a level of Bachelor +3/4 with OpenClassrooms
    <img src="${OCLogo}" height="18px" />.<br /><br />
    Since I was a child, I'm passionate about computer technology and video
    games, that's why I decided to give myself the means to work in the sector.
    Computer tech being a vast domain, there are two disciplins in which I would
    like to invest professionnaly : <br /><br />
  </p>
</section>

<section class="intro--section intro--type webdev">
  <span class="text-light"
    ><mark class="blue-undeline text-light">Web</mark> development</span
  >
  <img class="intro--type--image" src="${webdevImage}" height="30%" />
</section>

<section class="intro--section intro--type gamedev">
  <img class="intro--type--image" src="${gamedevImage}" height="30%" />
  <span class="text-light"
    ><mark class="blue-undeline text-light">Gam</mark>e development</span
  >
</section>

<section class="intro--section intro--objectives--game">
  <p class="intro--objectives--text">
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
  </p>
</section>

<section class="intro--section intro--objectives--web">
  <p class="intro--objectives--text">
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

export { homepageContentEN };

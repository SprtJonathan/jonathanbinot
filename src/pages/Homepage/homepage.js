import hpBgOne from "../../assets/images/homepage/homepage-bg-1.jpg";
import hpBgTwo from "../../assets/images/homepage/homepage-bg-3.png";
import webdevImage from "../../assets/images/homepage/webdev.png";
import gamedevImage from "../../assets/images/homepage/gamedev.png";
import JSLogo from "../../../javascript.svg";
import OCLogo from "../../assets/images/homepage/oc-logo.png";

import { homepageContentFR } from "./views/homepageUI_fr";
import { homepageContentEN } from "./views/homepageUI_en";

export function Homepage() {
  const lang = localStorage.getItem("language");
  let homepageContent;

  if (lang === "fr") {
    homepageContent = homepageContentFR;
  } else {
    homepageContent = homepageContentEN;
  }

  let birthDate = new Date("02/14/1999");
  let ageOperation = Date.now() - birthDate.getTime();
  let ageDate = new Date(ageOperation);
  let birthYear = ageDate.getUTCFullYear();
  const age = Math.abs(birthYear - 1970);

  const homepage = document.createElement("main");
  homepage.setAttribute("class", "homepage");
  homepage.setAttribute("id", "homepage");
  //homepage.append(Header("home"));

  homepage.appendChild(homepageContent);

  const homepageBackground = `
  <div id="homepage-background" class="homepage--background">
  <div id="background-1" class="hidden homepage--background homepage--background--bluepurple" style="background-image: url(${hpBgOne})"></div>
  <div id="background-2" class="hidden homepage--background homepage--background--darkgrey" style="background-image: url(${hpBgTwo})"></div>
  <div id="background-3" class="hidden homepage--background homepage--background--yelloworange"></div>
  <div id="background-4" class="hidden homepage--background homepage--background--greenblue"></div>
  <video id="background-5" class="hidden" autoplay muted loop id="myVideo">
    <source class="mp4-source" src="//cdn-cf-east.streamable.com/video/mp4/pn1u01.mp4?Expires=1662153060&amp;Signature=Tl3u5kwsrJPMk-OH-mqkfVHrcWFnkxi~5CGA3EmHV7OztFUn7Gn~NyL97vrj7VSmsiELIJTG4RQEHeJC0su4P~vGNMhYh-vNQfi1LhBRIt1As~gVyhy0vGiWYLMwg9LIVZzI5JcdUhSqmxRuNzsK~pnemWHMUUa-ocPSxiPg89TPBISrjSy6JicoSazkh9qC1qzX0m7Hlh-p6RaaO5qzPiwLQ3mvt9QG86EIwC732RiOWlGJtBkLAaoMdX3nFesjvOMcSpwaC8yuLqzfHzzVmji5rutnNgOEd6Qqh2ZrZS-xhlYPtbQ6yC8hbOgotLYWuPPccZCHOvsVO7VREP3vlg__&amp;Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ">
  </video>
  <div id="background-6" class="homepage--background" style="background-image: url(${hpBgOne})"></div>
  </div>
  `;

  homepage.innerHTML += homepageBackground;

  let backgroundIndex = 0;

  function changeBackground() {
    const windowHeight = window.innerHeight;
    let newBackgroundIndex = 0;

    if (windowHeight >= window.pageYOffset) {
      document.getElementById("background-1").className =
        "homepage--background homepage--background--image";
      document.getElementById("background-2").className =
        "hidden homepage--background homepage--background--image";
      document.getElementById("background-3").className =
        "hidden homepage--background homepage--background--image";
      document.getElementById("background-4").className =
        "hidden homepage--background homepage--background--image";
      document.getElementById("background-5").className = "hidden";
      document.getElementById("background-6").className =
        "hidden homepage--background";
      console.log("1 fois " + window.pageYOffset);
    } else if (
      windowHeight * 3 >= window.pageYOffset &&
      window.pageYOffset >= windowHeight
    ) {
      document.getElementById("background-1").className =
        "hidden homepage--background homepage--background--image";
      document.getElementById("background-2").className =
        "homepage--background homepage--background--image";
      document.getElementById("background-3").className =
        "hidden homepage--background homepage--background--image";
      document.getElementById("background-4").className =
        "hidden homepage--background homepage--background--image";
      document.getElementById("background-5").className = "hidden";
      document.getElementById("background-6").className =
        "hidden homepage--background";
      console.log("1 fois " + window.pageYOffset);
    } else if (
      windowHeight * 5 >= window.pageYOffset &&
      window.pageYOffset >= windowHeight * 3
    ) {
      document.getElementById("background-1").className =
        "hidden homepage--background homepage--background--image";
      document.getElementById("background-2").className =
        "hidden homepage--background homepage--background--image";
      document.getElementById("background-3").className =
        "hidden homepage--background homepage--background--image";
      document.getElementById("background-4").className =
        "hidden homepage--background homepage--background--image";
      document.getElementById("background-5").className =
        "homepage--background";
      document.getElementById("background-6").className =
        "hidden homepage--background";
      console.log("4 fois " + window.pageYOffset);
    }

    if (backgroundIndex !== newBackgroundIndex) {
      backgroundIndex = newBackgroundIndex;
      display();
    }
  }

  document.addEventListener("scroll", function () {
    if (window.location.pathname.split("/")[2] == "") {
      changeBackground();
    }
  });

  return homepage;
}

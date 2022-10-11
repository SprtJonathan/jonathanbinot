import { homepageContent } from "./views/homepageUI";
import { homepageBackground } from "./views/homepageUI_background";

export function Homepage() {
  const homepage = document.createElement("main");
  homepage.setAttribute("class", "homepage");
  homepage.setAttribute("id", "homepage");

  homepage.appendChild(homepageContent);

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
    }

    if (backgroundIndex !== newBackgroundIndex) {
      backgroundIndex = newBackgroundIndex;
      display();
    }
  }

  document.addEventListener("scroll", function () {
    if (window.location.pathname.split("/")[1] == "") {
      changeBackground();
    }
  });

  return homepage;
}

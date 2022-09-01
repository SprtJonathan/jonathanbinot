import hpBgOne from "../../../assets/images/homepage/homepage-bg-1.jpg";
import hpBgTwoFrame from "../../../assets/images/homepage/homepage-bg-3_frame.png";

const homepageBackground = `
  <div id="homepage-background" class="homepage--background">
  <div id="background-1" class="hidden homepage--background homepage--background--bluepurple" style="background-image: url(${hpBgOne})"></div>
  <div id="background-2" class="hidden homepage--background homepage--background--darkgrey" style="background-image: url(${hpBgTwoFrame})"></div>
  <div id="background-3" class="hidden homepage--background homepage--background--yelloworange"></div>
  <div id="background-4" class="hidden homepage--background homepage--background--greenblue"></div>
  <video id="background-5" class="hidden" autoplay muted loop id="myVideo">
    <source class="mp4-source" src="//cdn-cf-east.streamable.com/video/mp4/pn1u01.mp4?Expires=1662153060&amp;Signature=Tl3u5kwsrJPMk-OH-mqkfVHrcWFnkxi~5CGA3EmHV7OztFUn7Gn~NyL97vrj7VSmsiELIJTG4RQEHeJC0su4P~vGNMhYh-vNQfi1LhBRIt1As~gVyhy0vGiWYLMwg9LIVZzI5JcdUhSqmxRuNzsK~pnemWHMUUa-ocPSxiPg89TPBISrjSy6JicoSazkh9qC1qzX0m7Hlh-p6RaaO5qzPiwLQ3mvt9QG86EIwC732RiOWlGJtBkLAaoMdX3nFesjvOMcSpwaC8yuLqzfHzzVmji5rutnNgOEd6Qqh2ZrZS-xhlYPtbQ6yC8hbOgotLYWuPPccZCHOvsVO7VREP3vlg__&amp;Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ">
  </video>
  <div id="background-6" class="homepage--background" style="background-image: url(${hpBgOne})"></div>
  </div>
  `;

export { homepageBackground };

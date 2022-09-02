import hpBgOne from "../../../assets/images/homepage/homepage-bg-1.jpg";
import hpBgTwoFrame from "../../../assets/images/homepage/homepage-bg-3_frame.png";

const homepageBackground = `
  <div id="homepage-background" class="homepage--background">
  <div id="background-1" class="hidden homepage--background homepage--background--bluepurple" style="background-image: url(${hpBgOne})"></div>
  <div id="background-2" class="hidden homepage--background homepage--background--darkgrey" style="background-image: url(${hpBgTwoFrame})"></div>
  <div id="background-3" class="hidden homepage--background homepage--background--yelloworange"></div>
  <div id="background-4" class="hidden homepage--background homepage--background--greenblue"></div>
  <video id="background-5" class="hidden" autoplay muted loop id="myVideo">
  <source class="mp4-source" src="//cdn-cf-east.streamable.com/video/mp4/pn1u01.mp4?Expires=1662413700&Signature=Lbd3Y-yHxViArU6FeSD7LoFqJRlAwcODCVuiVGLT1eOXd3YyaAf4XkhGKz0ZGldMp8gsN0hMxlknSosSxHkGHeNUJYneCksC~0hDDVcw3sviN~SV8ppc1IAtBiKHjFHLpzqoRB7Fk5MTDFsl1qzQxyfnjXDmgEVp5JW08ay6Gtv2huZ6OjAx4qx02wePa-~s3qe6R8ppa1hMZKXhxlh6-lWuce0xb1x79a5bOaN~cGeJEO7nYNoKRaxge4v6MY4FycJDCRkw3iwWiHevXAhXZWchnj1B5izm4tm6RppZvURlajTKZHTOm~dXUWzomuYnydg~97LMIfLnW1XfRpCmhg__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ">
  </video>
  <div id="background-6" class="homepage--background" style="background-image: url(${hpBgOne})"></div>
  </div>
  `;

export { homepageBackground };

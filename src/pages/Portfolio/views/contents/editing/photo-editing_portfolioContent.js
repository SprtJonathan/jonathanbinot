import { createElementFromTemplate } from "../../../../../components/helpers";
import Carousel from "../../../../../components/Carousel/Carousel";
import photoEditingText from "./photo-editing_text";

/* Facebook pictures */
import fb1 from "../../../../../assets/images/portfolio/photo-editing/facebook/facebook-pp-1.png";
import fb2 from "../../../../../assets/images/portfolio/photo-editing/facebook/facebook-pp-2.png";
import fb3 from "../../../../../assets/images/portfolio/photo-editing/facebook/facebook-pp-3.png";
import fbBanner1 from "../../../../../assets/images/portfolio/photo-editing/facebook/facebook-banner-1.png";
import fbBanner2 from "../../../../../assets/images/portfolio/photo-editing/facebook/facebook-banner-2.png";

/* StreamKit pictures */
import streamKit1 from "../../../../../assets/images/portfolio/photo-editing/stream-kit/stream-kit-1.png";
import streamKit2 from "../../../../../assets/images/portfolio/photo-editing/stream-kit/stream-kit-2.png";

/* Logos pictures */
import logoDDP from "../../../../../assets/images/portfolio/photo-editing/logos/ddp-logo.png";
import logoSeehna from "../../../../../assets/images/portfolio/photo-editing/logos/seehna-logo.png";
import logoSpart from "../../../../../assets/images/portfolio/photo-editing/logos/spart-logo.png";
import logoHybridus from "../../../../../assets/images/portfolio/photo-editing/logos/hybridus-logo.png";
import logoRyzer from "../../../../../assets/images/portfolio/photo-editing/logos/ryzer-logo.png";
import logo1stin from "../../../../../assets/images/portfolio/photo-editing/logos/1stin-logo.png";

/* Company pictures */
import companyLogo1 from "../../../../../assets/images/portfolio/photo-editing/company/company-logo-1.png";
import companyLogo2 from "../../../../../assets/images/portfolio/photo-editing/company/company-logo-2.png";

const lang = localStorage.getItem("language");
let photoEditingTitle, importedPhotoEditingText;
if (lang === "fr") {
  photoEditingTitle = photoEditingText.fr.photoEditingTitle;
  importedPhotoEditingText = photoEditingText.fr;
} else {
  photoEditingTitle = photoEditingText.en.photoEditingTitle;
  importedPhotoEditingText = photoEditingText.en;
}

const photoEditingContent = createElementFromTemplate(
  "div",
  { id: "photoEditing-content", class: "portfolio--modal-content" },
  "",
  ""
);

createElementFromTemplate(
  "p",
  {},
  importedPhotoEditingText.modalIntroText,
  photoEditingContent
);

createElementFromTemplate("hr", {}, "", photoEditingContent);

const facebookPpSection = createElementFromTemplate(
  "div",
  {},
  "",
  photoEditingContent
);

createElementFromTemplate(
  "h3",
  {},
  importedPhotoEditingText.facebookPpTitle,
  facebookPpSection
);

const carouselFacebookMedias = [
  {
    type: "image",
    title: "",
    link: fb1,
    description: "",
  },
  {
    type: "image",
    title: "",
    link: fb2,
    description: "",
  },
  {
    type: "image",
    title: "",
    link: fb3,
    description: "",
  },
  {
    type: "image",
    title: "",
    link: fbBanner1,
    description: "",
  },
  {
    type: "image",
    title: "",
    link: fbBanner2,
    description: "",
  },
];

const facebookCarousel = Carousel("streamKit", carouselFacebookMedias, "");

facebookPpSection.append(facebookCarousel);

createElementFromTemplate(
  "p",
  {},
  importedPhotoEditingText.facebookPpText,
  facebookPpSection
);

createElementFromTemplate("hr", {}, "", photoEditingContent);

const streamKitSection = createElementFromTemplate(
  "div",
  {},
  "",
  photoEditingContent
);

createElementFromTemplate(
  "h3",
  {},
  importedPhotoEditingText.streamKitTitle,
  streamKitSection
);

const carouselStreamKitMedias = [
  {
    type: "image",
    title: "",
    link: streamKit1,
    description: "",
  },
  {
    type: "image",
    title: "",
    link: streamKit2,
    description: "",
  },
];

const streamKitCarousel = Carousel("streamKit", carouselStreamKitMedias, "");

streamKitSection.append(streamKitCarousel);

createElementFromTemplate(
  "p",
  {},
  importedPhotoEditingText.streamKitText,
  streamKitSection
);

createElementFromTemplate("hr", {}, "", photoEditingContent);

const logosSection = createElementFromTemplate(
  "div",
  {},
  "",
  photoEditingContent
);

createElementFromTemplate(
  "h3",
  {},
  importedPhotoEditingText.logosTitle,
  logosSection
);

const carouselLogosMedias = [
  {
    type: "image",
    title: "",
    link: logoDDP,
    description: "",
  },
  {
    type: "image",
    title: "",
    link: logoSeehna,
    description: "",
  },
  {
    type: "image",
    title: "My logo",
    link: logoSpart,
    description: "",
  },
  {
    type: "image",
    title: "Discord bot logo",
    link: logoHybridus,
    description: "",
  },
  {
    type: "image",
    title: "",
    link: logoRyzer,
    description: "",
  },
  {
    type: "image",
    title: "",
    link: logo1stin,
    description: "",
  },
];

const logosCarousel = Carousel("streamKit", carouselLogosMedias, "");

logosSection.append(logosCarousel);

createElementFromTemplate(
  "p",
  {},
  importedPhotoEditingText.logosText,
  logosSection
);

createElementFromTemplate("hr", {}, "", photoEditingContent);

const companySection = createElementFromTemplate(
  "div",
  {},
  "",
  photoEditingContent
);

createElementFromTemplate(
  "h3",
  {},
  importedPhotoEditingText.companyLogoTitle,
  companySection
);

const carouselCompanyMedias = [
  {
    type: "image",
    title: "",
    link: companyLogo1,
    description: "",
  },
  {
    type: "image",
    title: "",
    link: companyLogo2,
    description: "",
  },
];

const companyCarousel = Carousel("streamKit", carouselCompanyMedias, "");

companySection.append(companyCarousel);

createElementFromTemplate(
  "p",
  {},
  importedPhotoEditingText.companyLogoText,
  companySection
);

createElementFromTemplate(
  "div",
  { class: "spacer--vertical--medium" },
  "",
  photoEditingContent
);

export { photoEditingTitle, photoEditingContent };

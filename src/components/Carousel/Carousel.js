import { createElementFromTemplate } from "../helpers";

// This Carousel component allows to create a gallery of photos and videos.
export default function Carousel(media, className) {
  let currentIndex = 0; // The initial index of the gallery

  let carouselClass; // If no class is specified, the default class: carousel is set
  if (!className) {
    carouselClass = "carousel";
  } else {
    carouselClass = className;
  }
  const carouselContainer = createElementFromTemplate(
    "div",
    {
      class: carouselClass,
    },
    "",
    ""
  );

  const carouselMediaTitle = createElementFromTemplate(
    "div",
    {
      class: carouselClass + "--media--title",
    },
    media[currentIndex].title,
    carouselContainer
  );

  function displayCarousel(index) {
    let carouselMediaContainer;
    if (media[index].type == "video") {
      carouselMediaContainer = createElementFromTemplate(
        "video",
        {
          class: carouselClass + "--media",
        },
        "",
        carouselContainer
      );
      createElementFromTemplate(
        "source",
        {
          class: carouselClass + "--media--video",
          src: media[index].link,
        },
        "",
        carouselMediaContainer
      );
    } else {
      carouselMediaContainer = createElementFromTemplate(
        "div",
        {
          class: carouselClass + "--media",
        },
        "",
        carouselContainer
      );
      createElementFromTemplate(
        "img",
        {
          class: carouselClass + "--media--img",
          src: media[index].link,
        },
        "",
        carouselMediaContainer
      );
    }

    const carouselMediaDescription = createElementFromTemplate(
      "div",
      {
        class: carouselClass + "--media--description",
      },
      media[currentIndex].description,
      carouselContainer
    );
    return carouselMediaContainer;
  }

  displayCarousel(currentIndex);

  const controlsContainer = createElementFromTemplate(
    "div",
    { class: carouselClass + "--controls--block" },
    "",
    carouselContainer
  );

  if (media.length <= 1) {
    controlsContainer.classList.add("hidden");
  }

  const previousButton = createElementFromTemplate(
    "button",
    { class: carouselClass + "--button", type: "button" },
    "<",
    controlsContainer
  );
  const nextButton = createElementFromTemplate(
    "button",
    { class: carouselClass + "--button", type: "button" },
    ">",
    controlsContainer
  );

  previousButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("previous");
    changeMedia(-1);
  });

  nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target);
    changeMedia(1);
  });

  function changeMedia(value) {
    console.log("Change : " + value);
    currentIndex = currentIndex + value;
    displayCarousel(currentIndex);
  }

  return carouselContainer;
}

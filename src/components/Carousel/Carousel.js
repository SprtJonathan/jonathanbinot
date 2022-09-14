import { createElementFromTemplate } from "../helpers";

// This Carousel component allows to create a gallery of photos and videos.
export default function Carousel(carouselId, media, className) {
  let currentIndex = 0; // The initial index of the gallery

  let carouselClass; // If no class is specified, the default class: carousel is set
  if (!className) {
    carouselClass = "carousel";
  } else {
    carouselClass = className;
  }
  const carouselSection = createElementFromTemplate(
    "section",
    { class: carouselClass + "--section" },
    "",
    ""
  );
  const carouselContainer = createElementFromTemplate(
    "div",
    {
      class: carouselClass,
    },
    "",
    carouselSection
  );

  if (media[currentIndex].title || media[currentIndex].title != "") {
    const carouselMediaTitle = createElementFromTemplate(
      "div",
      {
        class: carouselClass + "--media--title",
      },
      media[currentIndex].title,
      carouselContainer
    );
  }
  let carouselMediaContainer;
  if (media[currentIndex].type == "video") {
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
        src: media[currentIndex].link,
      },
      "",
      carouselMediaContainer
    );
  } else {
    carouselMediaContainer = createElementFromTemplate(
      "figure",
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
        src: media[currentIndex].link,
      },
      "",
      carouselMediaContainer
    );

    if (
      media[currentIndex].description ||
      media[currentIndex].description != ""
    ) {
      const carouselMediaDescription = createElementFromTemplate(
        "figcaption",
        {
          class: carouselClass + "--media--description",
        },
        "",
        carouselContainer
      );
      const carouselMediaDescriptionText = createElementFromTemplate(
        "p",
        {
          class: carouselClass + "--media--description--text",
        },
        media[currentIndex].description,
        carouselMediaDescription
      );
    }
  }

  const controlsContainer = createElementFromTemplate(
    "div",
    { class: carouselClass + "--controls--block" },
    "",
    carouselContainer
  );

  if (media.length <= 1) {
    controlsContainer.className = "hidden";
  } else {
    controlsContainer.className = carouselClass + "--controls--block";
  }

  const buttonsContainer = createElementFromTemplate(
    "div",
    { class: carouselClass + "--controls--button--block" },
    "",
    controlsContainer
  );

  const previousButton = createElementFromTemplate(
    "button",
    {
      id: "previous-button-" + carouselId,
      class: carouselClass + "--controls--button",
      type: "button",
    },
    `<i class="fa-solid fa-chevron-left"></i>`,
    buttonsContainer
  );
  const nextButton = createElementFromTemplate(
    "button",
    {
      id: "next-button-" + carouselId,
      class: carouselClass + "--controls--button",
      type: "button",
    },
    `<i class="fa-solid fa-chevron-right"></i>`,
    buttonsContainer
  );

  previousButton.addEventListener("click", (e) => {
    console.log("click click " + e);
    changeMedia(-1);
  });

  nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("click click " + e);
    changeMedia(1);
  });

  function changeMedia(value) {
    console.log("Change : " + value);
    currentIndex = currentIndex + value;
    if (currentIndex < 0) {
      currentIndex = media.length - 1;
    }
    if (currentIndex > media.length) {
      currentIndex = 0;
    }
    console.log(currentIndex);
  }

  return carouselSection;
}

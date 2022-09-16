import { createElementFromTemplate } from "../helpers";

// This Carousel component allows to create a gallery of photos and videos.
export default function Carousel(carouselId, media, className) {
  let currentSlide = 0; // The initial index of the gallery

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

  const slides = [];
  for (let i = 0; i < media.length; i++) {
    const slideDiv = createElementFromTemplate(
      "figure",
      {
        class: carouselClass + "--slide",
      },
      "",
      carouselContainer
    );

    if (media[i].title || media[i].title != "") {
      const carouselMediaTitle = createElementFromTemplate(
        "div",
        {
          class: carouselClass + "--media--title",
        },
        media[i].title,
        slideDiv
      );
    }
    if (media[i].type == "video") {
      const carouselMediaContainer = createElementFromTemplate(
        "video",
        {
          class: carouselClass + "--media--video",
          controls: true,
          height: "100%",
        },
        "",
        slideDiv
      );
      createElementFromTemplate(
        "source",
        {
          class: carouselClass + "--media--video",
          src: media[i].link,
        },
        "",
        carouselMediaContainer
      );
    } else {
      const imageLink = createElementFromTemplate(
        "a",
        {
          class: carouselClass + "--media--image--link",
          href: media[i].link,
          target: "_blank",
        },
        "",
        slideDiv
      );
      createElementFromTemplate(
        "img",
        {
          class: carouselClass + "--media--img",
          src: media[i].link,
        },
        "",
        imageLink
      );

      if (media[i].description || media[i].description != "") {
        const carouselMediaDescription = createElementFromTemplate(
          "figcaption",
          {
            class: carouselClass + "--media--description",
          },
          "",
          slideDiv
        );
        const carouselMediaDescriptionText = createElementFromTemplate(
          "p",
          {
            class: carouselClass + "--media--description--text",
          },
          media[currentSlide].description,
          carouselMediaDescription
        );
      }
    }
    slides.push(slideDiv);
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
  });

  console.log(slides);

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
    currentSlide = currentSlide + value;
    if (currentSlide < 0) {
      currentSlide = media.length - 1;
    }
    if (currentSlide > media.length - 1) {
      currentSlide = 0;
    }
    slides.forEach((slide, indx) => {
      console.log("gp");
      slide.style.transform = `translateX(${100 * (indx - currentSlide)}%)`;
    });
  }

  return carouselSection;
}

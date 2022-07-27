// login dropdown
let dropdownMenu = document.querySelector(".dropdown-menu");
document.addEventListener("click", (e) => {
  let isDropdownButton = e.target.matches("[data-dropdown-button]");

  if (!isDropdownButton) {
    if (dropdownMenu === false && dropdownMenu.classList.includes("active")) {
      dropdownMenu.classList.remove("active");
    }
    return;
  } else {
    dropdownMenu.classList.toggle("active");
  }
});

// navbar
const burger = document.querySelector(".menu");
burger.onclick = () => {
  document.querySelector(".header-2").classList.toggle("menu");
};

const searchForm = document.querySelector(".search-form");
document.querySelector(".search-button").onclick = () => {
  searchForm.classList.toggle("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
  if (window.scrollY > 80) {
    document.querySelector(".header-2").classList.remove("menu");
    document.querySelector(".header-2").classList.add("active");
  } else {
    document.querySelector(".header-2").classList.remove("active");
  }
};

window.onload = () => {
  if (window.scrollY > 80) {
    document.querySelector(".header-2").classList.add("active");
  } else {
    document.querySelector(".header-2").classList.remove("active");
  }
};

// swiper
var swiper = new Swiper(".book-slider", {
  loop: true,
  autoplay: {
    delay: 1500,
    disabledOnInteraction: false,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
    },
    "@0.75": {
      slidesPerView: 2,
    },
    "@1.00": {
      slidesPerView: 2,
    },
    "@1.50": {
      slidesPerView: 3,
    },
  },
});

// Filepond for cover photo
FilePond.registerPlugin(
  FilePondPluginFileEncode,
  FilePondPluginImagePreview,
  FilePondPluginImageResize
);

FilePond.setOptions({
  stylePanelAspectRatio: 1 / 1,
  imageResizeTargetWidth: 50,
  imageResizeTargetHeight: 50,
});

FilePond.parse(document.body);

// draggable slider
let pressed = false;
let startX;
let x;
let [academicSliderContainer, academicInnerSlider] = selectSlider("academic");
let [businessSliderContainer, businessInnerSlider] = selectSlider("business");
let [childrenSliderContainer, childrenInnerSlider] = selectSlider("children");
let [personalSliderContainer, personalInnerSlider] = selectSlider("personal");
let [politicsSliderContainer, politicsInnerSlider] = selectSlider("politics");
let [religionSliderContainer, religionInnerSlider] = selectSlider("religion");
let [fictionSliderContainer, fictionInnerSlider] = selectSlider("fiction");
let [scienceSliderContainer, scienceInnerSlider] = selectSlider("science");
let [healthSliderContainer, healthInnerSlider] = selectSlider("health");
let [artSliderContainer, artInnerSlider] = selectSlider("art");
let [biographySliderContainer, biographyInnerSlider] =
  selectSlider("biography");
let [lifestyleSliderContainer, lifestyleInnerSlider] =
  selectSlider("lifestyle");
let [enviromentSliderContainer, enviromentInnerSlider] =
  selectSlider("enviroment");
let [technologySliderContainer, technologyInnerSlider] =
  selectSlider("technology");

moveSlides(enviromentSliderContainer, enviromentInnerSlider);
moveSlides(technologySliderContainer, technologyInnerSlider);
moveSlides(biographySliderContainer, biographyInnerSlider);
moveSlides(lifestyleSliderContainer, lifestyleInnerSlider);
moveSlides(academicSliderContainer, academicInnerSlider);
moveSlides(businessSliderContainer, businessInnerSlider);
moveSlides(childrenSliderContainer, childrenInnerSlider);
moveSlides(personalSliderContainer, personalInnerSlider);
moveSlides(politicsSliderContainer, politicsInnerSlider);
moveSlides(religionSliderContainer, religionInnerSlider);
moveSlides(scienceSliderContainer, scienceInnerSlider);
moveSlides(fictionSliderContainer, fictionInnerSlider);
moveSlides(healthSliderContainer, healthInnerSlider);
moveSlides(artSliderContainer, artInnerSlider);

function selectSlider(category) {
  let tempSliderContainer = document.querySelector(
    `.slider-container.${category}`
  );
  let tempInnerSlider = document.querySelector(`.inner-slider.${category}`);
  return [tempSliderContainer, tempInnerSlider];
}

function moveSlides(sliderContainer, innerSlider) {
  sliderContainer.addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.offsetX - innerSlider.offsetLeft;
    sliderContainer.style.cursor = "grabbing";
  });

  sliderContainer.addEventListener("mouseenter", () => {
    sliderContainer.style.cursor = "grab";
  });

  sliderContainer.addEventListener("mouseup", () => {
    sliderContainer.style.cursor = "grab";
    pressed = false;
  });

  sliderContainer.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;

    innerSlider.style.left = `${x - startX}px`;
    checkBoundary();
  });

  const checkBoundary = () => {
    let outer = sliderContainer.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if (parseInt(innerSlider.style.left) > 0) {
      innerSlider.style.left = "0px";
    }

    if (inner.right < outer.right) {
      innerSlider.style.left = `-${inner.width - outer.width}px`;
    }
  };
}

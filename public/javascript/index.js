// login dropdown
document.addEventListener("click", (e) => {
  let isDropdownButton = e.target.matches("[data-dropdown-button]");
  let dropdownMenu = document.querySelector(".dropdown-menu");

  if (!isDropdownButton) {
    dropdownMenu.classList.remove("active");
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

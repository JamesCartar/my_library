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

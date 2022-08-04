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
  if (window.scrollY > 150) {
    document.querySelector(".header-2").classList.remove("menu");
    document.querySelector(".header-2").classList.add("active");
  } else {
    document.querySelector(".header-2").classList.remove("active");
  }
};

window.onload = () => {
  if (window.scrollY > 150) {
    document.querySelector(".header-2").classList.add("active");
  } else {
    document.querySelector(".header-2").classList.remove("active");
  }
};

// navbar more button
const navMoreButton = document.querySelector(".first .nav-item span");
const secondNav = document.querySelector(".second");
navMoreButton.addEventListener("click", () => {
  secondNav.classList.toggle("active");
});

// swiper
var swiper = new Swiper(".book-slider", {
  slidesPerView: 2,
  loop: true,
  shortSwipes: true,
  watchSlidesProgress: true,
  autoplay: {
    delay: 3000,
    disabledOnInteraction: true,
  },
  breakpoints: {
    284: {
      slidesPerView: 2,
    },
    484: {
      slidesPerView: 3,
    },
    567: {
      slidesPerView: 4,
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

// category Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  watchSlidesProgress: true,
  spaceBetween: 0,
  shortSwipes: true,
  breakpoints: {
    400: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    600: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    800: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
    1000: {
      slidesPerView: 8,
      spaceBetween: 0,
    },
  },
});

// draggable slider
// let pressed = false;
// let startX;
// let x;

// let [academicSliderContainer, academicInnerSlider] = selectSlider("academic");
// let [businessSliderContainer, businessInnerSlider] = selectSlider("business");
// let [childrenSliderContainer, childrenInnerSlider] = selectSlider("children");
// let [personalSliderContainer, personalInnerSlider] = selectSlider("personal");
// let [politicsSliderContainer, politicsInnerSlider] = selectSlider("politics");
// let [religionSliderContainer, religionInnerSlider] = selectSlider("religion");
// let [fictionSliderContainer, fictionInnerSlider] = selectSlider("fiction");
// let [scienceSliderContainer, scienceInnerSlider] = selectSlider("science");
// let [healthSliderContainer, healthInnerSlider] = selectSlider("health");
// let [artSliderContainer, artInnerSlider] = selectSlider("art");
// let [biographySliderContainer, biographyInnerSlider] =
//   selectSlider("biography");
// let [lifestyleSliderContainer, lifestyleInnerSlider] =
//   selectSlider("lifestyle");
// let [enviromentSliderContainer, enviromentInnerSlider] =
//   selectSlider("enviroment");
// let [technologySliderContainer, technologyInnerSlider] =
//   selectSlider("technology");

// moveSlides(enviromentSliderContainer, enviromentInnerSlider);
// moveSlides(technologySliderContainer, technologyInnerSlider);
// moveSlides(biographySliderContainer, biographyInnerSlider);
// moveSlides(lifestyleSliderContainer, lifestyleInnerSlider);
// moveSlides(academicSliderContainer, academicInnerSlider);
// moveSlides(businessSliderContainer, businessInnerSlider);
// moveSlides(childrenSliderContainer, childrenInnerSlider);
// moveSlides(personalSliderContainer, personalInnerSlider);
// moveSlides(politicsSliderContainer, politicsInnerSlider);
// moveSlides(religionSliderContainer, religionInnerSlider);
// moveSlides(scienceSliderContainer, scienceInnerSlider);
// moveSlides(fictionSliderContainer, fictionInnerSlider);
// moveSlides(healthSliderContainer, healthInnerSlider);
// moveSlides(artSliderContainer, artInnerSlider);

// function selectSlider(category) {
//   let tempSliderContainer = document.querySelector(
//     `.slider-container.${category}`
//   );
//   let tempInnerSlider = document.querySelector(`.inner-slider.${category}`);
//   return [tempSliderContainer, tempInnerSlider];
// }

// function moveSlides(sliderContainer, innerSlider) {
//   // innerSlider.addEventListener("click", () => {
//   //   innerSlider.style.pointerEvents = "auto";
//   //   console.log("adsf");
//   // });

//   sliderContainer.addEventListener("mousedown", (e) => {
//     pressed = true;
//     startX = e.offsetX - innerSlider.offsetLeft;
//     sliderContainer.style.cursor = "grabbing";

//     sliderContainer.addEventListener("mousemove", (e) => {
//       innerSlider.style.pointerEvents = "none";
//       console.log("down and move");
//       if (!pressed) return;
//       e.preventDefault();

//       x = e.offsetX;

//       innerSlider.style.left = `${x - startX}px`;
//       checkBoundary();
//     });
//   });

//   sliderContainer.addEventListener("touchstart", (e) => {
//     innerSlider.style.pointerEvents = "auto";
//     var rect = e.target.getBoundingClientRect();
//     pressed = true;
//     startX = e.targetTouches[0].pageX - rect.left - innerSlider.offsetLeft;
//     sliderContainer.style.cursor = "grabbing";

//     sliderContainer.addEventListener("touchmove", (e) => {
//       innerSlider.style.pointerEvents = "none";
//       var rect = e.target.getBoundingClientRect();
//       if (!pressed) return;
//       e.preventDefault();

//       x = e.targetTouches[0].pageX - rect.left;

//       innerSlider.style.left = `${x - startX}px`;
//       checkBoundary();
//     });
//   });

//   sliderContainer.addEventListener("mouseenter", () => {
//     innerSlider.style.pointerEvents = "auto";
//     sliderContainer.style.cursor = "grab";
//   });

//   sliderContainer.addEventListener("mouseup", () => {
//     innerSlider.style.pointerEvents = "auto";
//     sliderContainer.style.cursor = "grab";
//     pressed = false;
//   });
//   const checkBoundary = () => {
//     let outer = sliderContainer.getBoundingClientRect();
//     let inner = innerSlider.getBoundingClientRect();

//     if (parseInt(innerSlider.style.left) > 0) {
//       innerSlider.style.left = "0px";
//     }

//     if (inner.right < outer.right) {
//       innerSlider.style.left = `-${inner.width - outer.width}px`;
//     }
//   };
// }

// AutoComplete

let books = [
  {
    _id: "62e905fe35ea45e9d9e1cc0d",
    title: "And Quiet Flows the Don",
  },
  {
    _id: "62e905fe35ea45e9d9e1cc0f",
    title: "Silent Treatment",
  },
  {
    _id: "62e905ff35ea45e9d9e1cc11",
    title:
      "Never Split the Difference: Negotiating As If Your Life Depended On It",
  },
  {
    _id: "62e905ff35ea45e9d9e1cc13",
    title: "100 Ways to Motivate Yourself: Change Your Life Forever",
  },
  {
    _id: "62e905ff35ea45e9d9e1cc15",
    title: "Praying To Get Results By Kenneth E. Hagin",
  },
  {
    _id: "62e905ff35ea45e9d9e1cc17",
    title: "How to Win Every Argument",
  },
  {
    _id: "62e905ff35ea45e9d9e1cc19",
    title:
      "Genius Foods: Become Smarter, Happier, and More Productive While Protecting Your Brain for Life",
  },
  {
    _id: "62e905ff35ea45e9d9e1cc1b",
    title: "I am Malala: The Story of the Girl Who Stood Up for Education",
  },
  {
    _id: "62e905ff35ea45e9d9e1cc1d",
    title: "CRITICAL THINKING: Consider the Verdict Sixth Edition",
  },
  {
    _id: "62e905ff35ea45e9d9e1cc1f",
    title: "Give and Take: WHY HELPING OTHERS DRIVES OUR SUCCESS",
  },
  {
    _id: "62e905ff35ea45e9d9e1cc21",
    title: "The Purpose-Driven Life: What on Earth Am I Here For?",
  },
  {
    _id: "62e905ff35ea45e9d9e1cc23",
    title: "The Rules of Work: A Definitive Code for Personal Success",
  },
  {
    _id: "62e905ff35ea45e9d9e1cc25",
    title: "Art of Drawing the Human Body",
  },
  {
    _id: "62e905ff35ea45e9d9e1cc27",
    title:
      "Boundaries: When to Say Yes, How to Say No to Take Control of Your Life",
  },
  {
    _id: "62e905ff35ea45e9d9e1cc29",
    title:
      "The Daily Stoic: 366 Meditations on Wisdom, Perseverance, and the Art of Living",
  },
  {
    _id: "62e905ff35ea45e9d9e1cc2b",
    title: "Spoken English: Flourish Your Language",
  },
  {
    _id: "62e905ff35ea45e9d9e1cc2d",
    title: "The Secret History Of The World",
  },
  {
    _id: "62e905ff35ea45e9d9e1cc2f",
    title: "The Gifts of Imperfection: Embrace Who You Are",
  },
  {
    _id: "62e9060035ea45e9d9e1cc31",
    title: "Smart Thinking: Skills for Critical Understanding and Writing",
  },
  {
    _id: "62e9060035ea45e9d9e1cc33",
    title: "Psychology - A Self-Teaching Guide",
  },
  {
    _id: "62e90b63830927da07a31224",
    title: "The Power of Now: A Guide to Spiritual Enlightenment",
  },
  {
    _id: "62e90b64830927da07a31226",
    title:
      "The Miracle Morning: The Not-So-Obvious Secret Guaranteed to Transform Your Life",
  },
  {
    _id: "62e90b64830927da07a31228",
    title:
      "The Art of Work: A Proven Path to Discovering What You Were Meant to Do",
  },
  {
    _id: "62e90b64830927da07a3122a",
    title: "Living in the Light: A guide to personal transformation",
  },
  {
    _id: "62e90b64830927da07a3122c",
    title: "Fundamentals of Physics Textbook",
  },
  {
    _id: "62e90b64830927da07a3122e",
    title:
      "You Are a Badass: How to Stop Doubting Your Greatness and Start Living an Awesome Life",
  },
  {
    _id: "62e90b64830927da07a31230",
    title: "Napoleon: A Biography",
  },
  {
    _id: "62e90b65830927da07a31232",
    title: "Drawing Cartoons & Comics for Dummies",
  },
  {
    _id: "62e90b65830927da07a31234",
    title: "How To Stop Worrying And Start Living",
  },
  {
    _id: "62e90b65830927da07a31236",
    title: "How to Write a Better Thesis",
  },
  {
    _id: "62e90b65830927da07a31238",
    title: "Spoken English Learned Quickly",
  },
  {
    _id: "62e90b65830927da07a3123a",
    title: "How to Write Better Essays",
  },
  {
    _id: "62e90b65830927da07a3123c",
    title: "When the Moon Split: A biography of Prophet Muhammad ",
  },
  {
    _id: "62e90b65830927da07a3123e",
    title: "Blink: The Power of Thinking Without Thinking",
  },
  {
    _id: "62e90b65830927da07a31240",
    title: "Three Mistakes of My Life by Chetan Bhagat",
  },
  {
    _id: "62e90b65830927da07a31242",
    title: "Out of the Shadows: Understanding Sexual Addiction",
  },
  {
    _id: "62e90b65830927da07a31244",
    title: "Getting Things Done: The Art of Stress-Free Productivity",
  },
  {
    _id: "62e90b65830927da07a31246",
    title: "Textbook of Engineering Drawing",
  },
  {
    _id: "62e90b65830927da07a31248",
    title: "How to Study 7th Edition",
  },
  {
    _id: "62e90b65830927da07a3124a",
    title: "Awakening the Third Eye",
  },
  {
    _id: "62e90ba2bd3b44efeb022c2e",
    title: "Building Construction Handbook",
  },
  {
    _id: "62e90ba2bd3b44efeb022c30",
    title: "Speak to Win: How to Present with Power in Any Situation",
  },
  {
    _id: "62e90ba2bd3b44efeb022c32",
    title: "Atlas of Human Anatomy by Netter",
  },
  {
    _id: "62e90ba2bd3b44efeb022c34",
    title: "The Philosophy of Psychology",
  },
  {
    _id: "62e90ba2bd3b44efeb022c36",
    title: "Power Up Your Mind: Learn faster, work smarter",
  },
  {
    _id: "62e90ba2bd3b44efeb022c38",
    title: "Healthy Weight Loss Without Dieting",
  },
  {
    _id: "62e90ba2bd3b44efeb022c3a",
    title: "536 Puzzles and Curious Problems",
  },
  {
    _id: "62e90ba2bd3b44efeb022c3c",
    title: "The Food Lab: Better Home Cooking Through Science",
  },
  {
    _id: "62e90ba2bd3b44efeb022c3e",
    title: "Do the Work by Steven Pressfield",
  },
  {
    _id: "62e90ba2bd3b44efeb022c40",
    title: "Teaching English as a Foreign Language",
  },
  {
    _id: "62e90ba2bd3b44efeb022c42",
    title:
      "The Nature Fix: Why Nature Makes us Happier, Healthier and More Creative",
  },
  {
    _id: "62e90ba2bd3b44efeb022c44",
    title:
      "Keto Comfort Foods: Family Favorite Recipes Made Low-Carb and Healthy",
  },
  {
    _id: "62e90ba3bd3b44efeb022c46",
    title: "Shepherding a Child's Heart by Tedd Trip",
  },
  {
    _id: "62e90ba3bd3b44efeb022c48",
    title: "On Food and Cooking: The Science and Lore of the Kitchen",
  },
  {
    _id: "62e90ba3bd3b44efeb022c4a",
    title: "Money, Banking, and International Finance",
  },
  {
    _id: "62e90ba3bd3b44efeb022c4c",
    title:
      "The War of Art: Break Through the Blocks and Win Your Inner Creative Battles",
  },
  {
    _id: "62e90ba3bd3b44efeb022c4e",
    title: "No god but God: The Origins, Evolution, and Future of Islam",
  },
  {
    _id: "62e90ba3bd3b44efeb022c50",
    title: "Encyclopedia of Society and Culture in the Ancient World",
  },
  {
    _id: "62e90ba3bd3b44efeb022c52",
    title: "The Artist’s Way: A Spiritual Path to Higher Creativity",
  },
  {
    _id: "62e90ba3bd3b44efeb022c54",
    title: "Encyclopedia of Diets - A Guide to Health and Nutrition",
  },
  {
    _id: "62e90bd45015c5df5bfb5533",
    title: "The Dialectical Behavior Therapy Skills Workbook for Anxiety",
  },
  {
    _id: "62e90bd45015c5df5bfb5535",
    title: "Fundamentals of Probability and Statistics for Engineers",
  },
  {
    _id: "62e90bd45015c5df5bfb5537",
    title: "A COURSE IN MIRACLES: Foundation For Inner Peace",
  },
  {
    _id: "62e90bd45015c5df5bfb5539",
    title: "Guitar Chords for Dummies",
  },
  {
    _id: "62e90bd45015c5df5bfb553b",
    title: "The Piano Book",
  },
  {
    _id: "62e90bd45015c5df5bfb553d",
    title: "The Heart of Hearts of Rumi's Mathnawi",
  },
  {
    _id: "62e90bd45015c5df5bfb553f",
    title: "Light on Yoga: The Bible of Modern Yoga",
  },
  {
    _id: "62e90bd45015c5df5bfb5541",
    title: "Do the Work: Overcome Resistance and Get Out of Your Own Way",
  },
  {
    _id: "62e90bd45015c5df5bfb5543",
    title: "Joel Fuhrman - Eat To Live",
  },
  {
    _id: "62e90bd45015c5df5bfb5545",
    title: "A History of India, Third Edition",
  },
  {
    _id: "62e90bd45015c5df5bfb5547",
    title: "Learn English Through Telugu",
  },
  {
    _id: "62e90bd45015c5df5bfb5549",
    title: "How to Draw Collection 1-12",
  },
  {
    _id: "62e90bd45015c5df5bfb554b",
    title: "Who do you think you are?",
  },
  {
    _id: "62e90bd45015c5df5bfb554d",
    title: "Being Mortal: Illness, Medicine and What Matters in the End",
  },
  {
    _id: "62e90bd45015c5df5bfb554f",
    title: "The Astrology Book",
  },
  {
    _id: "62e90bd55015c5df5bfb5551",
    title: "Food: What the Heck Should I Eat?",
  },
  {
    _id: "62e90bd55015c5df5bfb5553",
    title: "Mindfulness Meditation (For Everyday Life)",
  },
  {
    _id: "62e90bd55015c5df5bfb5555",
    title: "100 TOEIC Preparation Tests",
  },
  {
    _id: "62e90bd55015c5df5bfb5557",
    title: "Data Structures with Java",
  },
  {
    _id: "62e90beced69c9e18c105951",
    title: "The Immortal Life of Henrietta Lacks",
  },
  {
    _id: "62e90beded69c9e18c105953",
    title: "Human Resources Management and Training",
  },
  {
    _id: "62e90beded69c9e18c105955",
    title: "Timeless Secrets of Health and Rejuvenation",
  },
  {
    _id: "62e90beded69c9e18c105957",
    title: "Decorative Knots",
  },
  {
    _id: "62e90beded69c9e18c105959",
    title: "Architecture: Design Notebook",
  },
  {
    _id: "62e90beded69c9e18c10595b",
    title:
      "Things That Matter: Three Decades of Passions, Pastimes and Politics",
  },
  {
    _id: "62e90beded69c9e18c10595d",
    title: "How to Deal with Emotionally Explosive People",
  },
  {
    _id: "62e90beded69c9e18c10595f",
    title: "Bass Guitar For Dummies",
  },
  {
    _id: "62e90beded69c9e18c105961",
    title: "Italian for Dummies",
  },
  {
    _id: "62e90beded69c9e18c105963",
    title: "Violin For Dummies",
  },
  {
    _id: "62e90beded69c9e18c105965",
    title: "A Short History of the United States",
  },
  {
    _id: "62e90beded69c9e18c105967",
    title: "Decorative Paint & Plaster and Thermal Insulation Catalog",
  },
  {
    _id: "62e90beded69c9e18c105969",
    title: "Healing After Loss: Daily Meditations For Working Through Grief",
  },
  {
    _id: "62e90beded69c9e18c10596b",
    title: "Beautiful Boy: A Father's Journey through His Son's Addiction",
  },
  {
    _id: "62e90beded69c9e18c10596d",
    title: "Yoga as Therapeutic Exercise",
  },
  {
    _id: "62e90beded69c9e18c10596f",
    title:
      "Everybody, Always: Becoming Love in a World Full of Setbacks and Difficult People",
  },
  {
    _id: "62e90beeed69c9e18c105973",
    title: "Oil Painting For Dummies",
  },
  {
    _id: "62e90beeed69c9e18c105975",
    title: "Art and Architecture in the Islamic Tradition",
  },
  {
    _id: "62e90beeed69c9e18c105977",
    title: "The China Study by Thomas Campbell",
  },
  {
    _id: "62e90c05192b8a2612683d06",
    title: "How to be Invisible",
  },
  {
    _id: "62e90c05192b8a2612683d08",
    title: "Healing Herbs Of Paradise",
  },
  {
    _id: "62e90c05192b8a2612683d0a",
    title: "A Dictionary of Architecture and Landscape Architecture",
  },
  {
    _id: "62e90c05192b8a2612683d0c",
    title: "French Grammar in Context",
  },
  {
    _id: "62e90c23bd20a9a0851f24b2",
    title: "How to be Invisible",
  },
  {
    _id: "62e90c23bd20a9a0851f24b4",
    title: "Healing Herbs Of Paradise",
  },
  {
    _id: "62e90c23bd20a9a0851f24b6",
    title: "A Dictionary of Architecture and Landscape Architecture",
  },
  {
    _id: "62e90c23bd20a9a0851f24b8",
    title: "French Grammar in Context",
  },
  {
    _id: "62e90c23bd20a9a0851f24ba",
    title: "Emergency Medicine",
  },
  {
    _id: "62e90c23bd20a9a0851f24bc",
    title: "The Small Business Bible",
  },
  {
    _id: "62e90c23bd20a9a0851f24be",
    title: "Mind, Brain, Body, and Behavior",
  },
  {
    _id: "62e90c23bd20a9a0851f24c0",
    title: "Daylighting: Natural Light in Architecture",
  },
  {
    _id: "62e90c24bd20a9a0851f24c2",
    title: "50 Best Jobs for Your Personality",
  },
  {
    _id: "62e90c24bd20a9a0851f24c4",
    title: "Gibson's Learn & Master Guitar Lessons",
  },
  {
    _id: "62e90c24bd20a9a0851f24c6",
    title: "Encyclopedia of Astrology",
  },
  {
    _id: "62e90c24bd20a9a0851f24c8",
    title: "Mastering The Art Of Success",
  },
  {
    _id: "62e90c24bd20a9a0851f24ca",
    title: "A Restatement of the History of Islam and Muslims",
  },
  {
    _id: "62e90c24bd20a9a0851f24cc",
    title: "Landscape Architecture And Art",
  },
  {
    _id: "62e90c24bd20a9a0851f24ce",
    title: "Advanced High-School Mathematics",
  },
  {
    _id: "62e90c24bd20a9a0851f24d0",
    title: "A Programmer’s Guide to the Mind",
  },
  {
    _id: "62e90c24bd20a9a0851f24d2",
    title: "Understanding Basic Music Theory",
  },
  {
    _id: "62e90c24bd20a9a0851f24d4",
    title: "The Bible On Leadership - Lorin Woolfe",
  },
  {
    _id: "62e90c24bd20a9a0851f24d6",
    title: "Believing That You Can",
  },
  {
    _id: "62e90c24bd20a9a0851f24d8",
    title: "A text-book of the history of painting",
  },
  {
    _id: "62e90da57d3a2a296e70e519",
    title: "100 Great Business Ideas",
  },
  {
    _id: "62e90da57d3a2a296e70e51b",
    title: "Fundamentals of Physics Textbook",
  },
  {
    _id: "62e90da57d3a2a296e70e51f",
    title: "I am Malala: The Story of the Girl Who Stood Up for Education",
  },
  {
    _id: "62e90da57d3a2a296e70e523",
    title: "Essentials of Anatomy and Physiology",
  },
  {
    _id: "62e90da57d3a2a296e70e527",
    title: "Spoken English: Flourish Your Language",
  },
  {
    _id: "62e90da67d3a2a296e70e531",
    title: "Influence: The Psychology of Persuasion",
  },
  {
    _id: "62e90da67d3a2a296e70e53b",
    title: "How to Study 7th Edition",
  },
  {
    _id: "62e90dfc7d3a2a296e70e53d",
    title: "How Successful People Think",
  },
  {
    _id: "62e90dfd7d3a2a296e70e53f",
    title: "The Power of Self-Esteem",
  },
  {
    _id: "62e90dfd7d3a2a296e70e541",
    title: "100 Great Business Ideas",
  },
  {
    _id: "62e90dfd7d3a2a296e70e54d",
    title: "Basic Engineering Mathematics",
  },
  {
    _id: "62e90dfd7d3a2a296e70e551",
    title: "Psychology - A Self-Teaching Guide",
  },
  {
    _id: "62e90dfd7d3a2a296e70e553",
    title: "Higher Engineering Mathematics",
  },
  {
    _id: "62e90dfd7d3a2a296e70e555",
    title: "Spoken English Learned Quickly",
  },
  {
    _id: "62e90dfe7d3a2a296e70e55b",
    title:
      "Braiding Sweetgrass: Indigenous Wisdom, Scientific Knowledge and the Teachings of Plants",
  },
  {
    _id: "62e90e277d3a2a296e70e56d",
    title: "The Secret History Of The World",
  },
  {
    _id: "62e90e277d3a2a296e70e571",
    title: "English Advanced Vocabulary and Structure Practice",
  },
  {
    _id: "62e90e277d3a2a296e70e57f",
    title: "How to Write Better Essays",
  },
  {
    _id: "62e90e277d3a2a296e70e585",
    title: "International Law and International Relations",
  },
  {
    _id: "62e90e277d3a2a296e70e587",
    title: "Out of the Shadows: Understanding Sexual Addiction",
  },
  {
    _id: "62e90e277d3a2a296e70e589",
    title: "Textbook of Engineering Drawing",
  },
  {
    _id: "62e90e418e1b51370f9f8bb6",
    title: "How to Grow More Vegetables",
  },
  {
    _id: "62e90e418e1b51370f9f8bb8",
    title: "Child Psychology and Psychiatry",
  },
  {
    _id: "62e90e418e1b51370f9f8bba",
    title: "Trading Psychology 2.0",
  },
  {
    _id: "62e90e418e1b51370f9f8bbc",
    title: "Biology For Dummies, 2nd Edition",
  },
  {
    _id: "62e90e428e1b51370f9f8bbe",
    title: "LEARNING SPOKEN ENGLISH",
  },
  {
    _id: "62e90e428e1b51370f9f8bc0",
    title:
      "Handbook of Psychology, Volume 5, Personality and Social Psychology",
  },
  {
    _id: "62e90e428e1b51370f9f8bc2",
    title: "Indian Geography",
  },
  {
    _id: "62e90e428e1b51370f9f8bc4",
    title: "The Definitive Book of Body Language",
  },
  {
    _id: "62e90e428e1b51370f9f8bc6",
    title: "The Oxford History Of The Classical World",
  },
  {
    _id: "62e90e428e1b51370f9f8bc8",
    title: "Strength of materials 4th ed",
  },
  {
    _id: "62e90e428e1b51370f9f8bca",
    title: "FINAL WARNING: A History of the New World Order",
  },
  {
    _id: "62e90e428e1b51370f9f8bcc",
    title: "French Vocabulary",
  },
  {
    _id: "62e90e428e1b51370f9f8bce",
    title: "Earth Science",
  },
  {
    _id: "62e90e428e1b51370f9f8bd0",
    title: "College Physics - Physics and Astronomy",
  },
  {
    _id: "62e90e428e1b51370f9f8bd2",
    title: "Arabic-English Dictionary",
  },
  {
    _id: "62e90e428e1b51370f9f8bd4",
    title: "Fundamentals of Probability and Statistics for Engineers",
  },
  {
    _id: "62e90e428e1b51370f9f8bd6",
    title: "Hebrew-English Tanakh: The Jewish Bible - Holy Language Institute",
  },
  {
    _id: "62e90e428e1b51370f9f8bd8",
    title: "English Literature",
  },
  {
    _id: "62e90e428e1b51370f9f8bda",
    title: "Electric Power Engineering Handbook",
  },
  {
    _id: "62e90e428e1b51370f9f8bdc",
    title: "Everything Maths Grade 12",
  },
  {
    _id: "62e90e559d4a2eafb9ea86f2",
    title: "Ganong's Review of Medical Physiology",
  },
  {
    _id: "62e90e559d4a2eafb9ea86f4",
    title: "Advanced Methods of Structural Analysis - Civil Engineering",
  },
  {
    _id: "62e90e559d4a2eafb9ea86f6",
    title: "Econometrics For Dummies",
  },
  {
    _id: "62e90e559d4a2eafb9ea86f8",
    title: "Why Great Leaders Don't Take Yes for an Answer Managing for ",
  },
  {
    _id: "62e90e559d4a2eafb9ea86fa",
    title: "Criminal Psychology : a Beginner's Guide",
  },
  {
    _id: "62e90e559d4a2eafb9ea86fc",
    title: "Cognitive Psychology",
  },
  {
    _id: "62e90e559d4a2eafb9ea86fe",
    title: "Modern Control Engineering",
  },
  {
    _id: "62e90e559d4a2eafb9ea8700",
    title: "English Through Pictures, Book 3 (Updated Edition)",
  },
  {
    _id: "62e90e559d4a2eafb9ea8702",
    title: "The Millionaire Mindset - Mission Improvement",
  },
  {
    _id: "62e90e569d4a2eafb9ea8704",
    title: "A History of India, Third Edition",
  },
  {
    _id: "62e90e569d4a2eafb9ea8706",
    title: "1000 Phrasal Verbs In Context",
  },
  {
    _id: "62e90e569d4a2eafb9ea8708",
    title: "Learn English Through Telugu",
  },
  {
    _id: "62e90e569d4a2eafb9ea870a",
    title: "One Two Three... Infinty. Facts & Speculations in Science",
  },
  {
    _id: "62e90e569d4a2eafb9ea870c",
    title: "Webster's Dictionary of English Usage",
  },
  {
    _id: "62e90e569d4a2eafb9ea870e",
    title: "Climate Change and Migration",
  },
  {
    _id: "62e90e569d4a2eafb9ea8710",
    title: "Environmental Engineering FOURTH EDITION",
  },
  {
    _id: "62e90e569d4a2eafb9ea8712",
    title: "Techniques in language Teaching",
  },
  {
    _id: "62e90e569d4a2eafb9ea8714",
    title: "Encyclopedia of Ancient Egypt",
  },
  {
    _id: "62e90e569d4a2eafb9ea8716",
    title: "The Dictionary of Human Geography",
  },
  {
    _id: "62e90e569d4a2eafb9ea8718",
    title: "Encyclopedia of Psychology and Religion",
  },
  {
    _id: "62e90e65db8604165de66c54",
    title: "Think Like a Champion",
  },
  {
    _id: "62e90e65db8604165de66c56",
    title: "Modern GERMAN Grammar",
  },
  {
    _id: "62e90e65db8604165de66c58",
    title: "Introduction to Sociology",
  },
  {
    _id: "62e90e65db8604165de66c5a",
    title: "397 English Grammar Tests",
  },
  {
    _id: "62e90e65db8604165de66c5c",
    title: "Phrasal Verbs and Idioms",
  },
  {
    _id: "62e90e65db8604165de66c5e",
    title: "100 TOEIC Preparation Tests",
  },
  {
    _id: "62e90e65db8604165de66c60",
    title: "Best Practice Book for IELTS Writing",
  },
  {
    _id: "62e90e65db8604165de66c62",
    title: "The Tiger: A True Story of Vengeance and Survival",
  },
  {
    _id: "62e90e65db8604165de66c64",
    title: "Machine Drawing",
  },
  {
    _id: "62e90e65db8604165de66c66",
    title: "BASIC SPANISH: A GRAMMAR AND WORKBOOK",
  },
  {
    _id: "62e90e65db8604165de66c68",
    title: "6 Secrets to Startup Success",
  },
  {
    _id: "62e90e66db8604165de66c6a",
    title: "Greening the Economy with Agriculture - Food and Agriculture ",
  },
  {
    _id: "62e90e66db8604165de66c6c",
    title: "Reverse Engineering",
  },
  {
    _id: "62e90e66db8604165de66c6e",
    title: "Electronics Projects For Dummies",
  },
  {
    _id: "62e90e66db8604165de66c70",
    title: "Handbook of Civil Engineering Calculations",
  },
  {
    _id: "62e90e66db8604165de66c72",
    title:
      "Mathematical Problems and Puzzles from the Polish Mathematical Olympiads",
  },
  {
    _id: "62e90e66db8604165de66c74",
    title: "How Learning Works",
  },
  {
    _id: "62e90e66db8604165de66c76",
    title:
      "Teaching Critical Thinking in Psychology: A Handbook of Best Practices",
  },
  {
    _id: "62e90e66db8604165de66c78",
    title: "Signals and Systems - Electrical Engineering",
  },
  {
    _id: "62e90e66db8604165de66c7a",
    title: "Economic Development",
  },
  {
    _id: "62e90e7bc890f36e893fe422",
    title: "Higher Engineering Mathematics",
  },
  {
    _id: "62e90e7bc890f36e893fe424",
    title: "Handbook for Sound Engineers",
  },
  {
    _id: "62e90e7bc890f36e893fe426",
    title: "Handbook of Electrical Engineering",
  },
  {
    _id: "62e90e7bc890f36e893fe428",
    title: "ENGINEERING MECHANICS AND DRAWING - Text Books Online",
  },
  {
    _id: "62e90e7bc890f36e893fe42a",
    title: "Encyclopedia of Environmental Science and Engineering",
  },
  {
    _id: "62e90e7bc890f36e893fe42c",
    title: "A Thesaurus of English Word Roots",
  },
  {
    _id: "62e90e7bc890f36e893fe42e",
    title: "Modeling Structured Finance Cash Flows with Microsoft Excel",
  },
  {
    _id: "62e90e7cc890f36e893fe430",
    title: "A History of Western Philosophy",
  },
  {
    _id: "62e90e7cc890f36e893fe432",
    title: "Modern Hindi Grammar - Indian Institute of Language Studies (IILS)",
  },
  {
    _id: "62e90e7cc890f36e893fe434",
    title: "Paper 4: Fundamentals of Business Mathematics & Statistic",
  },
  {
    _id: "62e90e7cc890f36e893fe436",
    title: "Dutch For Dummies",
  },
  {
    _id: "62e90e7cc890f36e893fe438",
    title: "Arabic: An Essential Grammar",
  },
  {
    _id: "62e90e7cc890f36e893fe43a",
    title: "Trigonometry Workbook For Dummies",
  },
  {
    _id: "62e90e7cc890f36e893fe43c",
    title: "Educational Psychology : Understanding Student's Thinking",
  },
  {
    _id: "62e90e7cc890f36e893fe43e",
    title: "Encyclopedia of Geography Terms, Themes, and Concepts",
  },
  {
    _id: "62e90e7cc890f36e893fe440",
    title: "Solid Waste Management and Recycling",
  },
  {
    _id: "62e90e7cc890f36e893fe442",
    title: "Language, Culture, and Society",
  },
  {
    _id: "62e90e7cc890f36e893fe444",
    title: "Animal, Vegetable, Miracle: A Year of Food Life",
  },
  {
    _id: "62e90e7cc890f36e893fe446",
    title: "Planning and Design for Sustainable Urban Mobility",
  },
  {
    _id: "62e90e7cc890f36e893fe448",
    title: "Chemical Engineers Handbook- Perry",
  },
  {
    _id: "62e90e8c7752e891aa9514ec",
    title: "Excel Data Analysis",
  },
  {
    _id: "62e90e8c7752e891aa9514ee",
    title: "Foreign Exchange and Money Markets",
  },
  {
    _id: "62e90e8c7752e891aa9514f0",
    title: "Body Language",
  },
  {
    _id: "62e90e8c7752e891aa9514f2",
    title: "Communication Theory Media, Technology and Society",
  },
  {
    _id: "62e90e8c7752e891aa9514f4",
    title: "Lessons in Arabic Language, Book 2",
  },
  {
    _id: "62e90e8c7752e891aa9514f6",
    title: "Economic Facts and Fallacies",
  },
  {
    _id: "62e90e8c7752e891aa9514f8",
    title: "The Business Environment",
  },
  {
    _id: "62e90e8c7752e891aa9514fa",
    title: "Islam: Faith, Practice & History",
  },
  {
    _id: "62e90e8c7752e891aa9514fc",
    title: "World History in Documents",
  },
  {
    _id: "62e90e8d7752e891aa9514fe",
    title: "Introduction to Forensic Psychology - B. Arrigo",
  },
  {
    _id: "62e90e8d7752e891aa951500",
    title:
      "Teach Your Kids To Code: A Parent-friendly Guide to Python Programming",
  },
  {
    _id: "62e90e8d7752e891aa951502",
    title: "Intermediate Arabic For Dummies",
  },
  {
    _id: "62e90e8d7752e891aa951504",
    title: "Tensors for Physics",
  },
  {
    _id: "62e90e8d7752e891aa951506",
    title: "Italian for Dummies",
  },
  {
    _id: "62e90e8d7752e891aa951508",
    title: "Palgrave Handbook of Econometrics: Applied Econometrics",
  },
  {
    _id: "62e90e8d7752e891aa95150a",
    title: "Structural Engineering - Civil, Environmental, and Architectural ",
  },
  {
    _id: "62e90e8d7752e891aa95150c",
    title: "Engineering Optimization: Theory and Practice, Fourth Edition",
  },
  {
    _id: "62e90e8d7752e891aa95150e",
    title: "“Money Making Secrets of Mind Power Masters”",
  },
  {
    _id: "62e90e8d7752e891aa951510",
    title: "Ancient Greece: an Illustrated History",
  },
  {
    _id: "62e90e8d7752e891aa951512",
    title: "Modern Spanish Grammar",
  },
  {
    _id: "62e90eb554283d4162613e24",
    title: "Cities and Climate Change",
  },
  {
    _id: "62e90f3e54283d4162613e26",
    title: "The Politics of the Environment",
  },
  {
    _id: "62e90f3f54283d4162613e28",
    title: "A Short History of China and Southeast Asia",
  },
  {
    _id: "62e90f3f54283d4162613e2a",
    title: "Audio Engineering",
  },
  {
    _id: "62e90f3f54283d4162613e2c",
    title: "Climate Change and Health",
  },
  {
    _id: "62e90f3f54283d4162613e2e",
    title: "Game Engine Architecture",
  },
  {
    _id: "62e90f3f54283d4162613e30",
    title: "Food Process Engineering and Technology",
  },
  {
    _id: "62e90f3f54283d4162613e32",
    title: "Goals - Advanced Life Skills",
  },
  {
    _id: "62e90f3f54283d4162613e34",
    title: "Flow and the Foundations of Positive Psychology",
  },
  {
    _id: "62e90f3f54283d4162613e36",
    title: "Hidden Nature",
  },
  {
    _id: "62e90f4054283d4162613e38",
    title: "HIGHWAY ENGINEERING Martin Rogers",
  },
  {
    _id: "62e90f4054283d4162613e3a",
    title: "4000 Essential English Words",
  },
  {
    _id: "62e90f4054283d4162613e3c",
    title: "Biological Psychology",
  },
  {
    _id: "62e90f4054283d4162613e3e",
    title: "2nd edition Pre-Intermediate Workbook Key",
  },
  {
    _id: "62e90f4054283d4162613e40",
    title: "A History of Money",
  },
  {
    _id: "62e90f4054283d4162613e42",
    title: "Handbook of Psychology, Volume 4: Experimental Psychology",
  },
  {
    _id: "62e90f4054283d4162613e44",
    title: "PLC-based Process Control Engineering Guide",
  },
  {
    _id: "62e90f4054283d4162613e46",
    title: "Cultural Geography",
  },
  {
    _id: "62e90f4054283d4162613e48",
    title: "Dictionary of American Slang and Colloquial Expressions",
  },
  {
    _id: "62e90f4054283d4162613e4a",
    title: "Introduction to SolidWorks",
  },
  {
    _id: "62e9117fa9d19aa06504dcae",
    title: "Understanding and Teaching the Pronunciation of English",
  },
  {
    _id: "62e9117fa9d19aa06504dcb0",
    title: "Just Enough ENGLISH GRAMMAR",
  },
  {
    _id: "62e9117fa9d19aa06504dcb2",
    title: "The Vulcan Language - Star Trek",
  },
  {
    _id: "62e9117fa9d19aa06504dcb4",
    title: "Geotechnical Engineering",
  },
  {
    _id: "62e9117fa9d19aa06504dcb6",
    title: "Quantum Physics - Department of Physics and Astronomy",
  },
  {
    _id: "62e9117fa9d19aa06504dcb8",
    title: "Aircraft Structures By Megson",
  },
  {
    _id: "62e9117fa9d19aa06504dcba",
    title: "Farm Animal Metabolism and Nutrition",
  },
  {
    _id: "62e9117fa9d19aa06504dcbc",
    title: "History of Economic Thought",
  },
  {
    _id: "62e9117fa9d19aa06504dcbe",
    title: "Pharmacology for Dentistry",
  },
  {
    _id: "62e91180a9d19aa06504dcc0",
    title:
      "language, culture, and society: key topics in linguistic anthropology",
  },
  {
    _id: "62e91180a9d19aa06504dcc2",
    title: "Turkish: A Comprehensive Grammar",
  },
  {
    _id: "62e91180a9d19aa06504dcc4",
    title: "Problems and Solutions on Thermodynamics and Statistical Mechanics",
  },
  {
    _id: "62e91180a9d19aa06504dcc6",
    title: "Basic Italian: A Grammar and Workbook",
  },
  {
    _id: "62e91180a9d19aa06504dcc8",
    title: "Vygotsky's Developmental and Educational Psychology",
  },
  {
    _id: "62e91180a9d19aa06504dcca",
    title: "Building a Better Vocabulary",
  },
  {
    _id: "62e91180a9d19aa06504dccc",
    title: "Advanced Engineering Mathematics",
  },
  {
    _id: "62e91180a9d19aa06504dcce",
    title: "A History of Money and Banking in the United States",
  },
  {
    _id: "62e91180a9d19aa06504dcd0",
    title: "Aerodynamics for Engineering Students",
  },
  {
    _id: "62e91180a9d19aa06504dcd2",
    title: "Latin 101: Learning a Classical Language",
  },
  {
    _id: "62e91180a9d19aa06504dcd4",
    title: "ANSYS Mechanical APDL Structural Analysis Guide.pdf",
  },
  {
    _id: "62e911ad6c7f21c35088ef11",
    title: "Optimizing Optimization: The Next Generation of Optimization ",
  },
  {
    _id: "62e911ad6c7f21c35088ef13",
    title: "Foundations of Cognitive Psychology",
  },
  {
    _id: "62e911ad6c7f21c35088ef15",
    title: "Statistical Analysis for Education and Psychology Researchers",
  },
  {
    _id: "62e911ad6c7f21c35088ef17",
    title: "Urban Social Geography",
  },
  {
    _id: "62e911ad6c7f21c35088ef19",
    title: "Solutions Upper-Intermediate Workbook Key Unit 1",
  },
  {
    _id: "62e911ad6c7f21c35088ef1b",
    title: "Learn English Two Way through Tamil & Sourashtra",
  },
  {
    _id: "62e911ad6c7f21c35088ef1d",
    title: "An Introduction to Coastal Processes and Geomorphology",
  },
  {
    _id: "62e911ad6c7f21c35088ef1f",
    title: "Computer Aided Engineering Design",
  },
  {
    _id: "62e911ad6c7f21c35088ef21",
    title: "Mind, Brain, Body, and Behavior",
  },
  {
    _id: "62e911ad6c7f21c35088ef23",
    title: "Grammar and Language Workbook: Grade 9",
  },
  {
    _id: "62e911ad6c7f21c35088ef25",
    title: "Encyclopedia of Psychology and Law",
  },
  {
    _id: "62e911ae6c7f21c35088ef27",
    title: "INTRODUCTION TO FINITE ELEMENTS ENGINEERING",
  },
  {
    _id: "62e911ae6c7f21c35088ef29",
    title: "Grammar and Language Workbook: Grade 6",
  },
  {
    _id: "62e911ae6c7f21c35088ef2b",
    title: "Personal Finance Workbook For Dummies",
  },
  {
    _id: "62e911ae6c7f21c35088ef2d",
    title: "International Monetary Economics",
  },
  {
    _id: "62e911ae6c7f21c35088ef2f",
    title: "The Secret History of Freemasonry",
  },
  {
    _id: "62e911ae6c7f21c35088ef31",
    title: "Solutions Intermediate Workbook Key",
  },
  {
    _id: "62e911ae6c7f21c35088ef33",
    title: "Research In Psychology: Methods and Design 6E",
  },
  {
    _id: "62e911ae6c7f21c35088ef35",
    title: "The Psychology of Eating",
  },
  {
    _id: "62e911ae6c7f21c35088ef37",
    title: "English Grammar through Stories",
  },
  {
    _id: "62e911bbc2d7c11cfd58940f",
    title: "Encyclopedia of the Ottoman Empire",
  },
  {
    _id: "62e911bbc2d7c11cfd589411",
    title: "Electricity & Electronic Workbooks",
  },
  {
    _id: "62e911bbc2d7c11cfd589413",
    title:
      "A Walk in the Woods: Rediscovering America on the Appalachian Trail",
  },
  {
    _id: "62e911c7be044bd24ae71839",
    title: "The Cambridge History of Islam",
  },
  {
    _id: "62e911c7be044bd24ae7183b",
    title: "A History of European Art",
  },
  {
    _id: "62e911c7be044bd24ae7183d",
    title: "Concise History of the Middle East",
  },
  {
    _id: "62e911c8be044bd24ae7183f",
    title: "The Teacher’s Grammar Book",
  },
  {
    _id: "62e911c8be044bd24ae71841",
    title: "Art Therapy - Teaching Psychology",
  },
  {
    _id: "62e911c8be044bd24ae71843",
    title: "The Ancient Egyptians For Dummies",
  },
  {
    _id: "62e911c8be044bd24ae71845",
    title: "A Restatement of the History of Islam and Muslims",
  },
  {
    _id: "62e911c8be044bd24ae71847",
    title: "An Elementary Grammar of the Italian Language - Forgotten Books",
  },
  {
    _id: "62e911c8be044bd24ae71849",
    title: "Inter-Cultural Language Use and Language Learning",
  },
  {
    _id: "62e911c8be044bd24ae7184b",
    title: "THE OXFORD HISTORY OF THE BRITISH EMPIRE - Higher Intellect ",
  },
  {
    _id: "62e911c8be044bd24ae7184d",
    title: "Jews and Judaism in World History",
  },
  {
    _id: "62e911c8be044bd24ae7184f",
    title: "The Concise History of the Crusades",
  },
  {
    _id: "62e911c8be044bd24ae71851",
    title: "Mathematics for Economists",
  },
  {
    _id: "62e911c8be044bd24ae71853",
    title: "NASA Systems Engineering Handbook",
  },
  {
    _id: "62e911c8be044bd24ae71855",
    title: "Approaches to Human Geography",
  },
  {
    _id: "62e911c8be044bd24ae71857",
    title: "Psychology and Life",
  },
  {
    _id: "62e911c8be044bd24ae71859",
    title: "HYSYS : An Introduction to Chemical Engineering Simulation",
  },
  {
    _id: "62e911c9be044bd24ae7185b",
    title: "Advanced Natural Gas Engineering",
  },
  {
    _id: "62e911c9be044bd24ae7185d",
    title: "The Encyclopedia of Unsolved Crimes",
  },
  {
    _id: "62e911c9be044bd24ae7185f",
    title: "Fifteen Thousand Useful Phrases",
  },
  {
    _id: "62e9125f1e5b5b66b238a911",
    title: "Sociology of Education - National Open University of Nigeria",
  },
  {
    _id: "62e9125f1e5b5b66b238a913",
    title: "Encyclopedia of Philosophy of Language",
  },
  {
    _id: "62e9125f1e5b5b66b238a915",
    title:
      "Pile Design and Construction Practice, Fifth edition - Civil engineering",
  },
  {
    _id: "62e9125f1e5b5b66b238a917",
    title: "501 Vocabulary Questions - English-Learners",
  },
  {
    _id: "62e9125f1e5b5b66b238a919",
    title:
      "History of civilizations of Central Asia, v. 4: The Age of achievement ",
  },
  {
    _id: "62e9125f1e5b5b66b238a91b",
    title: "The Sociology of Early Buddhism",
  },
  {
    _id: "62e912601e5b5b66b238a91d",
    title: "The Sociology of Philosophies",
  },
  {
    _id: "62e912601e5b5b66b238a91f",
    title: "Engineering Design with SOLIDWORKS 2016",
  },
  {
    _id: "62e912601e5b5b66b238a921",
    title: "The ABCs of Political Economy",
  },
  {
    _id: "62e912601e5b5b66b238a923",
    title: "Islamic Economics: A Short History",
  },
  {
    _id: "62e912601e5b5b66b238a925",
    title: "Hydraulic Structures: Fourth Edition - Engineering eBooks",
  },
  {
    _id: "62e912601e5b5b66b238a927",
    title: "Millionaire Traders",
  },
  {
    _id: "62e912601e5b5b66b238a929",
    title: "Plant Ecology",
  },
  {
    _id: "62e912601e5b5b66b238a92b",
    title: "The Ancient History of China",
  },
  {
    _id: "62e912601e5b5b66b238a92d",
    title: "Handbook of the Sociology of Religion - Yola",
  },
  {
    _id: "62e912601e5b5b66b238a92f",
    title: "Introduction to Psychology - College of Lake County",
  },
  {
    _id: "62e912601e5b5b66b238a931",
    title: "The Portable MBA in Finance and Accounting, 3rd Edition",
  },
  {
    _id: "62e912601e5b5b66b238a933",
    title: "Socratic Moral Psychology",
  },
  {
    _id: "62e912601e5b5b66b238a935",
    title: "Sociology For Dummies",
  },
  {
    _id: "62e912601e5b5b66b238a937",
    title: "Urban Regions : Ecology and Planning Beyond the City",
  },
  {
    _id: "62e912700025fd6fec6e8127",
    title: "Air Conditioning Engineering",
  },
  {
    _id: "62e912700025fd6fec6e8129",
    title: "French Language Course",
  },
  {
    _id: "62e912700025fd6fec6e812b",
    title: "An introduction to Japanese - Syntax, Grammar & Language",
  },
  {
    _id: "62e912700025fd6fec6e812d",
    title: "The Psychology of Problem Solving",
  },
  {
    _id: "62e912700025fd6fec6e812f",
    title: "Understanding Engineering Mathematics",
  },
  {
    _id: "62e912700025fd6fec6e8131",
    title: "Icons of the Middle Ages",
  },
  {
    _id: "62e912700025fd6fec6e8133",
    title: "Numerical Methods for Chemical Engineering",
  },
  {
    _id: "62e912700025fd6fec6e8135",
    title: "permaculture",
  },
  {
    _id: "62e912700025fd6fec6e8137",
    title: "A Dictionary of Literary Symbols",
  },
  {
    _id: "62e912700025fd6fec6e8139",
    title: "Thermodynamics, Statistical Physics, and Quantum Mechanics",
  },
  {
    _id: "62e912700025fd6fec6e813b",
    title: "The Ecology of Trees in the Tropical Rain Forest",
  },
  {
    _id: "62e912700025fd6fec6e813d",
    title: "3420 TOEIC words",
  },
  {
    _id: "62e912710025fd6fec6e813f",
    title: "Blackwell Companion to Sociology",
  },
  {
    _id: "62e912710025fd6fec6e8141",
    title: "How to Test if Your Business Will Make Money",
  },
  {
    _id: "62e912710025fd6fec6e8143",
    title: "International Finance and Accounting Handbook",
  },
  {
    _id: "62e912710025fd6fec6e8145",
    title: "Handbook of Psychology",
  },
  {
    _id: "62e912710025fd6fec6e8147",
    title: "THE SCIENCE OF YOGA - Centre for Yoga Studies",
  },
  {
    _id: "62e912710025fd6fec6e8149",
    title: "Research Methods in Clinical Psychology",
  },
  {
    _id: "62e912710025fd6fec6e814b",
    title: "A HISTORY OF MODERN IRAN",
  },
  {
    _id: "62e912710025fd6fec6e814d",
    title: "A Critical History of Greek Philosophy",
  },
  {
    _id: "62e9127e7831a85ad752c836",
    title: "Basic Statistics",
  },
  {
    _id: "62e9127e7831a85ad752c838",
    title: "Risk and Safety in Civil Engineering",
  },
  {
    _id: "62e9127e7831a85ad752c83a",
    title: "English Language Development",
  },
  {
    _id: "62e9127e7831a85ad752c83c",
    title: "Sociology",
  },
  {
    _id: "62e9127e7831a85ad752c83e",
    title: "Tutorials: Animation - Autodesk | 3ds Max Design, Engineering",
  },
  {
    _id: "62e9127e7831a85ad752c840",
    title: "The Oxford History of World Cinema",
  },
  {
    _id: "62e9127e7831a85ad752c842",
    title: "The Wealth of Ideas: A History of Economic Thought",
  },
  {
    _id: "62e9127f7831a85ad752c844",
    title:
      "An English Grammar, by William Malone Baskervill and James Witt Sewell",
  },
  {
    _id: "62e9127f7831a85ad752c846",
    title: "ANSYS Mechanical APDL Advanced Analysis Guide.pdf",
  },
  {
    _id: "62e9127f7831a85ad752c848",
    title: "The Bible On Leadership - Lorin Woolfe",
  },
  {
    _id: "62e9127f7831a85ad752c84a",
    title: "Tourism Geography",
  },
  {
    _id: "62e9127f7831a85ad752c84c",
    title: "Business English for Success",
  },
  {
    _id: "62e9127f7831a85ad752c84e",
    title: "A Short History of Indonesia",
  },
  {
    _id: "62e9127f7831a85ad752c850",
    title:
      "Mathematical Methods and Models in Economic Planning, Management and Budgeting",
  },
  {
    _id: "62e9127f7831a85ad752c852",
    title: "Mathematical Principles of Theoretical Physics",
  },
  {
    _id: "62e9127f7831a85ad752c854",
    title: "Control Engineering",
  },
  {
    _id: "62e9127f7831a85ad752c856",
    title: "Change Climate",
  },
  {
    _id: "62e9127f7831a85ad752c858",
    title: "Glencoe World Geography Georgia Workbooks",
  },
  {
    _id: "62e9127f7831a85ad752c85a",
    title: "The War of the Worlds - World History",
  },
  {
    _id: "62e9127f7831a85ad752c85c",
    title: "A text-book of the history of painting",
  },
  {
    _id: "62e912a4a0f9de0f44568739",
    title:
      "Intercultural teaching and learning. English as a foreign language education in Finland and Japan",
  },
  {
    _id: "62e912a4a0f9de0f4456873b",
    title: "Preface Fundamentals of Materials Science and Engineering",
  },
  {
    _id: "62e912a4a0f9de0f4456873d",
    title: "History of Philosophy",
  },
  {
    _id: "62e912a4a0f9de0f4456873f",
    title: "DEFORMATION AND FRACTURE MECHANICS OF ENGINEERING",
  },
  {
    _id: "62e912a5a0f9de0f44568741",
    title: "Environmental Engineering Dictionary and Directory",
  },
  {
    _id: "62e912a5a0f9de0f44568743",
    title: "Exploring World Cultural Geography",
  },
  {
    _id: "62e912a5a0f9de0f44568745",
    title: "A Brief History of Ancient Greece",
  },
  {
    _id: "62e912a5a0f9de0f44568747",
    title: "Let's Reduce and Recycle",
  },
  {
    _id: "62e912a5a0f9de0f44568749",
    title: "Mechanical Engineering Principles",
  },
  {
    _id: "62e912a5a0f9de0f4456874b",
    title: "A COMPANION TO THE ANCIENT GREEK LANGUAGE",
  },
  {
    _id: "62e912a5a0f9de0f4456874d",
    title: "Conservation and the Genetics of Populations",
  },
  {
    _id: "62e912a5a0f9de0f4456874f",
    title: "Geopolitics, History, and International Relations",
  },
  {
    _id: "62e912a5a0f9de0f44568751",
    title: "Fifty Key Thinkers in Psychology",
  },
  {
    _id: "62e912a5a0f9de0f44568753",
    title: "Introduction to Continuum Mechanics - Mechanical Engineering",
  },
  {
    _id: "62e912a5a0f9de0f44568755",
    title: "Sociological Perspectives on Global Climate Change",
  },
  {
    _id: "62e912a5a0f9de0f44568757",
    title: "A Brief History of Saudi Arabia",
  },
  {
    _id: "62e912a5a0f9de0f44568759",
    title: "High Voltage Engineering - Fundamentals",
  },
  {
    _id: "62e912a5a0f9de0f4456875b",
    title: "What is Architectural History",
  },
  {
    _id: "62e912a6a0f9de0f4456875d",
    title:
      "Religious Rivalries in the Early Roman Empire and the Rise of Christianity",
  },
  {
    _id: "62e912a6a0f9de0f4456875f",
    title: "Routledge Encyclopedia of Philosophy Philosophy of Language",
  },
  {
    _id: "62e912b1d6fb55b8feffdba0",
    title: "Physics and Engineering of Radiation Detection - Faculty",
  },
  {
    _id: "62e912b1d6fb55b8feffdba2",
    title: "The Cambridge History of Islam 2A",
  },
  {
    _id: "62e912b1d6fb55b8feffdba4",
    title: "Spanish: An Essential Grammar",
  },
  {
    _id: "62e912b1d6fb55b8feffdba6",
    title: "ENCYCLOPEDIA OF DISASTERS",
  },
  {
    _id: "62e912b1d6fb55b8feffdba8",
    title: "How Professors Think",
  },
  {
    _id: "62e912b1d6fb55b8feffdbaa",
    title: "A History of the American People",
  },
  {
    _id: "62e912b1d6fb55b8feffdbac",
    title: "The Tagalog Language: A Comprehensive Grammatical Treatise ",
  },
  {
    _id: "62e912b2d6fb55b8feffdbae",
    title: "An Introduction to Language",
  },
  {
    _id: "62e912b2d6fb55b8feffdbb0",
    title: "System of Environmental-Economic Accounting",
  },
  {
    _id: "62e912b2d6fb55b8feffdbb2",
    title: "Historical Geography",
  },
  {
    _id: "62e912b2d6fb55b8feffdbb4",
    title: "Engineering Design Project The Mountainboard - SolidWorks",
  },
  {
    _id: "62e912b2d6fb55b8feffdbb6",
    title: "Object Oriented Software Engineering",
  },
  {
    _id: "62e912b2d6fb55b8feffdbb8",
    title: "Cross-Cultural Psychology",
  },
  {
    _id: "62e912b2d6fb55b8feffdbba",
    title: "Environmental Microbiology of Aquatic and Waste Systems",
  },
  {
    _id: "62e912b2d6fb55b8feffdbbc",
    title: "A to Z of Women in World History",
  },
  {
    _id: "62e912b2d6fb55b8feffdbbe",
    title: "The Geography of Transport Systems",
  },
  {
    _id: "62e912b2d6fb55b8feffdbc0",
    title:
      "The History of Christianity: From the Disciples to the Dawn of the Reformation",
  },
  {
    _id: "62e912b2d6fb55b8feffdbc2",
    title: "Flight Dynamics Principles",
  },
  {
    _id: "62e912b2d6fb55b8feffdbc4",
    title: "The First Crusade",
  },
  {
    _id: "62e912b2d6fb55b8feffdbc6",
    title: "The Encyclopedia of Ancient Natural Scientists",
  },
  {
    _id: "62e912bdff88b1493bab5381",
    title: "Modern Italian Grammar: A Practical Guide",
  },
  {
    _id: "62e912bdff88b1493bab5383",
    title: "Encyclopedia Of World History Vol II",
  },
  {
    _id: "62e912bdff88b1493bab5385",
    title: "Money, Bank Credit, and Economic Cycles",
  },
  {
    _id: "62e912bdff88b1493bab5387",
    title: "Concise Encyclopedia of Brain and Language",
  },
  {
    _id: "62e912bdff88b1493bab5389",
    title: "THE Java™ Programming Language, Fourth Edition",
  },
  {
    _id: "62e912bdff88b1493bab538b",
    title: "Introduction to Electrical Engineering",
  },
  {
    _id: "62e912bdff88b1493bab538d",
    title: "The Economics of Growth - Free",
  },
  {
    _id: "62e912bdff88b1493bab538f",
    title: "History of the war in Afghanistan - The British Empire",
  },
  {
    _id: "62e912bdff88b1493bab5391",
    title: "Geography and Revolution",
  },
  {
    _id: "62e912bdff88b1493bab5393",
    title: "Modeling and Simulation in Transportation Engineering",
  },
  {
    _id: "62e912bdff88b1493bab5395",
    title: "The Aptitude Test Workbook: improve your career options",
  },
  {
    _id: "62e912bdff88b1493bab5397",
    title: "The Verbal Reasoning Test Workbook - Believe in your dreams",
  },
  {
    _id: "62e912bdff88b1493bab5399",
    title: "There Were Giants Upon the Earth",
  },
  {
    _id: "62e912beff88b1493bab539b",
    title: "Java Programming Language Handbook",
  },
  {
    _id: "62e912beff88b1493bab539d",
    title: "Introduction to Environmental Control in the Petroleum Industry",
  },
  {
    _id: "62e912beff88b1493bab539f",
    title: "Jerusalem in the Time of Jesus",
  },
  {
    _id: "62e912beff88b1493bab53a1",
    title: "Computation Fluid Dynamics",
  },
  {
    _id: "62e912beff88b1493bab53a3",
    title: "Rosicrucian History and Mysteries",
  },
  {
    _id: "62e912beff88b1493bab53a5",
    title: "The Nature of Political Theory",
  },
  {
    _id: "62e912beff88b1493bab53a7",
    title: "Sustainability and National Security",
  },
  {
    _id: "62e912c7fe6b1f7ddef0ed11",
    title: "Fundamentals of Chemical Reaction Engineering",
  },
  {
    _id: "62e912c7fe6b1f7ddef0ed13",
    title: "Yoga and Psychology and Psychotherapy - Centre for Yoga Studies",
  },
  {
    _id: "62e912c7fe6b1f7ddef0ed15",
    title: "Econometrics",
  },
  {
    _id: "62e912c7fe6b1f7ddef0ed17",
    title: "Architectural and Engineering Design Standards",
  },
  {
    _id: "62e912c7fe6b1f7ddef0ed19",
    title: "Imperium: The Philosophy of History and Politics",
  },
  {
    _id: "62e912c7fe6b1f7ddef0ed1b",
    title: "Mathematics of Physics and Engineering",
  },
  {
    _id: "62e912c8fe6b1f7ddef0ed1d",
    title: "Research Methods and Statistics in Psychology",
  },
  {
    _id: "62e912c8fe6b1f7ddef0ed1f",
    title: "fundamentals of reservoir engineering",
  },
  {
    _id: "62e912c8fe6b1f7ddef0ed21",
    title: "A People's History of the World by Chris Harman - Free",
  },
  {
    _id: "62e912c8fe6b1f7ddef0ed23",
    title: "Geography Review in 20 Minutes a Day",
  },
  {
    _id: "62e912c8fe6b1f7ddef0ed25",
    title: "Applied Geography",
  },
  {
    _id: "62e912c8fe6b1f7ddef0ed27",
    title: "Engineering for Structural Stability in Bridge Construction",
  },
  {
    _id: "62e912c8fe6b1f7ddef0ed29",
    title: "Educational Psychology",
  },
  {
    _id: "62e912c8fe6b1f7ddef0ed2b",
    title: "Tropical Forest Community Ecology",
  },
  {
    _id: "62e912c8fe6b1f7ddef0ed2d",
    title: "Language Typology",
  },
  {
    _id: "62e912c8fe6b1f7ddef0ed2f",
    title: "Introduction to Modern Economic Growth",
  },
  {
    _id: "62e912c8fe6b1f7ddef0ed31",
    title: "Liquid Nitro Explosives",
  },
  {
    _id: "62e912c8fe6b1f7ddef0ed33",
    title: "HISTORY UNITED STATES",
  },
  {
    _id: "62e912c8fe6b1f7ddef0ed35",
    title: "Dictionary of Psychology & Allied Sciences",
  },
  {
    _id: "62e912c8fe6b1f7ddef0ed37",
    title: "Mathematical Geography",
  },
  {
    _id: "62e912d8e8df5a997f637a78",
    title: "Chemical Engineering Thermodynamics II",
  },
  {
    _id: "62e912d8e8df5a997f637a7a",
    title: "Engineering Mechanics – Statics by Meriam and Kraige",
  },
  {
    _id: "62e912d8e8df5a997f637a7c",
    title: "Environmental benefits of recycling",
  },
  {
    _id: "62e912d9e8df5a997f637a7e",
    title: "Advanced Unsaturated Soil Mechanics and Engineering",
  },
  {
    _id: "62e912d9e8df5a997f637a80",
    title: "The History of Christian Theology",
  },
  {
    _id: "62e912d9e8df5a997f637a82",
    title: "The Psychology of Entertainment Media",
  },
  {
    _id: "62e912d9e8df5a997f637a84",
    title: "The Psychology of Personnel Selection",
  },
  {
    _id: "62e912d9e8df5a997f637a86",
    title: "Routledge -History Of Philosophy - The Age Of German Idealism",
  },
  {
    _id: "62e912d9e8df5a997f637a88",
    title: "Teaching Mathematical Knowledge for Teaching",
  },
  {
    _id: "62e912d9e8df5a997f637a8a",
    title: "Comprehensive Economic Development Strategy",
  },
  {
    _id: "62e912d9e8df5a997f637a8c",
    title: "Politics of Nature: How to Bring the Sciences into Democracy",
  },
  {
    _id: "62e912d9e8df5a997f637a8e",
    title:
      "Fish as feed inputs for aquaculture: practices, sustainability and implications",
  },
  {
    _id: "62e912d9e8df5a997f637a90",
    title: "1,001 Essential Turkish Idioms - Learn Turkish | Online ",
  },
  {
    _id: "62e912d9e8df5a997f637a92",
    title: "Documentary History of Communism in Russia",
  },
  {
    _id: "62e912d9e8df5a997f637a94",
    title: "Biodiversity Conservation and Phylogenetic Systematics",
  },
  {
    _id: "62e912d9e8df5a997f637a96",
    title: "BODY LANGUAGE IN THE WORKPLACE",
  },
  {
    _id: "62e912dae8df5a997f637a98",
    title: "Statistical Thermodynamics",
  },
  {
    _id: "62e912dae8df5a997f637a9a",
    title: "Spanish: An Essential Grammar",
  },
  {
    _id: "62e912dae8df5a997f637a9c",
    title: "Budget and Finance",
  },
  {
    _id: "62e912dae8df5a997f637a9e",
    title: "Economic Controversies",
  },
  {
    _id: "62e912ef250a6b3cbbe8e2e1",
    title: "Energy Project Financing : Resources and Strategies for Success",
  },
  {
    _id: "62e912ef250a6b3cbbe8e2e3",
    title: "CHEMICAL ENGINEERING",
  },
  {
    _id: "62e912ef250a6b3cbbe8e2e5",
    title: "Life Skills Education Toolkit for Orphans & Vulnerable Children",
  },
  {
    _id: "62e912f0250a6b3cbbe8e2e7",
    title: "How to Write a Better Thesis",
  },
  {
    _id: "62e912f0250a6b3cbbe8e2e9",
    title: "ECONOMIC SCIENCE FOR RURAL DEVELOPMENT",
  },
  {
    _id: "62e912f0250a6b3cbbe8e2eb",
    title: "Islamic Finance in the Global Economy",
  },
  {
    _id: "62e912f0250a6b3cbbe8e2ed",
    title: "Home Gardens in Nepal",
  },
  {
    _id: "62e912f0250a6b3cbbe8e2ef",
    title: "The Political Economy of Growth",
  },
  {
    _id: "62e912f0250a6b3cbbe8e2f1",
    title: "Principles of Political Economy",
  },
  {
    _id: "62e912f0250a6b3cbbe8e2f3",
    title: "Mathematics and Economics",
  },
  {
    _id: "62e912f1250a6b3cbbe8e2f5",
    title: "Engineering Fluid Mechanics",
  },
  {
    _id: "62e912f1250a6b3cbbe8e2f7",
    title: "The history of freemasonry",
  },
  {
    _id: "62e912f1250a6b3cbbe8e2f9",
    title: "Organic Waste Recycling",
  },
  {
    _id: "62e912f1250a6b3cbbe8e2fb",
    title: "Glencoe World History",
  },
  {
    _id: "62e912f1250a6b3cbbe8e2fd",
    title: "ESSENTIAL GUIDE TO SPANISH READING - America Reads Spanish",
  },
  {
    _id: "62e912f1250a6b3cbbe8e2ff",
    title: "The Engineer",
  },
  {
    _id: "62e912f1250a6b3cbbe8e301",
    title: "A Brief History of the World",
  },
  {
    _id: "62e912f1250a6b3cbbe8e303",
    title: "Mathematics for Physics: A guided tour for graduate students",
  },
  {
    _id: "62e912f1250a6b3cbbe8e305",
    title: "Child Poverty and Inequality",
  },
  {
    _id: "62e912f1250a6b3cbbe8e307",
    title: "Fundamentals of Thermodynamics",
  },
  {
    _id: "62e912fa522c0b5bcf94012f",
    title: "Agroforestry and Biodiversity Conservation in Tropical Landscapes",
  },
  {
    _id: "62e912fa522c0b5bcf940131",
    title: "Handbook of the History of Economic Thought",
  },
  {
    _id: "62e912fa522c0b5bcf940133",
    title: "The Evolution of Language",
  },
  {
    _id: "62e912fa522c0b5bcf940135",
    title: "HISTORY OF ECONOMIC ANALYSIS",
  },
  {
    _id: "62e912fa522c0b5bcf940137",
    title: "Mathematical and Numerical Modeling in Geotechnical Engineering",
  },
  {
    _id: "62e912fb522c0b5bcf940139",
    title: "The Psychology of Marxian Socialism",
  },
  {
    _id: "62e912fb522c0b5bcf94013b",
    title: "Encyclopedia of Educational Psychology",
  },
  {
    _id: "62e912fb522c0b5bcf94013d",
    title: "Metal Recycling",
  },
  {
    _id: "62e912fb522c0b5bcf94013f",
    title: "Bird Ecology and Conservation A Handbook of Techniques",
  },
  {
    _id: "62e912fb522c0b5bcf940141",
    title: "A COMPANION TO ANCIENT HISTORY",
  },
  {
    _id: "62e912fb522c0b5bcf940143",
    title: "Eratosthenes' Geography",
  },
  {
    _id: "62e912fb522c0b5bcf940145",
    title: "The Geography of Beer",
  },
  {
    _id: "62e912fb522c0b5bcf940147",
    title: "French Language Course",
  },
  {
    _id: "62e912fb522c0b5bcf940149",
    title: "Advanced French Grammar",
  },
  {
    _id: "62e912fb522c0b5bcf94014b",
    title: "A Cultural History of Tarot",
  },
  {
    _id: "62e912fb522c0b5bcf94014d",
    title: "Aquaculture Engineering",
  },
  {
    _id: "62e912fb522c0b5bcf94014f",
    title: "History, Culture, and Conservation - IUCN",
  },
  {
    _id: "62e912fb522c0b5bcf940151",
    title: "A Directory of Paper Recycling Resources",
  },
  {
    _id: "62e912fb522c0b5bcf940153",
    title: "Guerrilla MUSIC Marketing Handbook",
  },
  {
    _id: "62e912fc522c0b5bcf940155",
    title: "Robot Dynamics and Control",
  },
  {
    _id: "62e9130954de2215f0b19664",
    title: "Piping Materials Guide by Peter Smith",
  },
  {
    _id: "62e9130954de2215f0b19666",
    title: "Dog Training for Dummies",
  },
  {
    _id: "62e9130954de2215f0b19668",
    title: "Department of Civil and Environmental Engineering",
  },
  {
    _id: "62e9130954de2215f0b1966a",
    title: "Soul Economy",
  },
  {
    _id: "62e9130954de2215f0b1966c",
    title: "Control Engineering - An introduction with the use of Matlab",
  },
  {
    _id: "62e9130954de2215f0b1966e",
    title: "Biological Physics: Energy, Information, Life",
  },
  {
    _id: "62e9130954de2215f0b19670",
    title: "A HISTORY OF PHILOSOPHY",
  },
  {
    _id: "62e9130954de2215f0b19672",
    title: "Sustainable diets and biodiversity - Food and Agriculture ",
  },
  {
    _id: "62e9130954de2215f0b19674",
    title: "Physical Chemistry of Foods",
  },
  {
    _id: "62e9130954de2215f0b19676",
    title: "Groundwork & Civil Engineering",
  },
  {
    _id: "62e9130a54de2215f0b19678",
    title: "Antarctic Climate Change and the Environment",
  },
  {
    _id: "62e9130a54de2215f0b1967a",
    title: "Special Economic Zones in Africa",
  },
  {
    _id: "62e9130a54de2215f0b1967c",
    title: "Frederick Copleston A History of Philosophy",
  },
  {
    _id: "62e9130a54de2215f0b1967e",
    title: "Field Engineer Handbook",
  },
  {
    _id: "62e9130a54de2215f0b19680",
    title: "Sport Psychology: Contemporary Themes",
  },
  {
    _id: "62e9130a54de2215f0b19682",
    title: "Principles of Bioseparations Engineering",
  },
  {
    _id: "62e9130a54de2215f0b19684",
    title: "Chemical Thermodynamics - Fulvio Frisone",
  },
  {
    _id: "62e9130a54de2215f0b19686",
    title: "Engineering Drawing",
  },
  {
    _id: "62e9130a54de2215f0b19688",
    title: "AutoCAD LT 2011 - Autodesk | 3D Design, Engineering ",
  },
  {
    _id: "62e9130a54de2215f0b1968a",
    title: "Philosophy of Second Language Acquisition",
  },
  {
    _id: "62e9131759c6c0d7d3c5ab20",
    title: "History of Ireland",
  },
  {
    _id: "62e9131759c6c0d7d3c5ab22",
    title: "Routledge History of World Philosophies",
  },
  {
    _id: "62e9131759c6c0d7d3c5ab24",
    title: "THE LANGUAGE INSTINCT",
  },
  {
    _id: "62e9131759c6c0d7d3c5ab26",
    title: "ENGLISH - CHINESE",
  },
  {
    _id: "62e9131759c6c0d7d3c5ab28",
    title: "History of Psychology",
  },
  {
    _id: "62e9131759c6c0d7d3c5ab2a",
    title: "MEDICINE AND PHILOSOPHY",
  },
  {
    _id: "62e9131859c6c0d7d3c5ab2c",
    title: "Psychology of Energy",
  },
  {
    _id: "62e9131859c6c0d7d3c5ab2e",
    title: "Political Psychology: Situations, Individuals, and Cases",
  },
  {
    _id: "62e91341befd30f11e486afe",
    title: "The Theory of Economic Growth: a 'Classical' Perspective",
  },
  {
    _id: "62e91341befd30f11e486b00",
    title: "Fundamentals of Electrical Engineering I",
  },
  {
    _id: "62e91341befd30f11e486b02",
    title: "Personal Finance in 1",
  },
  {
    _id: "62e91341befd30f11e486b04",
    title: "the history of arabia",
  },
  {
    _id: "62e91341befd30f11e486b06",
    title: "Economic Mobility",
  },
  {
    _id: "62e91341befd30f11e486b08",
    title: "Cambodia's Economic Transformation",
  },
  {
    _id: "62e91341befd30f11e486b0a",
    title: "Environment and aquaculture in developing countries",
  },
  {
    _id: "62e91342befd30f11e486b0c",
    title: "Arabic: An Essential Grammar",
  },
  {
    _id: "62e91342befd30f11e486b0e",
    title: "AANP Homeopathic Psychiatry",
  },
  {
    _id: "62e91342befd30f11e486b10",
    title: "Concise Dictionary of Psychology",
  },
  {
    _id: "62e91342befd30f11e486b12",
    title: "the 10000 year explosion",
  },
  {
    _id: "62e91342befd30f11e486b14",
    title: "Islamic Economics: A Short History",
  },
  {
    _id: "62e91342befd30f11e486b16",
    title: "Recreational Mathematics",
  },
  {
    _id: "62e91342befd30f11e486b18",
    title: "Dictionary of Australasian Biography",
  },
  {
    _id: "62e91342befd30f11e486b1a",
    title: "The Future of Social Theory",
  },
  {
    _id: "62e91342befd30f11e486b1c",
    title: "Mathematical Methods in Engineering and Science",
  },
  {
    _id: "62e91342befd30f11e486b1e",
    title: "Forest Products, Livelihoods and Conservation",
  },
  {
    _id: "62e91342befd30f11e486b20",
    title: "Race and Membership in American History: The Eugenics Movement",
  },
  {
    _id: "62e91342befd30f11e486b22",
    title: "Handbook of the Neuroscience of Language",
  },
  {
    _id: "62e91342befd30f11e486b24",
    title: "Inorganic Chemistry",
  },
  {
    _id: "62e91359bfec7e0d56b47746",
    title: "Psychology of Space Exploration",
  },
  {
    _id: "62e91359bfec7e0d56b47748",
    title: "Tourism Geography",
  },
  {
    _id: "62e91359bfec7e0d56b4774a",
    title: "Geography and History of Albania",
  },
  {
    _id: "62e9135abfec7e0d56b4774c",
    title: "The Emergence of the Global Political Economy",
  },
  {
    _id: "62e9135abfec7e0d56b4774e",
    title: "Classical Mechanics - Department of Physics and Astronomy",
  },
  {
    _id: "62e9135abfec7e0d56b47750",
    title: "Egyptian Masonic History",
  },
  {
    _id: "62e9135abfec7e0d56b47752",
    title:
      "sustainability - SUNY College of Environmental Science and Forestry",
  },
  {
    _id: "62e9135abfec7e0d56b47754",
    title: "Biological Diversity Conservation and the Law",
  },
  {
    _id: "62e9135abfec7e0d56b47756",
    title: "Cultural Heritage and Natural Disasters",
  },
  {
    _id: "62e9135abfec7e0d56b47758",
    title: "Civil Engineering",
  },
  {
    _id: "62e9135abfec7e0d56b4775a",
    title: "practising human geography",
  },
  {
    _id: "62e9135abfec7e0d56b4775c",
    title: "The Complete Idiot's Guide to European History",
  },
  {
    _id: "62e9135abfec7e0d56b4775e",
    title: "The Superpowers: A short history",
  },
  {
    _id: "62e9135abfec7e0d56b47760",
    title: "Learning to Speak a Second Language",
  },
  {
    _id: "62e9135abfec7e0d56b47762",
    title: "A concise history of freemasonry",
  },
  {
    _id: "62e9135abfec7e0d56b47764",
    title: "Government Finance Statistics",
  },
  {
    _id: "62e9135abfec7e0d56b47766",
    title:
      "Numerical.Methods.For.Scientists.And.Engineers_2ed_Hamming_0486652416.djvu",
  },
  {
    _id: "62e9135bbfec7e0d56b47768",
    title: "Swedish plant geography",
  },
  {
    _id: "62e9135bbfec7e0d56b4776a",
    title: "Handbook of Psychology Preface",
  },
  {
    _id: "62e9135bbfec7e0d56b4776c",
    title: "A History of the American People",
  },
  {
    _id: "62e915523e1e9d9b8272bad9",
    title: "The Secret History Of The World",
  },
  {
    _id: "62e915523e1e9d9b8272badb",
    title: "A History of the World",
  },
  {
    _id: "62e915523e1e9d9b8272badd",
    title: "Encyclopedia of Society and Culture in the Ancient World",
  },
  {
    _id: "62e915523e1e9d9b8272badf",
    title: "Atlas of World History",
  },
  {
    _id: "62e915523e1e9d9b8272bae1",
    title: "Destiny Disrupted: A History of the World Through Islamic Eyes",
  },
  {
    _id: "62e915523e1e9d9b8272bae3",
    title: "The Decisive Battles of World History",
  },
  {
    _id: "62e915533e1e9d9b8272bae5",
    title: "The Oxford History Of The Classical World",
  },
  {
    _id: "62e915533e1e9d9b8272bae7",
    title: "FINAL WARNING: A History of the New World Order",
  },
  {
    _id: "62e915533e1e9d9b8272bae9",
    title: "English Literature",
  },
  {
    _id: "62e915533e1e9d9b8272baeb",
    title: "A History of India, Third Edition",
  },
  {
    _id: "62e915533e1e9d9b8272baed",
    title: "Encyclopedia of Ancient Egypt",
  },
  {
    _id: "62e915533e1e9d9b8272baef",
    title: "The Dictionary of Human Geography",
  },
  {
    _id: "62e915533e1e9d9b8272baf1",
    title: "A History of Western Philosophy",
  },
  {
    _id: "62e915533e1e9d9b8272baf3",
    title: "Islam: Faith, Practice & History",
  },
  {
    _id: "62e915533e1e9d9b8272baf5",
    title: "World History in Documents",
  },
  {
    _id: "62e915533e1e9d9b8272baf7",
    title: "Ancient Greece: an Illustrated History",
  },
  {
    _id: "62e915533e1e9d9b8272baf9",
    title: "A Short History of the United States",
  },
  {
    _id: "62e915533e1e9d9b8272bafb",
    title: "A Short History of China and Southeast Asia",
  },
  {
    _id: "62e915533e1e9d9b8272bafd",
    title: "A History of Money",
  },
  {
    _id: "62e915533e1e9d9b8272baff",
    title: "A History of Money and Banking in the United States",
  },
  {
    _id: "62e915726c6959d38e07cdba",
    title: "A History of Mathematics From Mesopotamia to Modernity",
  },
  {
    _id: "62e915726c6959d38e07cdbc",
    title: "An outline history of English literature",
  },
  {
    _id: "62e915726c6959d38e07cdbe",
    title: "A History of Feminist Literary Criticism",
  },
  {
    _id: "62e915726c6959d38e07cdc0",
    title: "THE HISTORY OF TERRORISM - WikiLeaks",
  },
  {
    _id: "62e915726c6959d38e07cdc2",
    title: "The Secret History of Freemasonry",
  },
  {
    _id: "62e915726c6959d38e07cdc4",
    title: "Encyclopedia of the Ottoman Empire",
  },
  {
    _id: "62e915726c6959d38e07cdc6",
    title: "History of civilizations of Central Asia",
  },
  {
    _id: "62e915726c6959d38e07cdc8",
    title: "The History of Mathematical Proof in Ancient Traditions",
  },
  {
    _id: "62e915726c6959d38e07cdca",
    title: "Big History: The Big Bang, Life on Earth, and the Rise of Humanity",
  },
  {
    _id: "62e915726c6959d38e07cdcc",
    title: "The Cambridge History of Islam",
  },
  {
    _id: "62e915726c6959d38e07cdce",
    title: "A History of European Art",
  },
  {
    _id: "62e915726c6959d38e07cdd0",
    title: "Concise History of the Middle East",
  },
  {
    _id: "62e915726c6959d38e07cdd2",
    title: "The Ancient Egyptians For Dummies",
  },
  {
    _id: "62e915736c6959d38e07cdd4",
    title: "A Restatement of the History of Islam and Muslims",
  },
  {
    _id: "62e915736c6959d38e07cdd6",
    title: "THE OXFORD HISTORY OF THE BRITISH EMPIRE - Higher Intellect ",
  },
  {
    _id: "62e915736c6959d38e07cdd8",
    title: "Jews and Judaism in World History",
  },
  {
    _id: "62e915736c6959d38e07cdda",
    title: "The Concise History of the Crusades",
  },
  {
    _id: "62e915736c6959d38e07cddc",
    title: "The Encyclopedia of Unsolved Crimes",
  },
  {
    _id: "62e915736c6959d38e07cdde",
    title: "Social Studies/History & Geography",
  },
  {
    _id: "62e915736c6959d38e07cde0",
    title: "The Ottoman Empire and the World Around It",
  },
  {
    _id: "62e9158972db9ee5f3e7bbeb",
    title: "History of Israel",
  },
  {
    _id: "62e9158972db9ee5f3e7bbed",
    title:
      "History of civilizations of Central Asia, v. 4: The Age of achievement ",
  },
  {
    _id: "62e9158972db9ee5f3e7bbef",
    title: "Islamic Economics: A Short History",
  },
  {
    _id: "62e9158972db9ee5f3e7bbf1",
    title: "The Ancient History of China",
  },
  {
    _id: "62e9158972db9ee5f3e7bbf3",
    title: "Icons of the Middle Ages",
  },
  {
    _id: "62e9158972db9ee5f3e7bbf5",
    title: "A HISTORY OF MODERN IRAN",
  },
  {
    _id: "62e9158972db9ee5f3e7bbf7",
    title: "A Critical History of Greek Philosophy",
  },
  {
    _id: "62e9158972db9ee5f3e7bbf9",
    title: "The Oxford History of World Cinema",
  },
  {
    _id: "62e9158972db9ee5f3e7bbfb",
    title: "A Short History of Indonesia",
  },
  {
    _id: "62e9158972db9ee5f3e7bbfd",
    title: "The War of the Worlds - World History",
  },
  {
    _id: "62e9158972db9ee5f3e7bbff",
    title: "A text-book of the history of painting",
  },
  {
    _id: "62e9158972db9ee5f3e7bc01",
    title: "History of Philosophy",
  },
  {
    _id: "62e9158a72db9ee5f3e7bc03",
    title: "A Brief History of Ancient Greece",
  },
  {
    _id: "62e9158a72db9ee5f3e7bc05",
    title: "Geopolitics, History, and International Relations",
  },
  {
    _id: "62e9158a72db9ee5f3e7bc07",
    title: "A Brief History of Saudi Arabia",
  },
  {
    _id: "62e9158a72db9ee5f3e7bc09",
    title: "What is Architectural History",
  },
  {
    _id: "62e9158a72db9ee5f3e7bc0b",
    title:
      "Religious Rivalries in the Early Roman Empire and the Rise of Christianity",
  },
  {
    _id: "62e9158a72db9ee5f3e7bc0d",
    title: "The Cambridge History of Islam 2A",
  },
  {
    _id: "62e9158a72db9ee5f3e7bc0f",
    title: "A History of the American People",
  },
  {
    _id: "62e9158a72db9ee5f3e7bc11",
    title: "Historical Geography",
  },
  {
    _id: "62e9159be73869d64706bf7b",
    title: "A to Z of Women in World History",
  },
  {
    _id: "62e9159be73869d64706bf7d",
    title:
      "The History of Christianity: From the Disciples to the Dawn of the Reformation",
  },
  {
    _id: "62e9159be73869d64706bf7f",
    title: "The First Crusade",
  },
  {
    _id: "62e9159be73869d64706bf81",
    title: "The Encyclopedia of Ancient Natural Scientists",
  },
  {
    _id: "62e9159be73869d64706bf83",
    title: "Encyclopedia Of World History Vol II",
  },
  {
    _id: "62e9159be73869d64706bf85",
    title: "History of the war in Afghanistan - The British Empire",
  },
  {
    _id: "62e9159be73869d64706bf87",
    title: "There Were Giants Upon the Earth",
  },
  {
    _id: "62e9159be73869d64706bf89",
    title: "Jerusalem in the Time of Jesus",
  },
  {
    _id: "62e9159be73869d64706bf8b",
    title: "Rosicrucian History and Mysteries",
  },
  {
    _id: "62e9159be73869d64706bf8d",
    title: "Imperium: The Philosophy of History and Politics",
  },
  {
    _id: "62e9159be73869d64706bf8f",
    title: "A People's History of the World by Chris Harman - Free",
  },
  {
    _id: "62e9159ce73869d64706bf91",
    title: "HISTORY UNITED STATES",
  },
  {
    _id: "62e9159ce73869d64706bf93",
    title: "The History of Christian Theology",
  },
  {
    _id: "62e9159ce73869d64706bf95",
    title: "Routledge -History Of Philosophy - The Age Of German Idealism",
  },
  {
    _id: "62e9159ce73869d64706bf97",
    title: "Documentary History of Communism in Russia",
  },
  {
    _id: "62e9159ce73869d64706bf99",
    title: "The history of freemasonry",
  },
  {
    _id: "62e9159ce73869d64706bf9b",
    title: "Glencoe World History",
  },
  {
    _id: "62e9159ce73869d64706bf9d",
    title: "A Brief History of the World",
  },
  {
    _id: "62e9159ce73869d64706bf9f",
    title: "A COMPANION TO ANCIENT HISTORY",
  },
  {
    _id: "62e9159ce73869d64706bfa1",
    title: "A Cultural History of Tarot",
  },
  {
    _id: "62e91754fd5a717320fb545a",
    title: "Basic Engineering Mathematics",
  },
  {
    _id: "62e91754fd5a717320fb545c",
    title: "Higher Engineering Mathematics",
  },
  {
    _id: "62e91754fd5a717320fb545e",
    title: "Textbook of Engineering Drawing",
  },
  {
    _id: "62e91754fd5a717320fb5460",
    title: "Digital Logic And Computer Design By M. Morris Mano",
  },
  {
    _id: "62e91754fd5a717320fb5462",
    title: "Fundamentals of Materials Science and Engineering",
  },
  {
    _id: "62e91754fd5a717320fb5464",
    title: "PRACTICAL MATLAB® FOR ENGINEERS PRACTICAL MATLAB ",
  },
  {
    _id: "62e91754fd5a717320fb5466",
    title: "An Introduction to Mechanical Engineering",
  },
  {
    _id: "62e91754fd5a717320fb5468",
    title: "Fundamentals of Probability and Statistics for Engineers",
  },
  {
    _id: "62e91754fd5a717320fb546a",
    title: "Electric Power Engineering Handbook",
  },
  {
    _id: "62e91754fd5a717320fb546c",
    title: "Advanced Methods of Structural Analysis - Civil Engineering",
  },
  {
    _id: "62e91754fd5a717320fb546e",
    title: "Modern Control Engineering",
  },
  {
    _id: "62e91754fd5a717320fb5470",
    title: "Environmental Engineering FOURTH EDITION",
  },
  {
    _id: "62e91755fd5a717320fb5472",
    title: "Machine Drawing",
  },
  {
    _id: "62e91755fd5a717320fb5474",
    title: "Reverse Engineering",
  },
  {
    _id: "62e91755fd5a717320fb5476",
    title: "Handbook of Civil Engineering Calculations",
  },
  {
    _id: "62e91755fd5a717320fb5478",
    title: "Signals and Systems - Electrical Engineering",
  },
  {
    _id: "62e91755fd5a717320fb547a",
    title: "Higher Engineering Mathematics",
  },
  {
    _id: "62e91755fd5a717320fb547c",
    title: "Handbook for Sound Engineers",
  },
  {
    _id: "62e91755fd5a717320fb547e",
    title: "Handbook of Electrical Engineering",
  },
  {
    _id: "62e91755fd5a717320fb5480",
    title: "ENGINEERING MECHANICS AND DRAWING - Text Books Online",
  },
  {
    _id: "62e9176c638bc4559fdfb0f4",
    title: "Encyclopedia of Environmental Science and Engineering",
  },
  {
    _id: "62e9176c638bc4559fdfb0f6",
    title: "Chemical Engineers Handbook- Perry",
  },
  {
    _id: "62e9176c638bc4559fdfb0f8",
    title: "Structural Engineering - Civil, Environmental, and Architectural ",
  },
  {
    _id: "62e9176c638bc4559fdfb0fa",
    title: "Engineering Optimization: Theory and Practice, Fourth Edition",
  },
  {
    _id: "62e9176c638bc4559fdfb0fc",
    title: "Mechanical Engineering Drawing Workshop",
  },
  {
    _id: "62e9176c638bc4559fdfb0fe",
    title: "Reverse Engineering for Beginners",
  },
  {
    _id: "62e9176c638bc4559fdfb100",
    title: "Mechanical Engineering Principles",
  },
  {
    _id: "62e9176c638bc4559fdfb102",
    title: "Software Engineering: Principles and Practice",
  },
  {
    _id: "62e9176d638bc4559fdfb104",
    title: "Audio Engineering",
  },
  {
    _id: "62e9176d638bc4559fdfb106",
    title: "Game Engine Architecture",
  },
  {
    _id: "62e9176d638bc4559fdfb108",
    title: "Food Process Engineering and Technology",
  },
  {
    _id: "62e9176d638bc4559fdfb10a",
    title: "HIGHWAY ENGINEERING Martin Rogers",
  },
  {
    _id: "62e9176d638bc4559fdfb10c",
    title: "PLC-based Process Control Engineering Guide",
  },
  {
    _id: "62e9176d638bc4559fdfb10e",
    title: "Introduction to SolidWorks",
  },
  {
    _id: "62e9176d638bc4559fdfb110",
    title: "Geotechnical Engineering",
  },
  {
    _id: "62e9176d638bc4559fdfb112",
    title: "Aircraft Structures By Megson",
  },
  {
    _id: "62e9176d638bc4559fdfb114",
    title: "Problems and Solutions on Thermodynamics and Statistical Mechanics",
  },
  {
    _id: "62e9176d638bc4559fdfb116",
    title: "Advanced Engineering Mathematics",
  },
  {
    _id: "62e9176d638bc4559fdfb118",
    title: "Aerodynamics for Engineering Students",
  },
  {
    _id: "62e9176d638bc4559fdfb11a",
    title: "ANSYS Mechanical APDL Structural Analysis Guide.pdf",
  },
  {
    _id: "62e9178249f0a30ae6364695",
    title: "Numerical Methods for Chemical Engineering",
  },
  {
    _id: "62e9178249f0a30ae6364697",
    title: "Thermodynamics, Statistical Physics, and Quantum Mechanics",
  },
  {
    _id: "62e9178249f0a30ae6364699",
    title: "Risk and Safety in Civil Engineering",
  },
  {
    _id: "62e9178249f0a30ae636469b",
    title: "Tutorials: Animation - Autodesk | 3ds Max Design, Engineering",
  },
  {
    _id: "62e9178249f0a30ae636469d",
    title: "ANSYS Mechanical APDL Advanced Analysis Guide.pdf",
  },
  {
    _id: "62e9178249f0a30ae636469f",
    title: "Control Engineering",
  },
  {
    _id: "62e9178349f0a30ae63646a1",
    title: "Preface Fundamentals of Materials Science and Engineering",
  },
  {
    _id: "62e9178349f0a30ae63646a3",
    title: "DEFORMATION AND FRACTURE MECHANICS OF ENGINEERING",
  },
  {
    _id: "62e9178349f0a30ae63646a5",
    title: "Environmental Engineering Dictionary and Directory",
  },
  {
    _id: "62e9178349f0a30ae63646a7",
    title: "Mechanical Engineering Principles",
  },
  {
    _id: "62e9178349f0a30ae63646a9",
    title: "Introduction to Continuum Mechanics - Mechanical Engineering",
  },
  {
    _id: "62e9178349f0a30ae63646ab",
    title: "High Voltage Engineering - Fundamentals",
  },
  {
    _id: "62e9178349f0a30ae63646ad",
    title: "Physics and Engineering of Radiation Detection - Faculty",
  },
  {
    _id: "62e9178349f0a30ae63646af",
    title: "Engineering Design Project The Mountainboard - SolidWorks",
  },
  {
    _id: "62e9178349f0a30ae63646b1",
    title: "Object Oriented Software Engineering",
  },
  {
    _id: "62e9178349f0a30ae63646b3",
    title: "Flight Dynamics Principles",
  },
  {
    _id: "62e9178349f0a30ae63646b5",
    title: "Introduction to Electrical Engineering",
  },
  {
    _id: "62e9178349f0a30ae63646b7",
    title: "Modeling and Simulation in Transportation Engineering",
  },
  {
    _id: "62e9178349f0a30ae63646b9",
    title: "Computation Fluid Dynamics",
  },
  {
    _id: "62e9178349f0a30ae63646bb",
    title: "Fundamentals of Chemical Reaction Engineering",
  },
  {
    _id: "62e91798a63b1f502c0ce347",
    title: "Architectural and Engineering Design Standards",
  },
  {
    _id: "62e91798a63b1f502c0ce349",
    title: "Mathematics of Physics and Engineering",
  },
  {
    _id: "62e91798a63b1f502c0ce34b",
    title: "fundamentals of reservoir engineering",
  },
  {
    _id: "62e91798a63b1f502c0ce34d",
    title: "Engineering for Structural Stability in Bridge Construction",
  },
  {
    _id: "62e91799a63b1f502c0ce34f",
    title: "Liquid Nitro Explosives",
  },
  {
    _id: "62e91799a63b1f502c0ce351",
    title: "Chemical Engineering Thermodynamics II",
  },
  {
    _id: "62e91799a63b1f502c0ce353",
    title: "Engineering Mechanics – Statics by Meriam and Kraige",
  },
  {
    _id: "62e91799a63b1f502c0ce355",
    title: "Advanced Unsaturated Soil Mechanics and Engineering",
  },
  {
    _id: "62e91799a63b1f502c0ce357",
    title: "Statistical Thermodynamics",
  },
  {
    _id: "62e91799a63b1f502c0ce359",
    title: "CHEMICAL ENGINEERING",
  },
  {
    _id: "62e91799a63b1f502c0ce35b",
    title: "Engineering Fluid Mechanics",
  },
  {
    _id: "62e91799a63b1f502c0ce35d",
    title: "The Engineer",
  },
  {
    _id: "62e91799a63b1f502c0ce35f",
    title: "Fundamentals of Thermodynamics",
  },
  {
    _id: "62e91799a63b1f502c0ce361",
    title: "Mathematical and Numerical Modeling in Geotechnical Engineering",
  },
  {
    _id: "62e91799a63b1f502c0ce363",
    title: "Aquaculture Engineering",
  },
  {
    _id: "62e91799a63b1f502c0ce365",
    title: "Robot Dynamics and Control",
  },
  {
    _id: "62e91799a63b1f502c0ce367",
    title: "Piping Materials Guide by Peter Smith",
  },
  {
    _id: "62e91799a63b1f502c0ce369",
    title: "Department of Civil and Environmental Engineering",
  },
  {
    _id: "62e91799a63b1f502c0ce36b",
    title: "Control Engineering - An introduction with the use of Matlab",
  },
  {
    _id: "62e9179aa63b1f502c0ce36d",
    title: "Groundwork & Civil Engineering",
  },
  {
    _id: "62e917c3089e6283254b9c39",
    title: "Field Engineer Handbook",
  },
  {
    _id: "62e917c3089e6283254b9c3b",
    title: "Principles of Bioseparations Engineering",
  },
  {
    _id: "62e917c3089e6283254b9c3d",
    title: "Chemical Thermodynamics - Fulvio Frisone",
  },
  {
    _id: "62e917c3089e6283254b9c3f",
    title: "Engineering Drawing",
  },
  {
    _id: "62e917c3089e6283254b9c41",
    title: "AutoCAD LT 2011 - Autodesk | 3D Design, Engineering ",
  },
  {
    _id: "62e917c3089e6283254b9c43",
    title: "Software Engineering: Theory and Practice",
  },
  {
    _id: "62e917c3089e6283254b9c45",
    title: "Engineering Maintenance: A Modern Approach",
  },
  {
    _id: "62e917c3089e6283254b9c47",
    title: "Modern Control Engineering",
  },
  {
    _id: "62e917c3089e6283254b9c49",
    title: "Fundamentals of Electrical Engineering I",
  },
  {
    _id: "62e917c3089e6283254b9c4b",
    title: "Classical Mechanics - Department of Physics and Astronomy",
  },
  {
    _id: "62e917c3089e6283254b9c4d",
    title: "Modeling Tools for Environmental Engineers and Scientists",
  },
  {
    _id: "62e918649a6adb136c53d67c",
    title: "Psychology - A Self-Teaching Guide",
  },
  {
    _id: "62e918649a6adb136c53d67e",
    title: "The Power of Self-Esteem",
  },
  {
    _id: "62e918659a6adb136c53d680",
    title: "Influence: The Psychology of Persuasion",
  },
  {
    _id: "62e918659a6adb136c53d682",
    title: "Out of the Shadows: Understanding Sexual Addiction",
  },
  {
    _id: "62e918659a6adb136c53d684",
    title: "The Philosophy of Psychology",
  },
  {
    _id: "62e918659a6adb136c53d686",
    title: "The Psychology of Self-Esteem",
  },
  {
    _id: "62e918659a6adb136c53d688",
    title: "The Mind of the Buyer: A Psychology of Selling",
  },
  {
    _id: "62e918659a6adb136c53d68a",
    title: "How To Make Girls Chase",
  },
  {
    _id: "62e918659a6adb136c53d68c",
    title: "How the World Works",
  },
  {
    _id: "62e918659a6adb136c53d68e",
    title: "The Psychology of Selling",
  },
  {
    _id: "62e918659a6adb136c53d690",
    title: "Handbook of Psychology, Volume 6: Developmental Psychology",
  },
  {
    _id: "62e918659a6adb136c53d692",
    title: "Child Psychology and Psychiatry",
  },
  {
    _id: "62e918659a6adb136c53d694",
    title: "Trading Psychology 2.0",
  },
  {
    _id: "62e918659a6adb136c53d696",
    title:
      "Handbook of Psychology, Volume 5, Personality and Social Psychology",
  },
  {
    _id: "62e918659a6adb136c53d698",
    title: "Ganong's Review of Medical Physiology",
  },
  {
    _id: "62e918669a6adb136c53d69a",
    title: "Criminal Psychology : a Beginner's Guide",
  },
  {
    _id: "62e918669a6adb136c53d69c",
    title: "Cognitive Psychology",
  },
  {
    _id: "62e918669a6adb136c53d69e",
    title: "Encyclopedia of Psychology and Religion",
  },
  {
    _id: "62e918669a6adb136c53d6a0",
    title: "How Learning Works",
  },
  {
    _id: "62e918669a6adb136c53d6a2",
    title:
      "Teaching Critical Thinking in Psychology: A Handbook of Best Practices",
  },
  {
    _id: "62e918742308490773b75216",
    title: "Educational Psychology : Understanding Student's Thinking",
  },
  {
    _id: "62e918742308490773b75218",
    title: "Introduction to Forensic Psychology - B. Arrigo",
  },
  {
    _id: "62e918742308490773b7521a",
    title: "The Psychology of Creative Writing",
  },
  {
    _id: "62e918742308490773b7521c",
    title: "Goals - Advanced Life Skills",
  },
  {
    _id: "62e918742308490773b7521e",
    title: "Flow and the Foundations of Positive Psychology",
  },
  {
    _id: "62e918742308490773b75220",
    title: "Biological Psychology",
  },
  {
    _id: "62e918742308490773b75222",
    title: "Handbook of Psychology, Volume 4: Experimental Psychology",
  },
  {
    _id: "62e918742308490773b75224",
    title: "Vygotsky's Developmental and Educational Psychology",
  },
  {
    _id: "62e918742308490773b75226",
    title: "Sport And Exercise Psychology",
  },
  {
    _id: "62e918742308490773b75228",
    title: "Foundations of Cognitive Psychology",
  },
  {
    _id: "62e918742308490773b7522a",
    title: "Statistical Analysis for Education and Psychology Researchers",
  },
  {
    _id: "62e918742308490773b7522c",
    title: "Encyclopedia of Psychology and Law",
  },
  {
    _id: "62e918742308490773b7522e",
    title: "Research In Psychology: Methods and Design 6E",
  },
  {
    _id: "62e918752308490773b75230",
    title: "The Psychology of Eating",
  },
  {
    _id: "62e918752308490773b75232",
    title: "Transforming the Mind",
  },
  {
    _id: "62e918752308490773b75234",
    title: "An Introduction to Social Psychology",
  },
  {
    _id: "62e918752308490773b75236",
    title: "Art Therapy - Teaching Psychology",
  },
  {
    _id: "62e918752308490773b75238",
    title: "Psychology and Life",
  },
  {
    _id: "62e918752308490773b7523a",
    title: "Dream Psychology by Sigmund Freud",
  },
  {
    _id: "62e918752308490773b7523c",
    title: "Introduction to Psychology - College of Lake County",
  },
  {
    _id: "62e91882ab9d88bc37b478d5",
    title: "Socratic Moral Psychology",
  },
  {
    _id: "62e91883ab9d88bc37b478d7",
    title: "The Psychology of Problem Solving",
  },
  {
    _id: "62e91883ab9d88bc37b478d9",
    title: "Handbook of Psychology",
  },
  {
    _id: "62e91883ab9d88bc37b478db",
    title: "Research Methods in Clinical Psychology",
  },
  {
    _id: "62e91883ab9d88bc37b478dd",
    title: "Fifty Key Thinkers in Psychology",
  },
  {
    _id: "62e91883ab9d88bc37b478df",
    title: "How Professors Think",
  },
  {
    _id: "62e91883ab9d88bc37b478e1",
    title: "Cross-Cultural Psychology",
  },
  {
    _id: "62e91883ab9d88bc37b478e3",
    title: "Yoga and Psychology and Psychotherapy - Centre for Yoga Studies",
  },
  {
    _id: "62e91883ab9d88bc37b478e5",
    title: "Research Methods and Statistics in Psychology",
  },
  {
    _id: "62e91883ab9d88bc37b478e7",
    title: "Educational Psychology",
  },
  {
    _id: "62e91883ab9d88bc37b478e9",
    title: "Dictionary of Psychology & Allied Sciences",
  },
  {
    _id: "62e91883ab9d88bc37b478eb",
    title: "The Psychology of Entertainment Media",
  },
  {
    _id: "62e91883ab9d88bc37b478ed",
    title: "The Psychology of Personnel Selection",
  },
  {
    _id: "62e91883ab9d88bc37b478ef",
    title: "The Psychology of Marxian Socialism",
  },
  {
    _id: "62e91883ab9d88bc37b478f1",
    title: "Encyclopedia of Educational Psychology",
  },
  {
    _id: "62e91884ab9d88bc37b478f3",
    title: "Sport Psychology: Contemporary Themes",
  },
  {
    _id: "62e91884ab9d88bc37b478f5",
    title: "History of Psychology",
  },
  {
    _id: "62e91884ab9d88bc37b478f7",
    title: "MEDICINE AND PHILOSOPHY",
  },
  {
    _id: "62e91884ab9d88bc37b478f9",
    title: "Psychology of Energy",
  },
  {
    _id: "62e91884ab9d88bc37b478fb",
    title: "Political Psychology: Situations, Individuals, and Cases",
  },
  {
    _id: "62e918a04aaf2fc88a28158e",
    title: "Generalization in Qualitative Psychology",
  },
  {
    _id: "62e918a04aaf2fc88a281590",
    title: "POSITIVE PSYCHOLOGY AND CONSTRUCTIVIST DEVELOPMENTAL PSYCHOLOGY ",
  },
  {
    _id: "62e918a04aaf2fc88a281592",
    title: "Concise Dictionary of Psychology",
  },
  {
    _id: "62e918a04aaf2fc88a281594",
    title: "Psychology of Space Exploration",
  },
  {
    _id: "62e918a04aaf2fc88a281596",
    title: "Handbook of Psychology Preface",
  },
  {
    _id: "62e918c9ab6bc7c48ea392bd",
    title: "Handbook of Medicinal Herbs",
  },
  {
    _id: "62e918c9ab6bc7c48ea392bf",
    title: "Essentials of Anatomy and Physiology",
  },
  {
    _id: "62e918c9ab6bc7c48ea392c1",
    title: "The Complete Home Guide to Herbs, Natural Healing, and Nutrition",
  },
  {
    _id: "62e918c9ab6bc7c48ea392c3",
    title: "The Philosophy of Psychology",
  },
  {
    _id: "62e918caab6bc7c48ea392c5",
    title: "Anxiety & Depression Workbook",
  },
  {
    _id: "62e918caab6bc7c48ea392c7",
    title: "Emergency Medicine",
  },
  {
    _id: "62e918caab6bc7c48ea392c9",
    title: "Emotional Healing for Dummies.",
  },
  {
    _id: "62e918caab6bc7c48ea392cb",
    title: "The Radiology Handbook",
  },
  {
    _id: "62e918caab6bc7c48ea392cd",
    title: "Ganong's Review of Medical Physiology",
  },
  {
    _id: "62e918caab6bc7c48ea392cf",
    title: "100 Cases in Clinical Medicine",
  },
  {
    _id: "62e918caab6bc7c48ea392d1",
    title: "Pocket Clinician Internal Medicine",
  },
  {
    _id: "62e918caab6bc7c48ea392d3",
    title:
      "Study Guide for Fundamentals of Nursing The Art and Science of Nursing Care",
  },
  {
    _id: "62e918caab6bc7c48ea392d5",
    title: "Fundamental Nursing Skills",
  },
  {
    _id: "62e918caab6bc7c48ea392d7",
    title: "Timeless Secrets of Health & Rejuvenation",
  },
  {
    _id: "62e918caab6bc7c48ea392d9",
    title: "A Textbook of Clinical Pharmacology and Therapeutics",
  },
  {
    _id: "62e918caab6bc7c48ea392db",
    title: "Pocket Medicine",
  },
  {
    _id: "62e918cbab6bc7c48ea392dd",
    title: "Awaken Healing Energy Through The Tao",
  },
  {
    _id: "62e918cbab6bc7c48ea392df",
    title: "Handbook of Medicinal Herbs",
  },
  {
    _id: "62e918cbab6bc7c48ea392e1",
    title:
      "Approach to Internal Medicine: A Resource Book for Clinical Practice",
  },
  {
    _id: "62e918cbab6bc7c48ea392e3",
    title: "Penis Enlargement Exercise Program",
  },
  {
    _id: "62e918dfd5ab8981d6541dcd",
    title: "Handbook of Psychology, Volume 4: Experimental Psychology",
  },
  {
    _id: "62e918e0d5ab8981d6541dcf",
    title: "Nursing Leadership and Management",
  },
  {
    _id: "62e918e0d5ab8981d6541dd1",
    title: "Chinese Medicine",
  },
  {
    _id: "62e918e0d5ab8981d6541dd3",
    title: "Pharmacology for Dentistry",
  },
  {
    _id: "62e918e0d5ab8981d6541dd5",
    title: "Fundamentals of Medicinal Chemistry By Gareth Thomas",
  },
  {
    _id: "62e918e0d5ab8981d6541dd7",
    title: "Healing Herbs Of Paradise",
  },
  {
    _id: "62e918e0d5ab8981d6541dd9",
    title: "Sports Psychology For Dummies",
  },
  {
    _id: "62e918e0d5ab8981d6541ddb",
    title:
      "Skill Checklists for Taylor's Clinical Nursing Skills: A Nursing Approach",
  },
  {
    _id: "62e918e0d5ab8981d6541ddd",
    title: "Pharmacology for Anaesthesia and Intensive Care",
  },
  {
    _id: "62e918e0d5ab8981d6541ddf",
    title: "Special Operations Forces Medical Handbook",
  },
  {
    _id: "62e918e0d5ab8981d6541de1",
    title: "Webster's New World Medical Dictionary",
  },
  {
    _id: "62e918e0d5ab8981d6541de3",
    title: "Cannabis Grow Bible",
  },
  {
    _id: "62e918e0d5ab8981d6541de5",
    title: "Hypnotherapy for Dummies",
  },
  {
    _id: "62e918e0d5ab8981d6541de7",
    title: "NEPHROLOGY FOR MEDICAL STUDENTS",
  },
  {
    _id: "62e918e0d5ab8981d6541de9",
    title: "Emergency Medicine",
  },
  {
    _id: "62e918e1d5ab8981d6541deb",
    title: "MEDICINAL PLANTS in Folk Tradition",
  },
  {
    _id: "62e918e1d5ab8981d6541ded",
    title: "Infectious Diseases in Critical Care Medicine",
  },
  {
    _id: "62e918e1d5ab8981d6541def",
    title: "Reiki: The Miracle Healing 2015",
  },
  {
    _id: "62e918e1d5ab8981d6541df1",
    title: "Medical-surgical Nursing Demystified",
  },
  {
    _id: "62e918e1d5ab8981d6541df3",
    title: "The China Study - TRAINING IN PARADISE",
  },
  {
    _id: "62e918ef1b54c0cd4d5fcf40",
    title: "Medicine Of The Prophet",
  },
  {
    _id: "62e918ef1b54c0cd4d5fcf42",
    title: "Medical Statistics",
  },
  {
    _id: "62e918ef1b54c0cd4d5fcf44",
    title:
      "Energy Psychology / Energy Medicine: Exploring the Mind/Body Connection",
  },
  {
    _id: "62e918ef1b54c0cd4d5fcf46",
    title: "Cosmic Healing II",
  },
  {
    _id: "62e918ef1b54c0cd4d5fcf48",
    title: "Forbidden Cures and Underground Medicine • I",
  },
  {
    _id: "62e918ef1b54c0cd4d5fcf4a",
    title: "Anatomy & Physiology Workbook",
  },
  {
    _id: "62e918ef1b54c0cd4d5fcf4c",
    title: "100 QUESTIONS IN CARDIOLOGY",
  },
  {
    _id: "62e918ef1b54c0cd4d5fcf4e",
    title: "Healing the Symptoms Known as Autism",
  },
  {
    _id: "62e918ef1b54c0cd4d5fcf50",
    title: "Handbook of Hygiene Control in the Food Industry",
  },
  {
    _id: "62e918ef1b54c0cd4d5fcf52",
    title: "Pharmacology",
  },
  {
    _id: "62e918ef1b54c0cd4d5fcf54",
    title: "Principles and Practice of Pharmaceutical Medicine",
  },
  {
    _id: "62e918f01b54c0cd4d5fcf56",
    title: "THE CANADIAN ENCYCLOPEDIA NATURAL MEDICINE",
  },
  {
    _id: "62e918f01b54c0cd4d5fcf58",
    title: "The Body/Mind Medicine Connection",
  },
  {
    _id: "62e918f01b54c0cd4d5fcf5a",
    title: "Forensic Dentistry, Second Edition",
  },
  {
    _id: "62e918f01b54c0cd4d5fcf5c",
    title: "PAEDIATRIC DENTISTRY - 3rd Ed. (2005)",
  },
  {
    _id: "62e918f01b54c0cd4d5fcf5e",
    title: "Dictionary of Pharmaceutical Medicine",
  },
  {
    _id: "62e918f01b54c0cd4d5fcf60",
    title: "Chemistry for Pharmacy Students",
  },
  {
    _id: "62e918f01b54c0cd4d5fcf62",
    title: "Quick Review Cards for Medical Laboratory Science",
  },
  {
    _id: "62e918f01b54c0cd4d5fcf64",
    title: "Comparative and Veterinary Pharmacology",
  },
  {
    _id: "62e918fcac096302a2c0fc6d",
    title: "Acupuncture and Herbal Medicine for Cancer Patients",
  },
  {
    _id: "62e918fcac096302a2c0fc6f",
    title: "Sports Medicine: Just the Facts",
  },
  {
    _id: "62e918fcac096302a2c0fc71",
    title: "Clinical Forensic Medicine",
  },
  {
    _id: "62e918fcac096302a2c0fc73",
    title: "Medical-Surgical Nursing Demystified",
  },
  {
    _id: "62e918fcac096302a2c0fc75",
    title: "Traditional Medicine by Steven B Kayne",
  },
  {
    _id: "62e918fcac096302a2c0fc77",
    title: "Current Essentials of Medicine",
  },
  {
    _id: "62e918fcac096302a2c0fc79",
    title:
      "Genes, Hearing, and Deafness: From Molecular Biology to Clinical Practice",
  },
  {
    _id: "62e918fdac096302a2c0fc7b",
    title: "Educational Psychology",
  },
  {
    _id: "62e918fdac096302a2c0fc7d",
    title: "Rehabilitation Medicine",
  },
  {
    _id: "62e918fdac096302a2c0fc7f",
    title: "Complementary & Alternative Medicine for Mental Health",
  },
  {
    _id: "62e918fdac096302a2c0fc81",
    title:
      "Antibiotic Resistance Bacteria, Viruses, Fungi, and other Pathogens, a Threat to World Health",
  },
  {
    _id: "62e918fdac096302a2c0fc83",
    title: "Physics and Radiobiology of Nuclear Medicine",
  },
  {
    _id: "62e918fdac096302a2c0fc85",
    title: "Oxford Dictionary of Medical Quotations",
  },
  {
    _id: "62e918fdac096302a2c0fc87",
    title: "Thyroid For Dummies",
  },
  {
    _id: "62e918fdac096302a2c0fc89",
    title: "Pretest Emergency Medicine",
  },
  {
    _id: "62e918fdac096302a2c0fc8b",
    title: "Medical Bacteriology - The Carter Center",
  },
  {
    _id: "62e918fdac096302a2c0fc8d",
    title: "Overcoming Anxiety For Dummies, 2nd Edition",
  },
  {
    _id: "62e918fdac096302a2c0fc8f",
    title: "Handbook of Pediatric Surgical Critical Care",
  },
  {
    _id: "62e918fdac096302a2c0fc91",
    title: "Survival Nursing",
  },
  {
    _id: "62e918fdac096302a2c0fc93",
    title: "Textbook of Personalized Medicine",
  },
  {
    _id: "62e9193e2973588975edceed",
    title: "Spoken English: Flourish Your Language",
  },
  {
    _id: "62e9193e2973588975edceef",
    title: "How to Write Better Essays",
  },
  {
    _id: "62e9193f2973588975edcef1",
    title: "Free English Grammar",
  },
  {
    _id: "62e9193f2973588975edcef3",
    title: "Teaching English as a Foreign Language",
  },
  {
    _id: "62e9193f2973588975edcef5",
    title: "Children Learning English",
  },
  {
    _id: "62e9193f2973588975edcef7",
    title: "A Student's Introduction to English Grammar",
  },
  {
    _id: "62e9193f2973588975edcef9",
    title: "Learning Arabic Language of the Quran",
  },
  {
    _id: "62e9193f2973588975edcefb",
    title: "English Grammar for ESL Learners",
  },
  {
    _id: "62e9193f2973588975edcefd",
    title: "Learning English as a Foreign Language for Dummies",
  },
  {
    _id: "62e9193f2973588975edceff",
    title: "LEARNING SPOKEN ENGLISH",
  },
  {
    _id: "62e9193f2973588975edcf01",
    title: "The Definitive Book of Body Language",
  },
  {
    _id: "62e9193f2973588975edcf03",
    title: "French Vocabulary",
  },
  {
    _id: "62e9193f2973588975edcf05",
    title: "Arabic-English Dictionary",
  },
  {
    _id: "62e9193f2973588975edcf07",
    title: "Hebrew-English Tanakh: The Jewish Bible - Holy Language Institute",
  },
  {
    _id: "62e9193f2973588975edcf09",
    title: "English Literature",
  },
  {
    _id: "62e9193f2973588975edcf0b",
    title: "Webster's Dictionary of English Usage",
  },
  {
    _id: "62e919402973588975edcf0d",
    title: "Techniques in language Teaching",
  },
  {
    _id: "62e919402973588975edcf0f",
    title: "397 English Grammar Tests",
  },
  {
    _id: "62e919402973588975edcf11",
    title: "BASIC SPANISH: A GRAMMAR AND WORKBOOK",
  },
  {
    _id: "62e919402973588975edcf13",
    title: "Modern Hindi Grammar - Indian Institute of Language Studies (IILS)",
  },
  {
    _id: "62e9195337f135affb44cb73",
    title: "Arabic: An Essential Grammar",
  },
  {
    _id: "62e9195437f135affb44cb75",
    title: "Language, Culture, and Society",
  },
  {
    _id: "62e9195437f135affb44cb77",
    title: "Body Language",
  },
  {
    _id: "62e9195437f135affb44cb79",
    title: "Lessons in Arabic Language, Book 2",
  },
  {
    _id: "62e9195437f135affb44cb7b",
    title: "Intermediate Arabic For Dummies",
  },
  {
    _id: "62e9195437f135affb44cb7d",
    title: "Italian for Dummies",
  },
  {
    _id: "62e9195437f135affb44cb7f",
    title: "Modern Spanish Grammar",
  },
  {
    _id: "62e9195437f135affb44cb81",
    title: "Common Errors in English by Paul Brians",
  },
  {
    _id: "62e9195437f135affb44cb83",
    title: "The Sanskrit Language",
  },
  {
    _id: "62e9195437f135affb44cb85",
    title: "English-Spanish, Spanish-English dictionary",
  },
  {
    _id: "62e9195437f135affb44cb87",
    title: "Ancient Hebrew Language and Alphabet",
  },
  {
    _id: "62e9195437f135affb44cb89",
    title: "LEARN SPANISH in the Spanish World",
  },
  {
    _id: "62e9195437f135affb44cb8b",
    title: "4000 Essential English Words",
  },
  {
    _id: "62e9195437f135affb44cb8d",
    title: "Understanding and Teaching the Pronunciation of English",
  },
  {
    _id: "62e9195437f135affb44cb8f",
    title: "The Vulcan Language - Star Trek",
  },
  {
    _id: "62e9195537f135affb44cb91",
    title:
      "language, culture, and society: key topics in linguistic anthropology",
  },
  {
    _id: "62e9195537f135affb44cb93",
    title: "Turkish: A Comprehensive Grammar",
  },
  {
    _id: "62e9195537f135affb44cb95",
    title: "Basic Italian: A Grammar and Workbook",
  },
  {
    _id: "62e9195537f135affb44cb97",
    title: "Building a Better Vocabulary",
  },
  {
    _id: "62e9195537f135affb44cb99",
    title: "Latin 101: Learning a Classical Language",
  },
  {
    _id: "62e91961b24f2506a2599472",
    title: "The English Language english language",
  },
  {
    _id: "62e91962b24f2506a2599474",
    title: "French Grammar in Context",
  },
  {
    _id: "62e91962b24f2506a2599476",
    title: "English−french Dictionary",
  },
  {
    _id: "62e91962b24f2506a2599478",
    title: "A Communicative Grammar of English by Geoffrey Leech",
  },
  {
    _id: "62e91962b24f2506a259947a",
    title: "English Grammar Test Package",
  },
  {
    _id: "62e91962b24f2506a259947c",
    title: "Speak the Culture: Spain: Be Fluent in Spanish Life and Culture",
  },
  {
    _id: "62e91962b24f2506a259947e",
    title: "Teaching English Language Learners through Technology",
  },
  {
    _id: "62e91962b24f2506a2599480",
    title: "The Teacher’s Grammar Book",
  },
  {
    _id: "62e91962b24f2506a2599482",
    title: "An Elementary Grammar of the Italian Language - Forgotten Books",
  },
  {
    _id: "62e91962b24f2506a2599484",
    title: "Inter-Cultural Language Use and Language Learning",
  },
  {
    _id: "62e91962b24f2506a2599486",
    title: "Methods for Teaching Learning Strategies in the Foreign Language ",
  },
  {
    _id: "62e91962b24f2506a2599488",
    title: "Literature and Stylistics for Language Learners",
  },
  {
    _id: "62e91962b24f2506a259948a",
    title: "Encyclopedia of Philosophy of Language",
  },
  {
    _id: "62e91962b24f2506a259948c",
    title: "French Language Course",
  },
  {
    _id: "62e91962b24f2506a259948e",
    title: "An introduction to Japanese - Syntax, Grammar & Language",
  },
  {
    _id: "62e91963b24f2506a2599490",
    title: "English Language Development",
  },
  {
    _id: "62e91963b24f2506a2599492",
    title: "Business English for Success",
  },
  {
    _id: "62e91963b24f2506a2599494",
    title:
      "Intercultural teaching and learning. English as a foreign language education in Finland and Japan",
  },
  {
    _id: "62e91963b24f2506a2599496",
    title: "A COMPANION TO THE ANCIENT GREEK LANGUAGE",
  },
  {
    _id: "62e91963b24f2506a2599498",
    title: "Routledge Encyclopedia of Philosophy Philosophy of Language",
  },
  {
    _id: "62e9196c9ddc1adb85fcfe4b",
    title: "Spanish: An Essential Grammar",
  },
  {
    _id: "62e919b52929aca6c98f862f",
    title:
      "The Art of Work: A Proven Path to Discovering What You Were Meant to Do",
  },
  {
    _id: "62e919b52929aca6c98f8631",
    title: "Give and Take: WHY HELPING OTHERS DRIVES OUR SUCCESS",
  },
  {
    _id: "62e919b52929aca6c98f8633",
    title:
      "The Book of Secret Wisdom - The Prophetic Record of Human Destiny and Evolution",
  },
  {
    _id: "62e919b52929aca6c98f8635",
    title: "When the Moon Split: A biography of Prophet Muhammad ",
  },
  {
    _id: "62e919b62929aca6c98f8637",
    title: "The Bible Atlas - Ultimate Bible Reference Library",
  },
  {
    _id: "62e919b62929aca6c98f8639",
    title: "Exceedingly Growing Faith by Kenneth E. Hagin",
  },
  {
    _id: "62e919b62929aca6c98f863b",
    title:
      "It IS About Islam: Exposing the Truth About ISIS, Al Qaeda, Iran, and the Caliphate",
  },
  {
    _id: "62e919b62929aca6c98f863d",
    title: "Quran in English",
  },
  {
    _id: "62e919b62929aca6c98f863f",
    title: "The Essential Rumi by Coleman Barks",
  },
  {
    _id: "62e919b62929aca6c98f8641",
    title: "No god but God: The Origins, Evolution, and Future of Islam",
  },
  {
    _id: "62e919b62929aca6c98f8643",
    title: "After the Prophet: The Epic Story of the Shia-Sunni Split in Islam",
  },
  {
    _id: "62e919b62929aca6c98f8645",
    title: "Encyclopedia of African Religion",
  },
  {
    _id: "62e919b62929aca6c98f8647",
    title: "Learning Arabic Language of the Quran",
  },
  {
    _id: "62e919b62929aca6c98f8649",
    title: "Encyclopedia of Islam",
  },
  {
    _id: "62e919b62929aca6c98f864b",
    title: "Encyclopedia of Hinduism",
  },
  {
    _id: "62e919b62929aca6c98f864d",
    title: "Destiny Disrupted: A History of the World Through Islamic Eyes",
  },
  {
    _id: "62e919b62929aca6c98f864f",
    title: "Holy Bible",
  },
  {
    _id: "62e919b62929aca6c98f8651",
    title: "Bible History: Old Testament",
  },
  {
    _id: "62e919b72929aca6c98f8653",
    title: "The Illustrated Encyclopedia of Hinduism (2 Vol Set)",
  },
  {
    _id: "62e919b72929aca6c98f8655",
    title: "Encyclopedia of Psychology and Religion",
  },
  {
    _id: "62e919e03f96651d25d83ef4",
    title: "Freemasonry and Judaism: Secret Powers Behind",
  },
  {
    _id: "62e919e03f96651d25d83ef6",
    title: "PHILOSOPHY OF RELIGION",
  },
  {
    _id: "62e919e03f96651d25d83ef8",
    title: "Islam and the Future of Tolerance: A Dialogue",
  },
  {
    _id: "62e919e03f96651d25d83efa",
    title: "Islam: Faith, Practice & History",
  },
  {
    _id: "62e919e03f96651d25d83efc",
    title: "In the Footsteps of the Prophet: Lessons from the Life of Muhammad",
  },
  {
    _id: "62e919e03f96651d25d83efe",
    title: "Religion in Human Evolution",
  },
  {
    _id: "62e919e03f96651d25d83f00",
    title: "The Occult of Roman Catholicism",
  },
  {
    _id: "62e919e03f96651d25d83f02",
    title: "Muhammad the Prophet by Maulana Muhammad Ali",
  },
  {
    _id: "62e919e03f96651d25d83f04",
    title: "The Work of the Holy Spirit - Christian Classics Ethereal ",
  },
  {
    _id: "62e919e03f96651d25d83f06",
    title: "A Dictionary of Philosophy of Religion",
  },
  {
    _id: "62e919e03f96651d25d83f08",
    title: "Inside Islam: A Guide for Catholics: 100 Questions and Answers",
  },
  {
    _id: "62e919e03f96651d25d83f0a",
    title: "THE STORY OF THE COPTS - THE TRUE STORY OF CHRISTIANITY IN EGYPT",
  },
  {
    _id: "62e919e13f96651d25d83f0c",
    title: "The Ancient Hebrew Lexicon of the Bible",
  },
  {
    _id: "62e919e13f96651d25d83f0e",
    title: "Islam at War: A History",
  },
  {
    _id: "62e919e13f96651d25d83f10",
    title: "Early Christianity",
  },
  {
    _id: "62e919e13f96651d25d83f12",
    title: "True Christianity",
  },
  {
    _id: "62e919e13f96651d25d83f14",
    title: "Don't Be Sad - The Islamic Bulletin",
  },
  {
    _id: "62e919e13f96651d25d83f16",
    title: "The Cambridge History of Islam",
  },
  {
    _id: "62e919e13f96651d25d83f18",
    title: "The Essence of Hinduism - Mahatma Gandhi",
  },
  {
    _id: "62e919e13f96651d25d83f1a",
    title: "The Blackwell Companion to Hinduism",
  },
  {
    _id: "62e919ecd653a0e6f3901aaa",
    title: "A Restatement of the History of Islam and Muslims",
  },
  {
    _id: "62e919ecd653a0e6f3901aac",
    title: "Jews and Judaism in World History",
  },
  {
    _id: "62e919ecd653a0e6f3901aae",
    title: "Amharic Bible",
  },
  {
    _id: "62e919edd653a0e6f3901ab4",
    title: "A Companion to Philosophy of Religion (Second Edition)",
  },
  {
    _id: "62e919edd653a0e6f3901ab6",
    title: "Religion, Globalization and Culture",
  },
  {
    _id: "62e919edd653a0e6f3901aba",
    title: "The King James Version of the Holy Bible",
  },
  {
    _id: "62e919edd653a0e6f3901abc",
    title: "The Politically Incorrect Guide to Islam and the Crusades",
  },
  {
    _id: "62e919edd653a0e6f3901abe",
    title: "Handbook of the Sociology of Religion - Yola",
  },
  {
    _id: "62e919edd653a0e6f3901acc",
    title: "Religion explained",
  },
  {
    _id: "62e919eed653a0e6f3901ace",
    title: "Encyclopedia of Religion",
  },
  {
    _id: "62e91a00d653a0e6f3901ad8",
    title: "Science, Religion, and the Human Experience",
  },
  {
    _id: "62e91a01d653a0e6f3901ada",
    title: "Religion and Spirituality in Psychiatry",
  },
  {
    _id: "62e91a01d653a0e6f3901ae0",
    title: "The Sociology of Early Buddhism",
  },
  {
    _id: "62e91a01d653a0e6f3901ae8",
    title: "Heaven and Hell: The Portable New Century Edition",
  },
  {
    _id: "62e91a01d653a0e6f3901aea",
    title: "Homosexuality and Religion: An Encyclopedia",
  },
  {
    _id: "62e91a01d653a0e6f3901aec",
    title: "Islam: A Challenge To Faith - Muhammad, Islam & Christianity ",
  },
  {
    _id: "62e91a01d653a0e6f3901aee",
    title: "Taliban: Islam, oil and the new great game in central Asia",
  },
  {
    _id: "62e91a01d653a0e6f3901af0",
    title: "Hinduism Mini Encyclopedia",
  },
  {
    _id: "62e91a01d653a0e6f3901af2",
    title: "The Gnostic Bible",
  },
  {
    _id: "62e91a02d653a0e6f3901af8",
    title: "You Are Loved: Embracing the Everlasting Love God has for You",
  },
  {
    _id: "62e91c6e624132488837a582",
    title: "The Cambridge History of Islam 2A",
  },
  {
    _id: "62e91c6e624132488837a584",
    title: "Marx, Critical Theory, and Religion",
  },
  {
    _id: "62e91c6e624132488837a586",
    title: "Christianity is NOT Religion - Christ in You Ministries",
  },
  {
    _id: "62e91c6e624132488837a588",
    title: "The Origins of Christianity",
  },
  {
    _id: "62e91c6e624132488837a58a",
    title: "Religious Studies: The Key Concepts",
  },
  {
    _id: "62e91c6e624132488837a58c",
    title: "Allah The Concept of God in Islam",
  },
  {
    _id: "62e91c6e624132488837a58e",
    title: "The Choice: Islam and Christianity",
  },
  {
    _id: "62e91c6e624132488837a590",
    title: "Occult Principles of Health and Healing",
  },
  {
    _id: "62e91c6e624132488837a592",
    title: "Jesus Calling: Seeking Peace in His Presence",
  },
  {
    _id: "62e91c6e624132488837a594",
    title: "The Buddhist Religion: A Historical Introduction",
  },
  {
    _id: "62e91c6e624132488837a596",
    title: "Religious Studies: A Global View",
  },
  {
    _id: "62e91c6f624132488837a598",
    title: "Essays in Anarchism and Religion",
  },
  {
    _id: "62e91c6f624132488837a59a",
    title: "The Life of Hinduism",
  },
  {
    _id: "62e91c6f624132488837a59c",
    title: "Islam and Modernity",
  },
  {
    _id: "62e91c6f624132488837a59e",
    title: "The Educational System In Islam",
  },
  {
    _id: "62e91c6f624132488837a5a0",
    title: "A Companion Roman Religion - Spiritual Minds",
  },
  {
    _id: "62e91c6f624132488837a5a2",
    title: "Phenomenology and Religion: New Frontiers",
  },
  {
    _id: "62e91c6f624132488837a5a4",
    title: "Concise Encyclopedia of Hinduism",
  },
  {
    _id: "62e91c6f624132488837a5a6",
    title: "From Judaism to Christianity",
  },
  {
    _id: "62e91c6f624132488837a5a8",
    title: "The Religion of the Future",
  },
  {
    _id: "62e91c7f2c175bd39aacb318",
    title: "Religion in India",
  },
  {
    _id: "62e91c7f2c175bd39aacb31a",
    title: "To Learn and to Teach More Effectively - Religious Studies Center",
  },
  {
    _id: "62e91c7f2c175bd39aacb31c",
    title: "What Is Hinduism?",
  },
  {
    _id: "62e91c7f2c175bd39aacb31e",
    title: "Religion and American Law",
  },
  {
    _id: "62e91c7f2c175bd39aacb320",
    title: "A Mosque Among The Stars: Islam and Science Fiction",
  },
  {
    _id: "62e91c7f2c175bd39aacb322",
    title: "My Faith - ISLAMIC STUDIES",
  },
  {
    _id: "62e91c7f2c175bd39aacb324",
    title: "Handbook of the Sociology of Religion",
  },
  {
    _id: "62e91c802c175bd39aacb326",
    title: "The Blackwell Companion to Eastern Christianity",
  },
  {
    _id: "62e91c802c175bd39aacb328",
    title: "The Holy Bible",
  },
  {
    _id: "62e91c802c175bd39aacb32a",
    title: "Islam: A Challenge to Religion",
  },
  {
    _id: "62e91c802c175bd39aacb32c",
    title: "Mission to Islam and Beyond - Answering Islam",
  },
  {
    _id: "62e91c802c175bd39aacb32e",
    title: "Religious Studies Anthology",
  },
  {
    _id: "62e91c802c175bd39aacb330",
    title: "Islam and Christianity",
  },
  {
    _id: "62e91c802c175bd39aacb332",
    title: "The Future For Islam",
  },
  {
    _id: "62e91c802c175bd39aacb334",
    title: "Hindu Religious Studies",
  },
  {
    _id: "62e91c802c175bd39aacb336",
    title: "Rave Culture and Religion",
  },
  {
    _id: "62e91c802c175bd39aacb338",
    title: "Class 5 Religious Studies: Islam",
  },
  {
    _id: "62e91c802c175bd39aacb33a",
    title: "The Religion of the Italian Communes 1125-1325",
  },
  {
    _id: "62e91caa65e4e0c0cc250e8a",
    title: "How the World Works",
  },
  {
    _id: "62e91caa65e4e0c0cc250e8c",
    title: "The Dictionary of Human Geography",
  },
  {
    _id: "62e91caa65e4e0c0cc250e8e",
    title: "Introduction to Sociology",
  },
  {
    _id: "62e91caa65e4e0c0cc250e90",
    title: "Communication Theory Media, Technology and Society",
  },
  {
    _id: "62e91caa65e4e0c0cc250e92",
    title: "Encyclopedia of Sociology",
  },
  {
    _id: "62e91caa65e4e0c0cc250e94",
    title: "Sociology of Culture",
  },
  {
    _id: "62e91caa65e4e0c0cc250e96",
    title: "Urban Social Geography",
  },
  {
    _id: "62e91cab65e4e0c0cc250e98",
    title: "Semiotics: Theory And Applications",
  },
  {
    _id: "62e91cab65e4e0c0cc250e9a",
    title: "Approaches to Human Geography",
  },
  {
    _id: "62e91cab65e4e0c0cc250e9c",
    title: "Democracy in Social Movements",
  },
  {
    _id: "62e91cab65e4e0c0cc250e9e",
    title: "Social Studies/History & Geography",
  },
  {
    _id: "62e91cab65e4e0c0cc250ea0",
    title: "Sociology of Education - National Open University of Nigeria",
  },
  {
    _id: "62e91cab65e4e0c0cc250ea2",
    title: "The Sociology of Early Buddhism",
  },
  {
    _id: "62e91cab65e4e0c0cc250ea4",
    title: "The Sociology of Philosophies",
  },
  {
    _id: "62e91cab65e4e0c0cc250ea6",
    title: "Handbook of the Sociology of Religion - Yola",
  },
  {
    _id: "62e91cab65e4e0c0cc250ea8",
    title: "Sociology For Dummies",
  },
  {
    _id: "62e91cab65e4e0c0cc250eaa",
    title: "Blackwell Companion to Sociology",
  },
  {
    _id: "62e91cab65e4e0c0cc250eac",
    title: "Sociology",
  },
  {
    _id: "62e91cab65e4e0c0cc250eae",
    title: "Exploring World Cultural Geography",
  },
  {
    _id: "62e91cab65e4e0c0cc250eb0",
    title: "Sociological Perspectives on Global Climate Change",
  },
  {
    _id: "62e91cb79656374cdcdfc5bc",
    title: "Child Poverty and Inequality",
  },
  {
    _id: "62e91cb79656374cdcdfc5be",
    title: "Bloodlines: Race, Cross, and the Christian",
  },
  {
    _id: "62e91cb79656374cdcdfc5c0",
    title: "Child Rights Toolkit",
  },
  {
    _id: "62e91cb79656374cdcdfc5c2",
    title: "the 10000 year explosion",
  },
  {
    _id: "62e91cb79656374cdcdfc5c4",
    title: "The Future of Social Theory",
  },
  {
    _id: "62e91cb79656374cdcdfc5c6",
    title: "practising human geography",
  },
  {
    _id: "62e91cb79656374cdcdfc5c8",
    title: "Global Child Poverty and Well-being",
  },
  {
    _id: "62e91ce4fff28dd0f56db8e5",
    title: "Indian Geography",
  },
  {
    _id: "62e91ce4fff28dd0f56db8e7",
    title: "The Dictionary of Human Geography",
  },
  {
    _id: "62e91ce4fff28dd0f56db8e9",
    title: "Encyclopedia of Geography Terms, Themes, and Concepts",
  },
  {
    _id: "62e91ce5fff28dd0f56db8eb",
    title: "Cultural Geography",
  },
  {
    _id: "62e91ce5fff28dd0f56db8ed",
    title: "Urban Social Geography",
  },
  {
    _id: "62e91ce5fff28dd0f56db8ef",
    title: "An Introduction to Coastal Processes and Geomorphology",
  },
  {
    _id: "62e91ce5fff28dd0f56db8f1",
    title: "Approaches to Human Geography",
  },
  {
    _id: "62e91ce5fff28dd0f56db8f3",
    title: "Social Studies/History & Geography",
  },
  {
    _id: "62e91ce5fff28dd0f56db8f5",
    title: "Tourism Geography",
  },
  {
    _id: "62e91ce5fff28dd0f56db8f7",
    title: "Glencoe World Geography Georgia Workbooks",
  },
  {
    _id: "62e91ce5fff28dd0f56db8f9",
    title: "Exploring World Cultural Geography",
  },
  {
    _id: "62e91ce5fff28dd0f56db8fb",
    title: "Historical Geography",
  },
  {
    _id: "62e91ce5fff28dd0f56db8fd",
    title: "The Geography of Transport Systems",
  },
  {
    _id: "62e91ce5fff28dd0f56db8ff",
    title: "Geography and Revolution",
  },
  {
    _id: "62e91ce5fff28dd0f56db901",
    title: "Geography Review in 20 Minutes a Day",
  },
  {
    _id: "62e91ce5fff28dd0f56db903",
    title: "Applied Geography",
  },
  {
    _id: "62e91ce5fff28dd0f56db905",
    title: "Mathematical Geography",
  },
  {
    _id: "62e91ce6fff28dd0f56db907",
    title: "Eratosthenes' Geography",
  },
  {
    _id: "62e91ce6fff28dd0f56db909",
    title: "The Geography of Beer",
  },
  {
    _id: "62e91ce6fff28dd0f56db90b",
    title: "Questioning Geography: Fundamental Debates",
  },
  {
    _id: "62e91d55b120218af2c6c4a2",
    title: "100 Great Business Ideas",
  },
  {
    _id: "62e91d55b120218af2c6c4a4",
    title: "Economics for Everyone : a Short Guide to the Economics",
  },
  {
    _id: "62e91d55b120218af2c6c4a6",
    title: "International Political Economy",
  },
  {
    _id: "62e91d55b120218af2c6c4a8",
    title: "Econometrics For Dummies",
  },
  {
    _id: "62e91d55b120218af2c6c4aa",
    title: "Why Great Leaders Don't Take Yes for an Answer Managing for ",
  },
  {
    _id: "62e91d55b120218af2c6c4ac",
    title: "The Millionaire Mindset - Mission Improvement",
  },
  {
    _id: "62e91d55b120218af2c6c4ae",
    title: "6 Secrets to Startup Success",
  },
  {
    _id: "62e91d55b120218af2c6c4b0",
    title: "Greening the Economy with Agriculture - Food and Agriculture ",
  },
  {
    _id: "62e91d55b120218af2c6c4b2",
    title: "Economic Development",
  },
  {
    _id: "62e91d55b120218af2c6c4b4",
    title: "Paper 4: Fundamentals of Business Mathematics & Statistic",
  },
  {
    _id: "62e91d55b120218af2c6c4b6",
    title: "Foreign Exchange and Money Markets",
  },
  {
    _id: "62e91d55b120218af2c6c4b8",
    title: "Economic Facts and Fallacies",
  },
  {
    _id: "62e91d55b120218af2c6c4ba",
    title: "The Business Environment",
  },
  {
    _id: "62e91d56b120218af2c6c4bc",
    title: "Palgrave Handbook of Econometrics: Applied Econometrics",
  },
  {
    _id: "62e91d56b120218af2c6c4be",
    title: "“Money Making Secrets of Mind Power Masters”",
  },
  {
    _id: "62e91d56b120218af2c6c4c0",
    title: "Applied Mathematics for Business and Economics",
  },
  {
    _id: "62e91d56b120218af2c6c4c2",
    title: "Great Wars and Great Leaders",
  },
  {
    _id: "62e91d56b120218af2c6c4c4",
    title: "Econometrics",
  },
  {
    _id: "62e91d56b120218af2c6c4c6",
    title: "History of Economic Thought",
  },
  {
    _id: "62e91d56b120218af2c6c4c8",
    title: "An Outline of the History of Economic Thought",
  },
  {
    _id: "62e91d633e469868a9eb6c3d",
    title: "International Monetary Economics",
  },
  {
    _id: "62e91d633e469868a9eb6c3f",
    title: "Mathematics for Economists",
  },
  {
    _id: "62e91d633e469868a9eb6c41",
    title: "Economic Development and Islamic Finance",
  },
  {
    _id: "62e91d633e469868a9eb6c43",
    title: "The ABCs of Political Economy",
  },
  {
    _id: "62e91d633e469868a9eb6c45",
    title: "Millionaire Traders",
  },
  {
    _id: "62e91d633e469868a9eb6c47",
    title: "How to Test if Your Business Will Make Money",
  },
  {
    _id: "62e91d633e469868a9eb6c49",
    title: "The Wealth of Ideas: A History of Economic Thought",
  },
  {
    _id: "62e91d633e469868a9eb6c4b",
    title:
      "Mathematical Methods and Models in Economic Planning, Management and Budgeting",
  },
  {
    _id: "62e91d633e469868a9eb6c4d",
    title: "System of Environmental-Economic Accounting",
  },
  {
    _id: "62e91d633e469868a9eb6c4f",
    title: "Money, Bank Credit, and Economic Cycles",
  },
  {
    _id: "62e91d633e469868a9eb6c51",
    title: "The Economics of Growth - Free",
  },
  {
    _id: "62e91d643e469868a9eb6c53",
    title: "Econometrics",
  },
  {
    _id: "62e91d643e469868a9eb6c55",
    title: "Introduction to Modern Economic Growth",
  },
  {
    _id: "62e91d643e469868a9eb6c57",
    title: "Comprehensive Economic Development Strategy",
  },
  {
    _id: "62e91d643e469868a9eb6c59",
    title: "Economic Controversies",
  },
  {
    _id: "62e91d643e469868a9eb6c5b",
    title: "ECONOMIC SCIENCE FOR RURAL DEVELOPMENT",
  },
  {
    _id: "62e91d643e469868a9eb6c5d",
    title: "Islamic Finance in the Global Economy",
  },
  {
    _id: "62e91d643e469868a9eb6c5f",
    title: "The Political Economy of Growth",
  },
  {
    _id: "62e91d643e469868a9eb6c61",
    title: "Principles of Political Economy",
  },
  {
    _id: "62e91d643e469868a9eb6c63",
    title: "Mathematics and Economics",
  },
  {
    _id: "62e91d6eda68bf4bd0f12e6f",
    title: "Handbook of the History of Economic Thought",
  },
  {
    _id: "62e91d6eda68bf4bd0f12e71",
    title: "HISTORY OF ECONOMIC ANALYSIS",
  },
  {
    _id: "62e91d6eda68bf4bd0f12e73",
    title: "Soul Economy",
  },
  {
    _id: "62e91d6eda68bf4bd0f12e75",
    title: "Special Economic Zones in Africa",
  },
  {
    _id: "62e91d6eda68bf4bd0f12e77",
    title: "creative economy",
  },
  {
    _id: "62e91d6eda68bf4bd0f12e79",
    title: "International Economic Disintegration",
  },
  {
    _id: "62e91d6eda68bf4bd0f12e7b",
    title: "The Nature of Econometrics and Economic Data",
  },
  {
    _id: "62e91d6fda68bf4bd0f12e7d",
    title: "The Theory of Economic Growth: a 'Classical' Perspective",
  },
  {
    _id: "62e91d6fda68bf4bd0f12e7f",
    title: "Economic Mobility",
  },
  {
    _id: "62e91d6fda68bf4bd0f12e81",
    title: "Cambodia's Economic Transformation",
  },
  {
    _id: "62e91d6fda68bf4bd0f12e83",
    title: "Islamic Economics: A Short History",
  },
  {
    _id: "62e91d6fda68bf4bd0f12e85",
    title: "The Emergence of the Global Political Economy",
  },
  {
    _id: "62e91da4cc58fbc59a1a9294",
    title: "Art of Drawing the Human Body",
  },
  {
    _id: "62e91da4cc58fbc59a1a9296",
    title: "figure drawing – design and invention",
  },
  {
    _id: "62e91da4cc58fbc59a1a9298",
    title: "Drawing Cartoons & Comics for Dummies",
  },
  {
    _id: "62e91da4cc58fbc59a1a929a",
    title: "Pencil Drawing Techniques",
  },
  {
    _id: "62e91da5cc58fbc59a1a929c",
    title: "Drawing the Head and Hands by Andrew Loomis",
  },
  {
    _id: "62e91da5cc58fbc59a1a929e",
    title: "Textbook of Engineering Drawing",
  },
  {
    _id: "62e91da5cc58fbc59a1a92a0",
    title: "How to Draw and Paint Anatomy",
  },
  {
    _id: "62e91da5cc58fbc59a1a92a2",
    title: "Building Construction Handbook",
  },
  {
    _id: "62e91da5cc58fbc59a1a92a4",
    title: "Digital Colour in Graphic Design",
  },
  {
    _id: "62e91da5cc58fbc59a1a92a6",
    title: "Mastering Photoshop for Web Design",
  },
  {
    _id: "62e91da5cc58fbc59a1a92a8",
    title: "Piano for Beginners 6th ED",
  },
  {
    _id: "62e91da5cc58fbc59a1a92aa",
    title: "Art Models 6: The Female Figure in Shadow and Light",
  },
  {
    _id: "62e91da5cc58fbc59a1a92ac",
    title: "Children's Illustrated Dictionary",
  },
  {
    _id: "62e91da5cc58fbc59a1a92ae",
    title: "Drawing Comics the Marvel Way",
  },
  {
    _id: "62e91da5cc58fbc59a1a92b0",
    title: "Estimating in Building Construction",
  },
  {
    _id: "62e91da5cc58fbc59a1a92b2",
    title: "Art Models 8: Practical Poses for the Working Artist",
  },
  {
    _id: "62e91da6cc58fbc59a1a92b4",
    title: "Draw 50 Animals",
  },
  {
    _id: "62e91da6cc58fbc59a1a92b6",
    title: "Perspective Made Easy",
  },
  {
    _id: "62e91da6cc58fbc59a1a92b8",
    title: "500 Poses for Photographing Women",
  },
  {
    _id: "62e91da6cc58fbc59a1a92ba",
    title: "Fun With A Pencil by Andrew Loomis - Alex Hays",
  },
  {
    _id: "62e91db3c8626fb3e201aa9a",
    title: "The Art and Craft of Problem Solving",
  },
  {
    _id: "62e91db3c8626fb3e201aa9c",
    title: "Japan Style Architecture, Interiors & Design",
  },
  {
    _id: "62e91db3c8626fb3e201aa9e",
    title: "Guitar Scales Easy Music Lessons",
  },
  {
    _id: "62e91db3c8626fb3e201aaa0",
    title: "The Complete Idiot''s Guide to Music Theory",
  },
  {
    _id: "62e91db3c8626fb3e201aaa2",
    title: "Successful Drawing by Andrew Loomis",
  },
  {
    _id: "62e91db3c8626fb3e201aaa4",
    title: "1000 Poses in Fashion",
  },
  {
    _id: "62e91db3c8626fb3e201aaa6",
    title: "Drawing Portraits",
  },
  {
    _id: "62e91db3c8626fb3e201aaa8",
    title: "Sketch Book for the Artist",
  },
  {
    _id: "62e91db3c8626fb3e201aaaa",
    title: "How To Read Music 7 Easy Lessons",
  },
  {
    _id: "62e91db3c8626fb3e201aaac",
    title: "Interior Design & Interior Architecture",
  },
  {
    _id: "62e91db3c8626fb3e201aaae",
    title: "The Big Book of Weekend Woodworking - Wood Tools",
  },
  {
    _id: "62e91db4c8626fb3e201aab0",
    title: "Graphic Design Theory",
  },
  {
    _id: "62e91db4c8626fb3e201aab2",
    title: "How to Draw Anime For Beginners",
  },
  {
    _id: "62e91db4c8626fb3e201aab4",
    title: "Basics Design: Design Thinking",
  },
  {
    _id: "62e91db4c8626fb3e201aab6",
    title: "Posing Techniques for Photographing Model Portfolios",
  },
  {
    _id: "62e91db4c8626fb3e201aab8",
    title: "Building with Earth: Design and Technology of a Sustainable ",
  },
  {
    _id: "62e91db4c8626fb3e201aaba",
    title: "Guitar Chords for Dummies",
  },
  {
    _id: "62e91defe63355028ab4f7e2",
    title: "Sacred Mathematics: Japanese Temple Geometry",
  },
  {
    _id: "62e91defe63355028ab4f7e4",
    title: "Violin For Dummies",
  },
  {
    _id: "62e91defe63355028ab4f7e6",
    title: "Decorative Paint & Plaster and Thermal Insulation Catalog",
  },
  {
    _id: "62e91defe63355028ab4f7e8",
    title: "Game Design: Theory & Practice 2nd Edition",
  },
  {
    _id: "62e91defe63355028ab4f7ea",
    title: "Typography, Headlines and Infographics",
  },
  {
    _id: "62e91defe63355028ab4f7ec",
    title: "Lighting Techniques for Photographing Model Portfolios",
  },
  {
    _id: "62e91defe63355028ab4f7ee",
    title: "Elementary Visual School Arts",
  },
  {
    _id: "62e91defe63355028ab4f7f0",
    title: "The Language of Music - Tom Brooks Music",
  },
  {
    _id: "62e91defe63355028ab4f7f2",
    title: "Creating Simple Solos - Amazing Guitar Secrets",
  },
  {
    _id: "62e91df0e63355028ab4f7f4",
    title: "Graphic Design Basics",
  },
  {
    _id: "62e91df0e63355028ab4f7f6",
    title: "Acoustic Guitar Secrets™",
  },
  {
    _id: "62e91df0e63355028ab4f7f8",
    title: "Picture Yourself Making Jewelry and Beading",
  },
  {
    _id: "62e91df0e63355028ab4f7fa",
    title: "Teach Yourself Visually Drawing",
  },
  {
    _id: "62e91df0e63355028ab4f7fc",
    title: "Yoga as Therapeutic Exercise",
  },
  {
    _id: "62e91df0e63355028ab4f7fe",
    title: "Blues Guitar Lesson Book - Learn & Master Courses by Legacy ",
  },
  {
    _id: "62e91df0e63355028ab4f800",
    title: "Photography Lighting Secrets - Michael Allen Photography",
  },
  {
    _id: "62e91df0e63355028ab4f802",
    title: "101 Soap Recipes",
  },
  {
    _id: "62e91df0e63355028ab4f804",
    title: "How to Draw Collection 13-24",
  },
  {
    _id: "62e91df0e63355028ab4f806",
    title: "The Digital Photography Book: The Step-by-Step Secrets for How to ",
  },
  {
    _id: "62e91e0298466ffc6a1df1e6",
    title: "Homegrown Wood, Handmade Furniture, New Scandinavian Design",
  },
  {
    _id: "62e91e0298466ffc6a1df1e8",
    title: "European Landscape Architecture: Best Practice in Detailing",
  },
  {
    _id: "62e91e0ed9040ac256b47ffc",
    title: "Guitar Techniques Magazine",
  },
  {
    _id: "62e91e0fd9040ac256b47ffe",
    title: "A confluence of art and music - Carnatic Music",
  },
  {
    _id: "62e91e0fd9040ac256b48000",
    title: "Gibson's Learn & Master Guitar Lessons",
  },
  {
    _id: "62e91e0fd9040ac256b48002",
    title:
      "Jeff Smith. Posing Techniques for Location Portrait Photography. 2008",
  },
  {
    _id: "62e91e0fd9040ac256b48004",
    title: "Night and Low-light Photography Photo Workshop",
  },
  {
    _id: "62e91e0fd9040ac256b48006",
    title: "MATHEMATICS AND ORIGAMI",
  },
  {
    _id: "62e91e0fd9040ac256b48008",
    title: "Perspective Drawing",
  },
  {
    _id: "62e91e0fd9040ac256b4800a",
    title: "Architectural Design Elements",
  },
  {
    _id: "62e91e0fd9040ac256b4800c",
    title: "Introduction to Watercolor",
  },
  {
    _id: "62e91e0fd9040ac256b4800e",
    title: "Music Composition DUMmIES",
  },
  {
    _id: "62e91e0fd9040ac256b48010",
    title: "Rock Guitar Secrets",
  },
  {
    _id: "62e91e0fd9040ac256b48012",
    title: "A History of European Art",
  },
  {
    _id: "62e91e0fd9040ac256b48014",
    title: "Fine Paintings and Sculpture",
  },
  {
    _id: "62e91e0fd9040ac256b48016",
    title: "Basic Woodworking",
  },
  {
    _id: "62e91e0fd9040ac256b48018",
    title: "Pencil Sketching 2nd Edition",
  },
  {
    _id: "62e91e0fd9040ac256b4801a",
    title: "Interior Lighting for Designers",
  },
  {
    _id: "62e91e10d9040ac256b4801c",
    title: "Cheap and Easy Crafts",
  },
  {
    _id: "62e91e10d9040ac256b4801e",
    title: "Black & White Photography",
  },
  {
    _id: "62e91e10d9040ac256b48020",
    title: "Landscape Architecture And Art",
  },
  {
    _id: "62e91e199dba5259a6dfd8b8",
    title: "Food Photography: From Snapshots to Great Shots - Pearsoncmg",
  },
  {
    _id: "62e91e199dba5259a6dfd8ba",
    title: "Luxury Fashion Branding",
  },
  {
    _id: "62e91e199dba5259a6dfd8bc",
    title: "Workshop Fine Woodworking",
  },
  {
    _id: "62e91e199dba5259a6dfd8be",
    title: "Drawing Manga Girls",
  },
  {
    _id: "62e91e199dba5259a6dfd8c0",
    title: "Digital Video For Dummies 3rd Edition",
  },
  {
    _id: "62e91e199dba5259a6dfd8c2",
    title: "The Cambridge History of Nineteenth-Century Music",
  },
  {
    _id: "62e91e199dba5259a6dfd8c4",
    title: "Ceramic and Glass Materials",
  },
  {
    _id: "62e91e199dba5259a6dfd8c6",
    title: "Sustainable Urban Planning",
  },
  {
    _id: "62e91e199dba5259a6dfd8c8",
    title: "Fundamental Concepts of Architecture",
  },
  {
    _id: "62e91e199dba5259a6dfd8ca",
    title: "Kundalini and the Art of Being: The Awakening",
  },
  {
    _id: "62e91e199dba5259a6dfd8cc",
    title: "Oil Painting How Techniques and Materials",
  },
  {
    _id: "62e91e199dba5259a6dfd8ce",
    title: "Teach Yourself Visually Knitting",
  },
  {
    _id: "62e91e1a9dba5259a6dfd8d0",
    title: "hottest trends and fashion",
  },
  {
    _id: "62e91e1a9dba5259a6dfd8d2",
    title: "Food Styling for Photographers",
  },
  {
    _id: "62e91e1a9dba5259a6dfd8d4",
    title: "Watercolor Crayons",
  },
  {
    _id: "62e91e1a9dba5259a6dfd8d6",
    title: "Fingerstyle Jazz Guitar",
  },
  {
    _id: "62e91e1a9dba5259a6dfd8d8",
    title: "Urban Regions : Ecology and Planning Beyond the City",
  },
  {
    _id: "62e91e1a9dba5259a6dfd8da",
    title: "Design & Architecture - Tajan",
  },
  {
    _id: "62e91e1a9dba5259a6dfd8dc",
    title: "European Drawings - 1, Catalogue of the Collections",
  },
  {
    _id: "62e91e1a9dba5259a6dfd8de",
    title: "Eduction/Drawing on the Funny Side of the Brain - Christopher Hart",
  },
  {
    _id: "62e91e3102cf6c631a4e88ec",
    title:
      "The Drawings of Michelangelo and His Followers in the Ashmolean Museum",
  },
  {
    _id: "62e91e396468182930eee6de",
    title: "Paintings, Prints, Drawings and Sculpture",
  },
  {
    _id: "62e91e396468182930eee6e0",
    title: "Planning Capital Cities",
  },
  {
    _id: "62e91e396468182930eee6e2",
    title: "Fashion Institute of Technology",
  },
  {
    _id: "62e91e396468182930eee6e4",
    title: "Beautiful Architecture",
  },
  {
    _id: "62e91e396468182930eee6e6",
    title: "Rolando Gomez's Glamour Photography",
  },
  {
    _id: "62e91e396468182930eee6e8",
    title: "The Modern Interior",
  },
  {
    _id: "62e91e396468182930eee6ea",
    title: "Smart Buildings Systems for Architects, Owners and Builders",
  },
  {
    _id: "62e91e396468182930eee6ec",
    title: "Sustainable Fashion: A Handbook for Educators",
  },
  {
    _id: "62e91e396468182930eee6ee",
    title: "Historical Painting Techniques",
  },
  {
    _id: "62e91e396468182930eee6f0",
    title: "Ellie Vayo's Guide to Boudoir Photography",
  },
  {
    _id: "62e91e396468182930eee6f2",
    title: "Street Photography for the Purist",
  },
  {
    _id: "62e91e396468182930eee6f4",
    title: "Writing Music for Television and Radio Commercials",
  },
  {
    _id: "62e91e396468182930eee6f6",
    title: "UnrealScript Game Programming Cookbook",
  },
  {
    _id: "62e91e3a6468182930eee6f8",
    title: "Guitar Virtuosity for the Everyday Man",
  },
  {
    _id: "62e91e3a6468182930eee6fa",
    title: "Make Electronics",
  },
  {
    _id: "62e91e3a6468182930eee6fc",
    title: "Architecture and Modernity : A Critique",
  },
  {
    _id: "62e91e3a6468182930eee6fe",
    title: "Designing an Aquaponic Greenhouse for an Urban Food ",
  },
  {
    _id: "62e91e3a6468182930eee700",
    title: "Architectural and Engineering Design Standards",
  },
  {
    _id: "62e91e3a6468182930eee702",
    title: "Capoeira: The History of an Afro-Brazilian Martial Art",
  },
  {
    _id: "62e91e3a6468182930eee704",
    title: "Impressions in Watercolor 2014",
  },
  {
    _id: "62e91e468dec5f77cea82b47",
    title: "Virtual Typography",
  },
  {
    _id: "62e91e468dec5f77cea82b49",
    title: "Furniture, Decorative Arts, Jewelry & Timepieces Auction",
  },
  {
    _id: "62e91e468dec5f77cea82b4b",
    title: "Drawing Cartoons & Comics for Dummies",
  },
  {
    _id: "62e91e468dec5f77cea82b4d",
    title: "The Theory and Technique of Electronic Music",
  },
  {
    _id: "62e91e468dec5f77cea82b4f",
    title: "The Essential Guide to Digital Photography",
  },
  {
    _id: "62e91e468dec5f77cea82b51",
    title: "European Sculpture",
  },
  {
    _id: "62e91e478dec5f77cea82b53",
    title: "Nineteenth-Century Photography",
  },
  {
    _id: "62e91e478dec5f77cea82b55",
    title: "Interior Design Faculty",
  },
  {
    _id: "62e91e478dec5f77cea82b57",
    title: "Macro Photography",
  },
  {
    _id: "62e91e478dec5f77cea82b59",
    title: "Rolando Gomez's Lighting for Glamour",
  },
  {
    _id: "62e91e478dec5f77cea82b5b",
    title: "Typography Graphic Design Thesaurus",
  },
  {
    _id: "62e91e478dec5f77cea82b5d",
    title: "Exploring the Self Through Photography",
  },
  {
    _id: "62e91e478dec5f77cea82b5f",
    title: "Soap Making Made Easy 2nd edition",
  },
  {
    _id: "62e91e478dec5f77cea82b61",
    title: "Understanding Music Past and Present",
  },
  {
    _id: "62e91e478dec5f77cea82b63",
    title: "Guitar & Keyboard Scales Poster",
  },
  {
    _id: "62e91e478dec5f77cea82b65",
    title: "Advanced Woodworking",
  },
  {
    _id: "62e91e478dec5f77cea82b67",
    title: "Figure Drawing",
  },
  {
    _id: "62e91e478dec5f77cea82b69",
    title: "Italian Ceramics: Catalogue of the J. Paul Getty Museum",
  },
  {
    _id: "62e91e478dec5f77cea82b6b",
    title: "Working Drawings Handbook",
  },
  {
    _id: "62e91e9984ac56395e594900",
    title: "Dog Training for Dummies",
  },
  {
    _id: "62e91e9984ac56395e594902",
    title: "Gemstone Jewelry",
  },
  {
    _id: "62e91e9984ac56395e594904",
    title: "Between Stillness and Motion : Film, Photography, Algorithms",
  },
  {
    _id: "62e91e9984ac56395e594906",
    title: "Melbourne Street Photography 2015",
  },
  {
    _id: "62e91e9984ac56395e594908",
    title: "Photography, Physics, and Complexity",
  },
  {
    _id: "62e91e9984ac56395e59490a",
    title: "The Origins of Music",
  },
  {
    _id: "62e91e9984ac56395e59490c",
    title: "Classical Guitar for Dummies",
  },
  {
    _id: "62e91e9984ac56395e59490e",
    title: "Decorative Arts",
  },
  {
    _id: "62e91e9a84ac56395e594910",
    title: "Soap Making Made Easy",
  },
  {
    _id: "62e91e9a84ac56395e594912",
    title: "Music and the Making of Modern Science",
  },
  {
    _id: "62e91e9a84ac56395e594914",
    title: "Architectural Woodwork Standards - Murphy Company",
  },
  {
    _id: "62e91e9a84ac56395e594916",
    title: "Music Theory - Kilby",
  },
  {
    _id: "62e91e9a84ac56395e594918",
    title: "Understanding Your Dog For Dummies",
  },
  {
    _id: "62e91e9a84ac56395e59491a",
    title: "How to Succeed in Commercial Photography",
  },
  {
    _id: "62e91e9a84ac56395e59491c",
    title: "Music, Philosophy And Modernity",
  },
  {
    _id: "62e91e9a84ac56395e59491e",
    title: "Engineering Drawing",
  },
  {
    _id: "62e91e9a84ac56395e594920",
    title: "Contemporary American Painting and Sculpture",
  },
  {
    _id: "62e91e9a84ac56395e594922",
    title: "Teaching and Experimenting with Architectural Design",
  },
  {
    _id: "62e91e9a84ac56395e594924",
    title: "Wire Jewelry–Making Basics - Beads Baubles and Jewels",
  },
  {
    _id: "62e91e9a84ac56395e594926",
    title: "Three-Dimensional Photography",
  },
  {
    _id: "62e91ea47f33e55c24fb154f",
    title: "Lighting for Digital Photography: From Snapshots to Great Shots",
  },
  {
    _id: "62e91ea47f33e55c24fb1551",
    title: "Panoramic and High Resolution Photography",
  },
  {
    _id: "62e91ea47f33e55c24fb1553",
    title: "The Structural Conservation of Panel Paintings",
  },
  {
    _id: "62e91ea47f33e55c24fb1555",
    title: "Tendencies In Modern Egyptian Painting",
  },
  {
    _id: "62e91ea47f33e55c24fb1557",
    title: "Digital Photography in Available Light",
  },
  {
    _id: "62e91ea47f33e55c24fb1559",
    title: "The Collector's Guide To Emerging Art Photography",
  },
  {
    _id: "62e91ea47f33e55c24fb155b",
    title: "Maintaining Your Home's Architectural Style",
  },
  {
    _id: "62e91ea47f33e55c24fb155d",
    title: "Chapter 4 Sewing Character/Decorative Stitches",
  },
  {
    _id: "62e91ea47f33e55c24fb155f",
    title: "How Digital Photography Works",
  },
  {
    _id: "62e91ea47f33e55c24fb1561",
    title: "American Furniture & Decorative Arts",
  },
  {
    _id: "62e91ea47f33e55c24fb1563",
    title: "Underwater Photography",
  },
  {
    _id: "62e91ea47f33e55c24fb1565",
    title: "Glass Art Magazine",
  },
  {
    _id: "62e91ea57f33e55c24fb1567",
    title: "Guide to Making Jewelry with Beads",
  },
  {
    _id: "62e91ea57f33e55c24fb1569",
    title: "Nikon D3200 For Dummies",
  },
  {
    _id: "62e91ea57f33e55c24fb156b",
    title: "Rethinking Architecture",
  },
  {
    _id: "62e91ea57f33e55c24fb156d",
    title: "Featuring Fine Silver & Ceramics",
  },
  {
    _id: "62e91ea57f33e55c24fb156f",
    title: "The architecture of humanism",
  },
  {
    _id: "62e91ea57f33e55c24fb1571",
    title: "Microstock Photography",
  },
  {
    _id: "62e91ea57f33e55c24fb1573",
    title: "Jewelry Making: Beaded Jewelry Projects from 5 Free Beaded ",
  },
  {
    _id: "62e91eaf72733d46e9c1054f",
    title: "Part II: Tackling the Puzzles",
  },
  {
    _id: "62e91eaf72733d46e9c10551",
    title: "The Routledge Companion to Research in the Arts",
  },
  {
    _id: "62e91eaf72733d46e9c10553",
    title: "Architecture and Urbanism in the Middle East",
  },
  {
    _id: "62e91eaf72733d46e9c10555",
    title: "European Furniture and Decorative Arts",
  },
  {
    _id: "62e91eaf72733d46e9c10557",
    title: "Music In Education Unesco",
  },
  {
    _id: "62e91eaf72733d46e9c10559",
    title: "MUSIC FOR THE PEOPLE: THE FOLK MUSIC REVIVAL AND - ETD",
  },
  {
    _id: "62e91eaf72733d46e9c1055b",
    title: "Traditional Irish Music : a path to new music",
  },
  {
    _id: "62e91eaf72733d46e9c1055d",
    title: "Korean Buncheong Ceramics",
  },
  {
    _id: "62e91eaf72733d46e9c1055f",
    title: "Art Architecture Thesaurus - The Getty",
  },
  {
    _id: "62e91eaf72733d46e9c10561",
    title: "MATLAB Creating Graphical User Interfaces",
  },
  {
    _id: "62e91eaf72733d46e9c10563",
    title: "paimio sanatorium",
  },
  {
    _id: "62e91eaf72733d46e9c10565",
    title: "IATH Best Practices Guide to Digital Panoramic Photography",
  },
  {
    _id: "62e91eaf72733d46e9c10567",
    title:
      "For the Creative Professional Working in Hot, Warm, and Cold Glass May/June 2015",
  },
  {
    _id: "62e91eaf72733d46e9c10569",
    title: "Music: An Art and a Language",
  },
  {
    _id: "62e91eb072733d46e9c1056b",
    title: "Music that works: Contributions of biology - Svetlost",
  },
  {
    _id: "62e91eb072733d46e9c1056d",
    title: "Painted Wood: History and Conservation",
  },
  {
    _id: "62e91eb072733d46e9c1056f",
    title: "Historic Architectural Survey",
  },
  {
    _id: "62e91eb072733d46e9c10571",
    title: "ÿþM icrosoft W ord - 0 0 0 1 1 0 TOC . doc",
  },
  {
    _id: "62e920734db1915b1269c86c",
    title: "500 Poses for Photographing Women",
  },
  {
    _id: "62e920734db1915b1269c86e",
    title: "Posing Techniques for Photographing Model Portfolios",
  },
  {
    _id: "62e920734db1915b1269c870",
    title: "Portrait Photography",
  },
  {
    _id: "62e920734db1915b1269c872",
    title: "Absolute Beginner's Guide to Digital Photography",
  },
  {
    _id: "62e920734db1915b1269c874",
    title: "Creative Black and White - Digital Photography Tips and Techniques",
  },
  {
    _id: "62e920744db1915b1269c876",
    title: "National Geographic Masters of Photography - SnagFilms",
  },
  {
    _id: "62e920744db1915b1269c878",
    title: "Posing for Portrait Photography",
  },
  {
    _id: "62e920744db1915b1269c87a",
    title: "Creative Photography Ideas",
  },
  {
    _id: "62e920744db1915b1269c87c",
    title: "Digital Photography Composition For Dummies",
  },
  {
    _id: "62e920744db1915b1269c87e",
    title: "Lighting Techniques for Photographing Model Portfolios",
  },
  {
    _id: "62e920744db1915b1269c880",
    title: "Photography Lighting Secrets - Michael Allen Photography",
  },
  {
    _id: "62e920744db1915b1269c882",
    title: "The Digital Photography Book: The Step-by-Step Secrets for How to ",
  },
  {
    _id: "62e920744db1915b1269c884",
    title: "Food Photography & Lighting: A Commercial Photographer’s Guide ",
  },
  {
    _id: "62e920744db1915b1269c886",
    title: "Encyclopedia of Twentieth Century Photography",
  },
  {
    _id: "62e920744db1915b1269c888",
    title: "Street Photography Magazine",
  },
  {
    _id: "62e920744db1915b1269c88a",
    title: "The Nikon Guide to Landscape Photography",
  },
  {
    _id: "62e920744db1915b1269c88c",
    title: "Close-Up and Macro Photography",
  },
  {
    _id: "62e920744db1915b1269c88e",
    title:
      "Jeff Smith. Posing Techniques for Location Portrait Photography. 2008",
  },
  {
    _id: "62e920744db1915b1269c890",
    title: "Night and Low-light Photography Photo Workshop",
  },
  {
    _id: "62e920819271ea76cb9e285b",
    title: "Black & White Photography",
  },
  {
    _id: "62e920819271ea76cb9e285d",
    title: "Food Photography: From Snapshots to Great Shots - Pearsoncmg",
  },
  {
    _id: "62e920819271ea76cb9e285f",
    title: "Food Styling for Photographers",
  },
  {
    _id: "62e920819271ea76cb9e2861",
    title: "Fine Art Documentary Wedding Photography",
  },
  {
    _id: "62e920819271ea76cb9e2863",
    title: "Rolando Gomez's Glamour Photography",
  },
  {
    _id: "62e920819271ea76cb9e2865",
    title: "Street Photography for the Purist",
  },
  {
    _id: "62e920819271ea76cb9e2867",
    title: "The Essential Guide to Digital Photography",
  },
  {
    _id: "62e920819271ea76cb9e2869",
    title: "Macro Photography",
  },
  {
    _id: "62e920819271ea76cb9e286b",
    title: "Nineteenth-Century Photography",
  },
  {
    _id: "62e920829271ea76cb9e286d",
    title: "Rolando Gomez's Lighting for Glamour",
  },
  {
    _id: "62e920829271ea76cb9e286f",
    title: "Exploring the Self Through Photography",
  },
  {
    _id: "62e920829271ea76cb9e2871",
    title: "The Textbook of Digital Photography - PhotoCourse",
  },
  {
    _id: "62e920829271ea76cb9e2873",
    title: "Photography and Cinema",
  },
  {
    _id: "62e920829271ea76cb9e2875",
    title: "Better Available Light Digital Photography",
  },
  {
    _id: "62e920829271ea76cb9e2877",
    title: "Between Stillness and Motion : Film, Photography, Algorithms",
  },
  {
    _id: "62e920829271ea76cb9e2879",
    title: "Melbourne Street Photography 2015",
  },
  {
    _id: "62e920829271ea76cb9e287b",
    title: "Photography, Physics, and Complexity",
  },
  {
    _id: "62e920829271ea76cb9e287d",
    title: "How to Succeed in Commercial Photography",
  },
  {
    _id: "62e920829271ea76cb9e287f",
    title: "Three-Dimensional Photography",
  },
  {
    _id: "62e920829271ea76cb9e2881",
    title: "Lighting for Digital Photography: From Snapshots to Great Shots",
  },
  {
    _id: "62e9220db2e1b66c21499688",
    title: "figure drawing – design and invention",
  },
  {
    _id: "62e9220db2e1b66c2149968a",
    title: "Art of Drawing the Human Body",
  },
  {
    _id: "62e9220db2e1b66c2149968c",
    title: "Drawing Cartoons & Comics for Dummies",
  },
  {
    _id: "62e9220db2e1b66c2149968e",
    title: "Pencil Drawing Techniques",
  },
  {
    _id: "62e9220db2e1b66c21499690",
    title: "Drawing the Head and Hands by Andrew Loomis",
  },
  {
    _id: "62e9220db2e1b66c21499692",
    title: "Textbook of Engineering Drawing",
  },
  {
    _id: "62e9220db2e1b66c21499694",
    title: "How to Draw and Paint Anatomy",
  },
  {
    _id: "62e9220db2e1b66c21499696",
    title: "Drawing Comics the Marvel Way",
  },
  {
    _id: "62e9220db2e1b66c21499698",
    title: "Draw 50 Animals",
  },
  {
    _id: "62e9220db2e1b66c2149969a",
    title: "Perspective Made Easy",
  },
  {
    _id: "62e9220db2e1b66c2149969c",
    title: "Fun With A Pencil by Andrew Loomis - Alex Hays",
  },
  {
    _id: "62e9220db2e1b66c2149969e",
    title: "Drawing Portraits",
  },
  {
    _id: "62e9220db2e1b66c214996a0",
    title: "Sketch Book for the Artist",
  },
  {
    _id: "62e9220eb2e1b66c214996a2",
    title: "How to Draw Anime For Beginners",
  },
  {
    _id: "62e9220eb2e1b66c214996a4",
    title: "How to Draw Collection 1-12",
  },
  {
    _id: "62e9220eb2e1b66c214996a6",
    title:
      "Architect Drawings - A Selection of Sketches by World Famous Architects Through History",
  },
  {
    _id: "62e9220eb2e1b66c214996a8",
    title: "Understanding Architecture Through Drawing",
  },
  {
    _id: "62e9220eb2e1b66c214996aa",
    title: "Gesture Drawing for Animation",
  },
  {
    _id: "62e9220eb2e1b66c214996ac",
    title: "How to Draw Flowers and Plants",
  },
  {
    _id: "62e9220eb2e1b66c214996ae",
    title: "Pencil Drawing - A Beginner's Guide",
  },
  {
    _id: "62e922f8c0d20b9afb1d7459",
    title: "Sacred Mathematics: Japanese Temple Geometry",
  },
  {
    _id: "62e922f8c0d20b9afb1d745b",
    title: "Teach Yourself Visually Drawing",
  },
  {
    _id: "62e922f8c0d20b9afb1d745d",
    title: "How to Draw Collection 13-24",
  },
  {
    _id: "62e922f8c0d20b9afb1d745f",
    title: "Oil Painting For Dummies",
  },
  {
    _id: "62e922f8c0d20b9afb1d7461",
    title: "Cartooning for the Beginner",
  },
  {
    _id: "62e922f8c0d20b9afb1d7463",
    title: "Neuroanatomy Draw It To Know It",
  },
  {
    _id: "62e922f8c0d20b9afb1d7465",
    title: "THINKING THROUGH DRAWING: PRACTICE INTO KNOWLEDGE",
  },
  {
    _id: "62e922f8c0d20b9afb1d7467",
    title: "Fine Paintings & Sculpture",
  },
  {
    _id: "62e922f8c0d20b9afb1d7469",
    title: "Figure Drawing Fundamentals",
  },
  {
    _id: "62e922f8c0d20b9afb1d746b",
    title: "Perspective Drawing",
  },
  {
    _id: "62e922f8c0d20b9afb1d746d",
    title: "Introduction to Watercolor",
  },
  {
    _id: "62e922f8c0d20b9afb1d746f",
    title: "Fine Paintings and Sculpture",
  },
  {
    _id: "62e922f8c0d20b9afb1d7471",
    title: "Pencil Sketching 2nd Edition",
  },
  {
    _id: "62e922f9c0d20b9afb1d7473",
    title: "Drawing Manga Girls",
  },
  {
    _id: "62e922f9c0d20b9afb1d7475",
    title: "Oil Painting How Techniques and Materials",
  },
  {
    _id: "62e922f9c0d20b9afb1d7477",
    title: "Watercolor Crayons",
  },
  {
    _id: "62e922f9c0d20b9afb1d7479",
    title: "European Drawings - 1, Catalogue of the Collections",
  },
  {
    _id: "62e922f9c0d20b9afb1d747b",
    title: "Eduction/Drawing on the Funny Side of the Brain - Christopher Hart",
  },
  {
    _id: "62e922f9c0d20b9afb1d747d",
    title:
      "The Drawings of Michelangelo and His Followers in the Ashmolean Museum",
  },
  {
    _id: "62e922f9c0d20b9afb1d747f",
    title: "European Drawings 2: Catalogue of the Collections",
  },
  {
    _id: "62e92305ef8200712b9bcb35",
    title: "Six Pencil Techniques",
  },
  {
    _id: "62e92305ef8200712b9bcb37",
    title: "The Painter in oil",
  },
  {
    _id: "62e92305ef8200712b9bcb39",
    title: "A text-book of the history of painting",
  },
  {
    _id: "62e92305ef8200712b9bcb3b",
    title: "Drawing Manga Boys",
  },
  {
    _id: "62e92305ef8200712b9bcb3d",
    title: "Watercolour",
  },
  {
    _id: "62e92305ef8200712b9bcb3f",
    title: "Paintings, Prints, Drawings and Sculpture",
  },
  {
    _id: "62e92306ef8200712b9bcb41",
    title: "Historical Painting Techniques",
  },
  {
    _id: "62e92306ef8200712b9bcb43",
    title: "Impressions in Watercolor 2014",
  },
  {
    _id: "62e92306ef8200712b9bcb45",
    title: "Drawing Cartoons & Comics for Dummies",
  },
  {
    _id: "62e92306ef8200712b9bcb47",
    title: "Figure Drawing",
  },
  {
    _id: "62e92306ef8200712b9bcb49",
    title: "Engineering Drawing",
  },
  {
    _id: "62e92306ef8200712b9bcb4b",
    title: "Contemporary American Painting and Sculpture",
  },
  {
    _id: "62e92306ef8200712b9bcb4d",
    title: "The Structural Conservation of Panel Paintings",
  },
  {
    _id: "62e92306ef8200712b9bcb4f",
    title: "Tendencies In Modern Egyptian Painting",
  },
  {
    _id: "62e9232a2a8e65280ad446ca",
    title: "The Big Book of Weekend Woodworking - Wood Tools",
  },
  {
    _id: "62e9232a2a8e65280ad446cc",
    title: "Fine Woodworking 2007 Building Furniture",
  },
  {
    _id: "62e9232a2a8e65280ad446ce",
    title: "Sewing, The World's Greatest Hobby",
  },
  {
    _id: "62e9232a2a8e65280ad446d0",
    title: "Gardens Outdoor Fine Woodworking",
  },
  {
    _id: "62e9232a2a8e65280ad446d2",
    title: "Decorative Knots",
  },
  {
    _id: "62e9232a2a8e65280ad446d4",
    title: "Jewellery & Designer Fashion",
  },
  {
    _id: "62e9232a2a8e65280ad446d6",
    title: "Decorative Paint & Plaster and Thermal Insulation Catalog",
  },
  {
    _id: "62e9232a2a8e65280ad446d8",
    title: "Picture Yourself Making Jewelry and Beading",
  },
  {
    _id: "62e9232a2a8e65280ad446da",
    title: "101 Soap Recipes",
  },
  {
    _id: "62e9232a2a8e65280ad446dc",
    title: "Chests and Cabinets - Fine Woodworking",
  },
  {
    _id: "62e9232a2a8e65280ad446de",
    title: "Painting Techniques",
  },
  {
    _id: "62e9232a2a8e65280ad446e0",
    title: "Homegrown Wood, Handmade Furniture, New Scandinavian Design",
  },
  {
    _id: "62e9232b2a8e65280ad446e2",
    title: "21 Easy Sewing Projects: DIY Designs and Sewing Craft Ideas",
  },
  {
    _id: "62e9232b2a8e65280ad446e4",
    title: "Fine Paintings & Sculpture",
  },
  {
    _id: "62e9232b2a8e65280ad446e6",
    title: "MATHEMATICS AND ORIGAMI",
  },
  {
    _id: "62e9232b2a8e65280ad446e8",
    title: "Basic Woodworking",
  },
  {
    _id: "62e9232b2a8e65280ad446ea",
    title: "Cheap and Easy Crafts",
  },
  {
    _id: "62e9232b2a8e65280ad446ec",
    title: "Workshop Fine Woodworking",
  },
  {
    _id: "62e9232b2a8e65280ad446ee",
    title: "Ceramic and Glass Materials",
  },
  {
    _id: "62e9232b2a8e65280ad446f0",
    title: "Teach Yourself Visually Knitting",
  },
  {
    _id: "62e9233f734abb66cf5a7c71",
    title: "Made Woodworking Joinery",
  },
  {
    _id: "62e9233f734abb66cf5a7c73",
    title: "Fine Art, Furniture, Decorative Arts and Jewelry Auction",
  },
  {
    _id: "62e9233f734abb66cf5a7c75",
    title: "The Art of Soap-making",
  },
  {
    _id: "62e9233f734abb66cf5a7c77",
    title: "UnrealScript Game Programming Cookbook",
  },
  {
    _id: "62e9233f734abb66cf5a7c79",
    title: "Make Electronics",
  },
  {
    _id: "62e9233f734abb66cf5a7c7b",
    title: "Furniture, Decorative Arts, Jewelry & Timepieces Auction",
  },
  {
    _id: "62e9233f734abb66cf5a7c7d",
    title: "European Sculpture",
  },
  {
    _id: "62e9233f734abb66cf5a7c7f",
    title: "Soap Making Made Easy 2nd edition",
  },
  {
    _id: "62e9233f734abb66cf5a7c81",
    title: "Advanced Woodworking",
  },
  {
    _id: "62e92340734abb66cf5a7c83",
    title: "Italian Ceramics: Catalogue of the J. Paul Getty Museum",
  },
  {
    _id: "62e92340734abb66cf5a7c85",
    title: "The Electronics Hobby Kit",
  },
  {
    _id: "62e92340734abb66cf5a7c87",
    title: "6 Unique Handmade Jewelry Making",
  },
  {
    _id: "62e92340734abb66cf5a7c89",
    title: "Fine Art, Furniture, Decorative Arts and Jewelry Auction",
  },
  {
    _id: "62e92340734abb66cf5a7c8b",
    title: "Make Your Own Hot Process Soap Recipes",
  },
  {
    _id: "62e92340734abb66cf5a7c8d",
    title: "Woodworking Tools",
  },
  {
    _id: "62e92340734abb66cf5a7c8f",
    title: "Dovetail Furniture",
  },
  {
    _id: "62e92340734abb66cf5a7c91",
    title: "Gemstone Jewelry",
  },
  {
    _id: "62e92340734abb66cf5a7c93",
    title: "Soap Making Made Easy",
  },
  {
    _id: "62e92340734abb66cf5a7c95",
    title: "Wire Jewelry–Making Basics - Beads Baubles and Jewels",
  },
  {
    _id: "62e92340734abb66cf5a7c97",
    title: "The Structural Conservation of Panel Paintings",
  },
  {
    _id: "62e9234be558cc2588ed593c",
    title: "Chapter 4 Sewing Character/Decorative Stitches",
  },
  {
    _id: "62e9234be558cc2588ed593e",
    title: "Glass Art Magazine",
  },
  {
    _id: "62e9234be558cc2588ed5940",
    title: "Guide to Making Jewelry with Beads",
  },
  {
    _id: "62e9234be558cc2588ed5942",
    title: "Featuring Fine Silver & Ceramics",
  },
  {
    _id: "62e9234be558cc2588ed5944",
    title: "Jewelry Making: Beaded Jewelry Projects from 5 Free Beaded ",
  },
  {
    _id: "62e9234be558cc2588ed5946",
    title: "Part II: Tackling the Puzzles",
  },
  {
    _id: "62e9234be558cc2588ed5948",
    title: "Korean Buncheong Ceramics",
  },
  {
    _id: "62e9234be558cc2588ed594a",
    title:
      "For the Creative Professional Working in Hot, Warm, and Cold Glass May/June 2015",
  },
  {
    _id: "62e923bd7ef35a6f408308b9",
    title: "Building Construction Handbook",
  },
  {
    _id: "62e923bd7ef35a6f408308bb",
    title: "Estimating in Building Construction",
  },
  {
    _id: "62e923bd7ef35a6f408308bd",
    title: "Japan Style Architecture, Interiors & Design",
  },
  {
    _id: "62e923bd7ef35a6f408308bf",
    title: "Interior Design & Interior Architecture",
  },
  {
    _id: "62e923be7ef35a6f408308c1",
    title: "Building with Earth: Design and Technology of a Sustainable ",
  },
  {
    _id: "62e923be7ef35a6f408308c3",
    title:
      "Architect Drawings - A Selection of Sketches by World Famous Architects Through History",
  },
  {
    _id: "62e923be7ef35a6f408308c5",
    title: "Understanding Architecture Through Drawing",
  },
  {
    _id: "62e923be7ef35a6f408308c7",
    title: "Planning and Design for Sustainable Urban Mobility",
  },
  {
    _id: "62e923be7ef35a6f408308c9",
    title: "Structure as Architecture - School of Architecture",
  },
  {
    _id: "62e923be7ef35a6f408308cb",
    title: "Architecture: Design Notebook",
  },
  {
    _id: "62e923be7ef35a6f408308cd",
    title: "Structural Engineering - Civil, Environmental, and Architectural ",
  },
  {
    _id: "62e923be7ef35a6f408308cf",
    title: "Interior Design Handbook of Professional Practice",
  },
  {
    _id: "62e923be7ef35a6f408308d1",
    title: "Sacred Mathematics: Japanese Temple Geometry",
  },
  {
    _id: "62e923be7ef35a6f408308d3",
    title: "Art and Architecture in the Islamic Tradition",
  },
  {
    _id: "62e923be7ef35a6f408308d5",
    title: "urban design: method and techniques",
  },
  {
    _id: "62e923be7ef35a6f408308d7",
    title: "A Dictionary of Architecture and Landscape Architecture",
  },
  {
    _id: "62e923be7ef35a6f408308d9",
    title: "Architect’s Pocket Book",
  },
  {
    _id: "62e923be7ef35a6f408308db",
    title: "European Landscape Architecture: Best Practice in Detailing",
  },
  {
    _id: "62e923be7ef35a6f408308dd",
    title: "STRUCTURAL DESIGN FOR ARCHITECTURE",
  },
  {
    _id: "62e923be7ef35a6f408308df",
    title: "Architectural Design",
  },
  {
    _id: "62e923eaf59cc532be7f51f0",
    title: "Architectural Thought : The Design Process and and the Expectant ",
  },
  {
    _id: "62e923eaf59cc532be7f51f2",
    title: "Architectural Woodwork Standards - Murphy Company",
  },
  {
    _id: "62e923eaf59cc532be7f51f4",
    title: "Teaching and Experimenting with Architectural Design",
  },
  {
    _id: "62e923eaf59cc532be7f51f6",
    title: "Maintaining Your Home's Architectural Style",
  },
  {
    _id: "62e923eaf59cc532be7f51f8",
    title: "Rethinking Architecture",
  },
  {
    _id: "62e923eaf59cc532be7f51fa",
    title: "The architecture of humanism",
  },
  {
    _id: "62e923eaf59cc532be7f51fc",
    title: "Architecture and Urbanism in the Middle East",
  },
  {
    _id: "62e923eaf59cc532be7f51fe",
    title: "Art Architecture Thesaurus - The Getty",
  },
  {
    _id: "62e923eaf59cc532be7f5200",
    title: "paimio sanatorium",
  },
  {
    _id: "62e923eaf59cc532be7f5202",
    title: "ÿþM icrosoft W ord - 0 0 0 1 1 0 TOC . doc",
  },
  {
    _id: "62e92436a1811538128b34e1",
    title: "Digital Colour in Graphic Design",
  },
  {
    _id: "62e92437a1811538128b34e3",
    title: "Mastering Photoshop for Web Design",
  },
  {
    _id: "62e92437a1811538128b34e5",
    title: "Children's Illustrated Dictionary",
  },
  {
    _id: "62e92437a1811538128b34e7",
    title: "Graphic Design Theory",
  },
  {
    _id: "62e92437a1811538128b34e9",
    title: "Typography",
  },
  {
    _id: "62e92437a1811538128b34eb",
    title: "Creative Illustration",
  },
  {
    _id: "62e92437a1811538128b34ed",
    title: "Pen and Ink Book Illustration",
  },
  {
    _id: "62e92437a1811538128b34ef",
    title: "Typography, Headlines and Infographics",
  },
  {
    _id: "62e92437a1811538128b34f1",
    title: "Elementary Visual School Arts",
  },
  {
    _id: "62e92437a1811538128b34f3",
    title: "Graphic Design Basics",
  },
  {
    _id: "62e92437a1811538128b34f5",
    title: "Graphic Design & Printing Technology",
  },
  {
    _id: "62e92437a1811538128b34f7",
    title: "The New Typography",
  },
  {
    _id: "62e92437a1811538128b34f9",
    title: "Animation Writing and Development",
  },
  {
    _id: "62e92437a1811538128b34fb",
    title: "Visual and Performing Arts Framework",
  },
  {
    _id: "62e92437a1811538128b34fd",
    title: "Virtual Typography",
  },
  {
    _id: "62e92438a1811538128b34ff",
    title: "Typography Graphic Design Thesaurus",
  },
  {
    _id: "62e9245892d20efc227cfc37",
    title: "Piano for Beginners 6th ED",
  },
  {
    _id: "62e9245892d20efc227cfc39",
    title: "Guitar Scales Easy Music Lessons",
  },
  {
    _id: "62e9245892d20efc227cfc3b",
    title: "How To Read Music 7 Easy Lessons",
  },
  {
    _id: "62e9245892d20efc227cfc3d",
    title: "Guitar Chords for Dummies",
  },
  {
    _id: "62e9245892d20efc227cfc3f",
    title: "The Piano Book",
  },
  {
    _id: "62e9245892d20efc227cfc41",
    title: "Alfred's Essentials of Music Theory",
  },
  {
    _id: "62e9245892d20efc227cfc43",
    title: "Bass Guitar For Dummies",
  },
  {
    _id: "62e9245892d20efc227cfc45",
    title: "Violin For Dummies",
  },
  {
    _id: "62e9245892d20efc227cfc47",
    title: "The Language of Music - Tom Brooks Music",
  },
  {
    _id: "62e9245892d20efc227cfc49",
    title: "Creating Simple Solos - Amazing Guitar Secrets",
  },
  {
    _id: "62e9245992d20efc227cfc4b",
    title: "Acoustic Guitar Secrets™",
  },
  {
    _id: "62e9245992d20efc227cfc4d",
    title: "Blues Guitar Lesson Book - Learn & Master Courses by Legacy ",
  },
  {
    _id: "62e9245992d20efc227cfc4f",
    title: "Keyboard Master Class - Tom Brooks Music",
  },
  {
    _id: "62e9245992d20efc227cfc51",
    title: "Basic Music Theory",
  },
  {
    _id: "62e9245992d20efc227cfc53",
    title: "Building Acoustics",
  },
  {
    _id: "62e9245992d20efc227cfc55",
    title: "the 100 most influential musicians of all time",
  },
  {
    _id: "62e9245992d20efc227cfc57",
    title: "Music Listening, Music Therapy, Phenomenology and Neuroscience",
  },
  {
    _id: "62e9245992d20efc227cfc59",
    title: "Guitar Techniques Magazine",
  },
  {
    _id: "62e9245992d20efc227cfc5b",
    title: "A confluence of art and music - Carnatic Music",
  },
  {
    _id: "62e9245992d20efc227cfc5d",
    title: "Gibson's Learn & Master Guitar Lessons",
  },
  {
    _id: "62e924647d59156a250b7bd5",
    title: "Rock Guitar Secrets",
  },
  {
    _id: "62e924647d59156a250b7bd7",
    title: "The Cambridge History of Nineteenth-Century Music",
  },
  {
    _id: "62e924647d59156a250b7bd9",
    title: "Fingerstyle Jazz Guitar",
  },
  {
    _id: "62e924657d59156a250b7bdb",
    title: "Understanding Basic Music Theory",
  },
  {
    _id: "62e924657d59156a250b7bdd",
    title: "Writing Interactive Music for Video Games",
  },
  {
    _id: "62e924657d59156a250b7bdf",
    title: "Starting Your Career As A Musician",
  },
  {
    _id: "62e924657d59156a250b7be1",
    title: "Writing Music for Television and Radio Commercials",
  },
  {
    _id: "62e924657d59156a250b7be3",
    title: "Guitar Virtuosity for the Everyday Man",
  },
  {
    _id: "62e924657d59156a250b7be5",
    title: "The Theory and Technique of Electronic Music",
  },
  {
    _id: "62e924657d59156a250b7be7",
    title: "Understanding Music Past and Present",
  },
  {
    _id: "62e924657d59156a250b7be9",
    title: "Guitar & Keyboard Scales Poster",
  },
  {
    _id: "62e924657d59156a250b7beb",
    title: "JAZZ GUITAR SOLOING",
  },
  {
    _id: "62e924657d59156a250b7bed",
    title: "The Cognitive Neuroscience of Music",
  },
  {
    _id: "62e924657d59156a250b7bef",
    title: "Texas Blues Guitar",
  },
  {
    _id: "62e924657d59156a250b7bf1",
    title: "The Origins of Music",
  },
  {
    _id: "62e924657d59156a250b7bf3",
    title: "Classical Guitar for Dummies",
  },
  {
    _id: "62e924657d59156a250b7bf5",
    title: "Music and the Making of Modern Science",
  },
  {
    _id: "62e924657d59156a250b7bf7",
    title: "Music Theory - Kilby",
  },
  {
    _id: "62e924657d59156a250b7bf9",
    title: "Music, Philosophy And Modernity",
  },
  {
    _id: "62e924a1ed81cf9cbd1c6064",
    title: "1000 Poses in Fashion",
  },
  {
    _id: "62e924a1ed81cf9cbd1c6066",
    title: "Sewing, The World's Greatest Hobby",
  },
  {
    _id: "62e924a1ed81cf9cbd1c6068",
    title: "The Makeup Book",
  },
  {
    _id: "62e924a1ed81cf9cbd1c606a",
    title: "How to Apply Makeup Professionally",
  },
  {
    _id: "62e924a1ed81cf9cbd1c606c",
    title: "The Green Beauty Guide",
  },
  {
    _id: "62e924a1ed81cf9cbd1c606e",
    title: "Fashion Design and Illustration",
  },
  {
    _id: "62e924a2ed81cf9cbd1c6070",
    title: "Handbook of Medicinal Herbs",
  },
  {
    _id: "62e924a2ed81cf9cbd1c6072",
    title: "Jewellery & Designer Fashion",
  },
  {
    _id: "62e924a2ed81cf9cbd1c6074",
    title: "Bobbi Brown Makeup Manual",
  },
  {
    _id: "62e924a2ed81cf9cbd1c6076",
    title: "The Language of Fashion",
  },
  {
    _id: "62e924a2ed81cf9cbd1c6078",
    title: "Your Guide to NATURAL BEAUTY",
  },
  {
    _id: "62e924a2ed81cf9cbd1c607a",
    title: "Introduction The Fashion Business: Theory, Practice, Image",
  },
  {
    _id: "62e924a2ed81cf9cbd1c607c",
    title: "Luxury Fashion Branding",
  },
  {
    _id: "62e924a2ed81cf9cbd1c607e",
    title: "hottest trends and fashion",
  },
  {
    _id: "62e924a2ed81cf9cbd1c6080",
    title: "Fashion Institute of Technology",
  },
  {
    _id: "62e924a2ed81cf9cbd1c6082",
    title: "Sustainable Fashion: A Handbook for Educators",
  },
  {
    _id: "62e924a2ed81cf9cbd1c6084",
    title: "FASHION-able",
  },
  {
    _id: "62e924a2ed81cf9cbd1c6086",
    title: "Düsseldorf - Fashion Square",
  },
  {
    _id: "62e925cb56d3a2cd591e0399",
    title: "THE SEVEN HABITS OF HIGHLY EFFECTIVE PEOPLE",
  },
  {
    _id: "62e925cc56d3a2cd591e039b",
    title: "Wings of fire",
  },
  {
    _id: "62e925cc56d3a2cd591e039d",
    title: "Half Girlfriend by Chetan Bhagat",
  },
  {
    _id: "62e925cc56d3a2cd591e039f",
    title: "Spiritual Warfare by Kenneth E. Hagin",
  },
  {
    _id: "62e925cc56d3a2cd591e03a1",
    title: "How to Write a Better Thesis",
  },
  {
    _id: "62e925cc56d3a2cd591e03a3",
    title: "The Warren Buffett Way: The World’s Greatest Investor",
  },
  {
    _id: "62e925cc56d3a2cd591e03a5",
    title: "One Indian Girl by Chetan Bhagat",
  },
  {
    _id: "62e925cc56d3a2cd591e03a7",
    title: "Three Mistakes of My Life by Chetan Bhagat",
  },
  {
    _id: "62e925cc56d3a2cd591e03a9",
    title: "1984 - Classic Novels and Literature",
  },
  {
    _id: "62e925cc56d3a2cd591e03ab",
    title: "The Great Gatsby",
  },
  {
    _id: "62e925cc56d3a2cd591e03ad",
    title: "The Monk Who Sold His Ferrari",
  },
  {
    _id: "62e925cc56d3a2cd591e03af",
    title: "The Girl with the Dragon Tattoo",
  },
  {
    _id: "62e925cc56d3a2cd591e03b1",
    title: "Beyond Good and Evil",
  },
  {
    _id: "62e925cc56d3a2cd591e03b3",
    title: "The Essential Rumi by Coleman Barks",
  },
  {
    _id: "62e925cc56d3a2cd591e03b5",
    title: "William Shakespeare Poems",
  },
  {
    _id: "62e925cc56d3a2cd591e03b7",
    title: "The Seven Spirits of God - Divine Secrets to the Miraculous",
  },
  {
    _id: "62e925cc56d3a2cd591e03b9",
    title: "Kingdom of Ash - Sarah J. Maas",
  },
  {
    _id: "62e925cc56d3a2cd591e03bb",
    title: "A Collection of Short Mystery Stories",
  },
  {
    _id: "62e925cd56d3a2cd591e03bd",
    title: "Heart of Darkness",
  },
  {
    _id: "62e925cd56d3a2cd591e03bf",
    title: "Alice's Adventures in Wonderland",
  },
  {
    _id: "62e925da2ac1107b3072581f",
    title: "THE WORLD'S BEST POETRY",
  },
  {
    _id: "62e925da2ac1107b30725821",
    title: "English Literature",
  },
  {
    _id: "62e925da2ac1107b30725823",
    title: "The Picture of Dorian Gray",
  },
  {
    _id: "62e925da2ac1107b30725825",
    title: "Ulysses",
  },
  {
    _id: "62e925da2ac1107b30725827",
    title: "Les Miserables",
  },
  {
    _id: "62e925da2ac1107b30725829",
    title: "Poetry for Students",
  },
  {
    _id: "62e925da2ac1107b3072582b",
    title: "Encyclopedia of Comic Books and Graphic Novels",
  },
  {
    _id: "62e925da2ac1107b3072582d",
    title: "The Adventures of Huckleberry Finn",
  },
  {
    _id: "62e925da2ac1107b3072582f",
    title: "Love Never Fails By Kenneth E. Hagin",
  },
  {
    _id: "62e925db2ac1107b30725831",
    title: "Oliver Twist",
  },
  {
    _id: "62e925db2ac1107b30725833",
    title: "Gulliver’s Travels",
  },
  {
    _id: "62e925db2ac1107b30725835",
    title: "Learning to Dance",
  },
  {
    _id: "62e925db2ac1107b30725837",
    title: "Anne of Green Gables",
  },
  {
    _id: "62e925db2ac1107b30725839",
    title: "Robinson Crusoe",
  },
  {
    _id: "62e925db2ac1107b3072583b",
    title: "The Brothers Karamazov",
  },
  {
    _id: "62e925db2ac1107b3072583d",
    title: "Half Girlfriend by Chetan Bhagat",
  },
  {
    _id: "62e925db2ac1107b3072583f",
    title: "A book of English poetry",
  },
  {
    _id: "62e925db2ac1107b30725841",
    title:
      "The Secret Life of Nature: Living in Harmony With the Hidden World ",
  },
  {
    _id: "62e925db2ac1107b30725843",
    title: "Modern American Poetry",
  },
  {
    _id: "62e925e7727e7ce86bb3398b",
    title: "Arabic Poetry",
  },
  {
    _id: "62e925e7727e7ce86bb3398d",
    title: "POETRY LANGUAGE THOUGHT",
  },
  {
    _id: "62e925e7727e7ce86bb3398f",
    title: "The Vulcan Language - Star Trek",
  },
  {
    _id: "62e925e7727e7ce86bb33991",
    title: "David Copperfield",
  },
  {
    _id: "62e925e7727e7ce86bb33993",
    title: "Victorian Poetry",
  },
  {
    _id: "62e925e7727e7ce86bb33995",
    title: "Sons and Lovers",
  },
  {
    _id: "62e925e7727e7ce86bb33997",
    title: "The Cambridge Introduction to Modernist Poetry",
  },
  {
    _id: "62e925e7727e7ce86bb33999",
    title: "English Fairy Tales",
  },
  {
    _id: "62e925e7727e7ce86bb3399b",
    title: "The Last of the Mohicans",
  },
  {
    _id: "62e925e7727e7ce86bb3399d",
    title: "The Great Gatsby",
  },
  {
    _id: "62e925e7727e7ce86bb3399f",
    title: "Contemporary Poetry",
  },
  {
    _id: "62e925e7727e7ce86bb339a1",
    title: "Hafiz and the Religion of Love in Classical Persian Poetry",
  },
  {
    _id: "62e925e7727e7ce86bb339a3",
    title: "David and Goliath",
  },
  {
    _id: "62e925e7727e7ce86bb339a5",
    title: "Indo-European Poetry and Myth",
  },
  {
    _id: "62e925e8727e7ce86bb339a7",
    title: "Tess of the d'Urbervilles",
  },
  {
    _id: "62e925e8727e7ce86bb339a9",
    title: "Dubliners",
  },
  {
    _id: "62e925e8727e7ce86bb339ab",
    title: "Harry Potter and the Methods of Rationality",
  },
  {
    _id: "62e925e8727e7ce86bb339ad",
    title: "The Island of Doctor Moreau",
  },
  {
    _id: "62e925e8727e7ce86bb339af",
    title: "Alexander Pope: Selected Poetry and Prose",
  },
  {
    _id: "62e925e8727e7ce86bb339b1",
    title: "The Yale Anthology of Twentieth-Century French Poetry",
  },
  {
    _id: "62e925fad7511270ffa2e5d1",
    title: "Chinese Poetry in Times of Mind, Mayhem and Money",
  },
  {
    _id: "62e925fad7511270ffa2e5d3",
    title: "So Long! Walt Whitman's Poetry of Death",
  },
  {
    _id: "62e925fad7511270ffa2e5d5",
    title: "Reinventing Romantic Poetry",
  },
  {
    _id: "62e925fad7511270ffa2e5d7",
    title: "Crime Story Collection",
  },
  {
    _id: "62e925fad7511270ffa2e5d9",
    title:
      "Gems of Wisdom - Words of the great Kabbalists from all generations",
  },
  {
    _id: "62e925fad7511270ffa2e5db",
    title: "A Treatise of Human Nature",
  },
  {
    _id: "62e925fad7511270ffa2e5dd",
    title: "Tarzan",
  },
  {
    _id: "62e925fad7511270ffa2e5df",
    title: "The Scarlet Pimpernel",
  },
  {
    _id: "62e925fad7511270ffa2e5e1",
    title: "AFRICAN POETRY AND THE POLITICS",
  },
  {
    _id: "62e925fbd7511270ffa2e5e3",
    title: "Poetry for Students, Volume 35",
  },
  {
    _id: "62e925fbd7511270ffa2e5e5",
    title: "The Strangest Theatres",
  },
  {
    _id: "62e925fbd7511270ffa2e5e7",
    title: "Poetry for Students Vol. 10",
  },
  {
    _id: "62e925fbd7511270ffa2e5e9",
    title: "The Esoteric Library | www.sacred-magick.com",
  },
  {
    _id: "62e925fbd7511270ffa2e5eb",
    title: "Poetry for Students",
  },
  {
    _id: "62e925fbd7511270ffa2e5ed",
    title: "british and irish war poetry",
  },
  {
    _id: "62e925fbd7511270ffa2e5ef",
    title: "Can Poetry Save the Earth?",
  },
  {
    _id: "62e925fbd7511270ffa2e5f1",
    title: "Differentials: Poetry, Poetics, Pedagogy",
  },
  {
    _id: "62e925fbd7511270ffa2e5f3",
    title: "Poetry for Students, Volume 31",
  },
  {
    _id: "62e925fbd7511270ffa2e5f5",
    title: "Poetry for Students, Volume 29",
  },
  {
    _id: "62e925fbd7511270ffa2e5f7",
    title: "SUFI POETRY IN SOMALI",
  },
  {
    _id: "62e9260d8c787ea07c8adffb",
    title: "The Concise Dictionary of American Jewish Biography",
  },
  {
    _id: "62e9260d8c787ea07c8adffd",
    title: "How to Read Chinese Poetry A Guided Anthology",
  },
  {
    _id: "62e9260d8c787ea07c8adfff",
    title: "The complete posthumous poetry",
  },
  {
    _id: "62e9260d8c787ea07c8ae001",
    title: "Court Poetry in Late Medieval England and Scotland",
  },
  {
    _id: "62e9260d8c787ea07c8ae003",
    title: "The Facts on File Companion to British Poetry Before 1600",
  },
  {
    _id: "62e9260d8c787ea07c8ae005",
    title: "The Future Poetry",
  },
  {
    _id: "62e9260d8c787ea07c8ae007",
    title: "A Critical Introduction to Modern Arabic Poetry",
  },
  {
    _id: "62e9260d8c787ea07c8ae009",
    title: "The Poetry of Mary Robinson: Form and Fame",
  },
  {
    _id: "62e9260d8c787ea07c8ae00b",
    title: "The Forms of Hebrew Poetry",
  },
  {
    _id: "62e9260d8c787ea07c8ae00d",
    title: "british poetry in the age of modernism",
  },
  {
    _id: "62e9260d8c787ea07c8ae00f",
    title: "The Poetry of Statius",
  },
  {
    _id: "62e9260d8c787ea07c8ae011",
    title: "Spiritualism in the Poetry of Shah Abdul Latif Bhittai",
  },
  {
    _id: "62e9260e8c787ea07c8ae013",
    title: "Byzantine Poetry from Pisites to Geometers",
  },
  {
    _id: "62e9260e8c787ea07c8ae017",
    title: "New Perspectives on Contemporary Chinese Poetry",
  },
  {
    _id: "62e9260e8c787ea07c8ae019",
    title: "Gendered Spaces in Contemporary Irish Poetry",
  },
  {
    _id: "62e9260e8c787ea07c8ae01b",
    title: "occupy wall street poetry anthology",
  },
  {
    _id: "62e9260e8c787ea07c8ae01d",
    title: "Dialect Poetry of Southern Italy",
  },
  {
    _id: "62e9260e8c787ea07c8ae01f",
    title: "Contemporary West Indian Poetry",
  },
  {
    _id: "62e9260e8c787ea07c8ae021",
    title: "Reliques of Ancient English Poetry",
  },
  {
    _id: "62e9261874ac01f7efc9bbfc",
    title: "Poetry of Revolution: Romanticism and National Projects",
  },
  {
    _id: "62e92654be87849fa04f1ae3",
    title: "1984 - Classic Novels and Literature",
  },
  {
    _id: "62e92655be87849fa04f1ae5",
    title: "The Great Gatsby",
  },
  {
    _id: "62e92655be87849fa04f1ae7",
    title: "Beyond Good and Evil",
  },
  {
    _id: "62e92655be87849fa04f1ae9",
    title: "Heart of Darkness",
  },
  {
    _id: "62e92655be87849fa04f1aeb",
    title: "Alice's Adventures in Wonderland",
  },
  {
    _id: "62e92655be87849fa04f1aed",
    title: "The Picture of Dorian Gray",
  },
  {
    _id: "62e92655be87849fa04f1aef",
    title: "Ulysses",
  },
  {
    _id: "62e92655be87849fa04f1af1",
    title: "Les Miserables",
  },
  {
    _id: "62e92655be87849fa04f1af3",
    title: "The Adventures of Huckleberry Finn",
  },
  {
    _id: "62e92655be87849fa04f1af5",
    title: "Oliver Twist",
  },
  {
    _id: "62e92655be87849fa04f1af7",
    title: "Gulliver’s Travels",
  },
  {
    _id: "62e92655be87849fa04f1af9",
    title: "Anne of Green Gables",
  },
  {
    _id: "62e92655be87849fa04f1afb",
    title: "Robinson Crusoe",
  },
  {
    _id: "62e92656be87849fa04f1afd",
    title: "The Brothers Karamazov",
  },
  {
    _id: "62e92656be87849fa04f1aff",
    title: "David Copperfield",
  },
  {
    _id: "62e92656be87849fa04f1b01",
    title: "Sons and Lovers",
  },
  {
    _id: "62e92656be87849fa04f1b03",
    title: "English Fairy Tales",
  },
  {
    _id: "62e92656be87849fa04f1b05",
    title: "The Last of the Mohicans",
  },
  {
    _id: "62e92656be87849fa04f1b07",
    title: "The Great Gatsby",
  },
  {
    _id: "62e92656be87849fa04f1b09",
    title: "Tess of the d'Urbervilles",
  },
  {
    _id: "62e926651dc36710708661d7",
    title: "Dubliners",
  },
  {
    _id: "62e926661dc36710708661d9",
    title: "The Island of Doctor Moreau",
  },
  {
    _id: "62e926661dc36710708661db",
    title: "Tarzan",
  },
  {
    _id: "62e926661dc36710708661dd",
    title: "The Scarlet Pimpernel",
  },
  {
    _id: "62e9274bd37dbe4c2d2f1e54",
    title: "The Girl with the Dragon Tattoo",
  },
  {
    _id: "62e9274bd37dbe4c2d2f1e56",
    title: "Kingdom of Ash - Sarah J. Maas",
  },
  {
    _id: "62e927705fe3dd4a2e65ba59",
    title: "Half Girlfriend by Chetan Bhagat",
  },
  {
    _id: "62e927705fe3dd4a2e65ba5b",
    title: "Learning to Dance",
  },
  {
    _id: "62e927705fe3dd4a2e65ba5d",
    title: "Half Girlfriend by Chetan Bhagat",
  },
  {
    _id: "62e92789b67a110213658222",
    title: "The Vulcan Language - Star Trek",
  },
  {
    _id: "62e927d8fb4cfeb243cb93de",
    title: "The Essential Rumi by Coleman Barks",
  },
  {
    _id: "62e927d8fb4cfeb243cb93e0",
    title: "William Shakespeare Poems",
  },
  {
    _id: "62e927d8fb4cfeb243cb93e2",
    title: "THE WORLD'S BEST POETRY",
  },
  {
    _id: "62e927d9fb4cfeb243cb93e4",
    title: "Poetry for Students",
  },
  {
    _id: "62e927d9fb4cfeb243cb93e6",
    title: "A book of English poetry",
  },
  {
    _id: "62e927d9fb4cfeb243cb93e8",
    title: "Modern American Poetry",
  },
  {
    _id: "62e927d9fb4cfeb243cb93ea",
    title: "Arabic Poetry",
  },
  {
    _id: "62e927d9fb4cfeb243cb93ec",
    title: "POETRY LANGUAGE THOUGHT",
  },
  {
    _id: "62e927d9fb4cfeb243cb93ee",
    title: "Victorian Poetry",
  },
  {
    _id: "62e927d9fb4cfeb243cb93f0",
    title: "The Cambridge Introduction to Modernist Poetry",
  },
  {
    _id: "62e927d9fb4cfeb243cb93f2",
    title: "Contemporary Poetry",
  },
  {
    _id: "62e927d9fb4cfeb243cb93f4",
    title: "Hafiz and the Religion of Love in Classical Persian Poetry",
  },
  {
    _id: "62e927d9fb4cfeb243cb93f6",
    title: "Indo-European Poetry and Myth",
  },
  {
    _id: "62e927d9fb4cfeb243cb93f8",
    title: "Alexander Pope: Selected Poetry and Prose",
  },
  {
    _id: "62e927d9fb4cfeb243cb93fa",
    title: "The Yale Anthology of Twentieth-Century French Poetry",
  },
  {
    _id: "62e927d9fb4cfeb243cb93fc",
    title: "Chinese Poetry in Times of Mind, Mayhem and Money",
  },
  {
    _id: "62e927d9fb4cfeb243cb93fe",
    title: "So Long! Walt Whitman's Poetry of Death",
  },
  {
    _id: "62e927d9fb4cfeb243cb9400",
    title: "Reinventing Romantic Poetry",
  },
  {
    _id: "62e927d9fb4cfeb243cb9402",
    title: "Poetry for Students, Volume 35",
  },
  {
    _id: "62e927dafb4cfeb243cb9404",
    title: "AFRICAN POETRY AND THE POLITICS",
  },
  {
    _id: "62e927e6f85d7aaf2fa3413a",
    title: "The Strangest Theatres",
  },
  {
    _id: "62e927e6f85d7aaf2fa3413c",
    title: "Poetry for Students Vol. 10",
  },
  {
    _id: "62e927e7f85d7aaf2fa3413e",
    title: "british and irish war poetry",
  },
  {
    _id: "62e927ef3195265b62a5dfac",
    title: "The Strangest Theatres",
  },
  {
    _id: "62e927ef3195265b62a5dfae",
    title: "Poetry for Students Vol. 10",
  },
  {
    _id: "62e927ef3195265b62a5dfb0",
    title: "british and irish war poetry",
  },
  {
    _id: "62e927ef3195265b62a5dfb2",
    title: "Can Poetry Save the Earth?",
  },
  {
    _id: "62e927ef3195265b62a5dfb4",
    title: "Differentials: Poetry, Poetics, Pedagogy",
  },
  {
    _id: "62e927ef3195265b62a5dfb6",
    title: "Poetry for Students, Volume 31",
  },
  {
    _id: "62e927ef3195265b62a5dfb8",
    title: "Poetry for Students, Volume 29",
  },
  {
    _id: "62e927ef3195265b62a5dfba",
    title: "SUFI POETRY IN SOMALI",
  },
  {
    _id: "62e927ef3195265b62a5dfbc",
    title: "How to Read Chinese Poetry A Guided Anthology",
  },
  {
    _id: "62e927ef3195265b62a5dfbe",
    title: "The complete posthumous poetry",
  },
  {
    _id: "62e927ef3195265b62a5dfc0",
    title: "Court Poetry in Late Medieval England and Scotland",
  },
  {
    _id: "62e927ef3195265b62a5dfc2",
    title: "The Facts on File Companion to British Poetry Before 1600",
  },
  {
    _id: "62e927ef3195265b62a5dfc4",
    title: "The Future Poetry",
  },
  {
    _id: "62e927ef3195265b62a5dfc6",
    title: "A Critical Introduction to Modern Arabic Poetry",
  },
  {
    _id: "62e927ef3195265b62a5dfc8",
    title: "The Poetry of Mary Robinson: Form and Fame",
  },
  {
    _id: "62e927ef3195265b62a5dfca",
    title: "The Forms of Hebrew Poetry",
  },
  {
    _id: "62e927f03195265b62a5dfcc",
    title: "british poetry in the age of modernism",
  },
  {
    _id: "62e927f03195265b62a5dfce",
    title: "The Poetry of Statius",
  },
  {
    _id: "62e927f03195265b62a5dfd0",
    title: "Spiritualism in the Poetry of Shah Abdul Latif Bhittai",
  },
  {
    _id: "62e927f03195265b62a5dfd2",
    title: "Byzantine Poetry from Pisites to Geometers",
  },
  {
    _id: "62e927f8759849609f2618ff",
    title: "New Perspectives on Contemporary Chinese Poetry",
  },
  {
    _id: "62e927f8759849609f261901",
    title: "Gendered Spaces in Contemporary Irish Poetry",
  },
  {
    _id: "62e927f8759849609f261903",
    title: "occupy wall street poetry anthology",
  },
  {
    _id: "62e927f8759849609f261905",
    title: "Dialect Poetry of Southern Italy",
  },
  {
    _id: "62e927f8759849609f261907",
    title: "Contemporary West Indian Poetry",
  },
  {
    _id: "62e927f8759849609f261909",
    title: "Reliques of Ancient English Poetry",
  },
  {
    _id: "62e927f8759849609f26190b",
    title: "Poetry of Revolution: Romanticism and National Projects",
  },
  {
    _id: "62e9284407b2a845424d16c3",
    title: "New Perspectives on Contemporary Chinese Poetry",
  },
  {
    _id: "62e9284407b2a845424d16c5",
    title: "Gendered Spaces in Contemporary Irish Poetry",
  },
  {
    _id: "62e9284407b2a845424d16c7",
    title: "occupy wall street poetry anthology",
  },
  {
    _id: "62e9284407b2a845424d16c9",
    title: "Dialect Poetry of Southern Italy",
  },
  {
    _id: "62e9284407b2a845424d16cb",
    title: "Contemporary West Indian Poetry",
  },
  {
    _id: "62e9284407b2a845424d16cd",
    title: "Reliques of Ancient English Poetry",
  },
  {
    _id: "62e9284407b2a845424d16cf",
    title: "Poetry of Revolution: Romanticism and National Projects",
  },
  {
    _id: "62e92868b0388779675b3449",
    title: "Marcel Proust: A Biography",
  },
  {
    _id: "62e92868b0388779675b344b",
    title: "Alexandra Kollontai: A Biography",
  },
  {
    _id: "62e92868b0388779675b344d",
    title: "The Hutchinson Encyclopedia of Modern Political Biography",
  },
  {
    _id: "62e92868b0388779675b344f",
    title: "MOTHER TERESA: A Biography",
  },
  {
    _id: "62e92868b0388779675b3451",
    title: "The Utopian Communist: A Biography of Wilhelm Weitling",
  },
  {
    _id: "62e92868b0388779675b3453",
    title: "Hebraic Biography of Y'shua",
  },
  {
    _id: "62e92868b0388779675b3455",
    title: "Masonic Biography and Dictionary",
  },
  {
    _id: "62e92868b0388779675b3457",
    title: "Benjamin Constant: A Biography",
  },
  {
    _id: "62e92868b0388779675b3459",
    title: "Emmeline Pankhurst: A Biography",
  },
  {
    _id: "62e92868b0388779675b345b",
    title: "The Biography of the Prophet",
  },
  {
    _id: "62e92868b0388779675b345d",
    title: "Göring: A Biography",
  },
  {
    _id: "62e92868b0388779675b345f",
    title: "The Concise Dictionary of American Jewish Biography",
  },
  {
    _id: "62e92868b0388779675b3461",
    title: "Karl Marx: A biography by David McLellan",
  },
  {
    _id: "62e92868b0388779675b3463",
    title: "Sirat Ibn Hisham Biography of the Prophet",
  },
  {
    _id: "62e92869b0388779675b3465",
    title: "Joseph Smith: A Biography",
  },
  {
    _id: "62e92869b0388779675b3467",
    title: "Göring: A Biography by David Irving",
  },
  {
    _id: "62e92869b0388779675b3469",
    title: "Proudhon - A Biography",
  },
  {
    _id: "62e92869b0388779675b346b",
    title: "The Biography of the Prophet and the Orientalists – Vol. 2",
  },
  {
    _id: "62e92869b0388779675b346d",
    title: "George Bush: The Unauthorized Biography by Webster G. Tarpley",
  },
  {
    _id: "62e928a50de6f0a87cd9ca98",
    title: "Charles Armstrong, M.D.: A Biography",
  },
  {
    _id: "62e928a60de6f0a87cd9ca9a",
    title: "The Biography of the Prophet and the Orientalists",
  },
  {
    _id: "62e928a60de6f0a87cd9ca9c",
    title: "The Virginia magazine of history and biography",
  },
  {
    _id: "62e928a60de6f0a87cd9ca9e",
    title: "Read Slade Gorton's Biography",
  },
  {
    _id: "62e928a60de6f0a87cd9caa0",
    title:
      "Memorial Biographies of the The New England Historic Genealogical Society",
  },
  {
    _id: "62e928a60de6f0a87cd9caa2",
    title: "Cotton Mather Biography 1892",
  },
  {
    _id: "62e928a60de6f0a87cd9caa4",
    title: "Northern Territory Dictionary of Biography",
  },
  {
    _id: "62e92b38f07cc8188afb7053",
    title:
      "Never Split the Difference: Negotiating As If Your Life Depended On It",
  },
  {
    _id: "62e92b38f07cc8188afb7055",
    title: "How to Win Every Argument",
  },
  {
    _id: "62e92b39f07cc8188afb7057",
    title: "The Rules of Work: A Definitive Code for Personal Success",
  },
  {
    _id: "62e92b39f07cc8188afb7059",
    title: "Social Media Marketing",
  },
  {
    _id: "62e92b39f07cc8188afb705b",
    title:
      "The 5 Second Rule: Transform your Life, Work, and Confidence with Everyday Courage",
  },
  {
    _id: "62e92b39f07cc8188afb705d",
    title: "How to Write a Business Plan",
  },
  {
    _id: "62e92b39f07cc8188afb705f",
    title: "100 Great Business Ideas",
  },
  {
    _id: "62e92b39f07cc8188afb7061",
    title: "Law of Success (21st Century Edition)",
  },
  {
    _id: "62e92b39f07cc8188afb7063",
    title: "CRITICAL THINKING: Consider the Verdict Sixth Edition",
  },
  {
    _id: "62e92b39f07cc8188afb7065",
    title: "Smart Thinking: Skills for Critical Understanding and Writing",
  },
  {
    _id: "62e92b39f07cc8188afb7067",
    title: "Time Management Proven Techniques for Making Every Minute Count",
  },
  {
    _id: "62e92b39f07cc8188afb7069",
    title: "How Successful People Think",
  },
  {
    _id: "62e92b39f07cc8188afb706b",
    title: "How to Write a Better Thesis",
  },
  {
    _id: "62e92b39f07cc8188afb706d",
    title: "The Warren Buffett Way: The World’s Greatest Investor",
  },
  {
    _id: "62e92b39f07cc8188afb706f",
    title: "How To Sell Yourself",
  },
  {
    _id: "62e92b39f07cc8188afb7071",
    title: "International Law and International Relations",
  },
  {
    _id: "62e92b39f07cc8188afb7073",
    title: "Getting Things Done: The Art of Stress-Free Productivity",
  },
  {
    _id: "62e92b3af07cc8188afb7075",
    title: "Speak to Win: How to Present with Power in Any Situation",
  },
  {
    _id: "62e92b3af07cc8188afb7077",
    title: "Strategic Leadership",
  },
  {
    _id: "62e92b3af07cc8188afb7079",
    title: "Stock investing for Dummies.pdf",
  },
  {
    _id: "62e92bba743458b69b584be5",
    title: "Do the Work: Overcome Resistance and Get Out of Your Own Way",
  },
  {
    _id: "62e92bba743458b69b584be7",
    title: "How to gain customers and increase profits with B2B marketing",
  },
  {
    _id: "62e92bba743458b69b584be9",
    title: "Oxford Handbook of Human Resource Management",
  },
  {
    _id: "62e92bba743458b69b584beb",
    title: "Business Finance: Theory and Practice",
  },
  {
    _id: "62e92bbb743458b69b584bed",
    title: "Fibonacci and Gann Applications in Financial Markets",
  },
  {
    _id: "62e92bbb743458b69b584bef",
    title: "the 100 most influential world leaders of all time",
  },
  {
    _id: "62e92bbb743458b69b584bf1",
    title: "Strategic Planning for Human Resources Management",
  },
  {
    _id: "62e92bbb743458b69b584bf3",
    title: "Small Business for Dummies",
  },
  {
    _id: "62e92bbb743458b69b584bf5",
    title:
      "The Energy Bus: 10 Rules to Fuel Your Life, Work, and Team with Positive Energy",
  },
  {
    _id: "62e92bbb743458b69b584bf7",
    title: "Practical Project Management - Tips, Tactics and Tools",
  },
  {
    _id: "62e92bbb743458b69b584bf9",
    title: "Python for Finance",
  },
  {
    _id: "62e92bbb743458b69b584bfb",
    title: "Marketing Communications",
  },
  {
    _id: "62e92bbb743458b69b584bfd",
    title: "Human Resources Management and Training",
  },
  {
    _id: "62e92bbb743458b69b584bff",
    title: "Modeling Structured Finance Cash Flows with Microsoft Excel",
  },
  {
    _id: "62e92bbb743458b69b584c01",
    title: "Digital Marketing Handbook",
  },
  {
    _id: "62e92bbb743458b69b584c03",
    title: "Human Resources Management",
  },
  {
    _id: "62e92bbb743458b69b584c05",
    title: "Data Mining: Practical Machine Learning Tools and Techniques ",
  },
  {
    _id: "62e92bbb743458b69b584c07",
    title: "Social Media Marketing For Dummies",
  },
  {
    _id: "62e92bbb743458b69b584c09",
    title: "Foreign Exchange and Money Markets",
  },
  {
    _id: "62e92bbc743458b69b584c0b",
    title: "Facebook Marketing: An Hour a Day.",
  },
  {
    _id: "62e92bfa688d46efb39c4c1f",
    title: "Encyclopedia of Leadership",
  },
  {
    _id: "62e92bfa688d46efb39c4c21",
    title: "A trader's money management system",
  },
  {
    _id: "62e92bfa688d46efb39c4c23",
    title: "Sales & Marketing Management",
  },
  {
    _id: "62e92bfa688d46efb39c4c25",
    title: "Stocks for the Long Run",
  },
  {
    _id: "62e92bfa688d46efb39c4c27",
    title: "Guerrilla Selling 2 - Guerrilla Marketing Expert",
  },
  {
    _id: "62e92bfa688d46efb39c4c29",
    title: "Managing Information Technology",
  },
  {
    _id: "62e92bfa688d46efb39c4c2b",
    title: "introduction to economics and finance",
  },
  {
    _id: "62e92bfa688d46efb39c4c2d",
    title: "Why Great Leaders Don't Take Yes for an Answer",
  },
  {
    _id: "62e92bfa688d46efb39c4c2f",
    title: "Best Digital Marketing Campaigns in the World",
  },
  {
    _id: "62e92bfa688d46efb39c4c31",
    title: "Resumes for Dummies",
  },
  {
    _id: "62e92bfa688d46efb39c4c33",
    title: "Learning & Leading With Habits of Mind",
  },
  {
    _id: "62e92bfa688d46efb39c4c35",
    title: "Effective Career Guidance - Career Guide",
  },
  {
    _id: "62e92bfb688d46efb39c4c37",
    title: "Strategic Human Resource Management: A Guide to Action",
  },
  {
    _id: "62e92bfb688d46efb39c4c39",
    title: "Quantitative Financial Risk Management",
  },
  {
    _id: "62e92bfb688d46efb39c4c3b",
    title: "Huge Profits with Affiliate Marketing",
  },
  {
    _id: "62e92bfb688d46efb39c4c3d",
    title: "Mathematics for Finance: An Introduction to Financial Engineering",
  },
  {
    _id: "62e92bfb688d46efb39c4c3f",
    title: "Managing For Dummies, 3rd Edition",
  },
  {
    _id: "62e92bfb688d46efb39c4c41",
    title: "How to grow your wealth during the coming collapse?",
  },
  {
    _id: "62e92bfb688d46efb39c4c43",
    title: "Optimizing Optimization: The Next Generation of Optimization ",
  },
  {
    _id: "62e92bfb688d46efb39c4c45",
    title: "Life Skills and Leadership",
  },
  {
    _id: "62e92c071220896d239d03d4",
    title: "Time Management",
  },
  {
    _id: "62e92c071220896d239d03d6",
    title: "Corporate Finance: Instructor's Manual Applied Corporate Finance ",
  },
  {
    _id: "62e92c071220896d239d03d8",
    title: "The Small Business Bible",
  },
  {
    _id: "62e92c071220896d239d03da",
    title: "THE 100 MOST INFLUENTIAL INVENTORS OF ALL TIME",
  },
  {
    _id: "62e92c071220896d239d03dc",
    title: "Logistic Regression: A Self-learning Text, Third Edition",
  },
  {
    _id: "62e92c071220896d239d03de",
    title: "Personal Finance Workbook For Dummies",
  },
  {
    _id: "62e92c071220896d239d03e0",
    title: "Relationship Marketing Strategy and implementation",
  },
  {
    _id: "62e92c071220896d239d03e2",
    title: "SEO: Search Engine Optimization Bible",
  },
  {
    _id: "62e92c071220896d239d03e4",
    title: "Personal Finance for Dummies",
  },
  {
    _id: "62e92c071220896d239d03e6",
    title: "Fashion Marketing, Third Edition",
  },
  {
    _id: "62e92c071220896d239d03e8",
    title: "50 Best Jobs for Your Personality",
  },
  {
    _id: "62e92c071220896d239d03ea",
    title: "Excel for Marketing Managers",
  },
  {
    _id: "62e92c081220896d239d03ec",
    title: "International Business Finance",
  },
  {
    _id: "62e92c081220896d239d03ee",
    title: "The John Adair Handbook of Management and Leadership",
  },
  {
    _id: "62e92c081220896d239d03f0",
    title: "More praise for On Becoming a Leader",
  },
  {
    _id: "62e92c081220896d239d03f2",
    title: "Islamic Finance",
  },
  {
    _id: "62e92c081220896d239d03f4",
    title: "Mastering The Art Of Success",
  },
  {
    _id: "62e92c081220896d239d03f6",
    title: "The Mathematics of Money",
  },
  {
    _id: "62e92c081220896d239d03f8",
    title: "The Art and Practice of Leadership Coaching",
  },
  {
    _id: "62e92c081220896d239d03fa",
    title: "Successful Time Management for Dummies",
  },
  {
    _id: "62e92c1297ec4da2d25cc25d",
    title: "Swing Trading For Dummies: Omar Bassal",
  },
  {
    _id: "62e92c1297ec4da2d25cc25f",
    title: "Business: Accounting, Finance, Management & Marketing",
  },
  {
    _id: "62e92c1297ec4da2d25cc261",
    title: "Entrepreneurship: Strategies and Resources",
  },
  {
    _id: "62e92c1397ec4da2d25cc263",
    title: "Hypnotic Writing",
  },
  {
    _id: "62e92c1397ec4da2d25cc265",
    title: "General Psychology for Leaders",
  },
  {
    _id: "62e92c1397ec4da2d25cc267",
    title: "E-Human Resources Management Managing Knowledge People",
  },
  {
    _id: "62e92c1397ec4da2d25cc269",
    title: "Economic Development and Islamic Finance",
  },
  {
    _id: "62e92c1397ec4da2d25cc26b",
    title: "Change Leadership",
  },
  {
    _id: "62e92c1397ec4da2d25cc26d",
    title: "An Introduction to Islamic Finance: Theory and Practice",
  },
  {
    _id: "62e92c1397ec4da2d25cc26f",
    title: "Strategic Planning in the Small Business",
  },
  {
    _id: "62e92c1397ec4da2d25cc271",
    title: "The Portable MBA in Finance and Accounting, 3rd Edition",
  },
  {
    _id: "62e92c1397ec4da2d25cc273",
    title: "FINANCE FOR NON-FINANCIAL MANAGERS",
  },
  {
    _id: "62e92c1397ec4da2d25cc275",
    title: "Corporate Finance Principles & Practice",
  },
  {
    _id: "62e92c1397ec4da2d25cc277",
    title: "Strategic Leadership",
  },
  {
    _id: "62e92c1397ec4da2d25cc279",
    title: "Handbook of Corporate Finance Empirical Corporate Finance Volume 1",
  },
  {
    _id: "62e92c1397ec4da2d25cc27b",
    title: "How to Test if Your Business Will Make Money",
  },
  {
    _id: "62e92c1497ec4da2d25cc27d",
    title: "International Finance and Accounting Handbook",
  },
  {
    _id: "62e92c1497ec4da2d25cc27f",
    title: "ACCA F4 - Corp and Business Law (ENG)",
  },
  {
    _id: "62e92c1497ec4da2d25cc281",
    title: "TRADING SYSTEMS AND MONEY MANAGEMENT",
  },
  {
    _id: "62e92c1497ec4da2d25cc283",
    title: "Mastering Business Finance",
  },
  {
    _id: "62e92c235ae2cf54069baf04",
    title: "The Ultimate Guide to Network Marketing",
  },
  {
    _id: "62e92c235ae2cf54069baf06",
    title: "Principles of Managerial Finance",
  },
  {
    _id: "62e92c235ae2cf54069baf08",
    title: "What is Internet Marketing?",
  },
  {
    _id: "62e92c235ae2cf54069baf0a",
    title: "Human Capital Management —Payroll/ Time and Labor",
  },
  {
    _id: "62e92c235ae2cf54069baf0c",
    title: "How to Win the Job by Communicating with Confidence",
  },
  {
    _id: "62e92c235ae2cf54069baf0e",
    title: "The Bible On Leadership - Lorin Woolfe",
  },
  {
    _id: "62e92c235ae2cf54069baf10",
    title: "The Law of Corporate Finance",
  },
  {
    _id: "62e92c235ae2cf54069baf12",
    title: "Business English for Success",
  },
  {
    _id: "62e92c235ae2cf54069baf14",
    title: "SAS For Dummies, 2nd Edition",
  },
  {
    _id: "62e92c235ae2cf54069baf16",
    title: "Career Choice and Development",
  },
  {
    _id: "62e92c245ae2cf54069baf18",
    title: "Project Finance: Practical Case Studies",
  },
  {
    _id: "62e92c245ae2cf54069baf1a",
    title:
      "Selling With Emotional Intelligence: Skills for Building Stronger Client Relationships",
  },
  {
    _id: "62e92c245ae2cf54069baf1c",
    title: "International Corporate Finance",
  },
  {
    _id: "62e92c245ae2cf54069baf1e",
    title: "Event Marketing: How to Successfully Promote Events, Festivals ",
  },
  {
    _id: "62e92c245ae2cf54069baf20",
    title: "Case Studies in Knowledge Management",
  },
  {
    _id: "62e92c245ae2cf54069baf22",
    title: "Money Making Power Tip",
  },
  {
    _id: "62e92c245ae2cf54069baf24",
    title: "Public–Private Partnerships",
  },
  {
    _id: "62e92c245ae2cf54069baf26",
    title: "Frequently Asked Questions In Quantitative Finance",
  },
  {
    _id: "62e92c245ae2cf54069baf28",
    title: "5-International Human Resources Management",
  },
  {
    _id: "62e92c245ae2cf54069baf2a",
    title: "Investing for Dummies",
  },
  {
    _id: "62e92c2e00796cda3c261f80",
    title: "Innovation, Creativity and Leadership",
  },
  {
    _id: "62e92c2e00796cda3c261f82",
    title: "Internet Marketing Strategy Workshop",
  },
  {
    _id: "62e92c2e00796cda3c261f84",
    title: "Leading with NLP",
  },
  {
    _id: "62e92c2e00796cda3c261f86",
    title: "The Mathematics Of Financial",
  },
  {
    _id: "62e92c2e00796cda3c261f88",
    title: "The Marketing Book 5th Edition",
  },
  {
    _id: "62e92c2e00796cda3c261f8a",
    title: "CAREER COUNSELLING - Rajaleidja",
  },
  {
    _id: "62e92c2e00796cda3c261f8c",
    title: "Human Resource Management: Ethics and Employment",
  },
  {
    _id: "62e92c2e00796cda3c261f8e",
    title: "Leadership and Program Management",
  },
  {
    _id: "62e92c2e00796cda3c261f90",
    title: "Time Management",
  },
  {
    _id: "62e92c2e00796cda3c261f92",
    title: "Advanced Business Law",
  },
  {
    _id: "62e92c2f00796cda3c261f94",
    title: "International Finance: Putting Theory Into Practice",
  },
  {
    _id: "62e92c2f00796cda3c261f96",
    title: "Mathematics for Finance",
  },
  {
    _id: "62e92c2f00796cda3c261f98",
    title: "Leadership - What Really Matters",
  },
  {
    _id: "62e92c2f00796cda3c261f9a",
    title: "Guerrilla Marketing For Real Estate Investors",
  },
  {
    _id: "62e92c2f00796cda3c261f9c",
    title: "Financial Mathematics for Actuaries",
  },
  {
    _id: "62e92c2f00796cda3c261f9e",
    title: "Ethics in Higher Education: Values-driven Leaders for the Future",
  },
  {
    _id: "62e92c2f00796cda3c261fa0",
    title: "Wealth Without a Job",
  },
  {
    _id: "62e92c2f00796cda3c261fa2",
    title: "Human Resources People Management",
  },
  {
    _id: "62e92c2f00796cda3c261fa4",
    title: "Your Money, Your Goals",
  },
  {
    _id: "62e92c2f00796cda3c261fa6",
    title: "Advances in Risk Management",
  },
  {
    _id: "62e92c3fab22081783299c5a",
    title: "Real Estate Finance",
  },
  {
    _id: "62e92c40ab22081783299c5c",
    title: "Leading Organizational Learning",
  },
  {
    _id: "62e92c40ab22081783299c5e",
    title: "The Bible on Leadership",
  },
  {
    _id: "62e92c40ab22081783299c60",
    title: "Accounting and Finance Foundations",
  },
  {
    _id: "62e92c40ab22081783299c62",
    title: "Budget and Finance",
  },
  {
    _id: "62e92c40ab22081783299c64",
    title: "How to be a better manager",
  },
  {
    _id: "62e92c40ab22081783299c66",
    title: "Energy Project Financing : Resources and Strategies for Success",
  },
  {
    _id: "62e92c40ab22081783299c68",
    title: "CAREER DEVELOPMENT IN A LEARNING ORGANIZATION",
  },
  {
    _id: "62e92c40ab22081783299c6a",
    title: "The Treasurer’s Guide to Trade Finance",
  },
  {
    _id: "62e92c40ab22081783299c6c",
    title: "Fiscal Fitness",
  },
  {
    _id: "62e92c40ab22081783299c6e",
    title: "Islamic Finance in the Global Economy",
  },
  {
    _id: "62e92c40ab22081783299c70",
    title: "Strategic Human Resources Management",
  },
  {
    _id: "62e92c40ab22081783299c72",
    title: "Proven Methods For Successful Search Engine Marketing",
  },
  {
    _id: "62e92c40ab22081783299c74",
    title: "Core Concepts of Marketing",
  },
  {
    _id: "62e92c40ab22081783299c76",
    title: "eMarketing: The Essential Guide to Online Marketing",
  },
  {
    _id: "62e92c41ab22081783299c78",
    title: "Procurement Systems: A Cross-Industry Project Management ",
  },
  {
    _id: "62e92c41ab22081783299c7a",
    title: "Global Ethics for Leadership",
  },
  {
    _id: "62e92c41ab22081783299c7c",
    title: "Accounting and Finance for Your Small Business",
  },
  {
    _id: "62e92c41ab22081783299c7e",
    title: "Leadership and Management in China",
  },
  {
    _id: "62e92c41ab22081783299c80",
    title: "Socially Responsible Investing For Dummies",
  },
  {
    _id: "62e92c4b580c2234ad7763d2",
    title: "Leadership Institute",
  },
  {
    _id: "62e92c4b580c2234ad7763d4",
    title: "Advances in Behavioral Finance - University of Kansas",
  },
  {
    _id: "62e92c4b580c2234ad7763d6",
    title: "Follow the Leader",
  },
  {
    _id: "62e92c4b580c2234ad7763d8",
    title: "Human Resources Management for Public and Nonprofit Organizations",
  },
  {
    _id: "62e92c4b580c2234ad7763da",
    title: "Responsible Leadership",
  },
  {
    _id: "62e92c4c580c2234ad7763dc",
    title: "Guerrilla MUSIC Marketing Handbook",
  },
  {
    _id: "62e92c4c580c2234ad7763de",
    title: "Small Business Marketing for Dummies 2nd Edition",
  },
  {
    _id: "62e92c4c580c2234ad7763e0",
    title: "Money, Home and Food Management",
  },
  {
    _id: "62e92c4c580c2234ad7763e2",
    title: "The Art of Leadership and Management on the Ground",
  },
  {
    _id: "62e92c4c580c2234ad7763e4",
    title:
      "Process Engineering and Best Practices for Systematic Trading and Investment",
  },
  {
    _id: "62e92c4c580c2234ad7763e6",
    title: "Handbook of News Analytics in Finance",
  },
  {
    _id: "62e92c4c580c2234ad7763e8",
    title: "Straight-Line Leadership",
  },
  {
    _id: "62e92c4c580c2234ad7763ea",
    title: "Tactics, command, leadership",
  },
  {
    _id: "62e92c4c580c2234ad7763ec",
    title: "Academic Leadership",
  },
  {
    _id: "62e92c4c580c2234ad7763ee",
    title: "reflections on character and leadership",
  },
  {
    _id: "62e92c4c580c2234ad7763f0",
    title: "Mathematical Modeling in Finance with Stochastic Processes",
  },
  {
    _id: "62e92c4c580c2234ad7763f2",
    title: "CORPORATE FINANCE MANAGEMENT",
  },
  {
    _id: "62e92c4c580c2234ad7763f4",
    title: "The Art of Islamic Banking and Finance: Tools and Techniques for ",
  },
  {
    _id: "62e92c4d580c2234ad7763f6",
    title: "FINANCE Corporate financial policy and R and D Management",
  },
  {
    _id: "62e92c4d580c2234ad7763f8",
    title: "Mathematics in Finance",
  },
  {
    _id: "62e92c5606a961ed187d4ff1",
    title: "Instruments and Markets Islamic Finance",
  },
  {
    _id: "62e92c5606a961ed187d4ff3",
    title: "World Military Leaders: A Biographical Dictionary",
  },
  {
    _id: "62e92c5706a961ed187d4ff5",
    title: "Principles of Private Firm Valuation",
  },
  {
    _id: "62e92c5706a961ed187d4ff7",
    title: "The career novelist",
  },
  {
    _id: "62e92c5706a961ed187d4ff9",
    title: "A Guidebook for Leading and Coaching",
  },
  {
    _id: "62e92c5706a961ed187d4ffb",
    title: "Transforming Your Leadership Culture",
  },
  {
    _id: "62e92c5706a961ed187d4ffd",
    title: "Review of Research Marketing",
  },
  {
    _id: "62e92c5706a961ed187d4fff",
    title: "A Study in American Jewish Leadership",
  },
  {
    _id: "62e92c5706a961ed187d5001",
    title: "Personal Finance in 1",
  },
  {
    _id: "62e92c5706a961ed187d5003",
    title: "Leaders of the Borders, Borders of the Leaders",
  },
  {
    _id: "62e92c5706a961ed187d5005",
    title: "Artificial Intelligence, Automation, and the Economy",
  },
  {
    _id: "62e92c5706a961ed187d5007",
    title: "Career Wisdom for College Students",
  },
  {
    _id: "62e92c5706a961ed187d5009",
    title: "Career Advice",
  },
  {
    _id: "62e92c5706a961ed187d500b",
    title: "Future Business Leaders of America",
  },
  {
    _id: "62e92c5706a961ed187d500d",
    title: "STRATEGIC HUMAN RESOURCE MANAGEMENT",
  },
  {
    _id: "62e92c5706a961ed187d500f",
    title: "Hiring Leaders",
  },
  {
    _id: "62e92c5706a961ed187d5011",
    title: "Personal Finance",
  },
  {
    _id: "62e92c5806a961ed187d5013",
    title: "The Future of Finance",
  },
  {
    _id: "62e92c5806a961ed187d5015",
    title: "The Business of Value Investing.pdf",
  },
  {
    _id: "62e92c5806a961ed187d5017",
    title: "Women Leaders in Village Panchayats",
  },
  {
    _id: "62e92c61d2512f10d3e1dc8d",
    title: "An Overview of Corporate Finance and the Financial Environment",
  },
  {
    _id: "62e92c61d2512f10d3e1dc8f",
    title: "Government Finance Statistics",
  },
  {
    _id: "62e92c62d2512f10d3e1dc91",
    title: "The Quality of Public Finances",
  },
  {
    _id: "62e92c62d2512f10d3e1dc93",
    title: "Public Finance Criteria",
  },
  {
    _id: "62e92c62d2512f10d3e1dc95",
    title: "leadership and motivation in hospitality",
  },
  {
    _id: "62e92c62d2512f10d3e1dc97",
    title: "Frequently Asked Questions In Quantitative Finance",
  },
  {
    _id: "62e92c62d2512f10d3e1dc99",
    title: "Leadership on the Frontlines",
  },
  {
    _id: "62e92c62d2512f10d3e1dc9b",
    title: "Local Government Finances in Rhode Island",
  },
  {
    _id: "62e92c62d2512f10d3e1dc9d",
    title: "CORPORATE FINANCE",
  },
  {
    _id: "62e92c62d2512f10d3e1dc9f",
    title: "Corporate Finance: Instructor's Manual Applied Corporate Finance ",
  },
  {
    _id: "62e92c62d2512f10d3e1dca1",
    title:
      "1 There are many definitions of Management Accounting by various organisations. However, that ...",
  },
  {
    _id: "62e92c62d2512f10d3e1dca3",
    title: "Government Finance Statistics Manual 2014",
  },
  {
    _id: "62e92c62d2512f10d3e1dca5",
    title: "Springer Finance",
  },
  {
    _id: "62e92c62d2512f10d3e1dca7",
    title: "corporate finance",
  },
  {
    _id: "62e92d343ec97eb00a385d2c",
    title: "Personal Finance Workbook For Dummies",
  },
  {
    _id: "62e92d343ec97eb00a385d2e",
    title: "Personal Finance for Dummies",
  },
  {
    _id: "62e92d343ec97eb00a385d30",
    title: "International Business Finance",
  },
  {
    _id: "62e92d353ec97eb00a385d32",
    title: "Islamic Finance",
  },
  {
    _id: "62e92d353ec97eb00a385d34",
    title: "The Mathematics of Money",
  },
  {
    _id: "62e92d353ec97eb00a385d36",
    title: "Swing Trading For Dummies: Omar Bassal",
  },
  {
    _id: "62e92d353ec97eb00a385d38",
    title: "Economic Development and Islamic Finance",
  },
  {
    _id: "62e92d353ec97eb00a385d3a",
    title: "Strategic Planning in the Small Business",
  },
  {
    _id: "62e92d353ec97eb00a385d3c",
    title: "The Portable MBA in Finance and Accounting, 3rd Edition",
  },
  {
    _id: "62e92d353ec97eb00a385d3e",
    title: "FINANCE FOR NON-FINANCIAL MANAGERS",
  },
  {
    _id: "62e92d353ec97eb00a385d40",
    title: "Corporate Finance Principles & Practice",
  },
  {
    _id: "62e92d353ec97eb00a385d42",
    title: "Handbook of Corporate Finance Empirical Corporate Finance Volume 1",
  },
  {
    _id: "62e92d353ec97eb00a385d44",
    title: "International Finance and Accounting Handbook",
  },
  {
    _id: "62e92d353ec97eb00a385d46",
    title: "Mastering Business Finance",
  },
  {
    _id: "62e92d353ec97eb00a385d48",
    title: "Principles of Managerial Finance",
  },
  {
    _id: "62e92d353ec97eb00a385d4a",
    title: "The Law of Corporate Finance",
  },
  {
    _id: "62e92d353ec97eb00a385d4c",
    title: "Project Finance: Practical Case Studies",
  },
  {
    _id: "62e92d363ec97eb00a385d4e",
    title: "International Corporate Finance",
  },
  {
    _id: "62e92d363ec97eb00a385d50",
    title: "Money Making Power Tip",
  },
  {
    _id: "62e92d363ec97eb00a385d52",
    title: "Public–Private Partnerships",
  },
  {
    _id: "62e92d52b920fe5ce181f20c",
    title: "Frequently Asked Questions In Quantitative Finance",
  },
  {
    _id: "62e92d52b920fe5ce181f20e",
    title: "Investing for Dummies",
  },
  {
    _id: "62e92d52b920fe5ce181f210",
    title: "The Mathematics Of Financial",
  },
  {
    _id: "62e92d52b920fe5ce181f212",
    title: "International Finance: Putting Theory Into Practice",
  },
  {
    _id: "62e92d52b920fe5ce181f214",
    title: "Mathematics for Finance",
  },
  {
    _id: "62e92d52b920fe5ce181f216",
    title: "Financial Mathematics for Actuaries",
  },
  {
    _id: "62e92d53b920fe5ce181f218",
    title: "Real Estate Finance",
  },
  {
    _id: "62e92d53b920fe5ce181f21a",
    title: "Accounting and Finance Foundations",
  },
  {
    _id: "62e92d53b920fe5ce181f21c",
    title: "Energy Project Financing : Resources and Strategies for Success",
  },
  {
    _id: "62e92d53b920fe5ce181f21e",
    title: "The Treasurer’s Guide to Trade Finance",
  },
  {
    _id: "62e92d53b920fe5ce181f220",
    title: "Islamic Finance in the Global Economy",
  },
  {
    _id: "62e92d53b920fe5ce181f222",
    title: "Socially Responsible Investing For Dummies",
  },
  {
    _id: "62e92d53b920fe5ce181f224",
    title: "Advances in Behavioral Finance - University of Kansas",
  },
  {
    _id: "62e92d53b920fe5ce181f226",
    title: "Handbook of News Analytics in Finance",
  },
  {
    _id: "62e92d53b920fe5ce181f228",
    title: "Mathematical Modeling in Finance with Stochastic Processes",
  },
  {
    _id: "62e92d53b920fe5ce181f22a",
    title: "CORPORATE FINANCE MANAGEMENT",
  },
  {
    _id: "62e92d53b920fe5ce181f22c",
    title: "FINANCE Corporate financial policy and R and D Management",
  },
  {
    _id: "62e92d53b920fe5ce181f22e",
    title: "Mathematics in Finance",
  },
  {
    _id: "62e92d53b920fe5ce181f230",
    title: "Instruments and Markets Islamic Finance",
  },
  {
    _id: "62e92d53b920fe5ce181f232",
    title: "Principles of Private Firm Valuation",
  },
  {
    _id: "62e92d614bf26ffa2e368b5b",
    title: "Personal Finance in 1",
  },
  {
    _id: "62e92d614bf26ffa2e368b5d",
    title: "Personal Finance",
  },
  {
    _id: "62e92d614bf26ffa2e368b5f",
    title: "The Future of Finance",
  },
  {
    _id: "62e92d614bf26ffa2e368b61",
    title: "An Overview of Corporate Finance and the Financial Environment",
  },
  {
    _id: "62e92d614bf26ffa2e368b63",
    title: "Government Finance Statistics",
  },
  {
    _id: "62e92d614bf26ffa2e368b65",
    title: "The Quality of Public Finances",
  },
  {
    _id: "62e92d614bf26ffa2e368b67",
    title: "Public Finance Criteria",
  },
  {
    _id: "62e92d614bf26ffa2e368b69",
    title: "Frequently Asked Questions In Quantitative Finance",
  },
  {
    _id: "62e92d614bf26ffa2e368b6b",
    title: "Local Government Finances in Rhode Island",
  },
  {
    _id: "62e92d614bf26ffa2e368b6d",
    title: "CORPORATE FINANCE",
  },
  {
    _id: "62e92d614bf26ffa2e368b6f",
    title: "Corporate Finance: Instructor's Manual Applied Corporate Finance ",
  },
  {
    _id: "62e92d614bf26ffa2e368b71",
    title: "Government Finance Statistics Manual 2014",
  },
  {
    _id: "62e92d614bf26ffa2e368b73",
    title: "Springer Finance",
  },
  {
    _id: "62e92d614bf26ffa2e368b75",
    title: "corporate finance",
  },
  {
    _id: "62e92d940ae5678dab416034",
    title: "The Ultimate Guide to Network Marketing",
  },
  {
    _id: "62e92d940ae5678dab416036",
    title: "What is Internet Marketing?",
  },
  {
    _id: "62e92d940ae5678dab416038",
    title: "Event Marketing: How to Successfully Promote Events, Festivals ",
  },
  {
    _id: "62e92d950ae5678dab41603a",
    title: "Internet Marketing Strategy Workshop",
  },
  {
    _id: "62e92d950ae5678dab41603c",
    title: "The Marketing Book 5th Edition",
  },
  {
    _id: "62e92d950ae5678dab41603e",
    title: "Guerrilla Marketing For Real Estate Investors",
  },
  {
    _id: "62e92d950ae5678dab416040",
    title: "Proven Methods For Successful Search Engine Marketing",
  },
  {
    _id: "62e92d950ae5678dab416042",
    title: "Core Concepts of Marketing",
  },
  {
    _id: "62e92d950ae5678dab416044",
    title: "eMarketing: The Essential Guide to Online Marketing",
  },
  {
    _id: "62e92d950ae5678dab416046",
    title: "Review of Research Marketing",
  },
  {
    _id: "62e92d9e0ae5678dab416048",
    title: "The Ultimate Guide to Network Marketing",
  },
  {
    _id: "62e92d9e0ae5678dab41604a",
    title: "What is Internet Marketing?",
  },
  {
    _id: "62e92d9e0ae5678dab41604c",
    title: "Event Marketing: How to Successfully Promote Events, Festivals ",
  },
  {
    _id: "62e92d9e0ae5678dab41604e",
    title: "Internet Marketing Strategy Workshop",
  },
  {
    _id: "62e92d9e0ae5678dab416050",
    title: "The Marketing Book 5th Edition",
  },
  {
    _id: "62e92d9e0ae5678dab416052",
    title: "Guerrilla Marketing For Real Estate Investors",
  },
  {
    _id: "62e92d9e0ae5678dab416054",
    title: "Proven Methods For Successful Search Engine Marketing",
  },
  {
    _id: "62e92d9e0ae5678dab416056",
    title: "Core Concepts of Marketing",
  },
  {
    _id: "62e92d9e0ae5678dab416058",
    title: "eMarketing: The Essential Guide to Online Marketing",
  },
  {
    _id: "62e92d9e0ae5678dab41605a",
    title: "Review of Research Marketing",
  },
  {
    _id: "62e92dd579534b79beb1433f",
    title: "Smart Thinking: Skills for Critical Understanding and Writing",
  },
  {
    _id: "62e92dd579534b79beb14341",
    title: "Law of Success (21st Century Edition)",
  },
  {
    _id: "62e92dd579534b79beb14343",
    title: "How to Win Every Argument",
  },
  {
    _id: "62e92dd579534b79beb14345",
    title: "How To Sell Yourself",
  },
  {
    _id: "62e92dd579534b79beb14347",
    title: "Speak to Win: How to Present with Power in Any Situation",
  },
  {
    _id: "62e92dd579534b79beb14349",
    title: "Strategic Leadership",
  },
  {
    _id: "62e92dd579534b79beb1434b",
    title: "The Leadership Training Activity Book: 50 Exercises",
  },
  {
    _id: "62e92dd679534b79beb1434d",
    title: "Answering Tough Interview Questions",
  },
  {
    _id: "62e92dd679534b79beb1434f",
    title: "NLP At Work: The Difference that Makes the Difference in Business",
  },
  {
    _id: "62e92dd679534b79beb14351",
    title: "Strategic Marketing: Planning and Control",
  },
  {
    _id: "62e92dd679534b79beb14353",
    title: "Coaching, Mentoring and Managing: A Coach Guidebook",
  },
  {
    _id: "62e92dd679534b79beb14355",
    title: "the 100 most influential world leaders of all time",
  },
  {
    _id: "62e92dd679534b79beb14357",
    title: "Practical Project Management - Tips, Tactics and Tools",
  },
  {
    _id: "62e92dd679534b79beb14359",
    title: "Human Resources Management",
  },
  {
    _id: "62e92dd679534b79beb1435b",
    title: "How to Start a Business Analyst Career",
  },
  {
    _id: "62e92dd679534b79beb1435d",
    title:
      "THE NLP WORKBOOK: The Practical Guidebook to Achieving the Results You Want",
  },
  {
    _id: "62e92dd679534b79beb1435f",
    title: "I Can Read You Like a Book",
  },
  {
    _id: "62e92dd679534b79beb14361",
    title: "Quantitative Methods and Analysis",
  },
  {
    _id: "62e92dd679534b79beb14363",
    title: "Accounting and Finance for Business Analysis",
  },
  {
    _id: "62e92dd679534b79beb14365",
    title: "Sales & Marketing Management",
  },
  {
    _id: "62e92df63adac2c2a7ac68dd",
    title: "Advances in Risk Management",
  },
  {
    _id: "62e92df63adac2c2a7ac68df",
    title: "Budget and Finance",
  },
  {
    _id: "62e92df63adac2c2a7ac68e1",
    title: "How to be a better manager",
  },
  {
    _id: "62e92df73adac2c2a7ac68e3",
    title: "CAREER DEVELOPMENT IN A LEARNING ORGANIZATION",
  },
  {
    _id: "62e92df73adac2c2a7ac68e5",
    title: "Fiscal Fitness",
  },
  {
    _id: "62e92df73adac2c2a7ac68e7",
    title: "Tactics, command, leadership",
  },
  {
    _id: "62e92df73adac2c2a7ac68e9",
    title: "reflections on character and leadership",
  },
  {
    _id: "62e92df73adac2c2a7ac68eb",
    title: "The career novelist",
  },
  {
    _id: "62e92df73adac2c2a7ac68ed",
    title: "Career Wisdom for College Students",
  },
  {
    _id: "62e92df73adac2c2a7ac68ef",
    title: "Career Advice",
  },
  {
    _id: "62e92e2a42cefbf8f8a4b012",
    title:
      "The 5 Second Rule: Transform your Life, Work, and Confidence with Everyday Courage",
  },
  {
    _id: "62e92e2a42cefbf8f8a4b014",
    title: "Time Management Proven Techniques for Making Every Minute Count",
  },
  {
    _id: "62e92e2a42cefbf8f8a4b016",
    title: "Getting Things Done: The Art of Stress-Free Productivity",
  },
  {
    _id: "62e92e2a42cefbf8f8a4b018",
    title: "Time Management - American Management Association",
  },
  {
    _id: "62e92e2a42cefbf8f8a4b01a",
    title: "Effective Time Management Strategies",
  },
  {
    _id: "62e92e2a42cefbf8f8a4b01c",
    title: "Do the Work: Overcome Resistance and Get Out of Your Own Way",
  },
  {
    _id: "62e92e2a42cefbf8f8a4b01e",
    title:
      "The Energy Bus: 10 Rules to Fuel Your Life, Work, and Team with Positive Energy",
  },
  {
    _id: "62e92e2a42cefbf8f8a4b020",
    title: "Foreign Exchange and Money Markets",
  },
  {
    _id: "62e92e2a42cefbf8f8a4b022",
    title: "Money Management Skills",
  },
  {
    _id: "62e92e2a42cefbf8f8a4b024",
    title: "Time Management Skills",
  },
  {
    _id: "62e92e2b42cefbf8f8a4b026",
    title: "A trader's money management system",
  },
  {
    _id: "62e92e2b42cefbf8f8a4b028",
    title: "Time Management",
  },
  {
    _id: "62e92e2b42cefbf8f8a4b02a",
    title: "Successful Time Management for Dummies",
  },
  {
    _id: "62e92e2b42cefbf8f8a4b02c",
    title: "How to Test if Your Business Will Make Money",
  },
  {
    _id: "62e92e2b42cefbf8f8a4b02e",
    title: "TRADING SYSTEMS AND MONEY MANAGEMENT",
  },
  {
    _id: "62e92e2b42cefbf8f8a4b030",
    title: "Human Capital Management —Payroll/ Time and Labor",
  },
  {
    _id: "62e92e2b42cefbf8f8a4b032",
    title: "Time Management",
  },
  {
    _id: "62e92e2b42cefbf8f8a4b034",
    title: "Your Money, Your Goals",
  },
  {
    _id: "62e92e2b42cefbf8f8a4b036",
    title: "Money, Home and Food Management",
  },
  {
    _id: "62e92e2b42cefbf8f8a4b038",
    title:
      "Process Engineering and Best Practices for Systematic Trading and Investment",
  },
  {
    _id: "62e92e6119b6451ffbbb020b",
    title: "Strategic Leadership",
  },
  {
    _id: "62e92e6119b6451ffbbb020d",
    title: "Innovation, Creativity and Leadership",
  },
  {
    _id: "62e92e6119b6451ffbbb020f",
    title: "Leading with NLP",
  },
  {
    _id: "62e92e6119b6451ffbbb0211",
    title: "Leadership and Program Management",
  },
  {
    _id: "62e92e6119b6451ffbbb0213",
    title: "Leadership - What Really Matters",
  },
  {
    _id: "62e92e6119b6451ffbbb0215",
    title: "Ethics in Higher Education: Values-driven Leaders for the Future",
  },
  {
    _id: "62e92e6119b6451ffbbb0217",
    title: "Leading Organizational Learning",
  },
  {
    _id: "62e92e6119b6451ffbbb0219",
    title: "The Bible on Leadership",
  },
  {
    _id: "62e92e6119b6451ffbbb021b",
    title: "Global Ethics for Leadership",
  },
  {
    _id: "62e92e6219b6451ffbbb021d",
    title: "Leadership and Management in China",
  },
  {
    _id: "62e92e6219b6451ffbbb021f",
    title: "Leadership Institute",
  },
  {
    _id: "62e92e6219b6451ffbbb0221",
    title: "Follow the Leader",
  },
  {
    _id: "62e92e6219b6451ffbbb0223",
    title: "Responsible Leadership",
  },
  {
    _id: "62e92e6219b6451ffbbb0225",
    title: "The Art of Leadership and Management on the Ground",
  },
  {
    _id: "62e92e6219b6451ffbbb0227",
    title: "Straight-Line Leadership",
  },
  {
    _id: "62e92e6219b6451ffbbb0229",
    title: "Tactics, command, leadership",
  },
  {
    _id: "62e92e6219b6451ffbbb022b",
    title: "Academic Leadership",
  },
  {
    _id: "62e92e6219b6451ffbbb022d",
    title: "reflections on character and leadership",
  },
  {
    _id: "62e92e6219b6451ffbbb022f",
    title: "World Military Leaders: A Biographical Dictionary",
  },
  {
    _id: "62e92e6219b6451ffbbb0231",
    title: "A Guidebook for Leading and Coaching",
  },
  {
    _id: "62e92e6e00dadb4c90fb39cd",
    title: "Transforming Your Leadership Culture",
  },
  {
    _id: "62e92e6e00dadb4c90fb39cf",
    title: "A Study in American Jewish Leadership",
  },
  {
    _id: "62e92e6e00dadb4c90fb39d1",
    title: "Leaders of the Borders, Borders of the Leaders",
  },
  {
    _id: "62e92e6e00dadb4c90fb39d3",
    title: "Future Business Leaders of America",
  },
  {
    _id: "62e92e6e00dadb4c90fb39d5",
    title: "Hiring Leaders",
  },
  {
    _id: "62e92e6e00dadb4c90fb39d7",
    title: "Women Leaders in Village Panchayats",
  },
  {
    _id: "62e92e6e00dadb4c90fb39d9",
    title: "leadership and motivation in hospitality",
  },
  {
    _id: "62e92e6f00dadb4c90fb39db",
    title: "Leadership on the Frontlines",
  },
  {
    _id: "62e92e7f1cab96984906d989",
    title: "Strategic Leadership",
  },
  {
    _id: "62e92e7f1cab96984906d98b",
    title: "Interpersonal Skills: A Key to Effective Leadership",
  },
  {
    _id: "62e92e7f1cab96984906d98d",
    title: "The Leadership Training Activity Book: 50 Exercises",
  },
  {
    _id: "62e92e7f1cab96984906d98f",
    title: "The 21 Irrefutable Laws of Leadership",
  },
  {
    _id: "62e92e7f1cab96984906d991",
    title: "Pedagogy and Practice: Teaching and Learning",
  },
  {
    _id: "62e92e7f1cab96984906d993",
    title: "the 100 most influential world leaders of all time",
  },
  {
    _id: "62e92e7f1cab96984906d995",
    title: "Leadership and Emotional Intelligence",
  },
  {
    _id: "62e92e7f1cab96984906d997",
    title: "Leadership in Organizations by Gary Yukl",
  },
  {
    _id: "62e92e7f1cab96984906d999",
    title: "The Leadership Secrets of Billy Graham",
  },
  {
    _id: "62e92e7f1cab96984906d99b",
    title: "Creating a Successful Leadership Style",
  },
  {
    _id: "62e92e7f1cab96984906d99d",
    title: "Encyclopedia of Leadership",
  },
  {
    _id: "62e92e801cab96984906d99f",
    title: "Managing Information Technology",
  },
  {
    _id: "62e92e801cab96984906d9a1",
    title: "Why Great Leaders Don't Take Yes for an Answer",
  },
  {
    _id: "62e92e801cab96984906d9a3",
    title: "Learning & Leading With Habits of Mind",
  },
  {
    _id: "62e92e801cab96984906d9a5",
    title: "Life Skills and Leadership",
  },
  {
    _id: "62e92e801cab96984906d9a7",
    title: "The John Adair Handbook of Management and Leadership",
  },
  {
    _id: "62e92e801cab96984906d9a9",
    title: "More praise for On Becoming a Leader",
  },
  {
    _id: "62e92e801cab96984906d9ab",
    title: "The Art and Practice of Leadership Coaching",
  },
  {
    _id: "62e92e801cab96984906d9ad",
    title: "General Psychology for Leaders",
  },
  {
    _id: "62e92e801cab96984906d9af",
    title: "Change Leadership",
  },
  {
    _id: "62e92eada0bf9d6956c18f30",
    title: "100 Great Business Ideas",
  },
  {
    _id: "62e92eada0bf9d6956c18f32",
    title: "Economics for Everyone : a Short Guide to the Economics",
  },
  {
    _id: "62e92eada0bf9d6956c18f34",
    title: "International Political Economy",
  },
  {
    _id: "62e92eada0bf9d6956c18f36",
    title: "Econometrics For Dummies",
  },
  {
    _id: "62e92eada0bf9d6956c18f38",
    title: "Why Great Leaders Don't Take Yes for an Answer Managing for ",
  },
  {
    _id: "62e92eada0bf9d6956c18f3a",
    title: "The Millionaire Mindset - Mission Improvement",
  },
  {
    _id: "62e92eaea0bf9d6956c18f3c",
    title: "6 Secrets to Startup Success",
  },
  {
    _id: "62e92eaea0bf9d6956c18f3e",
    title: "Greening the Economy with Agriculture - Food and Agriculture ",
  },
  {
    _id: "62e92eaea0bf9d6956c18f40",
    title: "Economic Development",
  },
  {
    _id: "62e92eaea0bf9d6956c18f42",
    title: "Paper 4: Fundamentals of Business Mathematics & Statistic",
  },
  {
    _id: "62e92eaea0bf9d6956c18f44",
    title: "Foreign Exchange and Money Markets",
  },
  {
    _id: "62e92eaea0bf9d6956c18f46",
    title: "Economic Facts and Fallacies",
  },
  {
    _id: "62e92eaea0bf9d6956c18f48",
    title: "The Business Environment",
  },
  {
    _id: "62e92eaea0bf9d6956c18f4a",
    title: "Palgrave Handbook of Econometrics: Applied Econometrics",
  },
  {
    _id: "62e92eaea0bf9d6956c18f4c",
    title: "“Money Making Secrets of Mind Power Masters”",
  },
  {
    _id: "62e92eaea0bf9d6956c18f4e",
    title: "Applied Mathematics for Business and Economics",
  },
  {
    _id: "62e92eaea0bf9d6956c18f50",
    title: "Great Wars and Great Leaders",
  },
  {
    _id: "62e92eaea0bf9d6956c18f52",
    title: "Econometrics",
  },
  {
    _id: "62e92eaea0bf9d6956c18f54",
    title: "History of Economic Thought",
  },
  {
    _id: "62e92eaea0bf9d6956c18f56",
    title: "An Outline of the History of Economic Thought",
  },
  {
    _id: "62e92eb8d219da6c18268dd9",
    title: "International Monetary Economics",
  },
  {
    _id: "62e92eb8d219da6c18268ddb",
    title: "Mathematics for Economists",
  },
  {
    _id: "62e92eb8d219da6c18268ddd",
    title: "Economic Development and Islamic Finance",
  },
  {
    _id: "62e92eb8d219da6c18268ddf",
    title: "The ABCs of Political Economy",
  },
  {
    _id: "62e92eb8d219da6c18268de1",
    title: "Millionaire Traders",
  },
  {
    _id: "62e92eb9d219da6c18268de3",
    title: "How to Test if Your Business Will Make Money",
  },
  {
    _id: "62e92eb9d219da6c18268de5",
    title: "The Wealth of Ideas: A History of Economic Thought",
  },
  {
    _id: "62e92eb9d219da6c18268de7",
    title:
      "Mathematical Methods and Models in Economic Planning, Management and Budgeting",
  },
  {
    _id: "62e92eb9d219da6c18268de9",
    title: "System of Environmental-Economic Accounting",
  },
  {
    _id: "62e92eb9d219da6c18268deb",
    title: "Money, Bank Credit, and Economic Cycles",
  },
  {
    _id: "62e92eb9d219da6c18268ded",
    title: "The Economics of Growth - Free",
  },
  {
    _id: "62e92eb9d219da6c18268def",
    title: "Econometrics",
  },
  {
    _id: "62e92eb9d219da6c18268df1",
    title: "Introduction to Modern Economic Growth",
  },
  {
    _id: "62e92eb9d219da6c18268df3",
    title: "Comprehensive Economic Development Strategy",
  },
  {
    _id: "62e92eb9d219da6c18268df5",
    title: "Economic Controversies",
  },
  {
    _id: "62e92eb9d219da6c18268df7",
    title: "ECONOMIC SCIENCE FOR RURAL DEVELOPMENT",
  },
  {
    _id: "62e92eb9d219da6c18268df9",
    title: "Islamic Finance in the Global Economy",
  },
  {
    _id: "62e92ebad219da6c18268dfb",
    title: "The Political Economy of Growth",
  },
  {
    _id: "62e92ebad219da6c18268dfd",
    title: "Principles of Political Economy",
  },
  {
    _id: "62e92ebad219da6c18268dff",
    title: "Mathematics and Economics",
  },
  {
    _id: "62e92ec163c07f7dd913d676",
    title: "Handbook of the History of Economic Thought",
  },
  {
    _id: "62e92ec163c07f7dd913d678",
    title: "HISTORY OF ECONOMIC ANALYSIS",
  },
  {
    _id: "62e92ec163c07f7dd913d67a",
    title: "Soul Economy",
  },
  {
    _id: "62e92ec163c07f7dd913d67c",
    title: "Special Economic Zones in Africa",
  },
  {
    _id: "62e92ec163c07f7dd913d67e",
    title: "creative economy",
  },
  {
    _id: "62e92ec163c07f7dd913d680",
    title: "International Economic Disintegration",
  },
  {
    _id: "62e92ec163c07f7dd913d682",
    title: "The Nature of Econometrics and Economic Data",
  },
  {
    _id: "62e92ec163c07f7dd913d684",
    title: "The Theory of Economic Growth: a 'Classical' Perspective",
  },
  {
    _id: "62e92ec163c07f7dd913d686",
    title: "Economic Mobility",
  },
  {
    _id: "62e92ec163c07f7dd913d688",
    title: "Cambodia's Economic Transformation",
  },
  {
    _id: "62e92ec163c07f7dd913d68a",
    title: "Islamic Economics: A Short History",
  },
  {
    _id: "62e92ec163c07f7dd913d68c",
    title: "The Emergence of the Global Political Economy",
  },
  {
    _id: "62e92eeec83ff2ebfe61d1ff",
    title:
      "On Becoming Baby Wise: Giving Your Infant the Gift of Nighttime Sleep",
  },
  {
    _id: "62e92eeec83ff2ebfe61d201",
    title:
      "No-Drama Discipline: The Whole-Brain Way to Calm the Chaos and Nurture Your Child's Developing Mind",
  },
  {
    _id: "62e92eeec83ff2ebfe61d203",
    title:
      "The Whole-Brain Child: 12 Revolutionary Strategies to Nurture Your Child's Developing Mind",
  },
  {
    _id: "62e92eeec83ff2ebfe61d205",
    title: "Shepherding a Child's Heart by Tedd Trip",
  },
  {
    _id: "62e92eeec83ff2ebfe61d207",
    title:
      "1-2-3 Magic: 3-Step Discipline for Calm, Effective, and Happy Parenting",
  },
  {
    _id: "62e92eeec83ff2ebfe61d209",
    title: "The Everything Kids - Math Puzzles Book",
  },
  {
    _id: "62e92eeec83ff2ebfe61d20b",
    title: "Children's Illustrated Dictionary",
  },
  {
    _id: "62e92eeec83ff2ebfe61d20d",
    title:
      "The Explosive Child: A New Approach for Understanding and Parenting Easily Frustrated, Chronically I",
  },
  {
    _id: "62e92eeec83ff2ebfe61d20f",
    title: "101 Healing Stories for Kids and Teens",
  },
  {
    _id: "62e92eeec83ff2ebfe61d211",
    title: "SPEED MATH for Kids",
  },
  {
    _id: "62e92eeec83ff2ebfe61d213",
    title: "Child Psychology and Psychiatry",
  },
  {
    _id: "62e92eeec83ff2ebfe61d215",
    title: "Science Experiments for Kids",
  },
  {
    _id: "62e92eeec83ff2ebfe61d217",
    title: "JavaScript® For Kids For Dummies",
  },
  {
    _id: "62e92eefc83ff2ebfe61d219",
    title: "Educational Psychology : Understanding Student's Thinking",
  },
  {
    _id: "62e92eefc83ff2ebfe61d21b",
    title: "Big Ideas for Little Kids: Teaching Philosophy through Children's ",
  },
  {
    _id: "62e92eefc83ff2ebfe61d21d",
    title: "chemistry experiments for children",
  },
  {
    _id: "62e92eefc83ff2ebfe61d21f",
    title: "My kids can : making math accessible to all learners, K–5",
  },
  {
    _id: "62e92eefc83ff2ebfe61d221",
    title:
      "Codependent No More: How to Stop Controlling Others and Start Caring for Yourself",
  },
  {
    _id: "62e92eefc83ff2ebfe61d223",
    title: "Elementary Visual School Arts",
  },
  {
    _id: "62e92eefc83ff2ebfe61d225",
    title: "Oh Crap! Potty Training: Everything Modern Parents Need to Know",
  },
  {
    _id: "62e92efb732aaf77997b0724",
    title: "Child Development",
  },
  {
    _id: "62e92efb732aaf77997b0726",
    title: "BIOLOGY EXPERIMENTS CHILDREN",
  },
  {
    _id: "62e92efb732aaf77997b0728",
    title: "Islamic Studies Textbooks For Kids",
  },
  {
    _id: "62e92efb732aaf77997b072a",
    title: "Children's Mathematics",
  },
  {
    _id: "62e92efb732aaf77997b072c",
    title: "Early Child Development",
  },
  {
    _id: "62e92efb732aaf77997b072e",
    title: "Watercolor Crayons",
  },
  {
    _id: "62e92efb732aaf77997b0730",
    title: "Child and Adolescent Psychiatry",
  },
  {
    _id: "62e92efb732aaf77997b0732",
    title: "Orphans and Vulnerable Children - CRIN",
  },
  {
    _id: "62e92efb732aaf77997b0734",
    title: "Investing in Maternal and Child Health",
  },
  {
    _id: "62e92efb732aaf77997b0736",
    title: "Coaching Toolkit for Child Welfare",
  },
  {
    _id: "62e92f30aab119ea5e0ba42c",
    title:
      "The Whole-Brain Child: 12 Revolutionary Strategies to Nurture Your Child's Developing Mind",
  },
  {
    _id: "62e92f30aab119ea5e0ba42e",
    title:
      "No-Drama Discipline: The Whole-Brain Way to Calm the Chaos and Nurture Your Child's Developing Mind",
  },
  {
    _id: "62e92f30aab119ea5e0ba430",
    title:
      "1-2-3 Magic: 3-Step Discipline for Calm, Effective, and Happy Parenting",
  },
  {
    _id: "62e92f30aab119ea5e0ba432",
    title: "Shepherding a Child's Heart by Tedd Trip",
  },
  {
    _id: "62e92f30aab119ea5e0ba434",
    title:
      "The Explosive Child: A New Approach for Understanding and Parenting Easily Frustrated, Chronically I",
  },
  {
    _id: "62e92f30aab119ea5e0ba436",
    title:
      "On Becoming Baby Wise: Giving Your Infant the Gift of Nighttime Sleep",
  },
  {
    _id: "62e92f30aab119ea5e0ba438",
    title:
      "Codependent No More: How to Stop Controlling Others and Start Caring for Yourself",
  },
  {
    _id: "62e92f31aab119ea5e0ba43a",
    title: "Oh Crap! Potty Training: Everything Modern Parents Need to Know",
  },
  {
    _id: "62e92f31aab119ea5e0ba43c",
    title: "Early Child Development",
  },
  {
    _id: "62e92f81cde2e959868f3970",
    title:
      "A Walk in the Woods: Rediscovering America on the Appalachian Trail",
  },
  {
    _id: "62e92f81cde2e959868f3972",
    title: "Animal, Vegetable, Miracle: A Year of Food Life",
  },
  {
    _id: "62e92f81cde2e959868f3974",
    title: "One Two Three... Infinty. Facts & Speculations in Science",
  },
  {
    _id: "62e92f81cde2e959868f3976",
    title:
      "Braiding Sweetgrass: Indigenous Wisdom, Scientific Knowledge and the Teachings of Plants",
  },
  {
    _id: "62e92f82cde2e959868f3978",
    title: "The Mismeasure of Man by Stephen Jay Gould",
  },
  {
    _id: "62e92f82cde2e959868f397a",
    title: "Basics of Environmental Science",
  },
  {
    _id: "62e92f82cde2e959868f397c",
    title: "Essentials of Ecology",
  },
  {
    _id: "62e92f82cde2e959868f397e",
    title: "How to Grow More Vegetables",
  },
  {
    _id: "62e92f82cde2e959868f3980",
    title: "Earth Science",
  },
  {
    _id: "62e92f82cde2e959868f3982",
    title: "Climate Change and Migration",
  },
  {
    _id: "62e92f82cde2e959868f3984",
    title: "Environmental Engineering FOURTH EDITION",
  },
  {
    _id: "62e92f82cde2e959868f3986",
    title: "The Tiger: A True Story of Vengeance and Survival",
  },
  {
    _id: "62e92f82cde2e959868f3988",
    title: "Greening the Economy with Agriculture - Food and Agriculture ",
  },
  {
    _id: "62e92f82cde2e959868f398a",
    title: "Encyclopedia of Environmental Science and Engineering",
  },
  {
    _id: "62e92f82cde2e959868f398c",
    title: "Solid Waste Management and Recycling",
  },
  {
    _id: "62e92f82cde2e959868f398e",
    title: "Planning and Design for Sustainable Urban Mobility",
  },
  {
    _id: "62e92f82cde2e959868f3990",
    title: "The Politics of the Environment",
  },
  {
    _id: "62e92f82cde2e959868f3992",
    title: "Climate Change and Health",
  },
  {
    _id: "62e92f82cde2e959868f3994",
    title: "Hidden Nature",
  },
  {
    _id: "62e92f82cde2e959868f3996",
    title: "Cities and Climate Change",
  },
  {
    _id: "62e92f83cde2e959868f3998",
    title: "Farm Animal Metabolism and Nutrition",
  },
  {
    _id: "62e92f83cde2e959868f399a",
    title: "Environmental Biotechnology - Theory and Application",
  },
  {
    _id: "62e92fb68168654c6f89bfa5",
    title: "Sustainability and National Security",
  },
  {
    _id: "62e92fb68168654c6f89bfa7",
    title: "Tropical Forest Community Ecology",
  },
  {
    _id: "62e92fb68168654c6f89bfa9",
    title: "Environmental benefits of recycling",
  },
  {
    _id: "62e92fb68168654c6f89bfab",
    title: "Politics of Nature: How to Bring the Sciences into Democracy",
  },
  {
    _id: "62e92fb78168654c6f89bfad",
    title:
      "Fish as feed inputs for aquaculture: practices, sustainability and implications",
  },
  {
    _id: "62e92fb78168654c6f89bfaf",
    title: "Biodiversity Conservation and Phylogenetic Systematics",
  },
  {
    _id: "62e92fb78168654c6f89bfb1",
    title: "Energy Project Financing : Resources and Strategies for Success",
  },
  {
    _id: "62e92fb78168654c6f89bfb3",
    title: "Home Gardens in Nepal",
  },
  {
    _id: "62e92fb78168654c6f89bfb5",
    title: "Organic Waste Recycling",
  },
  {
    _id: "62e92fb78168654c6f89bfb7",
    title: "Agroforestry and Biodiversity Conservation in Tropical Landscapes",
  },
  {
    _id: "62e92fb78168654c6f89bfb9",
    title: "Metal Recycling",
  },
  {
    _id: "62e92fb78168654c6f89bfbb",
    title: "Bird Ecology and Conservation A Handbook of Techniques",
  },
  {
    _id: "62e92fb78168654c6f89bfbd",
    title: "History, Culture, and Conservation - IUCN",
  },
  {
    _id: "62e92fb78168654c6f89bfbf",
    title: "A Directory of Paper Recycling Resources",
  },
  {
    _id: "62e92fb78168654c6f89bfc1",
    title: "Sustainable diets and biodiversity - Food and Agriculture ",
  },
  {
    _id: "62e92fb78168654c6f89bfc3",
    title: "Antarctic Climate Change and the Environment",
  },
  {
    _id: "62e92fb88168654c6f89bfc5",
    title: "comprehensive wildlife conservation strategy",
  },
  {
    _id: "62e92fb88168654c6f89bfc7",
    title: "BIRD CONSERVATION",
  },
  {
    _id: "62e92fb88168654c6f89bfc9",
    title: "Environmental Impacts of Shale Gas Extraction in Canada",
  },
  {
    _id: "62e92fb88168654c6f89bfcb",
    title: "Aspects of Cheetah (Acinonyx jubatus) Biology, Ecology and ",
  },
  {
    _id: "62e92fc2d5e53e88578b649d",
    title:
      "A Walk in the Woods: Rediscovering America on the Appalachian Trail",
  },
  {
    _id: "62e92fd261a6105938632a32",
    title: "Rebuilding West Africa's Food Potential - Food and Agriculture ",
  },
  {
    _id: "62e92fd361a6105938632a34",
    title: "Fifty Years of Invasion Ecology - LEG/UFPR",
  },
  {
    _id: "62e92fd361a6105938632a36",
    title: "An unauthorized biography of Dana White",
  },
  {
    _id: "62e92fd361a6105938632a38",
    title: "Environment and aquaculture in developing countries",
  },
  {
    _id: "62e92fd361a6105938632a3a",
    title: "Dictionary of Australasian Biography",
  },
  {
    _id: "62e92fd361a6105938632a3c",
    title: "Forest Products, Livelihoods and Conservation",
  },
  {
    _id: "62e92fd361a6105938632a3e",
    title:
      "sustainability - SUNY College of Environmental Science and Forestry",
  },
  {
    _id: "62e92fd361a6105938632a40",
    title: "Biological Diversity Conservation and the Law",
  },
  {
    _id: "62e92fd361a6105938632a42",
    title: "Cultural Heritage and Natural Disasters",
  },
  {
    _id: "62e92fd361a6105938632a44",
    title: "Sturgeon biodiversity and conservation",
  },
  {
    _id: "62e92fd361a6105938632a46",
    title:
      "Scarcity and surfeit : the ecology of Africa's conflicts - Disasters and ",
  },
  {
    _id: "62e9300a683b7abed0dd0722",
    title: "Animal, Vegetable, Miracle: A Year of Food Life",
  },
  {
    _id: "62e9300a683b7abed0dd0724",
    title: "Light on Yoga: The Bible of Modern Yoga",
  },
  {
    _id: "62e9300a683b7abed0dd0726",
    title:
      "Genius Foods: Become Smarter, Happier, and More Productive While Protecting Your Brain for Life",
  },
  {
    _id: "62e9300a683b7abed0dd0728",
    title:
      "Light on Life: The Yoga Journey to Wholeness, Inner Peace, and Ultimate Freedom",
  },
  {
    _id: "62e9300a683b7abed0dd072a",
    title: "On Food and Cooking: The Science and Lore of the Kitchen",
  },
  {
    _id: "62e9300a683b7abed0dd072c",
    title: "Essentials of Anatomy and Physiology",
  },
  {
    _id: "62e9300a683b7abed0dd072e",
    title: "Marcus Aurelius: Meditations",
  },
  {
    _id: "62e9300b683b7abed0dd0730",
    title:
      "The Daily Stoic: 366 Meditations on Wisdom, Perseverance, and the Art of Living",
  },
  {
    _id: "62e9300b683b7abed0dd0732",
    title: "Handbook of Medicinal Herbs",
  },
  {
    _id: "62e9300b683b7abed0dd0734",
    title:
      "The Miracle Morning: The Not-So-Obvious Secret Guaranteed to Transform Your Life",
  },
  {
    _id: "62e9300b683b7abed0dd0736",
    title: "The Complete Yoga Poses",
  },
  {
    _id: "62e9300b683b7abed0dd0738",
    title: "Blink: The Power of Thinking Without Thinking",
  },
  {
    _id: "62e9300b683b7abed0dd073a",
    title: "Out of the Shadows: Understanding Sexual Addiction",
  },
  {
    _id: "62e9300b683b7abed0dd073c",
    title: "Awakening the Third Eye",
  },
  {
    _id: "62e9300b683b7abed0dd073e",
    title: "The Complete Home Guide to Herbs, Natural Healing, and Nutrition",
  },
  {
    _id: "62e9300b683b7abed0dd0740",
    title: "The Philosophy of Psychology",
  },
  {
    _id: "62e9300b683b7abed0dd0742",
    title: "Healthy Weight Loss Without Dieting",
  },
  {
    _id: "62e9300c683b7abed0dd0744",
    title: "The Food Lab: Better Home Cooking Through Science",
  },
  {
    _id: "62e9300c683b7abed0dd0746",
    title:
      "Keto Comfort Foods: Family Favorite Recipes Made Low-Carb and Healthy",
  },
  {
    _id: "62e9300c683b7abed0dd0748",
    title: "Anxiety & Depression Workbook",
  },
  {
    _id: "62e9300c683b7abed0dd074a",
    title:
      "The War of Art: Break Through the Blocks and Win Your Inner Creative Battles",
  },
  {
    _id: "62e9300c683b7abed0dd074c",
    title: "Encyclopedia of Diets - A Guide to Health and Nutrition",
  },
  {
    _id: "62e9300c683b7abed0dd074e",
    title: "Emergency Medicine",
  },
  {
    _id: "62e9301aa8e95559b9e01b9a",
    title:
      "The Obstacle Is the Way: The Timeless Art of Turning Trials into Triumph",
  },
  {
    _id: "62e9301aa8e95559b9e01b9c",
    title:
      "Attached: The New Science of Adult Attachment and How It Can Help You Find and Keep Love ",
  },
  {
    _id: "62e9301aa8e95559b9e01b9e",
    title: "The Choice: Embrace the Possible",
  },
  {
    _id: "62e9301aa8e95559b9e01ba0",
    title: "Teaching Organic Farming & Gardening",
  },
  {
    _id: "62e9301aa8e95559b9e01ba2",
    title: "12-WEEK WORKOUT PLAN",
  },
  {
    _id: "62e9301ba8e95559b9e01ba4",
    title: "Emotional Healing for Dummies.",
  },
  {
    _id: "62e9301ba8e95559b9e01ba6",
    title: "How to Grow More Vegetables",
  },
  {
    _id: "62e9301ba8e95559b9e01ba8",
    title: "Introduction to Human Nutrition 2nd Edition",
  },
  {
    _id: "62e9301ba8e95559b9e01baa",
    title: "The Best Raw Food RECIPES: How To Eat Yourself Healthy",
  },
  {
    _id: "62e9301ba8e95559b9e01bac",
    title: "The Radiology Handbook",
  },
  {
    _id: "62e9301ba8e95559b9e01bae",
    title:
      "The ONE Thing: The Surprisingly Simple Truth Behind Extraordinary Results",
  },
  {
    _id: "62e9301ba8e95559b9e01bb0",
    title: "Food Microbiology",
  },
  {
    _id: "62e9301ba8e95559b9e01bb2",
    title: "The Dialectical Behavior Therapy Skills Workbook for Anxiety",
  },
  {
    _id: "62e9301ba8e95559b9e01bb4",
    title: "Ganong's Review of Medical Physiology",
  },
  {
    _id: "62e9301ba8e95559b9e01bb6",
    title:
      "Light on Life: The Yoga Journey to Wholeness, Inner Peace, and Ultimate Freedom",
  },
  {
    _id: "62e9301ba8e95559b9e01bb8",
    title: "100 WEIGHT LOSS TIPS",
  },
  {
    _id: "62e9301ba8e95559b9e01bba",
    title: "The Seven Spiritual Laws of Yoga: A Practical Guide to Healing",
  },
  {
    _id: "62e9301ba8e95559b9e01bbc",
    title: "100 Cases in Clinical Medicine",
  },
  {
    _id: "62e9301ca8e95559b9e01bbe",
    title: "Light on Yoga: The Bible of Modern Yoga",
  },
  {
    _id: "62e9301ca8e95559b9e01bc0",
    title: "Pocket Clinician Internal Medicine",
  },
  {
    _id: "62e93046834ca807fabe1838",
    title: "Forbidden Cures and Underground Medicine • I",
  },
  {
    _id: "62e93046834ca807fabe183a",
    title: "FITNESS ABCs - International Fitness Association",
  },
  {
    _id: "62e93046834ca807fabe183c",
    title: "Anatomy & Physiology Workbook",
  },
  {
    _id: "62e93047834ca807fabe183e",
    title: "Sustainable Agriculture and Food",
  },
  {
    _id: "62e93047834ca807fabe1840",
    title: "A Book of Mediterranean Food",
  },
  {
    _id: "62e93047834ca807fabe1842",
    title: "100 QUESTIONS IN CARDIOLOGY",
  },
  {
    _id: "62e93047834ca807fabe1844",
    title: "Sports Nutrition Guide",
  },
  {
    _id: "62e93047834ca807fabe1846",
    title: "Healing the Symptoms Known as Autism",
  },
  {
    _id: "62e93047834ca807fabe1848",
    title: "A Programmer’s Guide to the Mind",
  },
  {
    _id: "62e93047834ca807fabe184a",
    title: "Indian Food Recipes",
  },
  {
    _id: "62e93047834ca807fabe184c",
    title: "Educational Psychology 2nd Edition",
  },
  {
    _id: "62e93047834ca807fabe184e",
    title: "The Acid Alkaline Balance Diet",
  },
  {
    _id: "62e93047834ca807fabe1850",
    title: "Reiki for Dummies",
  },
  {
    _id: "62e93048834ca807fabe1852",
    title: "Food Styling for Photographers",
  },
  {
    _id: "62e93048834ca807fabe1854",
    title: "Handbook of Hygiene Control in the Food Industry",
  },
  {
    _id: "62e93048834ca807fabe1856",
    title: "Pharmacology",
  },
  {
    _id: "62e93048834ca807fabe1858",
    title: "Principles and Practice of Pharmaceutical Medicine",
  },
  {
    _id: "62e93048834ca807fabe185a",
    title: "THE CANADIAN ENCYCLOPEDIA NATURAL MEDICINE",
  },
  {
    _id: "62e93048834ca807fabe185c",
    title: "Beyond Brawn - IronMag™ Bodybuilding & Fitness Portal",
  },
  {
    _id: "62e93048834ca807fabe185e",
    title: "Primal Blueprint Quick and Easy Meals",
  },
  {
    _id: "62e93051ec9c068ee0763caf",
    title: "Food: A Cultural Culinary History",
  },
  {
    _id: "62e93051ec9c068ee0763cb1",
    title: "The Body/Mind Medicine Connection",
  },
  {
    _id: "62e93051ec9c068ee0763cb3",
    title: "Homemade Dog Food Recipe Guide",
  },
  {
    _id: "62e93051ec9c068ee0763cb5",
    title: "The 80/10/10 Diet",
  },
  {
    _id: "62e93052ec9c068ee0763cb7",
    title: "THE SCIENCE OF YOGA - Centre for Yoga Studies",
  },
  {
    _id: "62e93052ec9c068ee0763cb9",
    title: "The Lean Mass Diet - Bodybuilding.com",
  },
  {
    _id: "62e93052ec9c068ee0763cbb",
    title: "Forensic Dentistry, Second Edition",
  },
  {
    _id: "62e93052ec9c068ee0763cbd",
    title: "PAEDIATRIC DENTISTRY - 3rd Ed. (2005)",
  },
  {
    _id: "62e93052ec9c068ee0763cbf",
    title: "Dictionary of Pharmaceutical Medicine",
  },
  {
    _id: "62e93052ec9c068ee0763cc1",
    title: "Weight Loss and Good Health: Dr. Atkins Way",
  },
  {
    _id: "62e93052ec9c068ee0763cc3",
    title: "Personal Trainer Course - Canadian Fitness Education Services",
  },
  {
    _id: "62e93052ec9c068ee0763cc5",
    title: "Amino Acids in Human Nutrition and Health",
  },
  {
    _id: "62e93053ec9c068ee0763cc7",
    title: "Chemistry for Pharmacy Students",
  },
  {
    _id: "62e93053ec9c068ee0763cc9",
    title: "Real Restaurant Recipes: Food That Built a Business",
  },
  {
    _id: "62e93054ec9c068ee0763ccb",
    title: "Quick Review Cards for Medical Laboratory Science",
  },
  {
    _id: "62e93054ec9c068ee0763ccd",
    title: "Alkaline Diet",
  },
  {
    _id: "62e93054ec9c068ee0763ccf",
    title: "Food Biochemistry and Food Processing",
  },
  {
    _id: "62e93054ec9c068ee0763cd1",
    title: "Paleo Diet Cookbook",
  },
  {
    _id: "62e93054ec9c068ee0763cd3",
    title: "Traditional Herbal Plant Knowledge, Identifications",
  },
  {
    _id: "62e9306d3ae01de99e76f4d6",
    title: "The Weight Loss Manual",
  },
  {
    _id: "62e9306d3ae01de99e76f4d8",
    title: "Dairy Ingredients for Food Processing",
  },
  {
    _id: "62e9306d3ae01de99e76f4da",
    title:
      "Antibiotic Resistance Bacteria, Viruses, Fungi, and other Pathogens, a Threat to World Health",
  },
  {
    _id: "62e9306d3ae01de99e76f4dc",
    title: "Human Vitamin and Mineral Requirements - Food and Agriculture ",
  },
  {
    _id: "62e9306d3ae01de99e76f4de",
    title: "Physics and Radiobiology of Nuclear Medicine",
  },
  {
    _id: "62e9306d3ae01de99e76f4e0",
    title: "Oxford Dictionary of Medical Quotations",
  },
  {
    _id: "62e9306d3ae01de99e76f4e2",
    title:
      "Fish as feed inputs for aquaculture: practices, sustainability and implications",
  },
  {
    _id: "62e9306d3ae01de99e76f4e4",
    title: "Thyroid For Dummies",
  },
  {
    _id: "62e9306d3ae01de99e76f4e6",
    title: "Life Skills Education Toolkit for Orphans & Vulnerable Children",
  },
  {
    _id: "62e9306d3ae01de99e76f4e8",
    title: "Pretest Emergency Medicine",
  },
  {
    _id: "62e9306d3ae01de99e76f4ea",
    title: "Fiscal Fitness",
  },
  {
    _id: "62e9306e3ae01de99e76f4ec",
    title: "Medical Bacteriology - The Carter Center",
  },
  {
    _id: "62e9306e3ae01de99e76f4ee",
    title: "Food as Medicine",
  },
  {
    _id: "62e9306e3ae01de99e76f4f0",
    title: "Overcoming Anxiety For Dummies, 2nd Edition",
  },
  {
    _id: "62e9306e3ae01de99e76f4f2",
    title: "Handbook of Pediatric Surgical Critical Care",
  },
  {
    _id: "62e9306e3ae01de99e76f4f4",
    title: "Survival Nursing",
  },
  {
    _id: "62e9306e3ae01de99e76f4f6",
    title: "The Food Safety Hazard Guidebook",
  },
  {
    _id: "62e9306e3ae01de99e76f4f8",
    title: "The Anabolic Diet - Roger Hardin",
  },
  {
    _id: "62e9306e3ae01de99e76f4fa",
    title: "HEALTH & FITNESS EXPERT - Survival Training",
  },
  {
    _id: "62e9306e3ae01de99e76f4fc",
    title: "Textbook of Personalized Medicine",
  },
  {
    _id: "62e9307e983064ae8ac4e853",
    title: "Principles of Human Nutrition",
  },
  {
    _id: "62e9307e983064ae8ac4e855",
    title: "Medical Surgical Nursing Part 3",
  },
  {
    _id: "62e9307e983064ae8ac4e857",
    title:
      "The Beautiful Tree: Indigenous Indian Education in the Eighteenth Century",
  },
  {
    _id: "62e9307e983064ae8ac4e859",
    title: "Diets and Dieting: A Cultural Encyclopedia",
  },
  {
    _id: "62e9307e983064ae8ac4e85b",
    title: "The Raw Truth",
  },
  {
    _id: "62e9307e983064ae8ac4e85d",
    title: "NUTRITION IN SPORT",
  },
  {
    _id: "62e930b8688e6dac33be3c6e",
    title: "Lonely Planet Guide - University of Aberdeen",
  },
  {
    _id: "62e9312c116dc7fa1e89aae0",
    title: "36 Signature Training Workout Programs",
  },
  {
    _id: "62e9312c116dc7fa1e89aae4",
    title: "Muay Thai Training Exercises",
  },
  {
    _id: "62e9312d116dc7fa1e89aaf4",
    title: "Principles of Functional Exercise",
  },
  {
    _id: "62e9312e116dc7fa1e89ab02",
    title: "Alkaline Diet",
  },
  {
    _id: "62e9312d116dc7fa1e89aaea",
    title: "Fat-Burning Diet and Nutrition Guide",
  },
  {
    _id: "62e9312d116dc7fa1e89aaec",
    title: "Abs Diet Cookbook",
  },
  {
    _id: "62e9312d116dc7fa1e89aaee",
    title: "Sport And Exercise Psychology",
  },
  {
    _id: "62e9312d116dc7fa1e89aafa",
    title: "Beyond Brawn - IronMag™ Bodybuilding & Fitness Portal",
  },
  {
    _id: "62e9312d116dc7fa1e89aaf6",
    title: "Traditional Chinese Medicine Medicated Diet Recipe Book",
  },
  {
    _id: "62e9312d116dc7fa1e89aaf8",
    title: "FITNESS ABCs - International Fitness Association",
  },
  {
    _id: "62e9312c116dc7fa1e89aadc",
    title: "12-WEEK WORKOUT PLAN",
  },
  {
    _id: "62e9312c116dc7fa1e89aae8",
    title: "The Navy SEAL Physical Fitness Guide - Human Performance ",
  },
  {
    _id: "62e9312c116dc7fa1e89aae2",
    title: "Fitness For Dummies 3rd Edition",
  },
  {
    _id: "62e9312d116dc7fa1e89aaf0",
    title: "Total Soccer Conditioning Vol. 1",
  },
  {
    _id: "62e9312c116dc7fa1e89aade",
    title: "Joel Fuhrman - Eat To Live",
  },
  {
    _id: "62e9312c116dc7fa1e89aae6",
    title: "The Ultimate Bodybuilding Diet, Nutrition and Workout Plan ",
  },
  {
    _id: "62e9312d116dc7fa1e89aaf2",
    title: "TOTAL SOCCER FITNESS",
  },
  {
    _id: "62e9312d116dc7fa1e89aafc",
    title: "The Lean Mass Diet - Bodybuilding.com",
  },
  {
    _id: "62e9312e116dc7fa1e89ab00",
    title: "Personal Trainer Course - Canadian Fitness Education Services",
  },
  {
    _id: "62e9312e116dc7fa1e89aafe",
    title: "Weight Loss and Good Health: Dr. Atkins Way",
  },
  {
    _id: "62e9313798028412614c145c",
    title: "Primal Blueprint Fitness - Crossfit Praha",
  },
  {
    _id: "62e9313798028412614c145e",
    title: "Counsels on Diet and Foods - Centro de Pesquisas Ellen G. White",
  },
  {
    _id: "62e9313798028412614c1460",
    title: "Fiscal Fitness",
  },
  {
    _id: "62e9313798028412614c1462",
    title: "The Anabolic Diet - Roger Hardin",
  },
  {
    _id: "62e9313898028412614c1464",
    title: "HEALTH & FITNESS EXPERT - Survival Training",
  },
  {
    _id: "62e9313898028412614c1466",
    title: "Sustainable diets and biodiversity - Food and Agriculture ",
  },
  {
    _id: "62e9313898028412614c1468",
    title: "The Rosedale Diet",
  },
  {
    _id: "62e9313898028412614c146a",
    title: "secrets toa long healthy life",
  },
  {
    _id: "62e9313898028412614c146c",
    title: "The Rice Diet Renewal",
  },
  {
    _id: "62e9313898028412614c146e",
    title: "Wii Fitness For Dummies",
  },
  {
    _id: "62e9313898028412614c1470",
    title: "ACSM Health & Fitness Summit",
  },
  {
    _id: "62e9313898028412614c1472",
    title: "Cardiovascular Fitness Procedures Manual",
  },
  {
    _id: "62e9313898028412614c1474",
    title: "Diet Wise Academy",
  },
  {
    _id: "62e9313998028412614c1476",
    title: "The Real You Diet",
  },
  {
    _id: "62e9313998028412614c1478",
    title: "Diet, the way to health.",
  },
  {
    _id: "62e9316f343fd41506970e5a",
    title: "The China Study by Thomas Campbell",
  },
  {
    _id: "62e93170343fd41506970e5c",
    title:
      "Genius Foods: Become Smarter, Happier, and More Productive While Protecting Your Brain for Life",
  },
  {
    _id: "62e93170343fd41506970e5e",
    title: "The Complete Home Guide to Herbs, Natural Healing, and Nutrition",
  },
  {
    _id: "62e93170343fd41506970e60",
    title: "The Food Lab: Better Home Cooking Through Science",
  },
  {
    _id: "62e93170343fd41506970e62",
    title:
      "Keto Comfort Foods: Family Favorite Recipes Made Low-Carb and Healthy",
  },
  {
    _id: "62e93170343fd41506970e64",
    title: "On Food and Cooking: The Science and Lore of the Kitchen",
  },
  {
    _id: "62e93170343fd41506970e66",
    title: "Teaching Organic Farming & Gardening",
  },
  {
    _id: "62e93170343fd41506970e68",
    title: "How to Grow More Vegetables",
  },
  {
    _id: "62e93170343fd41506970e6a",
    title: "The Best Raw Food RECIPES: How To Eat Yourself Healthy",
  },
  {
    _id: "62e93170343fd41506970e6c",
    title: "Food Microbiology",
  },
  {
    _id: "62e93170343fd41506970e6e",
    title: "Joel Fuhrman - Eat To Live",
  },
  {
    _id: "62e93170343fd41506970e70",
    title: "Food: What the Heck Should I Eat?",
  },
  {
    _id: "62e93170343fd41506970e72",
    title: "Greening the Economy with Agriculture - Food and Agriculture ",
  },
  {
    _id: "62e93170343fd41506970e74",
    title: "Smoothies for Optimum Health",
  },
  {
    _id: "62e93170343fd41506970e76",
    title: "Food Chemistry",
  },
  {
    _id: "62e93170343fd41506970e78",
    title: "Secrets of the Best Chefs",
  },
  {
    _id: "62e93170343fd41506970e7a",
    title: "Complete Food and Nutrition Guide",
  },
  {
    _id: "62e93171343fd41506970e7c",
    title: "The Ultimate Bodybuilding Diet, Nutrition and Workout Plan ",
  },
  {
    _id: "62e93171343fd41506970e7e",
    title: "Timeless Secrets of Health and Rejuvenation",
  },
  {
    _id: "62e93171343fd41506970e80",
    title: "Handbook of Medicinal Herbs",
  },
  {
    _id: "62e93171343fd41506970e82",
    title: "Modern Food Microbiology 7th Ed - College of Science and ",
  },
  {
    _id: "62e931794e7d9b0eb9bce0b6",
    title: "Clinical Nutrition in Practice",
  },
  {
    _id: "62e931794e7d9b0eb9bce0b8",
    title: "Food Biochemistry and Food Processing",
  },
  {
    _id: "62e9317a4e7d9b0eb9bce0ba",
    title: "The Art of French Pastry",
  },
  {
    _id: "62e9317a4e7d9b0eb9bce0bc",
    title: "The China Study by Thomas Campbell",
  },
  {
    _id: "62e9317a4e7d9b0eb9bce0be",
    title: "Abs Diet Cookbook",
  },
  {
    _id: "62e9317a4e7d9b0eb9bce0c0",
    title: "Handbook of Farm, Dairy, and Food Machinery",
  },
  {
    _id: "62e9317a4e7d9b0eb9bce0c2",
    title: "Vegan Indian Cooking",
  },
  {
    _id: "62e9317a4e7d9b0eb9bce0c4",
    title: "The Psychology of Eating",
  },
  {
    _id: "62e9317a4e7d9b0eb9bce0c6",
    title: "Handbook of Meat Processing",
  },
  {
    _id: "62e9317a4e7d9b0eb9bce0c8",
    title: "Chinese Cook Book",
  },
  {
    _id: "62e9317a4e7d9b0eb9bce0ca",
    title: "Superfoods for Dummies",
  },
  {
    _id: "62e9317a4e7d9b0eb9bce0cc",
    title: "Drying of Foods, Vegetables and Fruits",
  },
  {
    _id: "62e9317a4e7d9b0eb9bce0ce",
    title: "The China Study - TRAINING IN PARADISE",
  },
  {
    _id: "62e9317a4e7d9b0eb9bce0d0",
    title: "Food and Wine Pairing : A Sensory Experience",
  },
  {
    _id: "62e9317a4e7d9b0eb9bce0d2",
    title: "The New Complete Book of Food",
  },
  {
    _id: "62e9317b4e7d9b0eb9bce0d4",
    title: "Traditional Chinese Medicine Medicated Diet Recipe Book",
  },
  {
    _id: "62e9317b4e7d9b0eb9bce0d6",
    title: "Sustainable Agriculture and Food",
  },
  {
    _id: "62e9317b4e7d9b0eb9bce0d8",
    title: "A Book of Mediterranean Food",
  },
  {
    _id: "62e9317b4e7d9b0eb9bce0da",
    title: "Indian Food Recipes",
  },
  {
    _id: "62e9317b4e7d9b0eb9bce0dc",
    title: "The Acid Alkaline Balance Diet",
  },
  {
    _id: "62e9318ddbc03f71b7f3e648",
    title: "The Rosedale Diet",
  },
  {
    _id: "62e9318ddbc03f71b7f3e64a",
    title: "Leung's Encyclopedia of Common Natural Ingredients Used in Food",
  },
  {
    _id: "62e9318ddbc03f71b7f3e64c",
    title: "Growing Food",
  },
  {
    _id: "62e9318ddbc03f71b7f3e64e",
    title: "Rebuilding West Africa's Food Potential - Food and Agriculture ",
  },
  {
    _id: "62e9318edbc03f71b7f3e650",
    title: "Principles of Food Sanitation",
  },
  {
    _id: "62e9318edbc03f71b7f3e652",
    title: "Diet Wise Academy",
  },
  {
    _id: "62e9318edbc03f71b7f3e654",
    title: "Healing for the Age of Enlightenment",
  },
  {
    _id: "62e9318edbc03f71b7f3e656",
    title: "Encyclopedia of Wicca in the Kitchen",
  },
  {
    _id: "62e9318edbc03f71b7f3e658",
    title: "Seed Protein Improvement in Cereals ana Grain Legumes",
  },
  {
    _id: "62e9318edbc03f71b7f3e65a",
    title: "Food Biochemistry and Food Processing",
  },
  {
    _id: "62e931c7dbc03f71b7f3e65c",
    title: "The Rosedale Diet",
  },
  {
    _id: "62e931c8dbc03f71b7f3e65e",
    title: "Leung's Encyclopedia of Common Natural Ingredients Used in Food",
  },
  {
    _id: "62e931c9dbc03f71b7f3e660",
    title: "Growing Food",
  },
  {
    _id: "62e931c9dbc03f71b7f3e662",
    title: "Rebuilding West Africa's Food Potential - Food and Agriculture ",
  },
  {
    _id: "62e931c9dbc03f71b7f3e664",
    title: "Principles of Food Sanitation",
  },
  {
    _id: "62e931c9dbc03f71b7f3e666",
    title: "Diet Wise Academy",
  },
  {
    _id: "62e931c9dbc03f71b7f3e668",
    title: "Healing for the Age of Enlightenment",
  },
  {
    _id: "62e931c9dbc03f71b7f3e66a",
    title: "Encyclopedia of Wicca in the Kitchen",
  },
  {
    _id: "62e931c9dbc03f71b7f3e66c",
    title: "Seed Protein Improvement in Cereals ana Grain Legumes",
  },
  {
    _id: "62e931c9dbc03f71b7f3e66e",
    title: "Food Biochemistry and Food Processing",
  },
  {
    _id: "62e93212afe68a4971c99af1",
    title: "1000 Poses in Fashion",
  },
  {
    _id: "62e93212afe68a4971c99af3",
    title: "Sewing, The World's Greatest Hobby",
  },
  {
    _id: "62e93212afe68a4971c99af5",
    title: "The Makeup Book",
  },
  {
    _id: "62e93212afe68a4971c99af7",
    title: "How to Apply Makeup Professionally",
  },
  {
    _id: "62e93212afe68a4971c99af9",
    title: "The Green Beauty Guide",
  },
  {
    _id: "62e93212afe68a4971c99afb",
    title: "Fashion Design and Illustration",
  },
  {
    _id: "62e93212afe68a4971c99afd",
    title: "Handbook of Medicinal Herbs",
  },
  {
    _id: "62e93212afe68a4971c99aff",
    title: "Jewellery & Designer Fashion",
  },
  {
    _id: "62e93212afe68a4971c99b01",
    title: "Bobbi Brown Makeup Manual",
  },
  {
    _id: "62e93212afe68a4971c99b03",
    title: "The Language of Fashion",
  },
  {
    _id: "62e93212afe68a4971c99b05",
    title: "Your Guide to NATURAL BEAUTY",
  },
  {
    _id: "62e93213afe68a4971c99b07",
    title: "Introduction The Fashion Business: Theory, Practice, Image",
  },
  {
    _id: "62e93213afe68a4971c99b09",
    title: "Luxury Fashion Branding",
  },
  {
    _id: "62e93213afe68a4971c99b0b",
    title: "hottest trends and fashion",
  },
  {
    _id: "62e93213afe68a4971c99b0d",
    title: "Fashion Institute of Technology",
  },
  {
    _id: "62e93213afe68a4971c99b0f",
    title: "Sustainable Fashion: A Handbook for Educators",
  },
  {
    _id: "62e93213afe68a4971c99b11",
    title: "FASHION-able",
  },
  {
    _id: "62e93213afe68a4971c99b13",
    title: "Düsseldorf - Fashion Square",
  },
  {
    _id: "62e93238afe68a4971c99b15",
    title: "1000 Poses in Fashion",
  },
  {
    _id: "62e9323aafe68a4971c99b17",
    title: "Sewing, The World's Greatest Hobby",
  },
  {
    _id: "62e9323aafe68a4971c99b19",
    title: "The Makeup Book",
  },
  {
    _id: "62e9323aafe68a4971c99b1b",
    title: "How to Apply Makeup Professionally",
  },
  {
    _id: "62e9323aafe68a4971c99b1d",
    title: "The Green Beauty Guide",
  },
  {
    _id: "62e9323aafe68a4971c99b1f",
    title: "Fashion Design and Illustration",
  },
  {
    _id: "62e9323aafe68a4971c99b21",
    title: "Handbook of Medicinal Herbs",
  },
  {
    _id: "62e9323aafe68a4971c99b23",
    title: "Jewellery & Designer Fashion",
  },
  {
    _id: "62e9323aafe68a4971c99b25",
    title: "Bobbi Brown Makeup Manual",
  },
  {
    _id: "62e9323aafe68a4971c99b27",
    title: "The Language of Fashion",
  },
  {
    _id: "62e9323bafe68a4971c99b29",
    title: "Your Guide to NATURAL BEAUTY",
  },
  {
    _id: "62e9323bafe68a4971c99b2b",
    title: "Introduction The Fashion Business: Theory, Practice, Image",
  },
  {
    _id: "62e9323bafe68a4971c99b2d",
    title: "Luxury Fashion Branding",
  },
  {
    _id: "62e9323bafe68a4971c99b2f",
    title: "hottest trends and fashion",
  },
  {
    _id: "62e9323bafe68a4971c99b31",
    title: "Fashion Institute of Technology",
  },
  {
    _id: "62e9323bafe68a4971c99b33",
    title: "Sustainable Fashion: A Handbook for Educators",
  },
  {
    _id: "62e9323bafe68a4971c99b35",
    title: "FASHION-able",
  },
  {
    _id: "62e9323bafe68a4971c99b37",
    title: "Düsseldorf - Fashion Square",
  },
  {
    _id: "62e93244d378e6f02f30209f",
    title: "Landscape Irrigation Products",
  },
  {
    _id: "62e93244d378e6f02f3020a1",
    title: "Choosing the Right Plants - University of Nevada, Reno",
  },
  {
    _id: "62e93244d378e6f02f3020a3",
    title: "Roses For Canadians For Dummies",
  },
  {
    _id: "62e93245d378e6f02f3020a5",
    title: "Native Species Planting Guide for New York City",
  },
  {
    _id: "62e93271eaf206e78d6254ab",
    title: "Dubai & Abu Dhabi 7",
  },
  {
    _id: "62e93271eaf206e78d6254ad",
    title: "India Rajasthan",
  },
  {
    _id: "62e93271eaf206e78d6254af",
    title: "Morocco: Sleeping & Eating",
  },
  {
    _id: "62e93271eaf206e78d6254b1",
    title: "Lonely Planet Guide",
  },
  {
    _id: "62e93271eaf206e78d6254b3",
    title: "Sri Lanka 13e 2015",
  },
  {
    _id: "62e93271eaf206e78d6254b5",
    title: "Adelaide & South Australia",
  },
  {
    _id: "62e93271eaf206e78d6254b7",
    title: "London For Dummies, 6th Edition",
  },
  {
    _id: "62e93272eaf206e78d6254b9",
    title: "Download Dive Guide to the Philippines",
  },
  {
    _id: "62e93272eaf206e78d6254bb",
    title: "Lonely Planet Japanese Phrasebook.pdf",
  },
  {
    _id: "62e93272eaf206e78d6254bd",
    title: "Ultimate-Travelist",
  },
  {
    _id: "62e93272eaf206e78d6254bf",
    title: "The Rough Guide to Montenegro",
  },
  {
    _id: "62e93272eaf206e78d6254c1",
    title: "Greece Peloponnese",
  },
  {
    _id: "62e93272eaf206e78d6254c3",
    title: "Explore Travel Guides Colombia",
  },
  {
    _id: "62e93272eaf206e78d6254c5",
    title: "A Traveller's Guide to Making a Difference Around the World",
  },
  {
    _id: "62e93272eaf206e78d6254c7",
    title: "Bangkok - Lonely Planet",
  },
  {
    _id: "62e93272eaf206e78d6254c9",
    title: "Thailand",
  },
  {
    _id: "62e93272eaf206e78d6254cb",
    title: "california",
  },
  {
    _id: "62e93272eaf206e78d6254cd",
    title: "[Lonely Planet] Pacific Northwest's Best Trips 2e 2013",
  },
  {
    _id: "62e93272eaf206e78d6254cf",
    title: "The Sudan Handbook",
  },
  {
    _id: "62e93273eaf206e78d6254d1",
    title: "Ecuador - Guía de Oro - Página Principal",
  },
  {
    _id: "62e9327f933416c17c05b689",
    title: "Africa 13 - Lonely Planet",
  },
  {
    _id: "62e9327f933416c17c05b68b",
    title: "[Lonely Planet] New York & the Mid-Atlantic's Best Trips 2e 2014",
  },
  {
    _id: "62e9327f933416c17c05b68d",
    title: "The travel issue: San Diego",
  },
  {
    _id: "62e9327f933416c17c05b68f",
    title: "Chicago Travel Guide",
  },
  {
    _id: "62e9327f933416c17c05b691",
    title: "Malaysia",
  },
  {
    _id: "62e9327f933416c17c05b693",
    title: "Misadventures in Far Away Places",
  },
  {
    _id: "62e9327f933416c17c05b695",
    title: "Understand & Survival - Lonely Planet",
  },
  {
    _id: "62e9327f933416c17c05b697",
    title: "Strategic Implications of China's Underground Great Wall",
  },
  {
    _id: "62e9327f933416c17c05b699",
    title: "Living Blue Planet Report",
  },
  {
    _id: "62e93280933416c17c05b69b",
    title: "Travels in a Tin Can",
  },
  {
    _id: "62e93280933416c17c05b69d",
    title: "The Journal of San Diego History",
  },
  {
    _id: "62e93280933416c17c05b69f",
    title: "To travel here is to encounter men wear",
  },
  {
    _id: "62e932ad4e1716909346c0ac",
    title:
      "The Art of Work: A Proven Path to Discovering What You Were Meant to Do",
  },
  {
    _id: "62e932ad4e1716909346c0ae",
    title: "The Power of Now: A Guide to Spiritual Enlightenment",
  },
  {
    _id: "62e932ad4e1716909346c0b0",
    title:
      "You Are a Badass: How to Stop Doubting Your Greatness and Start Living an Awesome Life",
  },
  {
    _id: "62e932ad4e1716909346c0b2",
    title:
      "Boundaries: When to Say Yes, How to Say No to Take Control of Your Life",
  },
  {
    _id: "62e932ad4e1716909346c0b4",
    title: "Do the Work by Steven Pressfield",
  },
  {
    _id: "62e932ad4e1716909346c0b6",
    title: "Living in the Light: A guide to personal transformation",
  },
  {
    _id: "62e932ae4e1716909346c0b8",
    title:
      "1001 Motivational Quotes for Success: Great Quotes from Great Minds",
  },
  {
    _id: "62e932ae4e1716909346c0ba",
    title: "I am Malala: The Story of the Girl Who Stood Up for Education",
  },
  {
    _id: "62e932ae4e1716909346c0bc",
    title: "Praying To Get Results By Kenneth E. Hagin",
  },
  {
    _id: "62e932ae4e1716909346c0be",
    title: "Resisting Happiness: A True Story about Why We Sabotage Ourselves",
  },
  {
    _id: "62e932ae4e1716909346c0c0",
    title: "The Power of Self-Esteem",
  },
  {
    _id: "62e932ae4e1716909346c0c2",
    title: "100 Ways to Motivate Yourself: Change Your Life Forever",
  },
  {
    _id: "62e932ae4e1716909346c0c4",
    title: "The Gifts of Imperfection: Embrace Who You Are",
  },
  {
    _id: "62e932ae4e1716909346c0c6",
    title: "Marcus Aurelius: Meditations",
  },
  {
    _id: "62e932ae4e1716909346c0c8",
    title: "Give and Take: WHY HELPING OTHERS DRIVES OUR SUCCESS",
  },
  {
    _id: "62e932ae4e1716909346c0ca",
    title: "Law of Success (21st Century Edition)",
  },
  {
    _id: "62e932ae4e1716909346c0cc",
    title:
      "The Daily Stoic: 366 Meditations on Wisdom, Perseverance, and the Art of Living",
  },
  {
    _id: "62e932ae4e1716909346c0ce",
    title: "The Purpose-Driven Life: What on Earth Am I Here For?",
  },
  {
    _id: "62e932af4e1716909346c0d0",
    title: "Start Where You Are: A Guide to Compassionate Living",
  },
  {
    _id: "62e932af4e1716909346c0d2",
    title: "Psychology - A Self-Teaching Guide",
  },
  {
    _id: "62e932af4e1716909346c0d4",
    title:
      "The 5 Second Rule: Transform your Life, Work, and Confidence with Everyday Courage",
  },
  {
    _id: "62e932b923dadd38044fa945",
    title:
      "The Miracle Morning: The Not-So-Obvious Secret Guaranteed to Transform Your Life",
  },
  {
    _id: "62e932b923dadd38044fa947",
    title: "100 Ways to Motivate Others",
  },
  {
    _id: "62e932b923dadd38044fa949",
    title: "Spiritual Warfare by Kenneth E. Hagin",
  },
  {
    _id: "62e932b923dadd38044fa94b",
    title:
      "The Book of Secret Wisdom - The Prophetic Record of Human Destiny and Evolution",
  },
  {
    _id: "62e932b923dadd38044fa94d",
    title: "How To Stop Worrying And Start Living",
  },
  {
    _id: "62e932b923dadd38044fa94f",
    title: "Influence: The Psychology of Persuasion",
  },
  {
    _id: "62e932b923dadd38044fa951",
    title: "Blink: The Power of Thinking Without Thinking",
  },
  {
    _id: "62e932b923dadd38044fa953",
    title: "Three Mistakes of My Life by Chetan Bhagat",
  },
  {
    _id: "62e932b923dadd38044fa955",
    title: "Getting Things Done: The Art of Stress-Free Productivity",
  },
  {
    _id: "62e932ba23dadd38044fa957",
    title: "What Every BODY Is Saying",
  },
  {
    _id: "62e932ba23dadd38044fa959",
    title: "Awakening the Third Eye",
  },
  {
    _id: "62e932ba23dadd38044fa95b",
    title: "Understanding the Anointing By Kenneth E. Hagin",
  },
  {
    _id: "62e932ba23dadd38044fa95d",
    title: "The Philosophy of Psychology",
  },
  {
    _id: "62e932ba23dadd38044fa95f",
    title: "Body Language Secrets A Guide During Courtship & Dating",
  },
  {
    _id: "62e932ba23dadd38044fa961",
    title: "The Bible Atlas - Ultimate Bible Reference Library",
  },
  {
    _id: "62e932ba23dadd38044fa963",
    title: "The Psychology of Self-Esteem",
  },
  {
    _id: "62e932ba23dadd38044fa965",
    title: "Quran in English",
  },
  {
    _id: "62e932ba23dadd38044fa967",
    title: "The Essential Rumi by Coleman Barks",
  },
  {
    _id: "62e932ba23dadd38044fa969",
    title: "Do the Work by Steven Pressfield",
  },
  {
    _id: "62e932ba23dadd38044fa96b",
    title:
      "The Nature Fix: Why Nature Makes us Happier, Healthier and More Creative",
  },
  {
    _id: "62e932c736a46fb896b8ee30",
    title: "The Lost Books of the Bible: The Great Rejected Texts",
  },
  {
    _id: "62e932c736a46fb896b8ee32",
    title:
      "The War of Art: Break Through the Blocks and Win Your Inner Creative Battles",
  },
  {
    _id: "62e932c736a46fb896b8ee34",
    title: "The Artist’s Way: A Spiritual Path to Higher Creativity",
  },
  {
    _id: "62e932c736a46fb896b8ee36",
    title: "The Seven Spirits of God - Divine Secrets to the Miraculous",
  },
  {
    _id: "62e932c736a46fb896b8ee38",
    title: "Waiting And Dating",
  },
  {
    _id: "62e932c736a46fb896b8ee3a",
    title: "Inspiration to Live Your Magic: 75 Inspiring Biographies",
  },
  {
    _id: "62e932c736a46fb896b8ee3c",
    title: "How To Make Girls Chase",
  },
  {
    _id: "62e932c736a46fb896b8ee3e",
    title: "How the World Works",
  },
  {
    _id: "62e932c736a46fb896b8ee40",
    title:
      "How to Change Your Mind: What the New Science of Psychedelics Teaches Us About Consciousness",
  },
  {
    _id: "62e932c736a46fb896b8ee42",
    title:
      "The Obstacle Is the Way: The Timeless Art of Turning Trials into Triumph",
  },
  {
    _id: "62e932c836a46fb896b8ee44",
    title:
      "Attached: The New Science of Adult Attachment and How It Can Help You Find and Keep Love ",
  },
  {
    _id: "62e932c836a46fb896b8ee46",
    title: "The Choice: Embrace the Possible",
  },
  {
    _id: "62e932c836a46fb896b8ee48",
    title: "Be Here Now: Open Your Mind to Spirituality",
  },
  {
    _id: "62e932c836a46fb896b8ee4a",
    title: "7 Habits Of Highly Effective People",
  },
  {
    _id: "62e932c836a46fb896b8ee4c",
    title: "Encyclopedia of Islam",
  },
  {
    _id: "62e932c836a46fb896b8ee4e",
    title: "Encyclopedia of Hinduism",
  },
  {
    _id: "62e932c836a46fb896b8ee50",
    title: "Model Marriage by Bishop Dag Heward Mills",
  },
  {
    _id: "62e932c936a46fb896b8ee52",
    title: "365 Steps to Self-confidence",
  },
  {
    _id: "62e932c936a46fb896b8ee54",
    title: "101 Most Powerful Prayers in the Bible",
  },
  {
    _id: "62e932c936a46fb896b8ee56",
    title: "Attract And Seduce",
  },
  {
    _id: "62e932d10e5f7d8724171200",
    title: "The Buddha and His Teachings",
  },
  {
    _id: "62e932d10e5f7d8724171202",
    title:
      "Present Over Perfect: Leaving Behind Frantic for a Simpler, More Soulful Way of Living",
  },
  {
    _id: "62e932d10e5f7d8724171204",
    title: "Let Your Life Speak: Listening for the Voice of Vocation",
  },
  {
    _id: "62e932d10e5f7d8724171206",
    title: "Rumi: The Book of Love - Poems of Ecstasy and Longing",
  },
  {
    _id: "62e932d10e5f7d8724171208",
    title:
      "The ONE Thing: The Surprisingly Simple Truth Behind Extraordinary Results",
  },
  {
    _id: "62e932d10e5f7d872417120a",
    title: "101 Ways to Have 100% Success in Marriage",
  },
  {
    _id: "62e932d10e5f7d872417120c",
    title: "Boundaries in Dating: How Healthy Choices Grow",
  },
  {
    _id: "62e932d10e5f7d872417120e",
    title:
      "Heaven is for Real : A Little Boy's Astounding Story of His Trip to Heaven and Back",
  },
  {
    _id: "62e932d20e5f7d8724171210",
    title: "The Dialectical Behavior Therapy Skills Workbook for Anxiety",
  },
  {
    _id: "62e932d20e5f7d8724171212",
    title: "A COURSE IN MIRACLES: Foundation For Inner Peace",
  },
  {
    _id: "62e932d20e5f7d8724171214",
    title: "Bible History: Old Testament",
  },
  {
    _id: "62e932d20e5f7d8724171216",
    title: "Proof of Heaven: A Neurosurgeon's Journey into the Afterlife",
  },
  {
    _id: "62e932d20e5f7d8724171218",
    title:
      "Light on Life: The Yoga Journey to Wholeness, Inner Peace, and Ultimate Freedom",
  },
  {
    _id: "62e932d20e5f7d872417121a",
    title: "The Seven Spiritual Laws of Yoga: A Practical Guide to Healing",
  },
  {
    _id: "62e932d20e5f7d872417121c",
    title:
      "The spiritual life - Intuition - Awakening your Spiritual Awareness",
  },
  {
    _id: "62e932d20e5f7d872417121e",
    title: "The Heart of Hearts of Rumi's Mathnawi",
  },
  {
    _id: "62e932d20e5f7d8724171220",
    title: "Do the Work: Overcome Resistance and Get Out of Your Own Way",
  },
  {
    _id: "62e932d20e5f7d8724171222",
    title: "The Millionaire Mindset - Mission Improvement",
  },
  {
    _id: "62e932d30e5f7d8724171224",
    title: "Principles of Marriage and Family Ethics",
  },
  {
    _id: "62e932d30e5f7d8724171226",
    title: "Being Mortal: Illness, Medicine and What Matters in the End",
  },
  {
    _id: "62e932dc7718fb75460f886e",
    title: "The Illustrated Encyclopedia of Hinduism (2 Vol Set)",
  },
  {
    _id: "62e932dc7718fb75460f8870",
    title: "Encyclopedia of Psychology and Religion",
  },
  {
    _id: "62e932dc7718fb75460f8872",
    title: "Spiritual Warfare, Angels and Demons",
  },
  {
    _id: "62e932dc7718fb75460f8874",
    title: "Meditation For DUMMIES, 2nd Edition",
  },
  {
    _id: "62e932dc7718fb75460f8876",
    title: "How Learning Works",
  },
  {
    _id: "62e932dc7718fb75460f8878",
    title:
      "The Energy Bus: 10 Rules to Fuel Your Life, Work, and Team with Positive Energy",
  },
  {
    _id: "62e932dd7718fb75460f887a",
    title:
      "Self Improvement – The Top 101 Experts that Help Us Improve Our Lives",
  },
  {
    _id: "62e932dd7718fb75460f887c",
    title: "A History of Western Philosophy",
  },
  {
    _id: "62e932dd7718fb75460f887e",
    title: "Earths Forbidden Secrets By Maxwell Igan",
  },
  {
    _id: "62e932dd7718fb75460f8880",
    title: "Language, Culture, and Society",
  },
  {
    _id: "62e932dd7718fb75460f8882",
    title: "Marriage and Family",
  },
  {
    _id: "62e932dd7718fb75460f8884",
    title: "Communication Theory Media, Technology and Society",
  },
  {
    _id: "62e932dd7718fb75460f8886",
    title: "Goddesses in Every Woman",
  },
  {
    _id: "62e932dd7718fb75460f8888",
    title: "Islam: Faith, Practice & History",
  },
  {
    _id: "62e932dd7718fb75460f888a",
    title: "Attraction Isn't A Choice",
  },
  {
    _id: "62e932dd7718fb75460f888c",
    title: "Keys to Success",
  },
  {
    _id: "62e932dd7718fb75460f888e",
    title:
      "The Secret Life of Nature: Living in Harmony With the Hidden World ",
  },
  {
    _id: "62e932dd7718fb75460f8890",
    title: "History of the Christian Church, Volume I: Apostolic Christianity ",
  },
  {
    _id: "62e932de7718fb75460f8892",
    title: "Healing After Loss: Daily Meditations For Working Through Grief",
  },
  {
    _id: "62e932e78878cda712d2d7e6",
    title: "Ultimate Grimoire and Spellbook",
  },
  {
    _id: "62e932e88878cda712d2d7e8",
    title: "The Spiritual Man",
  },
  {
    _id: "62e932e88878cda712d2d7ea",
    title: "Acceptance and Mindfulness in Cognitive Behavior Therapy",
  },
  {
    _id: "62e932e88878cda712d2d7ec",
    title: "Beautiful Boy: A Father's Journey through His Son's Addiction",
  },
  {
    _id: "62e932e88878cda712d2d7ee",
    title: "Mars and Venus On a Date",
  },
  {
    _id: "62e932e88878cda712d2d7f0",
    title: "The Psychology of Creative Writing",
  },
  {
    _id: "62e932e88878cda712d2d7f2",
    title: "How to Manifest Your Desires - Law of Attraction Haven",
  },
  {
    _id: "62e932e88878cda712d2d7f4",
    title: "Child Development",
  },
  {
    _id: "62e932e88878cda712d2d7f6",
    title: "Christian Apocrypha and Early Christian Literature",
  },
  {
    _id: "62e932e88878cda712d2d7f8",
    title: "Double Your Dating",
  },
  {
    _id: "62e932e88878cda712d2d7fa",
    title: "A Guide to Teaching Practice",
  },
  {
    _id: "62e932e88878cda712d2d7fc",
    title: "Goals - Advanced Life Skills",
  },
  {
    _id: "62e932e98878cda712d2d7fe",
    title: "The Occult of Roman Catholicism",
  },
  {
    _id: "62e932e98878cda712d2d800",
    title: "NLP SECRETS: Upgrade Your Mind",
  },
  {
    _id: "62e932e98878cda712d2d802",
    title: "Grimoire for the Apprentice Wizard",
  },
  {
    _id: "62e932e98878cda712d2d804",
    title:
      "Everybody, Always: Becoming Love in a World Full of Setbacks and Difficult People",
  },
  {
    _id: "62e932e98878cda712d2d806",
    title: "Motivating Your Mind, Inspiring Your Spirit",
  },
  {
    _id: "62e932e98878cda712d2d808",
    title: "Encyclopedia of Buddhism",
  },
  {
    _id: "62e932e98878cda712d2d80a",
    title: "The 8 Proven Secrets to SMART Success",
  },
  {
    _id: "62e932e98878cda712d2d80c",
    title: "The Language of Argument",
  },
  {
    _id: "62e932f81a4a2e258c4b8a4a",
    title: "How to be Invisible",
  },
  {
    _id: "62e932f81a4a2e258c4b8a4c",
    title: "The Great Secret of Mind",
  },
  {
    _id: "62e932f81a4a2e258c4b8a4e",
    title: "Cognitive Therapy of Anxiety Disorders: Science and Practice",
  },
  {
    _id: "62e932f81a4a2e258c4b8a50",
    title: "A Dictionary of Philosophy of Religion",
  },
  {
    _id: "62e932f81a4a2e258c4b8a52",
    title: "Learning & Leading With Habits of Mind",
  },
  {
    _id: "62e932f81a4a2e258c4b8a54",
    title: "Awakening and Insight: Zen Buddhism and Psychotherapy",
  },
  {
    _id: "62e932f81a4a2e258c4b8a56",
    title: "The Creative Mind",
  },
  {
    _id: "62e932f81a4a2e258c4b8a58",
    title: "14 Habits of Highly Effective Disciples",
  },
  {
    _id: "62e932f81a4a2e258c4b8a5a",
    title: "Intuitive Thinking As a Spiritual Path",
  },
  {
    _id: "62e932f91a4a2e258c4b8a5c",
    title: "Dream Dictionary for Dummies",
  },
  {
    _id: "62e932f91a4a2e258c4b8a5e",
    title: "THE 100 MOST INFLUENTIAL INVENTORS OF ALL TIME",
  },
  {
    _id: "62e932f91a4a2e258c4b8a60",
    title: "An introduction to Zen Buddhism",
  },
  {
    _id: "62e932f91a4a2e258c4b8a62",
    title: "Building Confidence for Dummies",
  },
  {
    _id: "62e932f91a4a2e258c4b8a64",
    title: "Reading Lolita in Tehran: A Memoir in Books",
  },
  {
    _id: "62e932f91a4a2e258c4b8a66",
    title: "The Holy Bible: Hebrew Transliteration",
  },
  {
    _id: "62e932f91a4a2e258c4b8a68",
    title: "Transforming the Mind",
  },
  {
    _id: "62e932f91a4a2e258c4b8a6a",
    title: "The Dating Black book",
  },
  {
    _id: "62e932f91a4a2e258c4b8a6c",
    title: "Semiotics: Theory And Applications",
  },
  {
    _id: "62e932f91a4a2e258c4b8a6e",
    title: "Matthew Henry's Concise Commentary on the Bible",
  },
  {
    _id: "62e932f91a4a2e258c4b8a70",
    title: "Mastering The Art Of Success",
  },
  {
    _id: "62e93309ad968c17d12b4807",
    title: "Scientific Dating Methods",
  },
  {
    _id: "62e93309ad968c17d12b4809",
    title: "The Body/Mind Medicine Connection",
  },
  {
    _id: "62e93309ad968c17d12b480b",
    title: "SPIRITUAL ASTROLOGY",
  },
  {
    _id: "62e93309ad968c17d12b480d",
    title: "Motivation, Emotion, and Cognition",
  },
  {
    _id: "62e93309ad968c17d12b480f",
    title: "Called The Love",
  },
  {
    _id: "62e93309ad968c17d12b4811",
    title: "The Story Of Lord Shiva’s Marriage With Parvati",
  },
  {
    _id: "62e93309ad968c17d12b4813",
    title: "The Holy Bible: Hebrew Old Testament",
  },
  {
    _id: "62e93309ad968c17d12b4815",
    title:
      "A Comparison Between Islam, Christianity, Judaism and the Choice Between Them",
  },
  {
    _id: "62e93309ad968c17d12b4817",
    title:
      "Prayers Meditations And Dynamic Decrees For Personal And World Transformation",
  },
  {
    _id: "62e93309ad968c17d12b4819",
    title: "Islam: A Challenge To Faith - Muhammad, Islam & Christianity ",
  },
  {
    _id: "62e9330aad968c17d12b481b",
    title:
      "History of the Christian Church, Volume IV: Mediaeval Christianity ",
  },
  {
    _id: "62e9330aad968c17d12b481d",
    title: "A Spiritual Awakening: 12 Steps to Freedom",
  },
  {
    _id: "62e9330aad968c17d12b481f",
    title: "Live Lean Success quotes",
  },
  {
    _id: "62e9330aad968c17d12b4821",
    title: "Thoughts to Build On",
  },
  {
    _id: "62e9330aad968c17d12b4823",
    title: "Hinduism Mini Encyclopedia",
  },
  {
    _id: "62e9330aad968c17d12b4825",
    title: "The Big Little Book of Magick",
  },
  {
    _id: "62e9330aad968c17d12b4827",
    title:
      "Religious Rivalries in the Early Roman Empire and the Rise of Christianity",
  },
  {
    _id: "62e9330aad968c17d12b4829",
    title: "The Cambridge History of Islam 2A",
  },
  {
    _id: "62e9330aad968c17d12b482b",
    title: "Marx, Critical Theory, and Religion",
  },
  {
    _id: "62e9330aad968c17d12b482d",
    title: "How Professors Think",
  },
  {
    _id: "62e93315cf78fbf491a1608a",
    title: "Speak to Win",
  },
  {
    _id: "62e93315cf78fbf491a1608c",
    title: "Buddhism in India",
  },
  {
    _id: "62e93315cf78fbf491a1608e",
    title: "How to Kick the Worry Habit - Jim Rohn.pdf - Motivational Magic",
  },
  {
    _id: "62e93316cf78fbf491a16090",
    title: "A Spiritual Biography",
  },
  {
    _id: "62e93316cf78fbf491a16092",
    title:
      "The History of Christianity: From the Disciples to the Dawn of the Reformation",
  },
  {
    _id: "62e93316cf78fbf491a16094",
    title: "Religious Studies: The Key Concepts",
  },
  {
    _id: "62e93316cf78fbf491a16096",
    title: "Atheism And Theism - Blackwell - Philosophy",
  },
  {
    _id: "62e93316cf78fbf491a16098",
    title: "Gunsmithing & Toolmaking Bible",
  },
  {
    _id: "62e93316cf78fbf491a1609a",
    title: "Islamic Banking and Finance: Fundamentals and Contemporary Issues",
  },
  {
    _id: "62e93316cf78fbf491a1609c",
    title: "A Wiccan Bible",
  },
  {
    _id: "62e93316cf78fbf491a1609e",
    title: "Islamic Theology and the Philosophy of Science",
  },
  {
    _id: "62e93316cf78fbf491a160a0",
    title: "The Spiritual Laws",
  },
  {
    _id: "62e93317cf78fbf491a160a2",
    title: "Motivation and Learning Strategies for College Success",
  },
  {
    _id: "62e93317cf78fbf491a160a4",
    title: "Good Morning, Holy Spirit",
  },
  {
    _id: "62e93317cf78fbf491a160a6",
    title: "Yoga and Psychology and Psychotherapy - Centre for Yoga Studies",
  },
  {
    _id: "62e93317cf78fbf491a160a8",
    title: "Succeed for Yourself",
  },
  {
    _id: "62e93317cf78fbf491a160aa",
    title: "THINK & GROW RICH",
  },
  {
    _id: "62e93317cf78fbf491a160ac",
    title: "How They Succeeded",
  },
  {
    _id: "62e93317cf78fbf491a160ae",
    title: "Muhammad, the Qur'an & Islam",
  },
  {
    _id: "62e93321851d408bd99e06ed",
    title: "The Bible Key Lessons",
  },
  {
    _id: "62e93321851d408bd99e06ef",
    title: "The History of Christian Theology",
  },
  {
    _id: "62e93322851d408bd99e06f1",
    title: "1 100 Ways to Motivate Yourself - Instituto de Medicina ",
  },
  {
    _id: "62e93322851d408bd99e06f3",
    title: "Strengthening marriage",
  },
  {
    _id: "62e93322851d408bd99e06f5",
    title: "The Esoteric Library | www.sacred-magick.com",
  },
  {
    _id: "62e93322851d408bd99e06f7",
    title: "Religious Studies: A Global View",
  },
  {
    _id: "62e93322851d408bd99e06f9",
    title: "The Life of Hinduism",
  },
  {
    _id: "62e93322851d408bd99e06fb",
    title: "Islamic Finance in the Global Economy",
  },
  {
    _id: "62e93322851d408bd99e06fd",
    title: "Win the Future",
  },
  {
    _id: "62e93322851d408bd99e06ff",
    title: "The Holy Bible: Greek (Modern) Translation",
  },
  {
    _id: "62e93322851d408bd99e0701",
    title: "The Taqua of Marriage",
  },
  {
    _id: "62e93322851d408bd99e0703",
    title: "The Prophetic Medicine - Mission Islam",
  },
  {
    _id: "62e93323851d408bd99e0705",
    title: "Body and Health in Yoga, ¯Ayurveda, and Tantra",
  },
  {
    _id: "62e93323851d408bd99e0707",
    title: "The Ministry Of The Holy Spirit - A totally free bible ",
  },
  {
    _id: "62e93323851d408bd99e0709",
    title: "A Companion Roman Religion - Spiritual Minds",
  },
  {
    _id: "62e93323851d408bd99e070b",
    title: "The Biography of the Prophet",
  },
  {
    _id: "62e93323851d408bd99e070d",
    title: "From Judaism to Christianity",
  },
  {
    _id: "62e93323851d408bd99e070f",
    title: "Oscar Wilde, the story of an unhappy friendship",
  },
  {
    _id: "62e93323851d408bd99e0711",
    title: "EncountEring GOD - Deeper Revelation Books",
  },
  {
    _id: "62e9332d2be6a58d781d8105",
    title: "Self-Realization and Other Awakenings",
  },
  {
    _id: "62e9332d2be6a58d781d8107",
    title: "Love & Romance Guidance Report",
  },
  {
    _id: "62e9332d2be6a58d781d8109",
    title: "A HISTORY OF PHILOSOPHY",
  },
  {
    _id: "62e9332d2be6a58d781d810b",
    title: "The Quintessence of Secret (Esoteric) Buddhism",
  },
  {
    _id: "62e9332d2be6a58d781d810d",
    title: "The Oxford Handbook of Philosophy of Religion",
  },
  {
    _id: "62e9332d2be6a58d781d810f",
    title: "To Learn and to Teach More Effectively - Religious Studies Center",
  },
  {
    _id: "62e9332e2be6a58d781d8111",
    title: "What Is Hinduism?",
  },
  {
    _id: "62e9332e2be6a58d781d8113",
    title: "Poetica Erotica",
  },
  {
    _id: "62e9332e2be6a58d781d8115",
    title: "Christianity is Not Religion - Online Christian Library",
  },
  {
    _id: "62e9332e2be6a58d781d8117",
    title: "Magic Motivation",
  },
  {
    _id: "62e9332e2be6a58d781d8119",
    title: "Sirat Ibn Hisham Biography of the Prophet",
  },
  {
    _id: "62e9332e2be6a58d781d811b",
    title: "The Teen Survival Guide to Dating & Relating: Real - Annie Fox",
  },
  {
    _id: "62e9332e2be6a58d781d811d",
    title: "A Mosque Among The Stars: Islam and Science Fiction",
  },
  {
    _id: "62e9332e2be6a58d781d811f",
    title: "My Faith - ISLAMIC STUDIES",
  },
  {
    _id: "62e9332e2be6a58d781d8121",
    title: "Islam in Transition: Muslim Perspectives",
  },
  {
    _id: "62e9332e2be6a58d781d8123",
    title: "Record of a Friendship",
  },
  {
    _id: "62e9332f2be6a58d781d8125",
    title: "Instruments and Markets Islamic Finance",
  },
  {
    _id: "62e9332f2be6a58d781d8127",
    title: "Love Vs. Marriage",
  },
  {
    _id: "62e9333bd20e11e23c2001e7",
    title: "Commentary on Romans by John Calvin",
  },
  {
    _id: "62e9333bd20e11e23c2001e9",
    title: "eternal marriage",
  },
  {
    _id: "62e9333cd20e11e23c2001eb",
    title: "The Holy Bible - Containing the Old and New Testaments",
  },
  {
    _id: "62e9333cd20e11e23c2001ed",
    title: "Turbo Success",
  },
  {
    _id: "62e9333cd20e11e23c2001ef",
    title: "AANP Homeopathic Psychiatry",
  },
  {
    _id: "62e9333cd20e11e23c2001f1",
    title: "Quaternary Dating Methods",
  },
  {
    _id: "62e9333cd20e11e23c2001f3",
    title: "Religious Studies Anthology",
  },
  {
    _id: "62e9333cd20e11e23c2001f5",
    title: "Levirate Marriage and the Family in Ancient Judaism",
  },
  {
    _id: "62e9333cd20e11e23c2001f7",
    title: "The Religions of Ancient Egypt and Babylonia",
  },
  {
    _id: "62e9333cd20e11e23c2001f9",
    title: "One God, Three Faiths: Judaism, Christianity, and Islam",
  },
  {
    _id: "62e9333cd20e11e23c2001fb",
    title: "DATE WITH THE GODS",
  },
  {
    _id: "62e9333dd20e11e23c2001fd",
    title: "BOUNDARIES OF THE SOUL",
  },
  {
    _id: "62e9333dd20e11e23c2001ff",
    title: "Explorations in Theology and Practice",
  },
  {
    _id: "62e9333dd20e11e23c200201",
    title: "Jesus, Prophet of Islam - The Islamic Bulletin",
  },
  {
    _id: "62e9333dd20e11e23c200203",
    title: "I Love the Thames",
  },
  {
    _id: "62e9333dd20e11e23c200205",
    title: "Class 5 Religious Studies: Islam",
  },
  {
    _id: "62e9333dd20e11e23c200207",
    title: "Popular Deities of Chinese Buddhism (Illustrated)",
  },
  {
    _id: "62e9333dd20e11e23c200209",
    title: "Transforming teaching and learning in Asia and the Pacific",
  },
  {
    _id: "62e9333dd20e11e23c20020b",
    title: "The Religion of the Italian Communes 1125-1325",
  },
  {
    _id: "62e9333dd20e11e23c20020d",
    title: "The Dictionary of Human Geography",
  },
  {
    _id: "62e933a713b3f259ead4a02a",
    title:
      "Present Over Perfect: Leaving Behind Frantic for a Simpler, More Soulful Way of Living",
  },
  {
    _id: "62e933a713b3f259ead4a02c",
    title: "The Artist’s Way: A Spiritual Path to Higher Creativity",
  },
  {
    _id: "62e933a713b3f259ead4a02e",
    title: "Let Your Life Speak: Listening for the Voice of Vocation",
  },
  {
    _id: "62e933a713b3f259ead4a030",
    title: "Give and Take: WHY HELPING OTHERS DRIVES OUR SUCCESS",
  },
  {
    _id: "62e933a713b3f259ead4a032",
    title: "The Power of Now: A Guide to Spiritual Enlightenment",
  },
  {
    _id: "62e933a713b3f259ead4a034",
    title: "Start Where You Are: A Guide to Compassionate Living",
  },
  {
    _id: "62e933a813b3f259ead4a036",
    title: "Psychology - A Self-Teaching Guide",
  },
  {
    _id: "62e933a813b3f259ead4a038",
    title: "I am Malala: The Story of the Girl Who Stood Up for Education",
  },
  {
    _id: "62e933a813b3f259ead4a03a",
    title: "Praying To Get Results By Kenneth E. Hagin",
  },
  {
    _id: "62e933a813b3f259ead4a03c",
    title: "Resisting Happiness: A True Story about Why We Sabotage Ourselves",
  },
  {
    _id: "62e933a913b3f259ead4a03e",
    title: "Spiritual Warfare by Kenneth E. Hagin",
  },
  {
    _id: "62e933a913b3f259ead4a040",
    title:
      "The Book of Secret Wisdom - The Prophetic Record of Human Destiny and Evolution",
  },
  {
    _id: "62e933a913b3f259ead4a042",
    title: "Awakening the Third Eye",
  },
  {
    _id: "62e933a913b3f259ead4a044",
    title: "Understanding the Anointing By Kenneth E. Hagin",
  },
  {
    _id: "62e933a913b3f259ead4a046",
    title: "The Bible Atlas - Ultimate Bible Reference Library",
  },
  {
    _id: "62e933a913b3f259ead4a048",
    title: "Quran in English",
  },
  {
    _id: "62e933a913b3f259ead4a04a",
    title: "The Essential Rumi by Coleman Barks",
  },
  {
    _id: "62e933a913b3f259ead4a04c",
    title: "The Lost Books of the Bible: The Great Rejected Texts",
  },
  {
    _id: "62e933aa13b3f259ead4a04e",
    title: "The Seven Spirits of God - Divine Secrets to the Miraculous",
  },
  {
    _id: "62e933aa13b3f259ead4a050",
    title:
      "How to Change Your Mind: What the New Science of Psychedelics Teaches Us About Consciousness",
  },
  {
    _id: "62e933aa13b3f259ead4a052",
    title: "Be Here Now: Open Your Mind to Spirituality",
  },
  {
    _id: "62e933aa13b3f259ead4a054",
    title: "7 Habits Of Highly Effective People",
  },
  {
    _id: "62e933b1b60f16705a9e643b",
    title: "Encyclopedia of Islam",
  },
  {
    _id: "62e933b1b60f16705a9e643d",
    title: "Encyclopedia of Hinduism",
  },
  {
    _id: "62e933b1b60f16705a9e643f",
    title: "101 Most Powerful Prayers in the Bible",
  },
  {
    _id: "62e933b1b60f16705a9e6441",
    title: "The Buddha and His Teachings",
  },
  {
    _id: "62e933b1b60f16705a9e6443",
    title:
      "Present Over Perfect: Leaving Behind Frantic for a Simpler, More Soulful Way of Living",
  },
  {
    _id: "62e933b1b60f16705a9e6445",
    title: "Let Your Life Speak: Listening for the Voice of Vocation",
  },
  {
    _id: "62e933b1b60f16705a9e6447",
    title: "Rumi: The Book of Love - Poems of Ecstasy and Longing",
  },
  {
    _id: "62e933b2b60f16705a9e6449",
    title:
      "Heaven is for Real : A Little Boy's Astounding Story of His Trip to Heaven and Back",
  },
  {
    _id: "62e933b2b60f16705a9e644b",
    title: "A COURSE IN MIRACLES: Foundation For Inner Peace",
  },
  {
    _id: "62e933b2b60f16705a9e644d",
    title: "Bible History: Old Testament",
  },
  {
    _id: "62e933b2b60f16705a9e644f",
    title: "Proof of Heaven: A Neurosurgeon's Journey into the Afterlife",
  },
  {
    _id: "62e933b2b60f16705a9e6451",
    title:
      "Light on Life: The Yoga Journey to Wholeness, Inner Peace, and Ultimate Freedom",
  },
  {
    _id: "62e933b2b60f16705a9e6453",
    title: "The Seven Spiritual Laws of Yoga: A Practical Guide to Healing",
  },
  {
    _id: "62e933b2b60f16705a9e6455",
    title:
      "The spiritual life - Intuition - Awakening your Spiritual Awareness",
  },
  {
    _id: "62e933b2b60f16705a9e6457",
    title: "The Illustrated Encyclopedia of Hinduism (2 Vol Set)",
  },
  {
    _id: "62e933b2b60f16705a9e6459",
    title: "Encyclopedia of Psychology and Religion",
  },
  {
    _id: "62e933b2b60f16705a9e645b",
    title: "Spiritual Warfare, Angels and Demons",
  },
  {
    _id: "62e933b2b60f16705a9e645d",
    title: "Meditation For DUMMIES, 2nd Edition",
  },
  {
    _id: "62e933b2b60f16705a9e645f",
    title: "A History of Western Philosophy",
  },
  {
    _id: "62e933b3b60f16705a9e6461",
    title: "Earths Forbidden Secrets By Maxwell Igan",
  },
  {
    _id: "62e933b9c45e60f3d88f1ddd",
    title: "Islam: Faith, Practice & History",
  },
  {
    _id: "62e933bac45e60f3d88f1ddf",
    title:
      "The Secret Life of Nature: Living in Harmony With the Hidden World ",
  },
  {
    _id: "62e933bac45e60f3d88f1de1",
    title: "History of the Christian Church, Volume I: Apostolic Christianity ",
  },
  {
    _id: "62e933bac45e60f3d88f1de3",
    title: "Ultimate Grimoire and Spellbook",
  },
  {
    _id: "62e933bac45e60f3d88f1de5",
    title: "The Spiritual Man",
  },
  {
    _id: "62e933bac45e60f3d88f1de7",
    title: "Acceptance and Mindfulness in Cognitive Behavior Therapy",
  },
  {
    _id: "62e933bac45e60f3d88f1de9",
    title: "How to Manifest Your Desires - Law of Attraction Haven",
  },
  {
    _id: "62e933bac45e60f3d88f1deb",
    title: "Christian Apocrypha and Early Christian Literature",
  },
  {
    _id: "62e933bac45e60f3d88f1ded",
    title: "The Occult of Roman Catholicism",
  },
  {
    _id: "62e933bac45e60f3d88f1def",
    title: "Grimoire for the Apprentice Wizard",
  },
  {
    _id: "62e933bac45e60f3d88f1df1",
    title:
      "Everybody, Always: Becoming Love in a World Full of Setbacks and Difficult People",
  },
  {
    _id: "62e933bac45e60f3d88f1df3",
    title: "Encyclopedia of Buddhism",
  },
  {
    _id: "62e933bbc45e60f3d88f1df5",
    title: "Cognitive Therapy of Anxiety Disorders: Science and Practice",
  },
  {
    _id: "62e933bbc45e60f3d88f1df7",
    title: "A Dictionary of Philosophy of Religion",
  },
  {
    _id: "62e933bbc45e60f3d88f1df9",
    title: "Awakening and Insight: Zen Buddhism and Psychotherapy",
  },
  {
    _id: "62e933bbc45e60f3d88f1dfb",
    title: "Intuitive Thinking As a Spiritual Path",
  },
  {
    _id: "62e933bbc45e60f3d88f1dfd",
    title: "Dream Dictionary for Dummies",
  },
  {
    _id: "62e933bbc45e60f3d88f1dff",
    title: "An introduction to Zen Buddhism",
  },
  {
    _id: "62e933bbc45e60f3d88f1e01",
    title: "Reading Lolita in Tehran: A Memoir in Books",
  },
  {
    _id: "62e933bbc45e60f3d88f1e03",
    title: "The Holy Bible: Hebrew Transliteration",
  },
  {
    _id: "62e933c3b2a8e7c31a9a2b39",
    title: "Transforming the Mind",
  },
  {
    _id: "62e933c3b2a8e7c31a9a2b3b",
    title: "Matthew Henry's Concise Commentary on the Bible",
  },
  {
    _id: "62e933c3b2a8e7c31a9a2b3d",
    title: "The Torah For Dummies",
  },
  {
    _id: "62e933c3b2a8e7c31a9a2b3f",
    title: "The Blackwell Companion to Hinduism",
  },
  {
    _id: "62e933c3b2a8e7c31a9a2b41",
    title: "A Restatement of the History of Islam and Muslims",
  },
  {
    _id: "62e933c3b2a8e7c31a9a2b43",
    title: "Instructor’s Solution Manual for Fundamentals of Physics ",
  },
  {
    _id: "62e933c3b2a8e7c31a9a2b45",
    title: "Jews and Judaism in World History",
  },
  {
    _id: "62e933c4b2a8e7c31a9a2b47",
    title: "Amharic Bible",
  },
  {
    _id: "62e933c4b2a8e7c31a9a2b49",
    title: "Occult Science in India and Among the Ancients - Forgotten Books",
  },
  {
    _id: "62e933c4b2a8e7c31a9a2b4b",
    title: "Religion and Spirituality in Psychiatry",
  },
  {
    _id: "62e933c4b2a8e7c31a9a2b4d",
    title: "A Companion to Philosophy of Religion (Second Edition)",
  },
  {
    _id: "62e933c4b2a8e7c31a9a2b4f",
    title: "Economic Development and Islamic Finance",
  },
  {
    _id: "62e933c4b2a8e7c31a9a2b51",
    title: "Kundalini and the Art of Being: The Awakening",
  },
  {
    _id: "62e933c4b2a8e7c31a9a2b53",
    title: "An Introduction to Islamic Finance: Theory and Practice",
  },
  {
    _id: "62e933c4b2a8e7c31a9a2b55",
    title: "The Sociology of Philosophies",
  },
  {
    _id: "62e933c4b2a8e7c31a9a2b57",
    title: "Islamic Economics: A Short History",
  },
  {
    _id: "62e933c4b2a8e7c31a9a2b59",
    title: "History of the Christian Church, Volume VII. Modern Christianity ",
  },
  {
    _id: "62e933c5b2a8e7c31a9a2b5b",
    title: "Heaven and Hell: The Portable New Century Edition",
  },
  {
    _id: "62e933c5b2a8e7c31a9a2b5d",
    title: "The Body/Mind Medicine Connection",
  },
  {
    _id: "62e933c5b2a8e7c31a9a2b5f",
    title: "SPIRITUAL ASTROLOGY",
  },
  {
    _id: "62e933cc877492eb43d25828",
    title: "The Holy Bible: Hebrew Old Testament",
  },
  {
    _id: "62e933cc877492eb43d2582a",
    title:
      "A Comparison Between Islam, Christianity, Judaism and the Choice Between Them",
  },
  {
    _id: "62e933cc877492eb43d2582c",
    title: "Islam: A Challenge To Faith - Muhammad, Islam & Christianity ",
  },
  {
    _id: "62e933cd877492eb43d2582e",
    title:
      "History of the Christian Church, Volume IV: Mediaeval Christianity ",
  },
  {
    _id: "62e933cd877492eb43d25830",
    title: "A Spiritual Awakening: 12 Steps to Freedom",
  },
  {
    _id: "62e933cd877492eb43d25832",
    title: "Hinduism Mini Encyclopedia",
  },
  {
    _id: "62e933cd877492eb43d25834",
    title: "The Big Little Book of Magick",
  },
  {
    _id: "62e933cd877492eb43d25836",
    title:
      "Religious Rivalries in the Early Roman Empire and the Rise of Christianity",
  },
  {
    _id: "62e933cd877492eb43d25838",
    title: "The Cambridge History of Islam 2A",
  },
  {
    _id: "62e933cd877492eb43d2583a",
    title: "Marx, Critical Theory, and Religion",
  },
  {
    _id: "62e933cd877492eb43d2583c",
    title: "Buddhism in India",
  },
  {
    _id: "62e933cd877492eb43d2583e",
    title: "A Spiritual Biography",
  },
  {
    _id: "62e933cd877492eb43d25840",
    title:
      "The History of Christianity: From the Disciples to the Dawn of the Reformation",
  },
  {
    _id: "62e933ce877492eb43d25842",
    title: "Religious Studies: The Key Concepts",
  },
  {
    _id: "62e933ce877492eb43d25844",
    title: "Atheism And Theism - Blackwell - Philosophy",
  },
  {
    _id: "62e933ce877492eb43d25846",
    title: "Gunsmithing & Toolmaking Bible",
  },
  {
    _id: "62e933ce877492eb43d25848",
    title: "Islamic Banking and Finance: Fundamentals and Contemporary Issues",
  },
  {
    _id: "62e933ce877492eb43d2584a",
    title: "A Wiccan Bible",
  },
  {
    _id: "62e933ce877492eb43d2584c",
    title: "Islamic Theology and the Philosophy of Science",
  },
  {
    _id: "62e933ce877492eb43d2584e",
    title: "The Spiritual Laws",
  },
  {
    _id: "62e933d584ee885d2b5e05e7",
    title: "Good Morning, Holy Spirit",
  },
  {
    _id: "62e933d684ee885d2b5e05e9",
    title: "Yoga and Psychology and Psychotherapy - Centre for Yoga Studies",
  },
  {
    _id: "62e933d684ee885d2b5e05eb",
    title: "Muhammad, the Qur'an & Islam",
  },
  {
    _id: "62e933d684ee885d2b5e05ed",
    title: "The Bible Key Lessons",
  },
  {
    _id: "62e933d684ee885d2b5e05ef",
    title: "The History of Christian Theology",
  },
  {
    _id: "62e933d684ee885d2b5e05f1",
    title: "The Esoteric Library | www.sacred-magick.com",
  },
  {
    _id: "62e933d684ee885d2b5e05f3",
    title: "Religious Studies: A Global View",
  },
  {
    _id: "62e933d784ee885d2b5e05f5",
    title: "The Life of Hinduism",
  },
  {
    _id: "62e933d784ee885d2b5e05f7",
    title: "Islamic Finance in the Global Economy",
  },
  {
    _id: "62e933d784ee885d2b5e05f9",
    title: "The Holy Bible: Greek (Modern) Translation",
  },
  {
    _id: "62e933d784ee885d2b5e05fb",
    title: "The Prophetic Medicine - Mission Islam",
  },
  {
    _id: "62e933d784ee885d2b5e05fd",
    title: "Body and Health in Yoga, ¯Ayurveda, and Tantra",
  },
  {
    _id: "62e933d784ee885d2b5e05ff",
    title: "The Ministry Of The Holy Spirit - A totally free bible ",
  },
  {
    _id: "62e933d784ee885d2b5e0601",
    title: "A Companion Roman Religion - Spiritual Minds",
  },
  {
    _id: "62e933d884ee885d2b5e0603",
    title: "The Biography of the Prophet",
  },
  {
    _id: "62e933d884ee885d2b5e0605",
    title: "From Judaism to Christianity",
  },
  {
    _id: "62e933d884ee885d2b5e0607",
    title: "EncountEring GOD - Deeper Revelation Books",
  },
  {
    _id: "62e933d884ee885d2b5e0609",
    title: "Self-Realization and Other Awakenings",
  },
  {
    _id: "62e933d884ee885d2b5e060b",
    title: "A HISTORY OF PHILOSOPHY",
  },
  {
    _id: "62e933d884ee885d2b5e060d",
    title: "The Quintessence of Secret (Esoteric) Buddhism",
  },
  {
    _id: "62e933e0353aa2f873b437b3",
    title: "The Oxford Handbook of Philosophy of Religion",
  },
  {
    _id: "62e933e0353aa2f873b437b5",
    title: "To Learn and to Teach More Effectively - Religious Studies Center",
  },
  {
    _id: "62e933e0353aa2f873b437b7",
    title: "What Is Hinduism?",
  },
  {
    _id: "62e933e1353aa2f873b437b9",
    title: "Christianity is Not Religion - Online Christian Library",
  },
  {
    _id: "62e933e1353aa2f873b437bb",
    title: "Sirat Ibn Hisham Biography of the Prophet",
  },
  {
    _id: "62e933e1353aa2f873b437bd",
    title: "A Mosque Among The Stars: Islam and Science Fiction",
  },
  {
    _id: "62e933e1353aa2f873b437bf",
    title: "My Faith - ISLAMIC STUDIES",
  },
  {
    _id: "62e933e1353aa2f873b437c1",
    title: "Islam in Transition: Muslim Perspectives",
  },
  {
    _id: "62e933e1353aa2f873b437c3",
    title: "Instruments and Markets Islamic Finance",
  },
  {
    _id: "62e933e1353aa2f873b437c5",
    title: "Commentary on Romans by John Calvin",
  },
  {
    _id: "62e933e2353aa2f873b437c7",
    title: "The Holy Bible - Containing the Old and New Testaments",
  },
  {
    _id: "62e933e2353aa2f873b437c9",
    title: "AANP Homeopathic Psychiatry",
  },
  {
    _id: "62e933e2353aa2f873b437cb",
    title: "Religious Studies Anthology",
  },
  {
    _id: "62e933e2353aa2f873b437cd",
    title: "One God, Three Faiths: Judaism, Christianity, and Islam",
  },
  {
    _id: "62e933e2353aa2f873b437cf",
    title: "The Religions of Ancient Egypt and Babylonia",
  },
  {
    _id: "62e933e2353aa2f873b437d1",
    title: "BOUNDARIES OF THE SOUL",
  },
  {
    _id: "62e933e2353aa2f873b437d3",
    title: "Explorations in Theology and Practice",
  },
  {
    _id: "62e933e2353aa2f873b437d5",
    title: "Jesus, Prophet of Islam - The Islamic Bulletin",
  },
  {
    _id: "62e933e2353aa2f873b437d7",
    title: "Class 5 Religious Studies: Islam",
  },
  {
    _id: "62e933e2353aa2f873b437d9",
    title: "Popular Deities of Chinese Buddhism (Illustrated)",
  },
  {
    _id: "62e9341633ee3bed6dd8608e",
    title: "Psychology - A Self-Teaching Guide",
  },
  {
    _id: "62e9341733ee3bed6dd86090",
    title: "The Power of Self-Esteem",
  },
  {
    _id: "62e9341733ee3bed6dd86092",
    title: "Influence: The Psychology of Persuasion",
  },
  {
    _id: "62e9341733ee3bed6dd86094",
    title: "Out of the Shadows: Understanding Sexual Addiction",
  },
  {
    _id: "62e9341733ee3bed6dd86096",
    title: "The Philosophy of Psychology",
  },
  {
    _id: "62e9341733ee3bed6dd86098",
    title: "The Psychology of Self-Esteem",
  },
  {
    _id: "62e9341733ee3bed6dd8609a",
    title: "The Mind of the Buyer: A Psychology of Selling",
  },
  {
    _id: "62e9341733ee3bed6dd8609c",
    title: "How To Make Girls Chase",
  },
  {
    _id: "62e9341733ee3bed6dd8609e",
    title: "How the World Works",
  },
  {
    _id: "62e9341833ee3bed6dd860a0",
    title: "The Psychology of Selling",
  },
  {
    _id: "62e9341833ee3bed6dd860a2",
    title: "Handbook of Psychology, Volume 6: Developmental Psychology",
  },
  {
    _id: "62e9341833ee3bed6dd860a4",
    title: "Child Psychology and Psychiatry",
  },
  {
    _id: "62e9341833ee3bed6dd860a6",
    title: "Trading Psychology 2.0",
  },
  {
    _id: "62e9341833ee3bed6dd860a8",
    title:
      "Handbook of Psychology, Volume 5, Personality and Social Psychology",
  },
  {
    _id: "62e9341833ee3bed6dd860aa",
    title: "Ganong's Review of Medical Physiology",
  },
  {
    _id: "62e9341833ee3bed6dd860ac",
    title: "Criminal Psychology : a Beginner's Guide",
  },
  {
    _id: "62e9341833ee3bed6dd860ae",
    title: "Cognitive Psychology",
  },
  {
    _id: "62e9341833ee3bed6dd860b0",
    title: "Encyclopedia of Psychology and Religion",
  },
  {
    _id: "62e9341933ee3bed6dd860b2",
    title: "How Learning Works",
  },
  {
    _id: "62e9341933ee3bed6dd860b4",
    title:
      "Teaching Critical Thinking in Psychology: A Handbook of Best Practices",
  },
  {
    _id: "62e93424f4760f5a0c4615e6",
    title: "Educational Psychology : Understanding Student's Thinking",
  },
  {
    _id: "62e93424f4760f5a0c4615e8",
    title: "Introduction to Forensic Psychology - B. Arrigo",
  },
  {
    _id: "62e93424f4760f5a0c4615ea",
    title: "The Psychology of Creative Writing",
  },
  {
    _id: "62e93424f4760f5a0c4615ec",
    title: "Goals - Advanced Life Skills",
  },
  {
    _id: "62e93424f4760f5a0c4615ee",
    title: "Flow and the Foundations of Positive Psychology",
  },
  {
    _id: "62e93425f4760f5a0c4615f0",
    title: "Biological Psychology",
  },
  {
    _id: "62e93425f4760f5a0c4615f2",
    title: "Handbook of Psychology, Volume 4: Experimental Psychology",
  },
  {
    _id: "62e93425f4760f5a0c4615f4",
    title: "Vygotsky's Developmental and Educational Psychology",
  },
  {
    _id: "62e93425f4760f5a0c4615f6",
    title: "Sport And Exercise Psychology",
  },
  {
    _id: "62e93425f4760f5a0c4615f8",
    title: "Foundations of Cognitive Psychology",
  },
  {
    _id: "62e93425f4760f5a0c4615fa",
    title: "Statistical Analysis for Education and Psychology Researchers",
  },
  {
    _id: "62e93425f4760f5a0c4615fc",
    title: "Encyclopedia of Psychology and Law",
  },
  {
    _id: "62e93425f4760f5a0c4615fe",
    title: "Research In Psychology: Methods and Design 6E",
  },
  {
    _id: "62e93425f4760f5a0c461600",
    title: "The Psychology of Eating",
  },
  {
    _id: "62e93425f4760f5a0c461602",
    title: "Transforming the Mind",
  },
  {
    _id: "62e93425f4760f5a0c461604",
    title: "An Introduction to Social Psychology",
  },
  {
    _id: "62e93425f4760f5a0c461606",
    title: "Art Therapy - Teaching Psychology",
  },
  {
    _id: "62e93425f4760f5a0c461608",
    title: "Psychology and Life",
  },
  {
    _id: "62e93426f4760f5a0c46160a",
    title: "Dream Psychology by Sigmund Freud",
  },
  {
    _id: "62e93426f4760f5a0c46160c",
    title: "Introduction to Psychology - College of Lake County",
  },
  {
    _id: "62e9342c20c384c4d3194a65",
    title: "Socratic Moral Psychology",
  },
  {
    _id: "62e9342d20c384c4d3194a67",
    title: "The Psychology of Problem Solving",
  },
  {
    _id: "62e9343a8ce9aa41250396e3",
    title: "Generalization in Qualitative Psychology",
  },
  {
    _id: "62e9343a8ce9aa41250396e5",
    title: "POSITIVE PSYCHOLOGY AND CONSTRUCTIVIST DEVELOPMENTAL PSYCHOLOGY ",
  },
  {
    _id: "62e9343a8ce9aa41250396e7",
    title: "Concise Dictionary of Psychology",
  },
  {
    _id: "62e9343a8ce9aa41250396eb",
    title: "Handbook of Psychology Preface",
  },
  {
    _id: "62e934c3b4050601155a8f49",
    title: "Body Language Secrets A Guide During Courtship & Dating",
  },
  {
    _id: "62e934c3b4050601155a8f4b",
    title: "Waiting And Dating",
  },
  {
    _id: "62e934c3b4050601155a8f4d",
    title: "Model Marriage by Bishop Dag Heward Mills",
  },
  {
    _id: "62e934c3b4050601155a8f4f",
    title: "Attract And Seduce",
  },
  {
    _id: "62e934c3b4050601155a8f51",
    title: "101 Ways to Have 100% Success in Marriage",
  },
  {
    _id: "62e934c3b4050601155a8f53",
    title: "Boundaries in Dating: How Healthy Choices Grow",
  },
  {
    _id: "62e934c4b4050601155a8f55",
    title: "Principles of Marriage and Family Ethics",
  },
  {
    _id: "62e934c4b4050601155a8f57",
    title: "Marriage and Family",
  },
  {
    _id: "62e934c4b4050601155a8f59",
    title: "Communication Theory Media, Technology and Society",
  },
  {
    _id: "62e934c4b4050601155a8f5b",
    title: "Attraction Isn't A Choice",
  },
  {
    _id: "62e934c4b4050601155a8f5d",
    title: "Mars and Venus On a Date",
  },
  {
    _id: "62e934c4b4050601155a8f5f",
    title: "Child Development",
  },
  {
    _id: "62e934c4b4050601155a8f61",
    title: "Double Your Dating",
  },
  {
    _id: "62e934c5b4050601155a8f63",
    title: "The Dating Black book",
  },
  {
    _id: "62e934c5b4050601155a8f65",
    title: "Semiotics: Theory And Applications",
  },
  {
    _id: "62e934c5b4050601155a8f67",
    title: "Friendship With God - Zen Integrative Clinic",
  },
  {
    _id: "62e934c5b4050601155a8f69",
    title: "14-Day Romance Challenge - Salem Web Network",
  },
  {
    _id: "62e934c5b4050601155a8f6b",
    title: "Scientific Dating Methods",
  },
  {
    _id: "62e934c5b4050601155a8f6d",
    title: "Called The Love",
  },
  {
    _id: "62e934cdb0415968cea1289c",
    title: "The Story Of Lord Shiva’s Marriage With Parvati",
  },
  {
    _id: "62e934cdb0415968cea1289e",
    title: "Strengthening marriage",
  },
  {
    _id: "62e934cdb0415968cea128a0",
    title: "The Taqua of Marriage",
  },
  {
    _id: "62e934cdb0415968cea128a2",
    title: "Oscar Wilde, the story of an unhappy friendship",
  },
  {
    _id: "62e934cdb0415968cea128a4",
    title: "Love & Romance Guidance Report",
  },
  {
    _id: "62e934cdb0415968cea128a6",
    title: "Poetica Erotica",
  },
  {
    _id: "62e934ceb0415968cea128a8",
    title: "The Teen Survival Guide to Dating & Relating: Real - Annie Fox",
  },
  {
    _id: "62e934ceb0415968cea128aa",
    title: "Record of a Friendship",
  },
  {
    _id: "62e934ceb0415968cea128ac",
    title: "Love Vs. Marriage",
  },
  {
    _id: "62e934ceb0415968cea128ae",
    title: "eternal marriage",
  },
  {
    _id: "62e934ceb0415968cea128b0",
    title: "Quaternary Dating Methods",
  },
  {
    _id: "62e934ceb0415968cea128b2",
    title: "Levirate Marriage and the Family in Ancient Judaism",
  },
  {
    _id: "62e934ceb0415968cea128b4",
    title: "DATE WITH THE GODS",
  },
  {
    _id: "62e934ceb0415968cea128b6",
    title: "Spiritual Marriage and - Durham e-Theses - Durham University",
  },
  {
    _id: "62e934ceb0415968cea128b8",
    title: "Félix Guattari: Thought, Friendship, and Visionary Cartography",
  },
  {
    _id: "62e9352131f3b3a32a829ce7",
    title: "The Power of Self-Esteem",
  },
  {
    _id: "62e9352131f3b3a32a829ce9",
    title: "Resisting Happiness: A True Story about Why We Sabotage Ourselves",
  },
  {
    _id: "62e9352131f3b3a32a829ceb",
    title: "Living in the Light: A guide to personal transformation",
  },
  {
    _id: "62e9352131f3b3a32a829ced",
    title:
      "The 5 Second Rule: Transform your Life, Work, and Confidence with Everyday Courage",
  },
  {
    _id: "62e9352131f3b3a32a829cef",
    title:
      "The Art of Work: A Proven Path to Discovering What You Were Meant to Do",
  },
  {
    _id: "62e9352131f3b3a32a829cf1",
    title: "Start Where You Are: A Guide to Compassionate Living",
  },
  {
    _id: "62e9352131f3b3a32a829cf3",
    title:
      "The Daily Stoic: 366 Meditations on Wisdom, Perseverance, and the Art of Living",
  },
  {
    _id: "62e9352131f3b3a32a829cf5",
    title: "The Purpose-Driven Life: What on Earth Am I Here For?",
  },
  {
    _id: "62e9352231f3b3a32a829cf7",
    title: "100 Ways to Motivate Yourself: Change Your Life Forever",
  },
  {
    _id: "62e9352231f3b3a32a829cf9",
    title:
      "1001 Motivational Quotes for Success: Great Quotes from Great Minds",
  },
  {
    _id: "62e9352231f3b3a32a829cfb",
    title: "Law of Success (21st Century Edition)",
  },
  {
    _id: "62e9352231f3b3a32a829cfd",
    title:
      "Boundaries: When to Say Yes, How to Say No to Take Control of Your Life",
  },
  {
    _id: "62e9352231f3b3a32a829cff",
    title: "The Gifts of Imperfection: Embrace Who You Are",
  },
  {
    _id: "62e9352231f3b3a32a829d01",
    title:
      "The Miracle Morning: The Not-So-Obvious Secret Guaranteed to Transform Your Life",
  },
  {
    _id: "62e9352231f3b3a32a829d03",
    title: "The Power of Now: A Guide to Spiritual Enlightenment",
  },
  {
    _id: "62e9352231f3b3a32a829d05",
    title:
      "You Are a Badass: How to Stop Doubting Your Greatness and Start Living an Awesome Life",
  },
  {
    _id: "62e9352231f3b3a32a829d07",
    title: "Psychology - A Self-Teaching Guide",
  },
  {
    _id: "62e9352231f3b3a32a829d09",
    title: "100 Ways to Motivate Others",
  },
  {
    _id: "62e9352231f3b3a32a829d0b",
    title: "How To Stop Worrying And Start Living",
  },
  {
    _id: "62e9352231f3b3a32a829d0d",
    title: "Influence: The Psychology of Persuasion",
  },
  {
    _id: "62e9352b83f158e2a512966f",
    title: "Blink: The Power of Thinking Without Thinking",
  },
  {
    _id: "62e9352b83f158e2a5129671",
    title: "Three Mistakes of My Life by Chetan Bhagat",
  },
  {
    _id: "62e9352b83f158e2a5129673",
    title: "What Every BODY Is Saying",
  },
  {
    _id: "62e9352b83f158e2a5129675",
    title: "The Philosophy of Psychology",
  },
  {
    _id: "62e9352b83f158e2a5129677",
    title: "The Psychology of Self-Esteem",
  },
  {
    _id: "62e9352b83f158e2a5129679",
    title:
      "The War of Art: Break Through the Blocks and Win Your Inner Creative Battles",
  },
  {
    _id: "62e9352b83f158e2a512967b",
    title: "Inspiration to Live Your Magic: 75 Inspiring Biographies",
  },
  {
    _id: "62e9352b83f158e2a512967d",
    title: "How To Make Girls Chase",
  },
  {
    _id: "62e9352b83f158e2a512967f",
    title: "How the World Works",
  },
  {
    _id: "62e9352b83f158e2a5129681",
    title:
      "The Obstacle Is the Way: The Timeless Art of Turning Trials into Triumph",
  },
  {
    _id: "62e9352b83f158e2a5129683",
    title:
      "Attached: The New Science of Adult Attachment and How It Can Help You Find and Keep Love ",
  },
  {
    _id: "62e9352b83f158e2a5129685",
    title: "The Choice: Embrace the Possible",
  },
  {
    _id: "62e9352c83f158e2a5129687",
    title: "365 Steps to Self-confidence",
  },
  {
    _id: "62e9352d83f158e2a5129689",
    title: "The Buddha and His Teachings",
  },
  {
    _id: "62e9352d83f158e2a512968b",
    title:
      "The ONE Thing: The Surprisingly Simple Truth Behind Extraordinary Results",
  },
  {
    _id: "62e9352d83f158e2a512968d",
    title: "The Dialectical Behavior Therapy Skills Workbook for Anxiety",
  },
  {
    _id: "62e9352d83f158e2a512968f",
    title: "Proof of Heaven: A Neurosurgeon's Journey into the Afterlife",
  },
  {
    _id: "62e9352d83f158e2a5129691",
    title: "The Millionaire Mindset - Mission Improvement",
  },
  {
    _id: "62e9352d83f158e2a5129693",
    title: "Being Mortal: Illness, Medicine and What Matters in the End",
  },
  {
    _id: "62e9352d83f158e2a5129695",
    title: "Encyclopedia of Psychology and Religion",
  },
  {
    _id: "62e935424191dd87b28f0e32",
    title: "14 Habits of Highly Effective Disciples",
  },
  {
    _id: "62e935424191dd87b28f0e34",
    title: "THE 100 MOST INFLUENTIAL INVENTORS OF ALL TIME",
  },
  {
    _id: "62e935424191dd87b28f0e36",
    title: "Building Confidence for Dummies",
  },
  {
    _id: "62e935424191dd87b28f0e38",
    title: "Reading Lolita in Tehran: A Memoir in Books",
  },
  {
    _id: "62e935434191dd87b28f0e3a",
    title: "Transforming the Mind",
  },
  {
    _id: "62e935434191dd87b28f0e3c",
    title: "Mastering The Art Of Success",
  },
  {
    _id: "62e935434191dd87b28f0e3e",
    title: "The Ultimate Success Guide",
  },
  {
    _id: "62e935434191dd87b28f0e40",
    title: "Dream Psychology by Sigmund Freud",
  },
  {
    _id: "62e935434191dd87b28f0e42",
    title: "Motivation, Emotion, and Cognition",
  },
  {
    _id: "62e935434191dd87b28f0e44",
    title: "Called The Love",
  },
  {
    _id: "62e935434191dd87b28f0e46",
    title:
      "Prayers Meditations And Dynamic Decrees For Personal And World Transformation",
  },
  {
    _id: "62e935434191dd87b28f0e48",
    title: "Live Lean Success quotes",
  },
  {
    _id: "62e935434191dd87b28f0e4a",
    title: "Thoughts to Build On",
  },
  {
    _id: "62e935434191dd87b28f0e4c",
    title: "How Professors Think",
  },
  {
    _id: "62e935434191dd87b28f0e4e",
    title: "Speak to Win",
  },
  {
    _id: "62e935444191dd87b28f0e50",
    title: "How to Kick the Worry Habit - Jim Rohn.pdf - Motivational Magic",
  },
  {
    _id: "62e935444191dd87b28f0e52",
    title: "Motivation and Learning Strategies for College Success",
  },
  {
    _id: "62e935444191dd87b28f0e54",
    title: "Yoga and Psychology and Psychotherapy - Centre for Yoga Studies",
  },
  {
    _id: "62e935444191dd87b28f0e56",
    title: "Succeed for Yourself",
  },
  {
    _id: "62e935444191dd87b28f0e58",
    title: "THINK & GROW RICH",
  },
  {
    _id: "62e9354e2c38fc6276887c06",
    title: "How They Succeeded",
  },
  {
    _id: "62e9354e2c38fc6276887c08",
    title: "1 100 Ways to Motivate Yourself - Instituto de Medicina ",
  },
  {
    _id: "62e9354e2c38fc6276887c0a",
    title: "Win the Future",
  },
  {
    _id: "62e9354e2c38fc6276887c0c",
    title: "EncountEring GOD - Deeper Revelation Books",
  },
  {
    _id: "62e9354e2c38fc6276887c0e",
    title: "Magic Motivation",
  },
  {
    _id: "62e9354e2c38fc6276887c10",
    title: "Turbo Success",
  },
  {
    _id: "62e9354e2c38fc6276887c12",
    title: "Explorations in Theology and Practice",
  },
  {
    _id: "62e9354f2c38fc6276887c14",
    title: "I Love the Thames",
  },
  {
    _id: "62e9354f2c38fc6276887c16",
    title: "Transforming teaching and learning in Asia and the Pacific",
  },
  {
    _id: "62e9354f2c38fc6276887c18",
    title: "Servant Leader Greg Hutchings Agile 2012sm.pptx",
  },
  {
    _id: "62e9357bb6ca6309ba0e0947",
    title: "Learning to “Think Like a Lawyer”",
  },
  {
    _id: "62e9357bb6ca6309ba0e0949",
    title: "Introduction to Law",
  },
  {
    _id: "62e9357bb6ca6309ba0e094b",
    title: "International Law and International Relations",
  },
  {
    _id: "62e9357bb6ca6309ba0e094d",
    title: "political science",
  },
  {
    _id: "62e9357bb6ca6309ba0e094f",
    title:
      "It IS About Islam: Exposing the Truth About ISIS, Al Qaeda, Iran, and the Caliphate",
  },
  {
    _id: "62e9357bb6ca6309ba0e0951",
    title: "Law Dictionary",
  },
  {
    _id: "62e9357bb6ca6309ba0e0953",
    title: "Political Philosophy",
  },
  {
    _id: "62e9357bb6ca6309ba0e0955",
    title: "Contract Law",
  },
  {
    _id: "62e9357cb6ca6309ba0e0957",
    title: "International Political Economy",
  },
  {
    _id: "62e9357cb6ca6309ba0e0959",
    title: "business law",
  },
  {
    _id: "62e9357cb6ca6309ba0e095b",
    title: "Politics: The Basics, 4th Edition",
  },
  {
    _id: "62e9357cb6ca6309ba0e095d",
    title: "Understanding Third World Politics",
  },
  {
    _id: "62e9357cb6ca6309ba0e095f",
    title: "CRIMINAL LAW: CASES AND MATERIALS",
  },
  {
    _id: "62e9357cb6ca6309ba0e0961",
    title: "Family Law",
  },
  {
    _id: "62e9357cb6ca6309ba0e0963",
    title: "Encyclopedia of Government and Politics",
  },
  {
    _id: "62e9357cb6ca6309ba0e0965",
    title: "Russian Politics from Lenin to Putin",
  },
  {
    _id: "62e9357cb6ca6309ba0e0967",
    title: "political science",
  },
  {
    _id: "62e9357cb6ca6309ba0e0969",
    title: "Company Law - Nexus Ltd.",
  },
  {
    _id: "62e9357cb6ca6309ba0e096b",
    title: "Assessing Leadership Style: Trait Analysis",
  },
  {
    _id: "62e9357cb6ca6309ba0e096d",
    title: "International Humanitarian Law International Criminal Law ",
  },
  {
    _id: "62e9359a20c65442fb8c42ac",
    title: "Democracy in Social Movements",
  },
  {
    _id: "62e9359a20c65442fb8c42ae",
    title: "WOLE SOYINKA: Politics, Poetics and Postcolonialism",
  },
  {
    _id: "62e9359a20c65442fb8c42b0",
    title: "The Political Economy of Democracy",
  },
  {
    _id: "62e9359a20c65442fb8c42b2",
    title: "Realism and World Politics",
  },
  {
    _id: "62e9359a20c65442fb8c42b4",
    title: "Company Law",
  },
  {
    _id: "62e9359b20c65442fb8c42b6",
    title: "The Bible and Politics in Africa",
  },
  {
    _id: "62e9359b20c65442fb8c42b8",
    title:
      "Dictionary of Politics-more_free_books_at_POLITICALAVENUEdotCOM.pdf",
  },
  {
    _id: "62e9359b20c65442fb8c42ba",
    title: "ACCA F4 - Corp and Business Law (ENG)",
  },
  {
    _id: "62e9359b20c65442fb8c42bc",
    title: "THE COMMON LAW - Legal Texts",
  },
  {
    _id: "62e9359b20c65442fb8c42be",
    title: "Patent Law",
  },
  {
    _id: "62e9359b20c65442fb8c42c0",
    title: "Law Enforcement Intelligence - COPS",
  },
  {
    _id: "62e9359b20c65442fb8c42c2",
    title: "Principles of Copyright Law – Cases and Materials",
  },
  {
    _id: "62e9359b20c65442fb8c42c4",
    title: "POLITICS OF ARISTOTLE",
  },
  {
    _id: "62e9359b20c65442fb8c42c6",
    title: "Advanced Business Law",
  },
  {
    _id: "62e9359b20c65442fb8c42c8",
    title: "Political Theologies",
  },
  {
    _id: "62e9359c20c65442fb8c42ca",
    title: "The Nature of Political Theory",
  },
  {
    _id: "62e9359c20c65442fb8c42cc",
    title: "Imperium: The Philosophy of History and Politics",
  },
  {
    _id: "62e9359c20c65442fb8c42ce",
    title: "Trademark Law",
  },
  {
    _id: "62e9359c20c65442fb8c42d0",
    title: "the criminal law digest the criminal law digest",
  },
  {
    _id: "62e935a491f26c4d39fb6ee7",
    title: "Politics of Nature: How to Bring the Sciences into Democracy",
  },
  {
    _id: "62e935a491f26c4d39fb6ee9",
    title: "Politics in the USA, Sixth Edition",
  },
  {
    _id: "62e935a491f26c4d39fb6eeb",
    title: "Nursing Law and Ethics",
  },
  {
    _id: "62e935a591f26c4d39fb6eed",
    title: "The Limits of International Law",
  },
  {
    _id: "62e935a591f26c4d39fb6eef",
    title: "Feminist Perspectives on Political Geography",
  },
  {
    _id: "62e935a591f26c4d39fb6ef1",
    title: "business law",
  },
  {
    _id: "62e935a591f26c4d39fb6ef3",
    title: "oil & gas environmental law",
  },
  {
    _id: "62e935a591f26c4d39fb6ef5",
    title: "World Politics of Security",
  },
  {
    _id: "62e935a591f26c4d39fb6ef7",
    title: "Law of War Handbook 2005",
  },
  {
    _id: "62e935a591f26c4d39fb6ef9",
    title: "Nonprofit Law & Governance For Dummies.",
  },
  {
    _id: "62e935a591f26c4d39fb6efb",
    title: "After Politics",
  },
  {
    _id: "62e935a591f26c4d39fb6efd",
    title: "islam, politics and change",
  },
  {
    _id: "62e935a591f26c4d39fb6eff",
    title: "JOURNAL OF LAW AND POLICY - Brooklyn Law School",
  },
  {
    _id: "62e935a691f26c4d39fb6f01",
    title: "Retirement Law Book",
  },
  {
    _id: "62e935a691f26c4d39fb6f03",
    title: "Federal Criminal Law",
  },
  {
    _id: "62e935a691f26c4d39fb6f05",
    title: "Politics of Protection",
  },
  {
    _id: "62e935a691f26c4d39fb6f07",
    title: "Publics, Politics and Participation",
  },
  {
    _id: "62e935a691f26c4d39fb6f09",
    title: "Race and International Politics",
  },
  {
    _id: "62e935a691f26c4d39fb6f0b",
    title: "Is the Market a Test of Truth and Beauty?",
  },
  {
    _id: "62e935a691f26c4d39fb6f0d",
    title: "Medieval Law and the Foundations of the State",
  },
  {
    _id: "62e935b1722d0cb05ee543f4",
    title: "The Law of the Future and the Future of Law: Volume II - FICHL",
  },
  {
    _id: "62e935b2722d0cb05ee543f6",
    title: "Etica & Politica / Ethics & Politics",
  },
  {
    _id: "62e935b2722d0cb05ee543f8",
    title: "The Global Politics of Energy",
  },
  {
    _id: "62e935b2722d0cb05ee543fa",
    title: "The Politics of Intervention",
  },
  {
    _id: "62e935b2722d0cb05ee543fc",
    title: "Space | politics | affect",
  },
  {
    _id: "62e935b2722d0cb05ee543fe",
    title: "Disability Law Primer (PDF) - ARCH Disability Law Centre",
  },
  {
    _id: "62e935b2722d0cb05ee54400",
    title: "Politics and Civil Society in Cuba",
  },
  {
    _id: "62e935b2722d0cb05ee54402",
    title: "The Politics of Philo Judaeus",
  },
  {
    _id: "62e935b2722d0cb05ee54404",
    title: "The Politics of Humanity",
  },
  {
    _id: "62e935b2722d0cb05ee54406",
    title: "Aesthetics of Politics",
  },
  {
    _id: "62e935b3722d0cb05ee54408",
    title: "Liberal Politics and Public Faith",
  },
  {
    _id: "62e935b3722d0cb05ee5440a",
    title: "politics in the vernacular",
  },
  {
    _id: "62e935eb1fe50505908a8fe9",
    title: "political science",
  },
  {
    _id: "62e935eb1fe50505908a8feb",
    title: "Political Philosophy",
  },
  {
    _id: "62e935eb1fe50505908a8fed",
    title: "International Political Economy",
  },
  {
    _id: "62e935eb1fe50505908a8fef",
    title: "Politics: The Basics, 4th Edition",
  },
  {
    _id: "62e935eb1fe50505908a8ff1",
    title: "Understanding Third World Politics",
  },
  {
    _id: "62e935ec1fe50505908a8ff3",
    title: "Encyclopedia of Government and Politics",
  },
  {
    _id: "62e935ec1fe50505908a8ff5",
    title: "Russian Politics from Lenin to Putin",
  },
  {
    _id: "62e935ec1fe50505908a8ff7",
    title: "political science",
  },
  {
    _id: "62e935ec1fe50505908a8ff9",
    title: "Assessing Leadership Style: Trait Analysis",
  },
  {
    _id: "62e935ec1fe50505908a8ffb",
    title: "Handbook Political Theory.pdf",
  },
  {
    _id: "62e935ec1fe50505908a8ffd",
    title: "The Politics of the Environment",
  },
  {
    _id: "62e935ec1fe50505908a8fff",
    title: "The Emotional Politics of Racism",
  },
  {
    _id: "62e935ec1fe50505908a9001",
    title: "The international politics of the Middle East",
  },
  {
    _id: "62e935ec1fe50505908a9003",
    title: "Global Politics",
  },
  {
    _id: "62e935ec1fe50505908a9005",
    title: "The Politics of Bureaucracy",
  },
  {
    _id: "62e935ec1fe50505908a9007",
    title: "Colin - Dictionary Of Politics And Government.pdf",
  },
  {
    _id: "62e935ed1fe50505908a9009",
    title: "Left and Right in Global Politics",
  },
  {
    _id: "62e935ed1fe50505908a900b",
    title: "Women & Islamic Cultures Family, Law and Politics",
  },
  {
    _id: "62e935ed1fe50505908a900d",
    title: "1 Advances in Political Economy - Department of Political Science",
  },
  {
    _id: "62e935ed1fe50505908a900f",
    title: "WOLE SOYINKA: Politics, Poetics and Postcolonialism",
  },
  {
    _id: "62e935f97802b854cc32211a",
    title: "The Political Economy of Democracy",
  },
  {
    _id: "62e935f97802b854cc32211c",
    title: "Realism and World Politics",
  },
  {
    _id: "62e935f97802b854cc32211e",
    title: "The Bible and Politics in Africa",
  },
  {
    _id: "62e935f97802b854cc322120",
    title:
      "Dictionary of Politics-more_free_books_at_POLITICALAVENUEdotCOM.pdf",
  },
  {
    _id: "62e935f97802b854cc322122",
    title: "POLITICS OF ARISTOTLE",
  },
  {
    _id: "62e935f97802b854cc322124",
    title: "Political Theologies",
  },
  {
    _id: "62e935f97802b854cc322126",
    title: "The Nature of Political Theory",
  },
  {
    _id: "62e935f97802b854cc322128",
    title: "Imperium: The Philosophy of History and Politics",
  },
  {
    _id: "62e935fa7802b854cc32212a",
    title: "Politics of Nature: How to Bring the Sciences into Democracy",
  },
  {
    _id: "62e935fa7802b854cc32212c",
    title: "Politics in the USA, Sixth Edition",
  },
  {
    _id: "62e935fa7802b854cc32212e",
    title: "Feminist Perspectives on Political Geography",
  },
  {
    _id: "62e935fa7802b854cc322130",
    title: "World Politics of Security",
  },
  {
    _id: "62e935fa7802b854cc322132",
    title: "After Politics",
  },
  {
    _id: "62e935fa7802b854cc322134",
    title: "islam, politics and change",
  },
  {
    _id: "62e935fa7802b854cc322136",
    title: "Politics of Protection",
  },
  {
    _id: "62e935fa7802b854cc322138",
    title: "Publics, Politics and Participation",
  },
  {
    _id: "62e935fa7802b854cc32213a",
    title: "Race and International Politics",
  },
  {
    _id: "62e935fa7802b854cc32213c",
    title: "Is the Market a Test of Truth and Beauty?",
  },
  {
    _id: "62e935fa7802b854cc32213e",
    title: "Etica & Politica / Ethics & Politics",
  },
  {
    _id: "62e935fb7802b854cc322140",
    title: "The Global Politics of Energy",
  },
  {
    _id: "62e936023186a18875d7d9e2",
    title: "The Politics of Intervention",
  },
  {
    _id: "62e936023186a18875d7d9e4",
    title: "Space | politics | affect",
  },
  {
    _id: "62e936023186a18875d7d9e6",
    title: "Politics and Civil Society in Cuba",
  },
  {
    _id: "62e936023186a18875d7d9e8",
    title: "The Politics of Philo Judaeus",
  },
  {
    _id: "62e936023186a18875d7d9ea",
    title: "The Politics of Humanity",
  },
  {
    _id: "62e936033186a18875d7d9ec",
    title: "Aesthetics of Politics",
  },
  {
    _id: "62e936033186a18875d7d9ee",
    title: "Liberal Politics and Public Faith",
  },
  {
    _id: "62e936033186a18875d7d9f0",
    title: "politics in the vernacular",
  },
  {
    _id: "62e9362de440a0d4beb6f1a8",
    title: "Learning to “Think Like a Lawyer”",
  },
  {
    _id: "62e9362de440a0d4beb6f1aa",
    title: "Introduction to Law",
  },
  {
    _id: "62e9362de440a0d4beb6f1ac",
    title: "International Law and International Relations",
  },
  {
    _id: "62e9362de440a0d4beb6f1ae",
    title: "Law Dictionary",
  },
  {
    _id: "62e9362de440a0d4beb6f1b0",
    title: "Contract Law",
  },
  {
    _id: "62e9362de440a0d4beb6f1b2",
    title: "business law",
  },
  {
    _id: "62e9362de440a0d4beb6f1b4",
    title: "CRIMINAL LAW: CASES AND MATERIALS",
  },
  {
    _id: "62e9362de440a0d4beb6f1b6",
    title: "Family Law",
  },
  {
    _id: "62e9362de440a0d4beb6f1b8",
    title: "Company Law - Nexus Ltd.",
  },
  {
    _id: "62e9362ee440a0d4beb6f1ba",
    title: "International Humanitarian Law International Criminal Law ",
  },
  {
    _id: "62e9362ee440a0d4beb6f1bc",
    title: "Essential Tort Law, Third Edition",
  },
  {
    _id: "62e9362ee440a0d4beb6f1be",
    title: "Constitutional Law 2012",
  },
  {
    _id: "62e9362ee440a0d4beb6f1c0",
    title: "environmental law environmental law",
  },
  {
    _id: "62e9362ee440a0d4beb6f1c2",
    title: "Routledge Handbook of International Law",
  },
  {
    _id: "62e9362ee440a0d4beb6f1c4",
    title: "property law",
  },
  {
    _id: "62e9362ee440a0d4beb6f1c6",
    title: "Encyclopedia of Psychology and Law",
  },
  {
    _id: "62e9362ee440a0d4beb6f1c8",
    title: "Trusts Law",
  },
  {
    _id: "62e9362ee440a0d4beb6f1ca",
    title: "US Constitution For Dummies",
  },
  {
    _id: "62e9362ee440a0d4beb6f1cc",
    title: "LAW 100 Introduction to law",
  },
  {
    _id: "62e9362fe440a0d4beb6f1ce",
    title: "Democracy in Social Movements",
  },
  {
    _id: "62e93638b4807a44ba0fa981",
    title: "Company Law",
  },
  {
    _id: "62e93638b4807a44ba0fa983",
    title: "ACCA F4 - Corp and Business Law (ENG)",
  },
  {
    _id: "62e93638b4807a44ba0fa985",
    title: "THE COMMON LAW - Legal Texts",
  },
  {
    _id: "62e93638b4807a44ba0fa987",
    title: "Patent Law",
  },
  {
    _id: "62e93638b4807a44ba0fa989",
    title: "Law Enforcement Intelligence - COPS",
  },
  {
    _id: "62e93638b4807a44ba0fa98b",
    title: "Principles of Copyright Law – Cases and Materials",
  },
  {
    _id: "62e93638b4807a44ba0fa98d",
    title: "Advanced Business Law",
  },
  {
    _id: "62e93638b4807a44ba0fa98f",
    title: "Trademark Law",
  },
  {
    _id: "62e93638b4807a44ba0fa991",
    title: "the criminal law digest the criminal law digest",
  },
  {
    _id: "62e93638b4807a44ba0fa993",
    title: "Nursing Law and Ethics",
  },
  {
    _id: "62e93639b4807a44ba0fa995",
    title: "The Limits of International Law",
  },
  {
    _id: "62e93639b4807a44ba0fa997",
    title: "business law",
  },
  {
    _id: "62e93639b4807a44ba0fa999",
    title: "oil & gas environmental law",
  },
  {
    _id: "62e93639b4807a44ba0fa99b",
    title: "Law of War Handbook 2005",
  },
  {
    _id: "62e93639b4807a44ba0fa99d",
    title: "Nonprofit Law & Governance For Dummies.",
  },
  {
    _id: "62e93639b4807a44ba0fa99f",
    title: "JOURNAL OF LAW AND POLICY - Brooklyn Law School",
  },
  {
    _id: "62e93639b4807a44ba0fa9a1",
    title: "Retirement Law Book",
  },
  {
    _id: "62e93639b4807a44ba0fa9a3",
    title: "Federal Criminal Law",
  },
  {
    _id: "62e93639b4807a44ba0fa9a5",
    title: "Medieval Law and the Foundations of the State",
  },
  {
    _id: "62e93639b4807a44ba0fa9a7",
    title: "The Law of the Future and the Future of Law: Volume II - FICHL",
  },
  {
    _id: "62e93642b89be0530c66fa8a",
    title: "Disability Law Primer (PDF) - ARCH Disability Law Centre",
  },
  {
    _id: "62e936a6c7eb033ce7c822bb",
    title:
      "Things That Matter: Three Decades of Passions, Pastimes and Politics",
  },
  {
    _id: "62e936a6c7eb033ce7c822bd",
    title: "The Immortal Life of Henrietta Lacks",
  },
  {
    _id: "62e936a6c7eb033ce7c822bf",
    title:
      "The Nature Fix: Why Nature Makes us Happier, Healthier and More Creative",
  },
  {
    _id: "62e936a6c7eb033ce7c822c1",
    title: "Essentials of Anatomy and Physiology",
  },
  {
    _id: "62e936a6c7eb033ce7c822c3",
    title: "Basic Engineering Mathematics",
  },
  {
    _id: "62e936a6c7eb033ce7c822c5",
    title: "Higher Engineering Mathematics",
  },
  {
    _id: "62e936a6c7eb033ce7c822c7",
    title: "How to Write a Better Thesis",
  },
  {
    _id: "62e936a6c7eb033ce7c822c9",
    title: "Irodov – Problems in General Physics",
  },
  {
    _id: "62e936a6c7eb033ce7c822cb",
    title: "Encyclopedia of Biology",
  },
  {
    _id: "62e936a7c7eb033ce7c822cd",
    title: "Basic Mathematics for College Students",
  },
  {
    _id: "62e936a7c7eb033ce7c822cf",
    title:
      "The Secret Science of Numerology: The Hidden Meaning of Numbers and Letters",
  },
  {
    _id: "62e936a7c7eb033ce7c822d1",
    title: "Mathematics Class 9-10",
  },
  {
    _id: "62e936a7c7eb033ce7c822d3",
    title: "Space, Time and Einstein",
  },
  {
    _id: "62e936a7c7eb033ce7c822d5",
    title: "Mathematical Physics",
  },
  {
    _id: "62e936a7c7eb033ce7c822d7",
    title:
      "Cambridge International AS and A Level Mathematics Pure Mathematics 1",
  },
  {
    _id: "62e936a7c7eb033ce7c822d9",
    title:
      "Cell Division, Genetics, and Molecular Biology Cell Division, Genetics, and Molecular Biology",
  },
  {
    _id: "62e936a7c7eb033ce7c822db",
    title: "1300 Math Formulas",
  },
  {
    _id: "62e936a7c7eb033ce7c822dd",
    title: "Calculus Practice Problems For Dummies",
  },
  {
    _id: "62e936a7c7eb033ce7c822df",
    title: "Physical Chemistry Third Edition",
  },
  {
    _id: "62e936a8c7eb033ce7c822e1",
    title: "Biology Questions and Answers",
  },
  {
    _id: "62e936a8c7eb033ce7c822e3",
    title: "Essentials of Inorganic Chemistry",
  },
  {
    _id: "62e936a8c7eb033ce7c822e5",
    title: "The Mathematics Of Financial Modeling And Investment Management",
  },
  {
    _id: "62e936b01c8fab133e3acefa",
    title: "Advanced book on Mathematics Olympiad",
  },
  {
    _id: "62e936b01c8fab133e3acefc",
    title: "Organic Chemistry for DUMMIES",
  },
  {
    _id: "62e936b01c8fab133e3acefe",
    title: "Physics II For Dummies",
  },
  {
    _id: "62e936b11c8fab133e3acf00",
    title: "Number Theory: An Introduction to Mathematics",
  },
  {
    _id: "62e936b11c8fab133e3acf02",
    title: "Chemistry WorkBook for Dummies",
  },
  {
    _id: "62e936b11c8fab133e3acf04",
    title: "The Quantum Structure of Space and Time",
  },
  {
    _id: "62e936b11c8fab133e3acf06",
    title: "The Golden Book of Chemistry Experiments",
  },
  {
    _id: "62e936b11c8fab133e3acf08",
    title: "Discrete Mathematics for Computer Science",
  },
  {
    _id: "62e936b11c8fab133e3acf0a",
    title: "Methods of Geometry",
  },
  {
    _id: "62e936b11c8fab133e3acf0c",
    title:
      "A Guide to Physics Problems. Part 2. Thermodynamics, Statistical Physics, and Quantum Mechanics",
  },
  {
    _id: "62e936b11c8fab133e3acf0e",
    title: "Basics of Space Flight",
  },
  {
    _id: "62e936b11c8fab133e3acf10",
    title: "College Physics - Physics and Astronomy",
  },
  {
    _id: "62e936b11c8fab133e3acf12",
    title: "Oxford Dictionary of Chemistry",
  },
  {
    _id: "62e936b21c8fab133e3acf14",
    title: "Food Microbiology",
  },
  {
    _id: "62e936b21c8fab133e3acf16",
    title: "Algorithms - Mathematics & Computer Science",
  },
  {
    _id: "62e936b21c8fab133e3acf18",
    title: "Fundamentals of Probability and Statistics for Engineers",
  },
  {
    _id: "62e936b21c8fab133e3acf1a",
    title: "Organic Chemistry II For Dummies",
  },
  {
    _id: "62e936b21c8fab133e3acf1c",
    title: "The Grand Design",
  },
  {
    _id: "62e936b21c8fab133e3acf1e",
    title: "IGCSE Additional Mathematics Textbook",
  },
  {
    _id: "62e936b21c8fab133e3acf20",
    title: "Analytic Geometry and Calculus, with Vectors",
  },
  {
    _id: "62e936b94e970c8e18d842f9",
    title: "NCERT Class 10 Mathematics",
  },
  {
    _id: "62e936b94e970c8e18d842fb",
    title: "Cell Biology",
  },
  {
    _id: "62e936b94e970c8e18d842fd",
    title: "MATHEMATICS FOR IGCSE",
  },
  {
    _id: "62e936b94e970c8e18d842ff",
    title: "NCERT Class 9 Mathematics",
  },
  {
    _id: "62e936b94e970c8e18d84301",
    title: "Medicinal Chemistry",
  },
  {
    _id: "62e936b94e970c8e18d84303",
    title: "Human Biology",
  },
  {
    _id: "62e936b94e970c8e18d84305",
    title: "Physics of the Impossible",
  },
  {
    _id: "62e936b94e970c8e18d84307",
    title: "Food Chemistry",
  },
  {
    _id: "62e936b94e970c8e18d84309",
    title: "Electronics Projects For Dummies",
  },
  {
    _id: "62e936b94e970c8e18d8430b",
    title: "1000 Solved Problems in Modern Physics",
  },
  {
    _id: "62e936b94e970c8e18d8430d",
    title: "biology and biotechnology",
  },
  {
    _id: "62e936ba4e970c8e18d8430f",
    title: "The Immortal Life of Henrietta Lacks",
  },
  {
    _id: "62e936ba4e970c8e18d84311",
    title: "Higher Engineering Mathematics",
  },
  {
    _id: "62e936ba4e970c8e18d84313",
    title: "Plant Biology",
  },
  {
    _id: "62e936ba4e970c8e18d84315",
    title: "Paper 4: Fundamentals of Business Mathematics & Statistic",
  },
  {
    _id: "62e936ba4e970c8e18d84317",
    title:
      "Principals and Techiniques of Biochemistry and Molecular Biology-7th",
  },
  {
    _id: "62e936ba4e970c8e18d84319",
    title: "Physical Chemistry by David W. Ball",
  },
  {
    _id: "62e936ba4e970c8e18d8431b",
    title: "Trigonometry Workbook For Dummies",
  },
  {
    _id: "62e936ba4e970c8e18d8431d",
    title: "Data Mining: Practical Machine Learning Tools and Techniques ",
  },
  {
    _id: "62e936ba4e970c8e18d8431f",
    title: "chemistry experiments for children",
  },
  {
    _id: "62e936c28d194e259138edad",
    title: "Elements of nuclear physics",
  },
  {
    _id: "62e936c28d194e259138edaf",
    title: "Quantum Physics (UCSD Physics 130)",
  },
  {
    _id: "62e936c28d194e259138edb1",
    title: "NCERT Class 7 Mathematics",
  },
  {
    _id: "62e936c28d194e259138edb3",
    title: "High school mathematics",
  },
  {
    _id: "62e936c28d194e259138edb5",
    title:
      "Things That Matter: Three Decades of Passions, Pastimes and Politics",
  },
  {
    _id: "62e936c28d194e259138edb7",
    title: "Poetry of Physics and the Physics of Poetry",
  },
  {
    _id: "62e936c28d194e259138edb9",
    title: "Organic Chemistry Principles In Context",
  },
  {
    _id: "62e936c28d194e259138edbb",
    title: "Tensors for Physics",
  },
  {
    _id: "62e936c28d194e259138edbd",
    title: "Sacred Mathematics: Japanese Temple Geometry",
  },
  {
    _id: "62e936c28d194e259138edbf",
    title: "Quantum Physics Workbook For Dummies",
  },
  {
    _id: "62e936c38d194e259138edc1",
    title: "Solving Problems: A Chemistry Handbook",
  },
  {
    _id: "62e936c38d194e259138edc3",
    title: "Applied Mathematics for Business and Economics",
  },
  {
    _id: "62e936c38d194e259138edc5",
    title: "SEMICONDUCTOR DEVICE PHYSICS AND DESIGN",
  },
  {
    _id: "62e936c38d194e259138edc7",
    title:
      "A World History of Nineteenth-Century Archaeology: Nationalism, Colonialism, and the Past (Oxford Studies in the History of Archaeology)",
  },
  {
    _id: "62e936c38d194e259138edc9",
    title: "Principles and Practice of Analytical Chemistry",
  },
  {
    _id: "62e936c38d194e259138edcb",
    title: "Acceptance and Mindfulness in Cognitive Behavior Therapy",
  },
  {
    _id: "62e936c38d194e259138edcd",
    title: "Astronomy, Astrophysics, & Cosmology - The Hughes Lectures",
  },
  {
    _id: "62e936c38d194e259138edcf",
    title: "1000 Solved Problems in Modern Physics",
  },
  {
    _id: "62e936c48d194e259138edd1",
    title: "50 Mathematical Ideas You Really Need to Know",
  },
  {
    _id: "62e936c48d194e259138edd3",
    title: "A Guidebook to Mechanism in Organic Chemistry",
  },
  {
    _id: "62e936cbb0dd5ee6c950cd35",
    title: "Conceptual Physics",
  },
  {
    _id: "62e936cbb0dd5ee6c950cd37",
    title:
      "The Essentials of Biostatistics for Physicians, Nurses, and Clinicians",
  },
  {
    _id: "62e936cbb0dd5ee6c950cd39",
    title: "castellan physical chemistry",
  },
  {
    _id: "62e936cbb0dd5ee6c950cd3b",
    title: "Structural Biology",
  },
  {
    _id: "62e936d13586734be6fdb2c9",
    title: "Conceptual Physics",
  },
  {
    _id: "62e936d13586734be6fdb2cb",
    title:
      "The Essentials of Biostatistics for Physicians, Nurses, and Clinicians",
  },
  {
    _id: "62e936d13586734be6fdb2cd",
    title: "castellan physical chemistry",
  },
  {
    _id: "62e936d13586734be6fdb2cf",
    title: "Structural Biology",
  },
  {
    _id: "62e936d23586734be6fdb2d1",
    title: "Encyclopedia of the Archaeology of Ancient Egypt",
  },
  {
    _id: "62e936d23586734be6fdb2d3",
    title: "Microbiology and Immunology",
  },
  {
    _id: "62e936d23586734be6fdb2d5",
    title: "Atomic Physics",
  },
  {
    _id: "62e936d23586734be6fdb2d7",
    title: "Additional Mathematics",
  },
  {
    _id: "62e936d23586734be6fdb2d9",
    title: "Electrical Power Systems Technology",
  },
  {
    _id: "62e936d23586734be6fdb2db",
    title: "Business Mathematics and Statistics, Sixth Edition",
  },
  {
    _id: "62e936d23586734be6fdb2dd",
    title: "What Is Physics?",
  },
  {
    _id: "62e936d23586734be6fdb2df",
    title: "PLC-based Process Control Engineering Guide",
  },
  {
    _id: "62e936d23586734be6fdb2e1",
    title: "Quantum Physics - Department of Physics and Astronomy",
  },
  {
    _id: "62e936d23586734be6fdb2e3",
    title: "BIOLOGY EXPERIMENTS CHILDREN",
  },
  {
    _id: "62e936d33586734be6fdb2e5",
    title: "The History of Mathematics: A Brief Course",
  },
  {
    _id: "62e936d33586734be6fdb2e7",
    title: "Qualitative Research from Start to Finish",
  },
  {
    _id: "62e936d33586734be6fdb2e9",
    title: "Fundamentals of Medicinal Chemistry By Gareth Thomas",
  },
  {
    _id: "62e936d33586734be6fdb2eb",
    title: "Encyclopedia of Chemistry",
  },
  {
    _id: "62e936d33586734be6fdb2ed",
    title: "Problem Books in Mathematics",
  },
  {
    _id: "62e936d33586734be6fdb2ef",
    title: "An Introduction to Environmental Chemistry",
  },
  {
    _id: "62e936dc76c35e960b37f5fc",
    title: "Solid State Chemistry",
  },
  {
    _id: "62e936dc76c35e960b37f5fe",
    title: "Advanced Engineering Mathematics",
  },
  {
    _id: "62e936dc76c35e960b37f600",
    title: "Introduction to Electric Circuits",
  },
  {
    _id: "62e936dc76c35e960b37f602",
    title: "Fundamentals and Applications of Analytical Chemistry",
  },
  {
    _id: "62e936dc76c35e960b37f604",
    title: "Astronomy and the Bible",
  },
  {
    _id: "62e936dc76c35e960b37f606",
    title: "Biology Dictionary",
  },
  {
    _id: "62e936dc76c35e960b37f608",
    title: "A History of Mathematics From Mesopotamia to Modernity",
  },
  {
    _id: "62e936dc76c35e960b37f60a",
    title: "Methods in Molecular Biology • 16 Enzymes of Molecular Biology",
  },
  {
    _id: "62e936dc76c35e960b37f60c",
    title:
      "Mathematical Tools for Physics - Department of Physics - University ",
  },
  {
    _id: "62e936dd76c35e960b37f60e",
    title: "String Theory For Dummies",
  },
  {
    _id: "62e936dd76c35e960b37f610",
    title: "Mathematics Made Easy for Children with Visual Impairment - ICEVI",
  },
  {
    _id: "62e936dd76c35e960b37f612",
    title: "Mathematics for Finance: An Introduction to Financial Engineering",
  },
  {
    _id: "62e936dd76c35e960b37f614",
    title: "How Math Explains the World.pdf",
  },
  {
    _id: "62e936dd76c35e960b37f616",
    title: "Biology Science Notebook",
  },
  {
    _id: "62e936dd76c35e960b37f618",
    title: "Illustrated Guide to Home Chemistry Experiments",
  },
  {
    _id: "62e936dd76c35e960b37f61a",
    title: "Biology Dictionary",
  },
  {
    _id: "62e936dd76c35e960b37f61c",
    title: "Physics of Magnetism",
  },
  {
    _id: "62e936dd76c35e960b37f61e",
    title: "Introduction to Calculus",
  },
  {
    _id: "62e936dd76c35e960b37f620",
    title: "Statistical Physics",
  },
  {
    _id: "62e936dd76c35e960b37f622",
    title: "Children's Mathematics",
  },
  {
    _id: "62e936e52a2f6c4b377b8a26",
    title: "Solving General Chemistry Problems",
  },
  {
    _id: "62e936e62a2f6c4b377b8a28",
    title: "Organic Chemistry of Explosives",
  },
  {
    _id: "62e936e62a2f6c4b377b8a2a",
    title: "The Handy Math Answer Book",
  },
  {
    _id: "62e936e62a2f6c4b377b8a2c",
    title: "Cambridge International Mathematics",
  },
  {
    _id: "62e936e62a2f6c4b377b8a2e",
    title: "Electricity & Electronic Workbooks",
  },
  {
    _id: "62e936e62a2f6c4b377b8a30",
    title: "MATHEMATICS AND ORIGAMI",
  },
  {
    _id: "62e936e62a2f6c4b377b8a32",
    title: "Partial Differential Equations with MATLAB",
  },
  {
    _id: "62e936e62a2f6c4b377b8a34",
    title: "Big History: The Big Bang, Life on Earth, and the Rise of Humanity",
  },
  {
    _id: "62e936e62a2f6c4b377b8a36",
    title: "Bridge to Abstract Mathematics: Mathematical Proof and Structures",
  },
  {
    _id: "62e936e62a2f6c4b377b8a38",
    title: "Introductory Biostatistics",
  },
  {
    _id: "62e936e62a2f6c4b377b8a3a",
    title:
      "Between Text and Artifact: Integrating Archaeology in Biblical Studies Teaching (Archaeology and Biblical Studies)",
  },
  {
    _id: "62e936e72a2f6c4b377b8a3c",
    title: "Probability For Dummies",
  },
  {
    _id: "62e936e72a2f6c4b377b8a3e",
    title: "Principles of Mathematics",
  },
  {
    _id: "62e936e72a2f6c4b377b8a40",
    title: "The Mathematics of Money",
  },
  {
    _id: "62e936e72a2f6c4b377b8a42",
    title: "BIOINORGANIC CHEMISTRY A Short Course Second Edition",
  },
  {
    _id: "62e936e72a2f6c4b377b8a44",
    title: "Fundamentals of Heterocyclic Chemistry",
  },
  {
    _id: "62e936e72a2f6c4b377b8a46",
    title: "Mathematics for Economists",
  },
  {
    _id: "62e936e72a2f6c4b377b8a48",
    title: "Mathematics of Bioinformatics",
  },
  {
    _id: "62e936e72a2f6c4b377b8a4a",
    title: "Advanced High-School Mathematics",
  },
  {
    _id: "62e936e72a2f6c4b377b8a4c",
    title: "Essentials of Computational Chemistry",
  },
  {
    _id: "62e936ef98fdcd65e6a6faf6",
    title: "Galactic Astronomy",
  },
  {
    _id: "62e936ef98fdcd65e6a6faf8",
    title: "501 Geometry Questions",
  },
  {
    _id: "62e936ef98fdcd65e6a6fafa",
    title: "Indian Archaeology 2000-2001 A Review - Archaeological Survey of ",
  },
  {
    _id: "62e936ef98fdcd65e6a6fafc",
    title: "Mathematics for Computer Science",
  },
  {
    _id: "62e936ef98fdcd65e6a6fafe",
    title: "Engineering Rock Mechanics",
  },
  {
    _id: "62e936f098fdcd65e6a6fb00",
    title: "PHYSICS PROBLEM SOLVING",
  },
  {
    _id: "62e936f098fdcd65e6a6fb02",
    title: "Chemistry and Technology of Explosives",
  },
  {
    _id: "62e936f098fdcd65e6a6fb04",
    title: "Inorganic and Applied Chemistry",
  },
  {
    _id: "62e936f098fdcd65e6a6fb06",
    title: "Heterocyclic Chemistry at a Glance",
  },
  {
    _id: "62e936f098fdcd65e6a6fb08",
    title: "Oxidation and Antioxidants in Organic Chemistry and Biology",
  },
  {
    _id: "62e936f098fdcd65e6a6fb0a",
    title: "Understanding Engineering Mathematics",
  },
  {
    _id: "62e936f098fdcd65e6a6fb0c",
    title: "water chemistry",
  },
  {
    _id: "62e936f098fdcd65e6a6fb0e",
    title: "Babylonian Mathematics, Astrology and Astronomy",
  },
  {
    _id: "62e936f098fdcd65e6a6fb10",
    title: "Fungal Biology",
  },
  {
    _id: "62e936f098fdcd65e6a6fb12",
    title: "Discrete Mathematics: Elementary and Beyond",
  },
  {
    _id: "62e936f198fdcd65e6a6fb14",
    title: "Indian Archaeology 1999-2000 — A Review - Archaeological ",
  },
  {
    _id: "62e936f198fdcd65e6a6fb16",
    title:
      "The Advanced Geometry of Plane Curves and Their Applications - TU/e",
  },
  {
    _id: "62e936f198fdcd65e6a6fb18",
    title: "Systems Biology",
  },
  {
    _id: "62e936f198fdcd65e6a6fb1a",
    title: "Microbiology Demystified",
  },
  {
    _id: "62e936f198fdcd65e6a6fb1c",
    title: "Graduate Texts in Mathematics",
  },
  {
    _id: "62e936ffd04e83d6cd9503af",
    title: "BioPHYSICAL chemistry",
  },
  {
    _id: "62e936ffd04e83d6cd9503b1",
    title: "Basic Statistics",
  },
  {
    _id: "62e936ffd04e83d6cd9503b3",
    title: "Introduction to Cosmology",
  },
  {
    _id: "62e936ffd04e83d6cd9503b5",
    title: "Biology of Disease",
  },
  {
    _id: "62e936ffd04e83d6cd9503b7",
    title: "Mathematical Principles of Theoretical Physics",
  },
  {
    _id: "62e936ffd04e83d6cd9503b9",
    title: "Biology of Kundalini",
  },
  {
    _id: "62e936ffd04e83d6cd9503bb",
    title: "Organic Chemistry",
  },
  {
    _id: "62e936ffd04e83d6cd9503bd",
    title: "Polymer Physics",
  },
  {
    _id: "62e936ffd04e83d6cd9503bf",
    title: "Principles of Mathematics in Operations Research",
  },
  {
    _id: "62e93700d04e83d6cd9503c1",
    title: "Chemistry for Pharmacy Students",
  },
  {
    _id: "62e93700d04e83d6cd9503c3",
    title: "The Foundations of Chemistry",
  },
  {
    _id: "62e93700d04e83d6cd9503c5",
    title: "Introduction to Particle Physics",
  },
  {
    _id: "62e93700d04e83d6cd9503c7",
    title: "Geometry, Teacher's Edition",
  },
  {
    _id: "62e93700d04e83d6cd9503c9",
    title: "MODERN COSMOLOGY",
  },
  {
    _id: "62e93700d04e83d6cd9503cb",
    title: "SPACE WARFARE AND DEFENSE",
  },
  {
    _id: "62e93700d04e83d6cd9503cd",
    title: "Archaeology Underwater: The NAS Guide to Principles and Practice",
  },
  {
    _id: "62e93700d04e83d6cd9503cf",
    title: "Computational Physics",
  },
  {
    _id: "62e93700d04e83d6cd9503d1",
    title: "Physics and Engineering of Radiation Detection - Faculty",
  },
  {
    _id: "62e93700d04e83d6cd9503d3",
    title: "Geometry: An Interactive Journey to Mastery",
  },
  {
    _id: "62e93701d04e83d6cd9503d5",
    title: "Cell Biology Protocols",
  },
  {
    _id: "62e937084bd3e1444977cf7e",
    title: "Introductory Physics 2 - Duke University",
  },
  {
    _id: "62e937084bd3e1444977cf80",
    title: "Mathematics for Computer Science",
  },
  {
    _id: "62e937084bd3e1444977cf82",
    title: "Organic Chemistry of Drug Synthesis. Volume 7",
  },
  {
    _id: "62e937084bd3e1444977cf84",
    title: "Convective Heat Transfer: Solved Problems",
  },
  {
    _id: "62e937094bd3e1444977cf86",
    title: "A Brief Introduction to Biostatistics",
  },
  {
    _id: "62e937094bd3e1444977cf88",
    title: "Computational Physics - Department of Physics",
  },
  {
    _id: "62e937094bd3e1444977cf8a",
    title: "Philosophy of Biology",
  },
  {
    _id: "62e937094bd3e1444977cf8c",
    title: "The Mathematics Of Financial",
  },
  {
    _id: "62e937094bd3e1444977cf8e",
    title: "Intro to Colloid & Surface Chemistry",
  },
  {
    _id: "62e937094bd3e1444977cf90",
    title: "Chemistry - A Molecular Science",
  },
  {
    _id: "62e937094bd3e1444977cf92",
    title: "Teacher Education in Physics",
  },
  {
    _id: "62e937094bd3e1444977cf94",
    title: "Applied Mathematical Methods in Theoretical Physics",
  },
  {
    _id: "62e937094bd3e1444977cf96",
    title: "The Biology and Culture of Tilapias",
  },
  {
    _id: "62e937094bd3e1444977cf98",
    title: "Laboratory Methods of Inorganic Chemistry",
  },
  {
    _id: "62e9370a4bd3e1444977cf9a",
    title: "Modern inorganic chemistry",
  },
  {
    _id: "62e9370a4bd3e1444977cf9c",
    title: "Financial Mathematics for Actuaries",
  },
  {
    _id: "62e9370a4bd3e1444977cf9e",
    title: "Thermodynamics and Chemistry - University of Maryland ",
  },
  {
    _id: "62e9370a4bd3e1444977cfa0",
    title: "Math Book A",
  },
  {
    _id: "62e9370a4bd3e1444977cfa2",
    title: "Dairy Chemistry And Biochemistry",
  },
  {
    _id: "62e9370a4bd3e1444977cfa4",
    title:
      "Genes, Hearing, and Deafness: From Molecular Biology to Clinical Practice",
  },
  {
    _id: "62e937126e397e1f870b5a14",
    title: "Ralph Vince - Portfolio Mathematics",
  },
  {
    _id: "62e937126e397e1f870b5a16",
    title: "Secondary Mathematics Curriculum",
  },
  {
    _id: "62e937126e397e1f870b5a18",
    title: "Peptide Chemistry and Drug Design",
  },
  {
    _id: "62e937126e397e1f870b5a1a",
    title: "Instant Notes: Analytical Chemistry",
  },
  {
    _id: "62e937126e397e1f870b5a1c",
    title: "Proceedings of the Society of Biblical Archaeology",
  },
  {
    _id: "62e937126e397e1f870b5a1e",
    title: "1000 Solved Problems in Modern Physics - WordPress.com - Get a ",
  },
  {
    _id: "62e937126e397e1f870b5a20",
    title: "Organic Chemistry",
  },
  {
    _id: "62e937136e397e1f870b5a22",
    title: "The Physics of Wall Street",
  },
  {
    _id: "62e937136e397e1f870b5a24",
    title: "Biology - National Curriculum Development Centre",
  },
  {
    _id: "62e937136e397e1f870b5a26",
    title: "Politics of Nature: How to Bring the Sciences into Democracy",
  },
  {
    _id: "62e937136e397e1f870b5a28",
    title: "Mathematics for theoretical physics",
  },
  {
    _id: "62e937136e397e1f870b5a2a",
    title: "The chemistry and technology of paints",
  },
  {
    _id: "62e937136e397e1f870b5a2c",
    title: "Computational Chemistry",
  },
  {
    _id: "62e937136e397e1f870b5a2e",
    title: "Chemistry, Third edition",
  },
  {
    _id: "62e937136e397e1f870b5a30",
    title: "Determinants and Their Applications in Mathematical Physics",
  },
  {
    _id: "62e937136e397e1f870b5a32",
    title: "Mathematics and Economics",
  },
  {
    _id: "62e937136e397e1f870b5a34",
    title: "Chemistry of Essential Oils",
  },
  {
    _id: "62e937146e397e1f870b5a36",
    title: "Cliffs AP Chemistry, 3rd Edition",
  },
  {
    _id: "62e937146e397e1f870b5a38",
    title: "Mathematics for Physics: A guided tour for graduate students",
  },
  {
    _id: "62e937146e397e1f870b5a3a",
    title: "Mathematics",
  },
  {
    _id: "62e9371d690a56d233dd2f49",
    title: "Advanced Solid State Physics",
  },
  {
    _id: "62e9371e690a56d233dd2f4b",
    title: "Wine Chemistry and Biochemistry",
  },
  {
    _id: "62e9371e690a56d233dd2f4d",
    title: "The Mathematics of Arbitrage",
  },
  {
    _id: "62e9371e690a56d233dd2f4f",
    title: "Biology and Marine Biology",
  },
  {
    _id: "62e9371e690a56d233dd2f51",
    title: "Mathematical and Numerical Modeling in Geotechnical Engineering",
  },
  {
    _id: "62e9371e690a56d233dd2f53",
    title: "Introduction to Elementary Particle Physics",
  },
  {
    _id: "62e9371e690a56d233dd2f55",
    title:
      "The Archaeology of an Urban Landscape, The Whitehurst Freeway Archaeological Project",
  },
  {
    _id: "62e9371f690a56d233dd2f57",
    title: "Advices For Studying Organic Chemistry",
  },
  {
    _id: "62e9371f690a56d233dd2f59",
    title: "Biological Physics: Energy, Information, Life",
  },
  {
    _id: "62e9371f690a56d233dd2f5b",
    title: "Physical Chemistry of Foods",
  },
  {
    _id: "62e9371f690a56d233dd2f5d",
    title: "Photography, Physics, and Complexity",
  },
  {
    _id: "62e9371f690a56d233dd2f5f",
    title: "Introductory Physics II",
  },
  {
    _id: "62e9371f690a56d233dd2f61",
    title: "PHYSICAL CHEMISTRY IN BRIEF",
  },
  {
    _id: "62e93720690a56d233dd2f63",
    title: "Lubricant Additives",
  },
  {
    _id: "62e93720690a56d233dd2f65",
    title: "1.1 What is Chemistry?",
  },
  {
    _id: "62e93720690a56d233dd2f67",
    title: "Quantum Mechanics for Mathematicians",
  },
  {
    _id: "62e93720690a56d233dd2f69",
    title: "Mathematics in Finance",
  },
  {
    _id: "62e93720690a56d233dd2f6b",
    title: "Green Chemistry and the Ten Commandments",
  },
  {
    _id: "62e93720690a56d233dd2f6d",
    title:
      "The Material Culture of Steamboat Passengers - Archaeological Evidence from the Missouri River (THE PLENUM SERIES IN UNDERWATER ARCHAEOLOGY) (The Springer Series in Underwater Archaeology)",
  },
  {
    _id: "62e93720690a56d233dd2f6f",
    title: "Advanced Mathematics and Numerical Modeling of IoT",
  },
  {
    _id: "62e937277506cfb09085ce80",
    title: "The Microbiology of Anaerobic Digesters",
  },
  {
    _id: "62e937277506cfb09085ce82",
    title: "Introduction to SAT II Physics",
  },
  {
    _id: "62e937277506cfb09085ce84",
    title: "Proceedings of the Society of Biblical Archaeology",
  },
  {
    _id: "62e937277506cfb09085ce86",
    title: "Mathematics, Trigonometry",
  },
  {
    _id: "62e937277506cfb09085ce88",
    title: "Simple Nature - Light and Matter",
  },
  {
    _id: "62e937277506cfb09085ce8a",
    title: "CK-12 Geometry Concepts",
  },
  {
    _id: "62e937277506cfb09085ce8c",
    title: "Preparative Organic Chemistry",
  },
  {
    _id: "62e937277506cfb09085ce8e",
    title: "Earth Science",
  },
  {
    _id: "62e937287506cfb09085ce90",
    title: "Solar Energy - Department of Chemistry",
  },
  {
    _id: "62e937287506cfb09085ce92",
    title: "Synthetic Inorganic Chemistry",
  },
  {
    _id: "62e937287506cfb09085ce94",
    title: "5 Steps to a 5 AP Chemistry",
  },
  {
    _id: "62e937287506cfb09085ce96",
    title: "Recreational Mathematics",
  },
  {
    _id: "62e937287506cfb09085ce98",
    title:
      "Epigraphia carnatica. By B. Lewis Rice, Director of Archaeological Researches in Mysore",
  },
  {
    _id: "62e937287506cfb09085ce9a",
    title: "MATHEMATICAL AND STATISTICAL - Center for Discrete Mathematics",
  },
  {
    _id: "62e937287506cfb09085ce9c",
    title: "Digital Logic Design",
  },
  {
    _id: "62e937287506cfb09085ce9e",
    title:
      "Numerical.Methods.For.Scientists.And.Engineers_2ed_Hamming_0486652416.djvu",
  },
  {
    _id: "62e937287506cfb09085cea0",
    title: "Mathematical Methods for Physical Sciences",
  },
  {
    _id: "62e937287506cfb09085cea2",
    title: "Inorganic Chemistry",
  },
  {
    _id: "62e937297506cfb09085cea4",
    title: "Conservation Science",
  },
  {
    _id: "62e937297506cfb09085cea6",
    title: "Mathematical Tools for Physics",
  },
  {
    _id: "62e93730cc677f0addafe408",
    title: "Looking at Earth From Space",
  },
  {
    _id: "62e93753055eaf520072eb42",
    title: "Irodov – Problems in General Physics",
  },
  {
    _id: "62e93753055eaf520072eb44",
    title: "Mathematical Physics",
  },
  {
    _id: "62e93753055eaf520072eb46",
    title: "Physics II For Dummies",
  },
  {
    _id: "62e93753055eaf520072eb48",
    title:
      "A Guide to Physics Problems. Part 2. Thermodynamics, Statistical Physics, and Quantum Mechanics",
  },
  {
    _id: "62e93754055eaf520072eb4a",
    title: "Fundamentals of Probability and Statistics for Engineers",
  },
  {
    _id: "62e93754055eaf520072eb4c",
    title: "The Grand Design",
  },
  {
    _id: "62e93754055eaf520072eb4e",
    title: "Physics of the Impossible",
  },
  {
    _id: "62e93754055eaf520072eb50",
    title: "Elements of nuclear physics",
  },
  {
    _id: "62e93754055eaf520072eb52",
    title: "Quantum Physics (UCSD Physics 130)",
  },
  {
    _id: "62e93754055eaf520072eb54",
    title: "Poetry of Physics and the Physics of Poetry",
  },
  {
    _id: "62e93754055eaf520072eb56",
    title: "Tensors for Physics",
  },
  {
    _id: "62e93755055eaf520072eb58",
    title: "SEMICONDUCTOR DEVICE PHYSICS AND DESIGN",
  },
  {
    _id: "62e93755055eaf520072eb5a",
    title: "1000 Solved Problems in Modern Physics",
  },
  {
    _id: "62e93755055eaf520072eb5c",
    title: "Conceptual Physics",
  },
  {
    _id: "62e93755055eaf520072eb5e",
    title: "Atomic Physics",
  },
  {
    _id: "62e93755055eaf520072eb60",
    title: "What Is Physics?",
  },
  {
    _id: "62e93755055eaf520072eb62",
    title: "Quantum Physics - Department of Physics and Astronomy",
  },
  {
    _id: "62e93755055eaf520072eb64",
    title:
      "Mathematical Tools for Physics - Department of Physics - University ",
  },
  {
    _id: "62e93755055eaf520072eb66",
    title: "Physics of Magnetism",
  },
  {
    _id: "62e93755055eaf520072eb68",
    title: "Statistical Physics",
  },
  {
    _id: "62e9375df4abe7653269f5e3",
    title: "PHYSICS PROBLEM SOLVING",
  },
  {
    _id: "62e9375df4abe7653269f5e5",
    title: "Polymer Physics",
  },
  {
    _id: "62e9375df4abe7653269f5e7",
    title: "Introduction to Particle Physics",
  },
  {
    _id: "62e9375df4abe7653269f5e9",
    title: "Computational Physics",
  },
  {
    _id: "62e9375df4abe7653269f5eb",
    title: "Physics and Engineering of Radiation Detection - Faculty",
  },
  {
    _id: "62e9375df4abe7653269f5ed",
    title: "Introductory Physics 2 - Duke University",
  },
  {
    _id: "62e9375df4abe7653269f5ef",
    title: "Computational Physics - Department of Physics",
  },
  {
    _id: "62e9375ef4abe7653269f5f1",
    title: "Teacher Education in Physics",
  },
  {
    _id: "62e9375ef4abe7653269f5f3",
    title: "Applied Mathematical Methods in Theoretical Physics",
  },
  {
    _id: "62e9375ef4abe7653269f5f5",
    title: "1000 Solved Problems in Modern Physics - WordPress.com - Get a ",
  },
  {
    _id: "62e9375ef4abe7653269f5f7",
    title: "The Physics of Wall Street",
  },
  {
    _id: "62e9375ef4abe7653269f5f9",
    title: "Mathematics for theoretical physics",
  },
  {
    _id: "62e9375ef4abe7653269f5fb",
    title: "Determinants and Their Applications in Mathematical Physics",
  },
  {
    _id: "62e9375ef4abe7653269f5fd",
    title: "Advanced Solid State Physics",
  },
  {
    _id: "62e9375ef4abe7653269f5ff",
    title: "Introduction to Elementary Particle Physics",
  },
  {
    _id: "62e9375ef4abe7653269f601",
    title: "Photography, Physics, and Complexity",
  },
  {
    _id: "62e9375ef4abe7653269f603",
    title: "Introductory Physics II",
  },
  {
    _id: "62e9375ff4abe7653269f605",
    title: "Introduction to SAT II Physics",
  },
  {
    _id: "62e93796018d63cabb7469b2",
    title: "Basic Engineering Mathematics",
  },
  {
    _id: "62e93796018d63cabb7469b4",
    title: "Higher Engineering Mathematics",
  },
  {
    _id: "62e93796018d63cabb7469b6",
    title: "Basic Mathematics for College Students",
  },
  {
    _id: "62e93797018d63cabb7469b8",
    title: "Mathematics Class 9-10",
  },
  {
    _id: "62e93797018d63cabb7469ba",
    title: "Mathematical Physics",
  },
  {
    _id: "62e93797018d63cabb7469bc",
    title:
      "Cambridge International AS and A Level Mathematics Pure Mathematics 1",
  },
  {
    _id: "62e93797018d63cabb7469be",
    title: "1300 Math Formulas",
  },
  {
    _id: "62e93797018d63cabb7469c0",
    title: "Advanced book on Mathematics Olympiad",
  },
  {
    _id: "62e93797018d63cabb7469c2",
    title: "Number Theory: An Introduction to Mathematics",
  },
  {
    _id: "62e93797018d63cabb7469c4",
    title: "Discrete Mathematics for Computer Science",
  },
  {
    _id: "62e93797018d63cabb7469c6",
    title: "Methods of Geometry",
  },
  {
    _id: "62e93797018d63cabb7469c8",
    title: "Algorithms - Mathematics & Computer Science",
  },
  {
    _id: "62e93797018d63cabb7469ca",
    title: "IGCSE Additional Mathematics Textbook",
  },
  {
    _id: "62e93798018d63cabb7469cc",
    title: "Analytic Geometry and Calculus, with Vectors",
  },
  {
    _id: "62e93798018d63cabb7469ce",
    title: "NCERT Class 10 Mathematics",
  },
  {
    _id: "62e93798018d63cabb7469d0",
    title: "MATHEMATICS FOR IGCSE",
  },
  {
    _id: "62e93798018d63cabb7469d2",
    title: "NCERT Class 9 Mathematics",
  },
  {
    _id: "62e93798018d63cabb7469d4",
    title: "Higher Engineering Mathematics",
  },
  {
    _id: "62e93798018d63cabb7469d6",
    title: "Paper 4: Fundamentals of Business Mathematics & Statistic",
  },
  {
    _id: "62e93798018d63cabb7469d8",
    title: "NCERT Class 7 Mathematics",
  },
  {
    _id: "62e937b503a13e1ba756191d",
    title: "The Mathematics of Money",
  },
  {
    _id: "62e937b503a13e1ba756191f",
    title: "Mathematics for Economists",
  },
  {
    _id: "62e937b503a13e1ba7561921",
    title: "Mathematics of Bioinformatics",
  },
  {
    _id: "62e937b503a13e1ba7561923",
    title: "Advanced High-School Mathematics",
  },
  {
    _id: "62e937b503a13e1ba7561925",
    title: "501 Geometry Questions",
  },
  {
    _id: "62e937b503a13e1ba7561927",
    title: "Understanding Engineering Mathematics",
  },
  {
    _id: "62e937b603a13e1ba7561929",
    title: "Babylonian Mathematics, Astrology and Astronomy",
  },
  {
    _id: "62e937b603a13e1ba756192b",
    title: "Discrete Mathematics: Elementary and Beyond",
  },
  {
    _id: "62e937b603a13e1ba756192d",
    title:
      "The Advanced Geometry of Plane Curves and Their Applications - TU/e",
  },
  {
    _id: "62e937b603a13e1ba756192f",
    title: "Graduate Texts in Mathematics",
  },
  {
    _id: "62e937b603a13e1ba7561931",
    title: "Basic Statistics",
  },
  {
    _id: "62e937b603a13e1ba7561933",
    title: "Principles of Mathematics in Operations Research",
  },
  {
    _id: "62e937b603a13e1ba7561935",
    title: "Geometry, Teacher's Edition",
  },
  {
    _id: "62e937b603a13e1ba7561937",
    title: "Geometry: An Interactive Journey to Mastery",
  },
  {
    _id: "62e937b603a13e1ba7561939",
    title: "Mathematics for Computer Science",
  },
  {
    _id: "62e937b603a13e1ba756193b",
    title: "The Mathematics Of Financial",
  },
  {
    _id: "62e937b603a13e1ba756193d",
    title: "Financial Mathematics for Actuaries",
  },
  {
    _id: "62e937b703a13e1ba756193f",
    title: "Math Book A",
  },
  {
    _id: "62e937b703a13e1ba7561941",
    title: "Ralph Vince - Portfolio Mathematics",
  },
  {
    _id: "62e937b703a13e1ba7561943",
    title: "Secondary Mathematics Curriculum",
  },
  {
    _id: "62e937bcf320f30eef7ec49a",
    title: "Mathematics for theoretical physics",
  },
  {
    _id: "62e937bdf320f30eef7ec49c",
    title: "Mathematics and Economics",
  },
  {
    _id: "62e937bdf320f30eef7ec49e",
    title: "Mathematics",
  },
  {
    _id: "62e937bdf320f30eef7ec4a0",
    title: "The Mathematics of Arbitrage",
  },
  {
    _id: "62e937bdf320f30eef7ec4a2",
    title: "Mathematical and Numerical Modeling in Geotechnical Engineering",
  },
  {
    _id: "62e937bdf320f30eef7ec4a4",
    title: "Quantum Mechanics for Mathematicians",
  },
  {
    _id: "62e937bdf320f30eef7ec4a6",
    title: "Mathematics in Finance",
  },
  {
    _id: "62e937bdf320f30eef7ec4a8",
    title: "Advanced Mathematics and Numerical Modeling of IoT",
  },
  {
    _id: "62e937bdf320f30eef7ec4aa",
    title: "Mathematics, Trigonometry",
  },
  {
    _id: "62e937bdf320f30eef7ec4ac",
    title: "CK-12 Geometry Concepts",
  },
  {
    _id: "62e937bef320f30eef7ec4ae",
    title: "MATHEMATICAL AND STATISTICAL - Center for Discrete Mathematics",
  },
  {
    _id: "62e937de60c9d485dfe6d420",
    title: "Essentials of Inorganic Chemistry",
  },
  {
    _id: "62e937de60c9d485dfe6d422",
    title: "Organic Chemistry for DUMMIES",
  },
  {
    _id: "62e937de60c9d485dfe6d424",
    title: "Chemistry WorkBook for Dummies",
  },
  {
    _id: "62e937df60c9d485dfe6d426",
    title: "The Golden Book of Chemistry Experiments",
  },
  {
    _id: "62e937df60c9d485dfe6d428",
    title: "Oxford Dictionary of Chemistry",
  },
  {
    _id: "62e937df60c9d485dfe6d42a",
    title: "Organic Chemistry II For Dummies",
  },
  {
    _id: "62e937df60c9d485dfe6d42c",
    title: "Medicinal Chemistry",
  },
  {
    _id: "62e937df60c9d485dfe6d42e",
    title: "Food Chemistry",
  },
  {
    _id: "62e937df60c9d485dfe6d430",
    title: "Physical Chemistry by David W. Ball",
  },
  {
    _id: "62e937df60c9d485dfe6d432",
    title: "chemistry experiments for children",
  },
  {
    _id: "62e937df60c9d485dfe6d434",
    title: "Organic Chemistry Principles In Context",
  },
  {
    _id: "62e937df60c9d485dfe6d436",
    title: "Solving Problems: A Chemistry Handbook",
  },
  {
    _id: "62e937df60c9d485dfe6d438",
    title: "Principles and Practice of Analytical Chemistry",
  },
  {
    _id: "62e937e060c9d485dfe6d43a",
    title: "A Guidebook to Mechanism in Organic Chemistry",
  },
  {
    _id: "62e937e060c9d485dfe6d43c",
    title: "castellan physical chemistry",
  },
  {
    _id: "62e937e060c9d485dfe6d43e",
    title: "Fundamentals of Medicinal Chemistry By Gareth Thomas",
  },
  {
    _id: "62e937e060c9d485dfe6d440",
    title: "Encyclopedia of Chemistry",
  },
  {
    _id: "62e937e060c9d485dfe6d442",
    title: "An Introduction to Environmental Chemistry",
  },
  {
    _id: "62e937e060c9d485dfe6d444",
    title: "Solid State Chemistry",
  },
  {
    _id: "62e937e060c9d485dfe6d446",
    title: "Fundamentals and Applications of Analytical Chemistry",
  },
  {
    _id: "62e937e9e23c778d4b2e9171",
    title: "Illustrated Guide to Home Chemistry Experiments",
  },
  {
    _id: "62e937e9e23c778d4b2e9173",
    title: "Solving General Chemistry Problems",
  },
  {
    _id: "62e937e9e23c778d4b2e9175",
    title: "Organic Chemistry of Explosives",
  },
  {
    _id: "62e937e9e23c778d4b2e9177",
    title: "BIOINORGANIC CHEMISTRY A Short Course Second Edition",
  },
  {
    _id: "62e937e9e23c778d4b2e9179",
    title: "Fundamentals of Heterocyclic Chemistry",
  },
  {
    _id: "62e937e9e23c778d4b2e917b",
    title: "Essentials of Computational Chemistry",
  },
  {
    _id: "62e937e9e23c778d4b2e917d",
    title: "Chemistry and Technology of Explosives",
  },
  {
    _id: "62e937eae23c778d4b2e917f",
    title: "Inorganic and Applied Chemistry",
  },
  {
    _id: "62e937eae23c778d4b2e9181",
    title: "Heterocyclic Chemistry at a Glance",
  },
  {
    _id: "62e937eae23c778d4b2e9183",
    title: "Oxidation and Antioxidants in Organic Chemistry and Biology",
  },
  {
    _id: "62e937eae23c778d4b2e9185",
    title: "water chemistry",
  },
  {
    _id: "62e937eae23c778d4b2e9187",
    title: "BioPHYSICAL chemistry",
  },
  {
    _id: "62e937eae23c778d4b2e9189",
    title: "Organic Chemistry",
  },
  {
    _id: "62e937ebe23c778d4b2e918b",
    title: "Chemistry for Pharmacy Students",
  },
  {
    _id: "62e937ebe23c778d4b2e918d",
    title: "The Foundations of Chemistry",
  },
  {
    _id: "62e937ebe23c778d4b2e918f",
    title: "Organic Chemistry of Drug Synthesis. Volume 7",
  },
  {
    _id: "62e937ebe23c778d4b2e9191",
    title: "Intro to Colloid & Surface Chemistry",
  },
  {
    _id: "62e937ebe23c778d4b2e9193",
    title: "Chemistry - A Molecular Science",
  },
  {
    _id: "62e937ebe23c778d4b2e9195",
    title: "Laboratory Methods of Inorganic Chemistry",
  },
  {
    _id: "62e937ebe23c778d4b2e9197",
    title: "Modern inorganic chemistry",
  },
  {
    _id: "62e937f29dc66e510abecb19",
    title: "Dairy Chemistry And Biochemistry",
  },
  {
    _id: "62e937f29dc66e510abecb1b",
    title: "Thermodynamics and Chemistry - University of Maryland ",
  },
  {
    _id: "62e937f39dc66e510abecb1d",
    title: "Peptide Chemistry and Drug Design",
  },
  {
    _id: "62e937f39dc66e510abecb1f",
    title: "Instant Notes: Analytical Chemistry",
  },
  {
    _id: "62e937f39dc66e510abecb21",
    title: "Organic Chemistry",
  },
  {
    _id: "62e937f39dc66e510abecb23",
    title: "The chemistry and technology of paints",
  },
  {
    _id: "62e937f39dc66e510abecb25",
    title: "Computational Chemistry",
  },
  {
    _id: "62e937f39dc66e510abecb27",
    title: "Chemistry, Third edition",
  },
  {
    _id: "62e937f39dc66e510abecb29",
    title: "Chemistry of Essential Oils",
  },
  {
    _id: "62e937f39dc66e510abecb2b",
    title: "Cliffs AP Chemistry, 3rd Edition",
  },
  {
    _id: "62e937f39dc66e510abecb2d",
    title: "Wine Chemistry and Biochemistry",
  },
  {
    _id: "62e937f39dc66e510abecb2f",
    title: "Advices For Studying Organic Chemistry",
  },
  {
    _id: "62e937f49dc66e510abecb31",
    title: "PHYSICAL CHEMISTRY IN BRIEF",
  },
  {
    _id: "62e937f49dc66e510abecb33",
    title: "Lubricant Additives",
  },
  {
    _id: "62e937f49dc66e510abecb35",
    title: "1.1 What is Chemistry?",
  },
  {
    _id: "62e937f49dc66e510abecb37",
    title: "Green Chemistry and the Ten Commandments",
  },
  {
    _id: "62e937f49dc66e510abecb39",
    title: "Preparative Organic Chemistry",
  },
  {
    _id: "62e937f49dc66e510abecb3b",
    title: "Solar Energy - Department of Chemistry",
  },
  {
    _id: "62e937f49dc66e510abecb3d",
    title: "Synthetic Inorganic Chemistry",
  },
  {
    _id: "62e937f49dc66e510abecb3f",
    title: "5 Steps to a 5 AP Chemistry",
  },
  {
    _id: "62e937fc99d03edd06f15f9d",
    title: "Inorganic Chemistry",
  },
  {
    _id: "62e9384213b388f9a33b0c5b",
    title: "Essentials of Anatomy and Physiology",
  },
  {
    _id: "62e9384213b388f9a33b0c5d",
    title: "Encyclopedia of Biology",
  },
  {
    _id: "62e9384313b388f9a33b0c5f",
    title:
      "Cell Division, Genetics, and Molecular Biology Cell Division, Genetics, and Molecular Biology",
  },
  {
    _id: "62e9384313b388f9a33b0c61",
    title: "Biology Questions and Answers",
  },
  {
    _id: "62e9384313b388f9a33b0c63",
    title: "Food Microbiology",
  },
  {
    _id: "62e9384313b388f9a33b0c65",
    title: "Cell Biology",
  },
  {
    _id: "62e9384313b388f9a33b0c67",
    title: "Human Biology",
  },
  {
    _id: "62e9384313b388f9a33b0c69",
    title: "biology and biotechnology",
  },
  {
    _id: "62e9384313b388f9a33b0c6b",
    title: "Plant Biology",
  },
  {
    _id: "62e9384313b388f9a33b0c6d",
    title:
      "Principals and Techiniques of Biochemistry and Molecular Biology-7th",
  },
  {
    _id: "62e9384313b388f9a33b0c6f",
    title:
      "The Essentials of Biostatistics for Physicians, Nurses, and Clinicians",
  },
  {
    _id: "62e9384313b388f9a33b0c71",
    title: "Structural Biology",
  },
  {
    _id: "62e9384413b388f9a33b0c73",
    title: "Microbiology and Immunology",
  },
  {
    _id: "62e9384413b388f9a33b0c75",
    title: "BIOLOGY EXPERIMENTS CHILDREN",
  },
  {
    _id: "62e9384413b388f9a33b0c77",
    title: "Biology Dictionary",
  },
  {
    _id: "62e9384413b388f9a33b0c79",
    title: "Methods in Molecular Biology • 16 Enzymes of Molecular Biology",
  },
  {
    _id: "62e9384413b388f9a33b0c7b",
    title: "Biology Science Notebook",
  },
  {
    _id: "62e9384413b388f9a33b0c7d",
    title: "Biology Dictionary",
  },
  {
    _id: "62e9384413b388f9a33b0c7f",
    title: "Introductory Biostatistics",
  },
  {
    _id: "62e9384413b388f9a33b0c81",
    title: "Oxidation and Antioxidants in Organic Chemistry and Biology",
  },
  {
    _id: "62e9384d80a533a2d3640a3e",
    title: "Fungal Biology",
  },
  {
    _id: "62e9384e80a533a2d3640a40",
    title: "Systems Biology",
  },
  {
    _id: "62e9384e80a533a2d3640a42",
    title: "Microbiology Demystified",
  },
  {
    _id: "62e9384e80a533a2d3640a44",
    title: "Biology of Disease",
  },
  {
    _id: "62e9384e80a533a2d3640a46",
    title: "Biology of Kundalini",
  },
  {
    _id: "62e9384e80a533a2d3640a48",
    title: "Cell Biology Protocols",
  },
  {
    _id: "62e9384e80a533a2d3640a4a",
    title: "A Brief Introduction to Biostatistics",
  },
  {
    _id: "62e9384e80a533a2d3640a4c",
    title: "Philosophy of Biology",
  },
  {
    _id: "62e9384f80a533a2d3640a4e",
    title: "The Biology and Culture of Tilapias",
  },
  {
    _id: "62e9384f80a533a2d3640a50",
    title:
      "Genes, Hearing, and Deafness: From Molecular Biology to Clinical Practice",
  },
  {
    _id: "62e9384f80a533a2d3640a52",
    title: "Biology - National Curriculum Development Centre",
  },
  {
    _id: "62e9384f80a533a2d3640a54",
    title: "Biology and Marine Biology",
  },
  {
    _id: "62e9384f80a533a2d3640a56",
    title: "The Microbiology of Anaerobic Digesters",
  },
  {
    _id: "62e9386f40bf6cb86817f64e",
    title: "Space, Time and Einstein",
  },
  {
    _id: "62e9386f40bf6cb86817f650",
    title: "The Quantum Structure of Space and Time",
  },
  {
    _id: "62e9386f40bf6cb86817f652",
    title: "Basics of Space Flight",
  },
  {
    _id: "62e9386f40bf6cb86817f654",
    title: "Astronomy, Astrophysics, & Cosmology - The Hughes Lectures",
  },
  {
    _id: "62e9386f40bf6cb86817f656",
    title: "Astronomy and the Bible",
  },
  {
    _id: "62e9386f40bf6cb86817f658",
    title: "Galactic Astronomy",
  },
  {
    _id: "62e9386f40bf6cb86817f65a",
    title: "Babylonian Mathematics, Astrology and Astronomy",
  },
  {
    _id: "62e9386f40bf6cb86817f65c",
    title: "Introduction to Cosmology",
  },
  {
    _id: "62e9387040bf6cb86817f65e",
    title: "MODERN COSMOLOGY",
  },
  {
    _id: "62e9387040bf6cb86817f660",
    title: "SPACE WARFARE AND DEFENSE",
  },
  {
    _id: "62e9388cdbcc97d63e904e51",
    title:
      "A World History of Nineteenth-Century Archaeology: Nationalism, Colonialism, and the Past (Oxford Studies in the History of Archaeology)",
  },
  {
    _id: "62e9388cdbcc97d63e904e53",
    title: "Encyclopedia of the Archaeology of Ancient Egypt",
  },
  {
    _id: "62e9388cdbcc97d63e904e55",
    title:
      "Between Text and Artifact: Integrating Archaeology in Biblical Studies Teaching (Archaeology and Biblical Studies)",
  },
  {
    _id: "62e9388cdbcc97d63e904e57",
    title: "Indian Archaeology 2000-2001 A Review - Archaeological Survey of ",
  },
  {
    _id: "62e9388cdbcc97d63e904e59",
    title: "Indian Archaeology 1999-2000 — A Review - Archaeological ",
  },
  {
    _id: "62e9388cdbcc97d63e904e5b",
    title: "Archaeology Underwater: The NAS Guide to Principles and Practice",
  },
  {
    _id: "62e9388cdbcc97d63e904e5d",
    title: "Proceedings of the Society of Biblical Archaeology",
  },
  {
    _id: "62e9388cdbcc97d63e904e5f",
    title:
      "The Archaeology of an Urban Landscape, The Whitehurst Freeway Archaeological Project",
  },
  {
    _id: "62e9388cdbcc97d63e904e61",
    title:
      "The Material Culture of Steamboat Passengers - Archaeological Evidence from the Missouri River (THE PLENUM SERIES IN UNDERWATER ARCHAEOLOGY) (The Springer Series in Underwater Archaeology)",
  },
  {
    _id: "62e9388ddbcc97d63e904e63",
    title: "Proceedings of the Society of Biblical Archaeology",
  },
  {
    _id: "62e9388ddbcc97d63e904e65",
    title:
      "Epigraphia carnatica. By B. Lewis Rice, Director of Archaeological Researches in Mysore",
  },
  {
    _id: "62e938b47422663c0437f639",
    title: "Data Analysis with Microsoft Excel",
  },
  {
    _id: "62e938b47422663c0437f63b",
    title: "Web Design with HTML and CSS",
  },
  {
    _id: "62e938b47422663c0437f63d",
    title: "Social Media Marketing",
  },
  {
    _id: "62e938b47422663c0437f63f",
    title: "PHP, MySQL, JavaScript & HTML5 All-In-One For Dummies",
  },
  {
    _id: "62e938b47422663c0437f641",
    title: "Hacking For Dummies, 3rd Edition",
  },
  {
    _id: "62e938b47422663c0437f643",
    title: "Digital Logic And Computer Design By M. Morris Mano",
  },
  {
    _id: "62e938b47422663c0437f645",
    title: "Python Tutorial - Tutorials Point",
  },
  {
    _id: "62e938b57422663c0437f647",
    title: "Mastering Photoshop for Web Design",
  },
  {
    _id: "62e938b57422663c0437f649",
    title: "Networking for Dummies--For Dummies; 7th Ed.",
  },
  {
    _id: "62e938b57422663c0437f64b",
    title: "Beginning Programming for Dummies",
  },
  {
    _id: "62e938b57422663c0437f64d",
    title: "Hacking Gmail",
  },
  {
    _id: "62e938b57422663c0437f64f",
    title: "Hacking Wireless Networks For Dummies.pdf",
  },
  {
    _id: "62e938b57422663c0437f651",
    title: "COMPUTER HARDWARE AND SOFTWARE",
  },
  {
    _id: "62e938b57422663c0437f653",
    title: "Building Arduino Projects for the Internet of Things",
  },
  {
    _id: "62e938b57422663c0437f655",
    title: "MATLAB Programming Fundamentals - MathWorks",
  },
  {
    _id: "62e938b57422663c0437f657",
    title: "Android Programming Tutorials",
  },
  {
    _id: "62e938b57422663c0437f659",
    title: "Web Animation using JavaScript: Develop & Design",
  },
  {
    _id: "62e938b57422663c0437f65b",
    title: "PRACTICAL MATLAB® FOR ENGINEERS PRACTICAL MATLAB ",
  },
  {
    _id: "62e938b57422663c0437f65d",
    title: "Basics Of Automobile",
  },
  {
    _id: "62e938b67422663c0437f65f",
    title: "Python Programming: An Introduction to Computer Science",
  },
  {
    _id: "62e938be78d63ce00227b25d",
    title: "PC Hardware A Beginner's Guide",
  },
  {
    _id: "62e938be78d63ce00227b25f",
    title: "Cracking the Coding Interview, Fourth Edition: 150 Programming ",
  },
  {
    _id: "62e938be78d63ce00227b261",
    title: "Internet of Things",
  },
  {
    _id: "62e938be78d63ce00227b263",
    title: "The 8051 Microcontroller and Embedded",
  },
  {
    _id: "62e938be78d63ce00227b265",
    title: "Python and Tkinter Programming",
  },
  {
    _id: "62e938be78d63ce00227b267",
    title: "Beginning Java Programming For Dummies",
  },
  {
    _id: "62e938be78d63ce00227b269",
    title: "Pro HTML5 and CSS3 Design Patterns",
  },
  {
    _id: "62e938be78d63ce00227b26b",
    title: "Automobile Engineering",
  },
  {
    _id: "62e938be78d63ce00227b26d",
    title: "WordPress Web Design For Dummies",
  },
  {
    _id: "62e938bf78d63ce00227b26f",
    title: "Learn Java for Web Development",
  },
  {
    _id: "62e938bf78d63ce00227b271",
    title: "Reverse Engineering",
  },
  {
    _id: "62e938bf78d63ce00227b273",
    title: "Foundations of Python Network Programming",
  },
  {
    _id: "62e938bf78d63ce00227b275",
    title: "Data Structures with Java",
  },
  {
    _id: "62e938bf78d63ce00227b277",
    title: "Signals and Systems - Electrical Engineering",
  },
  {
    _id: "62e938bf78d63ce00227b279",
    title: "IT Essentials: PC Hardware and Software Companion Guide",
  },
  {
    _id: "62e938bf78d63ce00227b27b",
    title: "Data Communication and Computer Network",
  },
  {
    _id: "62e938bf78d63ce00227b27d",
    title: "Mathematical Foundation of Computer Science",
  },
  {
    _id: "62e938c078d63ce00227b27f",
    title: "Microsoft Access VBA Macro Programming",
  },
  {
    _id: "62e938c078d63ce00227b281",
    title: "Modeling Structured Finance Cash Flows with Microsoft Excel",
  },
  {
    _id: "62e938c078d63ce00227b283",
    title: "Photoshop for Dummies",
  },
  {
    _id: "62e938c7e674a34dfdd4f3e9",
    title: "Essential Skills Manual - Automotive Service Technician",
  },
  {
    _id: "62e938c7e674a34dfdd4f3eb",
    title: "Expert C Programming",
  },
  {
    _id: "62e938c7e674a34dfdd4f3ed",
    title: "Excel Data Analysis",
  },
  {
    _id: "62e938c7e674a34dfdd4f3ef",
    title: "3D Game Programming",
  },
  {
    _id: "62e938c7e674a34dfdd4f3f1",
    title:
      "Teach Your Kids To Code: A Parent-friendly Guide to Python Programming",
  },
  {
    _id: "62e938c7e674a34dfdd4f3f3",
    title: "Programming and Problem Solving with Java",
  },
  {
    _id: "62e938c7e674a34dfdd4f3f5",
    title: "Hacking Google Maps and Google Earth",
  },
  {
    _id: "62e938c7e674a34dfdd4f3f7",
    title: "Alternators, Starters, Generators & Motors",
  },
  {
    _id: "62e938c7e674a34dfdd4f3f9",
    title: "MatLab GUI Tutorial",
  },
  {
    _id: "62e938c8e674a34dfdd4f3fb",
    title: "JavaScript Tutorial",
  },
  {
    _id: "62e938c8e674a34dfdd4f3fd",
    title: "Microsoft® SQL Server® 2012 Bible",
  },
  {
    _id: "62e938c8e674a34dfdd4f3ff",
    title: "Gray Hat Hacking, 3rd Edition",
  },
  {
    _id: "62e938c8e674a34dfdd4f401",
    title: "HTML5, CSS3, and JavaScript Fourth Edition",
  },
  {
    _id: "62e938c8e674a34dfdd4f403",
    title: "CSS Web Design For Dummies",
  },
  {
    _id: "62e938c8e674a34dfdd4f405",
    title: "Building a Website for Dummies",
  },
  {
    _id: "62e938c8e674a34dfdd4f407",
    title: "30 Days To Internet Marketing Success",
  },
  {
    _id: "62e938c8e674a34dfdd4f409",
    title: "Mastering Windows Server 2016 Hyber V - John Savill",
  },
  {
    _id: "62e938c8e674a34dfdd4f40b",
    title: "The Internet Encyclopedia",
  },
  {
    _id: "62e938c8e674a34dfdd4f40d",
    title: "Software Engineering: Principles and Practice",
  },
  {
    _id: "62e938c9e674a34dfdd4f40f",
    title: "Modern Web Design & Development",
  },
  {
    _id: "62e938cfb9623aa03f53a568",
    title: "R Programming",
  },
  {
    _id: "62e938d0b9623aa03f53a56a",
    title: "Game Engine Architecture",
  },
  {
    _id: "62e938d0b9623aa03f53a56c",
    title: "The Linux Programming Interface",
  },
  {
    _id: "62e938d0b9623aa03f53a56e",
    title: "MySQL for the Internet of Things",
  },
  {
    _id: "62e938d0b9623aa03f53a570",
    title: "Painting Techniques",
  },
  {
    _id: "62e938d0b9623aa03f53a572",
    title: "Java Tutorial",
  },
  {
    _id: "62e938d0b9623aa03f53a574",
    title: "Cloud Security: A Comprehensive Guide to Secure Cloud Computing",
  },
  {
    _id: "62e938d0b9623aa03f53a576",
    title: "Auto Repair For Dummies.pdf",
  },
  {
    _id: "62e938d0b9623aa03f53a578",
    title: "Object Oriented Programming using C#",
  },
  {
    _id: "62e938d0b9623aa03f53a57a",
    title: "Transmission",
  },
  {
    _id: "62e938d0b9623aa03f53a57c",
    title: "Visual C++ and MFC Programming 2nd Edition",
  },
  {
    _id: "62e938d1b9623aa03f53a57e",
    title: "Fiber-Optic Communication Systems",
  },
  {
    _id: "62e938d1b9623aa03f53a580",
    title: "Web Development with jQuery",
  },
  {
    _id: "62e938d1b9623aa03f53a582",
    title: "The Internet For Dummies, 12th Edition",
  },
  {
    _id: "62e938d1b9623aa03f53a584",
    title: "Hardware Hacking - Nicolas Collins",
  },
  {
    _id: "62e938d1b9623aa03f53a586",
    title: "Ruby on Rails™ Tutorial",
  },
  {
    _id: "62e938d1b9623aa03f53a588",
    title: "Automobile Mechanic - OIT/Cinterfor",
  },
  {
    _id: "62e938d1b9623aa03f53a58a",
    title: "SEO: Search Engine Optimization Bible",
  },
  {
    _id: "62e938d1b9623aa03f53a58c",
    title: "Excel Timesaving Techniques For Dummies",
  },
  {
    _id: "62e938d1b9623aa03f53a58e",
    title: "Understanding Automotive Electronics",
  },
  {
    _id: "62e938d8f88bc5f4b193a11c",
    title: "Social Media Mining",
  },
  {
    _id: "62e938d8f88bc5f4b193a11e",
    title: "Create mobile apps with HTML5, JavaScript and Visual Studio",
  },
  {
    _id: "62e938d8f88bc5f4b193a120",
    title: "Automotive & Trucking",
  },
  {
    _id: "62e938d8f88bc5f4b193a122",
    title: "Excel for Marketing Managers",
  },
  {
    _id: "62e938d9f88bc5f4b193a124",
    title: "Neuro Linguistic Programming",
  },
  {
    _id: "62e938d9f88bc5f4b193a126",
    title: "Beginning AngularJS",
  },
  {
    _id: "62e938d9f88bc5f4b193a128",
    title: "The Art of R Programming",
  },
  {
    _id: "62e938d9f88bc5f4b193a12a",
    title: "Simulink Control Design™ - MathWorks",
  },
  {
    _id: "62e938d9f88bc5f4b193a12c",
    title: "Web Animation using JavaScript",
  },
  {
    _id: "62e938d9f88bc5f4b193a12e",
    title: "Classic & Sports Car",
  },
  {
    _id: "62e938d9f88bc5f4b193a130",
    title: "Introduction to Website Design and Development",
  },
  {
    _id: "62e938d9f88bc5f4b193a132",
    title: "Microsoft Access 2010 Bible",
  },
  {
    _id: "62e938daf88bc5f4b193a134",
    title: "Hardware Manual",
  },
  {
    _id: "62e938daf88bc5f4b193a136",
    title: "Digital Video For Dummies 3rd Edition",
  },
  {
    _id: "62e938daf88bc5f4b193a138",
    title: "Abusing the Internet of Things",
  },
  {
    _id: "62e938daf88bc5f4b193a13a",
    title: "iOS App Reverse Engineering",
  },
  {
    _id: "62e938daf88bc5f4b193a13c",
    title: "A Programmer’s Guide to the Mind",
  },
  {
    _id: "62e938daf88bc5f4b193a13e",
    title: "Swift Tutorial - Tutorialspoint",
  },
  {
    _id: "62e938daf88bc5f4b193a140",
    title: "C Programming for microcontrollers",
  },
  {
    _id: "62e938daf88bc5f4b193a142",
    title: "Automotive Engineering International - SAE",
  },
  {
    _id: "62e938e292c874e04010d9c3",
    title: "HTML5 and CSS3 2nd Edition: Level Up with Today’s Web Technologies",
  },
  {
    _id: "62e938e292c874e04010d9c5",
    title: "Simulink Tutorial",
  },
  {
    _id: "62e938e292c874e04010d9c7",
    title: "Internet Communications Using SIP",
  },
  {
    _id: "62e938e292c874e04010d9c9",
    title: "Web Design for Dummies 2nd Edition",
  },
  {
    _id: "62e938e292c874e04010d9cb",
    title: "Training Guide: Programming in HTML5 with JavaScript and CSS3 ",
  },
  {
    _id: "62e938e392c874e04010d9cd",
    title: "Internet Traffic Engineering",
  },
  {
    _id: "62e938e392c874e04010d9cf",
    title: "Sexuality and the internet",
  },
  {
    _id: "62e938e392c874e04010d9d1",
    title: "manual-de-car-audio",
  },
  {
    _id: "62e938e392c874e04010d9d3",
    title: "The Hardware Book",
  },
  {
    _id: "62e938e392c874e04010d9d5",
    title: "Hardware Catalog",
  },
  {
    _id: "62e938e392c874e04010d9d7",
    title: "Serial Port Complete - Latest Microcontroller projects ",
  },
  {
    _id: "62e938e392c874e04010d9d9",
    title: "Engine control system",
  },
  {
    _id: "62e938e392c874e04010d9db",
    title: "Beginning Programming for Dummies 3rd",
  },
  {
    _id: "62e938e392c874e04010d9dd",
    title: "Excel 2010 Bible",
  },
  {
    _id: "62e938e392c874e04010d9df",
    title: "WordPress Web Design For Dummies",
  },
  {
    _id: "62e938e492c874e04010d9e1",
    title: "A Complete Guide to Web Design",
  },
  {
    _id: "62e938e492c874e04010d9e3",
    title: "motor cars",
  },
  {
    _id: "62e938e492c874e04010d9e5",
    title: "What is Internet Marketing?",
  },
  {
    _id: "62e938e492c874e04010d9e7",
    title: "Tutorials: Animation - Autodesk | 3ds Max Design, Engineering",
  },
  {
    _id: "62e938e492c874e04010d9e9",
    title: "Programming Microsoft Windows with C",
  },
  {
    _id: "62e938ebf18f44d6e669bb50",
    title: "jQuery For Dummies",
  },
  {
    _id: "62e938ebf18f44d6e669bb52",
    title: "Automotive Training",
  },
  {
    _id: "62e938ebf18f44d6e669bb54",
    title: "Car Buying Tips Guide 1",
  },
  {
    _id: "62e938ebf18f44d6e669bb56",
    title: "Expert Spring MVC and Web Flow",
  },
  {
    _id: "62e938ebf18f44d6e669bb58",
    title: "Creating the Future of Automobiles",
  },
  {
    _id: "62e938ecf18f44d6e669bb5a",
    title: "Android Tutorial",
  },
  {
    _id: "62e938ecf18f44d6e669bb5c",
    title: "MODEL SOLAR CAR DESIGN GUIDE",
  },
  {
    _id: "62e938ecf18f44d6e669bb5e",
    title: "Wireless Home Networking For Dummies",
  },
  {
    _id: "62e938ecf18f44d6e669bb60",
    title: "Mastering Nginx",
  },
  {
    _id: "62e938ecf18f44d6e669bb62",
    title: "VHDL Programming",
  },
  {
    _id: "62e938ecf18f44d6e669bb64",
    title: "Mastering Web Application",
  },
  {
    _id: "62e938ecf18f44d6e669bb66",
    title: "Google Web Toolkit Tutorial",
  },
  {
    _id: "62e938ecf18f44d6e669bb68",
    title: "MATLAB Object-Oriented Programming",
  },
  {
    _id: "62e938edf18f44d6e669bb6a",
    title: "Web Design",
  },
  {
    _id: "62e938edf18f44d6e669bb6c",
    title: "Analysis of Algorithms : An Active Learning Approach",
  },
  {
    _id: "62e938edf18f44d6e669bb6e",
    title: "Using Games to Learn HTML5 and JavaScript",
  },
  {
    _id: "62e938edf18f44d6e669bb70",
    title: "Flow Simulation 2011 Tutorial",
  },
  {
    _id: "62e938edf18f44d6e669bb72",
    title: "Internet Marketing Strategy Workshop",
  },
  {
    _id: "62e938edf18f44d6e669bb74",
    title: "Advanced Copyright Issues on the Internet",
  },
  {
    _id: "62e938edf18f44d6e669bb76",
    title: "Language and the Internet",
  },
  {
    _id: "62e938f512b347e254a7073c",
    title: "CAR and Driver - March 2017",
  },
  {
    _id: "62e938f512b347e254a7073e",
    title: "3ds Max 10 Online Character Animation Tutorials",
  },
  {
    _id: "62e938f512b347e254a70740",
    title: "THE Java™ Programming Language, Fourth Edition",
  },
  {
    _id: "62e938f512b347e254a70742",
    title: "UnrealScript Game Programming Cookbook",
  },
  {
    _id: "62e938f512b347e254a70744",
    title: "Programming and Graphics",
  },
  {
    _id: "62e938f512b347e254a70746",
    title: "Java Programming Language Handbook",
  },
  {
    _id: "62e938f512b347e254a70748",
    title: "Hacking Secret Ciphers with Python",
  },
  {
    _id: "62e938f512b347e254a7074a",
    title: "Excel VBA Programming For Dummies",
  },
  {
    _id: "62e938f512b347e254a7074c",
    title: "Using the Internet Safely For Seniors",
  },
  {
    _id: "62e938f612b347e254a7074e",
    title: "Automotive Products Catalog",
  },
  {
    _id: "62e938f612b347e254a70750",
    title: "Oracle Database Programming Using",
  },
  {
    _id: "62e938f612b347e254a70752",
    title: "C++ Timesaving Techniques For Dummies",
  },
  {
    _id: "62e938f612b347e254a70754",
    title: "MATLAB® Recipes for Earth Sciences",
  },
  {
    _id: "62e938f612b347e254a70756",
    title: "Web Designer’s Guide to WordPress",
  },
  {
    _id: "62e938f612b347e254a70758",
    title: "American Car Magazine November 2015",
  },
  {
    _id: "62e938f612b347e254a7075a",
    title: "Upgrading & Fixing Laptops DUMmIES",
  },
  {
    _id: "62e938f612b347e254a7075c",
    title: "Java 7 for Absolute Beginners",
  },
  {
    _id: "62e938f612b347e254a7075e",
    title: "SolidWorks 2010 Bible",
  },
  {
    _id: "62e938f612b347e254a70760",
    title: "Cloud Computing: Technologies and Strategies of the Ubiquitous ",
  },
  {
    _id: "62e938f712b347e254a70762",
    title: "Passenger Car & Light Truck Applications",
  },
  {
    _id: "62e9390142c9819f0e68732e",
    title: "Car Hacking",
  },
  {
    _id: "62e9390142c9819f0e687330",
    title: "The Social Media Evolution",
  },
  {
    _id: "62e9390142c9819f0e687332",
    title: "Automotive Quality Systems Handbook",
  },
  {
    _id: "62e9390142c9819f0e687334",
    title: "Google Earth for Dummies",
  },
  {
    _id: "62e9390142c9819f0e687336",
    title: "2016 Motorcycles Harley Davidson",
  },
  {
    _id: "62e9390142c9819f0e687338",
    title: "Language and the Internet",
  },
  {
    _id: "62e9390142c9819f0e68733a",
    title: "Autodesk Revit Architecture 2014 Fundamentals - SDC Publications",
  },
  {
    _id: "62e9390142c9819f0e68733c",
    title: "Beginner's Programming Tutorial in QBasic",
  },
  {
    _id: "62e9390142c9819f0e68733e",
    title:
      "Computer Programming class....click here to view the book we are following in PDF form. Be",
  },
  {
    _id: "62e9390242c9819f0e687340",
    title: "Design Patterns Java™ Workbook",
  },
  {
    _id: "62e9390242c9819f0e687342",
    title: "Collectors' Motor Cars and Automobilia",
  },
  {
    _id: "62e9390242c9819f0e687344",
    title: "HTML5 Guidelines for Web Developers",
  },
  {
    _id: "62e9390242c9819f0e687346",
    title: "Matlab - The Language of Technical Computing",
  },
  {
    _id: "62e9390242c9819f0e687348",
    title: "Frontend Frameworks",
  },
  {
    _id: "62e9390242c9819f0e68734a",
    title: "Top Gear August 2015",
  },
  {
    _id: "62e9390242c9819f0e68734c",
    title: "Art of the Classic Car",
  },
  {
    _id: "62e9390242c9819f0e68734e",
    title: "AutoCAD LT 2011 - Autodesk | 3D Design, Engineering ",
  },
  {
    _id: "62e9390242c9819f0e687350",
    title: "New Perspectives On Web Design",
  },
  {
    _id: "62e9390242c9819f0e687352",
    title: "Automotive 2025",
  },
  {
    _id: "62e9390342c9819f0e687354",
    title: "Revit Architecture 2014 Basics - SDC Publications",
  },
  {
    _id: "62e939105b616bc6757ce1ae",
    title: "Automobile Engineering. - University of Calicut",
  },
  {
    _id: "62e939115b616bc6757ce1b0",
    title: "Car Catalog",
  },
  {
    _id: "62e939115b616bc6757ce1b2",
    title: "Autodesk AutoCAD 2014",
  },
  {
    _id: "62e939115b616bc6757ce1b4",
    title: "Wireless Home Networking For Dummies",
  },
  {
    _id: "62e939115b616bc6757ce1b6",
    title: "High-performance Electric Motorcycles",
  },
  {
    _id: "62e939115b616bc6757ce1b8",
    title: "Advanced Automotive Technology: Visions of a Super-Efficient ",
  },
  {
    _id: "62e939115b616bc6757ce1ba",
    title: "Foundation HTML5 With CSS",
  },
  {
    _id: "62e939115b616bc6757ce1bc",
    title: "Industrial Heating",
  },
  {
    _id: "62e939125b616bc6757ce1be",
    title: "the bmw active hybrid 5 owners manual",
  },
  {
    _id: "62e939125b616bc6757ce1c0",
    title: "Car Advertising",
  },
  {
    _id: "62e939125b616bc6757ce1c2",
    title: "Digital Identity and the Connected Car",
  },
  {
    _id: "62e939125b616bc6757ce1c4",
    title: "Car Tuning Ferodo Racing",
  },
  {
    _id: "62e939125b616bc6757ce1c6",
    title: "The Evolution of the Connected Car",
  },
  {
    _id: "62e939125b616bc6757ce1c8",
    title: "SAP - TINET - Tarragona Internet",
  },
  {
    _id: "62e939125b616bc6757ce1ca",
    title: "Automotive Division",
  },
  {
    _id: "62e939125b616bc6757ce1cc",
    title: "Automobile",
  },
  {
    _id: "62e939125b616bc6757ce1ce",
    title: "Mash Motorcycles",
  },
  {
    _id: "62e939125b616bc6757ce1d0",
    title: "The Car in British Society",
  },
  {
    _id: "62e939135b616bc6757ce1d2",
    title: "Play with Robot-Assemble The Car",
  },
  {
    _id: "62e939135b616bc6757ce1d4",
    title: "Honda Environment",
  },
  {
    _id: "62e9391f9e749be0f40bf323",
    title: "Norton Motorcycles",
  },
  {
    _id: "62e9391f9e749be0f40bf325",
    title: "Uber vs. Car Ownership",
  },
  {
    _id: "62e939209e749be0f40bf327",
    title: "CAR - Modern Car Society",
  },
  {
    _id: "62e939209e749be0f40bf329",
    title: "2016 Top Markets Report - Automotive Parts",
  },
  {
    _id: "62e939209e749be0f40bf32b",
    title: "massachusetts private passenger automobile insurance manual",
  },
  {
    _id: "62e939209e749be0f40bf32d",
    title: "chevrolet nova parts - Truck and Car Shop",
  },
  {
    _id: "62e939209e749be0f40bf32f",
    title: "Triumph Motorcycles Ltd - FEMA",
  },
  {
    _id: "62e939209e749be0f40bf331",
    title: "Access.2007.VBA.Bibl..",
  },
  {
    _id: "62e939209e749be0f40bf333",
    title: "A developer’s guide to load testing",
  },
  {
    _id: "62e939209e749be0f40bf335",
    title: "Geely Automobile Holdings Limited",
  },
  {
    _id: "62e939209e749be0f40bf337",
    title: "L'attachement automobile mis à l'épreuve",
  },
  {
    _id: "62e939209e749be0f40bf339",
    title:
      "The Use of Occupation and Education Factors in Automobile Insurance",
  },
  {
    _id: "62e9393d6c36c1b4f8b241af",
    title: "Web Design with HTML and CSS",
  },
  {
    _id: "62e9393d6c36c1b4f8b241b1",
    title: "Data Analysis with Microsoft Excel",
  },
  {
    _id: "62e9393d6c36c1b4f8b241b3",
    title: "PHP, MySQL, JavaScript & HTML5 All-In-One For Dummies",
  },
  {
    _id: "62e9393d6c36c1b4f8b241b5",
    title: "Hacking For Dummies, 3rd Edition",
  },
  {
    _id: "62e9393d6c36c1b4f8b241b7",
    title: "Mastering Photoshop for Web Design",
  },
  {
    _id: "62e9393d6c36c1b4f8b241b9",
    title: "COMPUTER HARDWARE AND SOFTWARE",
  },
  {
    _id: "62e9393d6c36c1b4f8b241bb",
    title: "Building Arduino Projects for the Internet of Things",
  },
  {
    _id: "62e9393d6c36c1b4f8b241bd",
    title: "PRACTICAL MATLAB® FOR ENGINEERS PRACTICAL MATLAB ",
  },
  {
    _id: "62e9393d6c36c1b4f8b241bf",
    title: "Python Programming: An Introduction to Computer Science",
  },
  {
    _id: "62e9393d6c36c1b4f8b241c1",
    title: "Pro HTML5 and CSS3 Design Patterns",
  },
  {
    _id: "62e9393e6c36c1b4f8b241c3",
    title: "Reverse Engineering",
  },
  {
    _id: "62e9393e6c36c1b4f8b241c5",
    title: "IT Essentials: PC Hardware and Software Companion Guide",
  },
  {
    _id: "62e9393e6c36c1b4f8b241c7",
    title: "Modeling Structured Finance Cash Flows with Microsoft Excel",
  },
  {
    _id: "62e9393e6c36c1b4f8b241c9",
    title: "Excel Data Analysis",
  },
  {
    _id: "62e9393e6c36c1b4f8b241cb",
    title: "Hacking Google Maps and Google Earth",
  },
  {
    _id: "62e9393e6c36c1b4f8b241cd",
    title: "Microsoft® SQL Server® 2012 Bible",
  },
  {
    _id: "62e9393e6c36c1b4f8b241cf",
    title: "HTML5, CSS3, and JavaScript Fourth Edition",
  },
  {
    _id: "62e9393e6c36c1b4f8b241d1",
    title: "Mastering Windows Server 2016 Hyber V - John Savill",
  },
  {
    _id: "62e9393e6c36c1b4f8b241d3",
    title: "Software Engineering: Principles and Practice",
  },
  {
    _id: "62e9393e6c36c1b4f8b241d5",
    title: "Game Engine Architecture",
  },
  {
    _id: "62e939467aefd52d16bb2c2d",
    title: "Create mobile apps with HTML5, JavaScript and Visual Studio",
  },
  {
    _id: "62e939467aefd52d16bb2c2f",
    title: "Excel for Marketing Managers",
  },
  {
    _id: "62e939477aefd52d16bb2c31",
    title: "Simulink Control Design™ - MathWorks",
  },
  {
    _id: "62e939477aefd52d16bb2c33",
    title: "iOS App Reverse Engineering",
  },
  {
    _id: "62e939477aefd52d16bb2c35",
    title: "A Programmer’s Guide to the Mind",
  },
  {
    _id: "62e939477aefd52d16bb2c37",
    title: "HTML5 and CSS3 2nd Edition: Level Up with Today’s Web Technologies",
  },
  {
    _id: "62e939477aefd52d16bb2c39",
    title: "Beginning Programming for Dummies 3rd",
  },
  {
    _id: "62e939477aefd52d16bb2c3b",
    title: "Tutorials: Animation - Autodesk | 3ds Max Design, Engineering",
  },
  {
    _id: "62e939477aefd52d16bb2c3d",
    title: "jQuery For Dummies",
  },
  {
    _id: "62e939477aefd52d16bb2c3f",
    title: "Mastering Nginx",
  },
  {
    _id: "62e939477aefd52d16bb2c41",
    title: "Using Games to Learn HTML5 and JavaScript",
  },
  {
    _id: "62e939477aefd52d16bb2c43",
    title: "C++ Timesaving Techniques For Dummies",
  },
  {
    _id: "62e939487aefd52d16bb2c45",
    title: "MATLAB® Recipes for Earth Sciences",
  },
  {
    _id: "62e939487aefd52d16bb2c47",
    title: "Java 7 for Absolute Beginners",
  },
  {
    _id: "62e939487aefd52d16bb2c49",
    title: "Beginner's Programming Tutorial in QBasic",
  },
  {
    _id: "62e939487aefd52d16bb2c4b",
    title: "Matlab - The Language of Technical Computing",
  },
  {
    _id: "62e939487aefd52d16bb2c4d",
    title: "Frontend Frameworks",
  },
  {
    _id: "62e939487aefd52d16bb2c4f",
    title: "AutoCAD LT 2011 - Autodesk | 3D Design, Engineering ",
  },
  {
    _id: "62e939487aefd52d16bb2c51",
    title: "Autodesk AutoCAD 2014",
  },
  {
    _id: "62e9396d1a28b755e752e8d6",
    title: "SAP - TINET - Tarragona Internet",
  },
  {
    _id: "62e939894004cd07cde30086",
    title: "Digital Logic And Computer Design By M. Morris Mano",
  },
  {
    _id: "62e939894004cd07cde30088",
    title: "COMPUTER HARDWARE AND SOFTWARE",
  },
  {
    _id: "62e9398a4004cd07cde3008a",
    title: "PC Hardware A Beginner's Guide",
  },
  {
    _id: "62e9398a4004cd07cde3008c",
    title: "IT Essentials: PC Hardware and Software Companion Guide",
  },
  {
    _id: "62e9398a4004cd07cde3008e",
    title: "Hardware Hacking - Nicolas Collins",
  },
  {
    _id: "62e9398a4004cd07cde30090",
    title: "Hardware Manual",
  },
  {
    _id: "62e9398a4004cd07cde30092",
    title: "Hardware Catalog",
  },
  {
    _id: "62e9398a4004cd07cde30094",
    title: "The Hardware Book",
  },
  {
    _id: "62e9398a4004cd07cde30096",
    title: "Serial Port Complete - Latest Microcontroller projects ",
  },
  {
    _id: "62e939a117ba9eba12e3100a",
    title: "Beginning Programming for Dummies",
  },
  {
    _id: "62e939a117ba9eba12e3100c",
    title: "MATLAB Programming Fundamentals - MathWorks",
  },
  {
    _id: "62e939a117ba9eba12e3100e",
    title: "Android Programming Tutorials",
  },
  {
    _id: "62e939a217ba9eba12e31010",
    title: "Cracking the Coding Interview, Fourth Edition: 150 Programming ",
  },
  {
    _id: "62e939a217ba9eba12e31012",
    title: "The 8051 Microcontroller and Embedded",
  },
  {
    _id: "62e939a217ba9eba12e31014",
    title: "Python and Tkinter Programming",
  },
  {
    _id: "62e939a217ba9eba12e31016",
    title: "Beginning Java Programming For Dummies",
  },
  {
    _id: "62e939a217ba9eba12e31018",
    title: "Foundations of Python Network Programming",
  },
  {
    _id: "62e939a217ba9eba12e3101a",
    title: "Data Structures with Java",
  },
  {
    _id: "62e939a217ba9eba12e3101c",
    title: "Microsoft Access VBA Macro Programming",
  },
  {
    _id: "62e939a217ba9eba12e3101e",
    title: "Expert C Programming",
  },
  {
    _id: "62e939a217ba9eba12e31020",
    title: "3D Game Programming",
  },
  {
    _id: "62e939a317ba9eba12e31022",
    title: "Programming and Problem Solving with Java",
  },
  {
    _id: "62e939a317ba9eba12e31024",
    title: "R Programming",
  },
  {
    _id: "62e939a317ba9eba12e31026",
    title: "The Linux Programming Interface",
  },
  {
    _id: "62e939a317ba9eba12e31028",
    title: "Object Oriented Programming using C#",
  },
  {
    _id: "62e939a317ba9eba12e3102a",
    title: "Visual C++ and MFC Programming 2nd Edition",
  },
  {
    _id: "62e939a317ba9eba12e3102c",
    title: "Neuro Linguistic Programming",
  },
  {
    _id: "62e939a317ba9eba12e3102e",
    title: "Beginning AngularJS",
  },
  {
    _id: "62e939a317ba9eba12e31030",
    title: "The Art of R Programming",
  },
  {
    _id: "62e939ac904ccc67da6017eb",
    title: "C Programming for microcontrollers",
  },
  {
    _id: "62e939ac904ccc67da6017ed",
    title: "Programming Microsoft Windows with C",
  },
  {
    _id: "62e939ac904ccc67da6017ef",
    title: "VHDL Programming",
  },
  {
    _id: "62e939ac904ccc67da6017f1",
    title: "MATLAB Object-Oriented Programming",
  },
  {
    _id: "62e939ac904ccc67da6017f3",
    title: "THE Java™ Programming Language, Fourth Edition",
  },
  {
    _id: "62e939ac904ccc67da6017f5",
    title: "UnrealScript Game Programming Cookbook",
  },
  {
    _id: "62e939ac904ccc67da6017f7",
    title: "Programming and Graphics",
  },
  {
    _id: "62e939ac904ccc67da6017f9",
    title: "Java Programming Language Handbook",
  },
  {
    _id: "62e939ac904ccc67da6017fb",
    title: "Excel VBA Programming For Dummies",
  },
  {
    _id: "62e939ad904ccc67da6017fd",
    title: "Oracle Database Programming Using",
  },
  {
    _id: "62e939d0627c820999628a71",
    title: "Web Design with HTML and CSS",
  },
  {
    _id: "62e939d0627c820999628a73",
    title: "Mastering Photoshop for Web Design",
  },
  {
    _id: "62e939d0627c820999628a75",
    title: "Web Animation using JavaScript: Develop & Design",
  },
  {
    _id: "62e939d0627c820999628a77",
    title: "WordPress Web Design For Dummies",
  },
  {
    _id: "62e939d1627c820999628a79",
    title: "Learn Java for Web Development",
  },
  {
    _id: "62e939d1627c820999628a7b",
    title: "CSS Web Design For Dummies",
  },
  {
    _id: "62e939d1627c820999628a7d",
    title: "Building a Website for Dummies",
  },
  {
    _id: "62e939d1627c820999628a7f",
    title: "Modern Web Design & Development",
  },
  {
    _id: "62e939d1627c820999628a81",
    title: "Web Development with jQuery",
  },
  {
    _id: "62e939d1627c820999628a83",
    title: "Web Animation using JavaScript",
  },
  {
    _id: "62e939d1627c820999628a85",
    title: "Introduction to Website Design and Development",
  },
  {
    _id: "62e939d1627c820999628a87",
    title: "Web Design for Dummies 2nd Edition",
  },
  {
    _id: "62e939d1627c820999628a89",
    title: "WordPress Web Design For Dummies",
  },
  {
    _id: "62e939d1627c820999628a8b",
    title: "A Complete Guide to Web Design",
  },
  {
    _id: "62e939d2627c820999628a8d",
    title: "Expert Spring MVC and Web Flow",
  },
  {
    _id: "62e939d2627c820999628a8f",
    title: "Mastering Web Application",
  },
  {
    _id: "62e939d2627c820999628a91",
    title: "Web Design",
  },
  {
    _id: "62e939d2627c820999628a93",
    title: "Web Designer’s Guide to WordPress",
  },
  {
    _id: "62e939d2627c820999628a95",
    title: "New Perspectives On Web Design",
  },
  {
    _id: "62e939f7168827ae6395f4e6",
    title: "Python Tutorial - Tutorials Point",
  },
  {
    _id: "62e939f7168827ae6395f4e8",
    title: "Android Programming Tutorials",
  },
  {
    _id: "62e939f7168827ae6395f4ea",
    title: "Signals and Systems - Electrical Engineering",
  },
  {
    _id: "62e939f7168827ae6395f4ec",
    title: "MatLab GUI Tutorial",
  },
  {
    _id: "62e939f7168827ae6395f4ee",
    title: "JavaScript Tutorial",
  },
  {
    _id: "62e939f7168827ae6395f4f0",
    title: "Java Tutorial",
  },
  {
    _id: "62e939f7168827ae6395f4f2",
    title: "Ruby on Rails™ Tutorial",
  },
  {
    _id: "62e939f7168827ae6395f4f4",
    title: "Swift Tutorial - Tutorialspoint",
  },
  {
    _id: "62e939f8168827ae6395f4f6",
    title: "Simulink Tutorial",
  },
  {
    _id: "62e939f8168827ae6395f4f8",
    title: "Android Tutorial",
  },
  {
    _id: "62e939f8168827ae6395f4fa",
    title: "Google Web Toolkit Tutorial",
  },
  {
    _id: "62e939f8168827ae6395f4fc",
    title: "Flow Simulation 2011 Tutorial",
  },
  {
    _id: "62e939f8168827ae6395f4fe",
    title: "3ds Max 10 Online Character Animation Tutorials",
  },
  {
    _id: "62e939f8168827ae6395f500",
    title: "Autodesk Revit Architecture 2014 Fundamentals - SDC Publications",
  },
  {
    _id: "62e939f8168827ae6395f502",
    title: "Revit Architecture 2014 Basics - SDC Publications",
  },
  {
    _id: "62e93a1c328526cd3c73a349",
    title: "Basics Of Automobile",
  },
  {
    _id: "62e93a1c328526cd3c73a34b",
    title: "Automobile Engineering",
  },
  {
    _id: "62e93a1c328526cd3c73a34d",
    title: "Essential Skills Manual - Automotive Service Technician",
  },
  {
    _id: "62e93a1c328526cd3c73a34f",
    title: "Alternators, Starters, Generators & Motors",
  },
  {
    _id: "62e93a1c328526cd3c73a351",
    title: "Painting Techniques",
  },
  {
    _id: "62e93a1c328526cd3c73a353",
    title: "Auto Repair For Dummies.pdf",
  },
  {
    _id: "62e93a1d328526cd3c73a355",
    title: "Transmission",
  },
  {
    _id: "62e93a1d328526cd3c73a357",
    title: "Automobile Mechanic - OIT/Cinterfor",
  },
  {
    _id: "62e93a1d328526cd3c73a359",
    title: "Understanding Automotive Electronics",
  },
  {
    _id: "62e93a1d328526cd3c73a35b",
    title: "Automotive & Trucking",
  },
  {
    _id: "62e93a1d328526cd3c73a35d",
    title: "Classic & Sports Car",
  },
  {
    _id: "62e93a1d328526cd3c73a35f",
    title: "Automotive Engineering International - SAE",
  },
  {
    _id: "62e93a1d328526cd3c73a361",
    title: "manual-de-car-audio",
  },
  {
    _id: "62e93a1d328526cd3c73a363",
    title: "Engine control system",
  },
  {
    _id: "62e93a1d328526cd3c73a365",
    title: "motor cars",
  },
  {
    _id: "62e93a1d328526cd3c73a367",
    title: "Automotive Training",
  },
  {
    _id: "62e93a1e328526cd3c73a369",
    title: "Car Buying Tips Guide 1",
  },
  {
    _id: "62e93a1e328526cd3c73a36b",
    title: "Creating the Future of Automobiles",
  },
  {
    _id: "62e93a1e328526cd3c73a36d",
    title: "MODEL SOLAR CAR DESIGN GUIDE",
  },
  {
    _id: "62e93a1e328526cd3c73a36f",
    title: "CAR and Driver - March 2017",
  },
  {
    _id: "62e93a2854c5e6dde72e86fd",
    title: "Automotive Products Catalog",
  },
  {
    _id: "62e93a2854c5e6dde72e86ff",
    title: "American Car Magazine November 2015",
  },
  {
    _id: "62e93a2854c5e6dde72e8701",
    title: "Passenger Car & Light Truck Applications",
  },
  {
    _id: "62e93a2854c5e6dde72e8703",
    title: "Car Hacking",
  },
  {
    _id: "62e93a2854c5e6dde72e8705",
    title: "Automotive Quality Systems Handbook",
  },
  {
    _id: "62e93a2854c5e6dde72e8707",
    title: "2016 Motorcycles Harley Davidson",
  },
  {
    _id: "62e93a2854c5e6dde72e8709",
    title: "Collectors' Motor Cars and Automobilia",
  },
  {
    _id: "62e93a2954c5e6dde72e870b",
    title: "Top Gear August 2015",
  },
  {
    _id: "62e93a2954c5e6dde72e870d",
    title: "Art of the Classic Car",
  },
  {
    _id: "62e93a2954c5e6dde72e870f",
    title: "Automotive 2025",
  },
  {
    _id: "62e93a2954c5e6dde72e8711",
    title: "Automobile Engineering. - University of Calicut",
  },
  {
    _id: "62e93a2954c5e6dde72e8713",
    title: "Car Catalog",
  },
  {
    _id: "62e93a2954c5e6dde72e8715",
    title: "High-performance Electric Motorcycles",
  },
  {
    _id: "62e93a2954c5e6dde72e8717",
    title: "Advanced Automotive Technology: Visions of a Super-Efficient ",
  },
  {
    _id: "62e93a2954c5e6dde72e8719",
    title: "Industrial Heating",
  },
  {
    _id: "62e93a2954c5e6dde72e871b",
    title: "the bmw active hybrid 5 owners manual",
  },
  {
    _id: "62e93a2a54c5e6dde72e871d",
    title: "Car Advertising",
  },
  {
    _id: "62e93a2a54c5e6dde72e871f",
    title: "Digital Identity and the Connected Car",
  },
  {
    _id: "62e93a2a54c5e6dde72e8721",
    title: "Car Tuning Ferodo Racing",
  },
  {
    _id: "62e93a2a54c5e6dde72e8723",
    title: "The Evolution of the Connected Car",
  },
  {
    _id: "62e93a325b1e723e81c02864",
    title: "Automotive Division",
  },
  {
    _id: "62e93a325b1e723e81c02866",
    title: "Automobile",
  },
  {
    _id: "62e93a325b1e723e81c02868",
    title: "Mash Motorcycles",
  },
  {
    _id: "62e93a335b1e723e81c0286a",
    title: "The Car in British Society",
  },
  {
    _id: "62e93a335b1e723e81c0286c",
    title: "Play with Robot-Assemble The Car",
  },
  {
    _id: "62e93a335b1e723e81c0286e",
    title: "Honda Environment",
  },
  {
    _id: "62e93a335b1e723e81c02870",
    title: "Norton Motorcycles",
  },
  {
    _id: "62e93a335b1e723e81c02872",
    title: "Uber vs. Car Ownership",
  },
  {
    _id: "62e93a335b1e723e81c02874",
    title: "CAR - Modern Car Society",
  },
  {
    _id: "62e93a335b1e723e81c02876",
    title: "2016 Top Markets Report - Automotive Parts",
  },
  {
    _id: "62e93a335b1e723e81c02878",
    title: "massachusetts private passenger automobile insurance manual",
  },
  {
    _id: "62e93a345b1e723e81c0287a",
    title: "chevrolet nova parts - Truck and Car Shop",
  },
  {
    _id: "62e93a345b1e723e81c0287c",
    title: "Triumph Motorcycles Ltd - FEMA",
  },
  {
    _id: "62e93a345b1e723e81c0287e",
    title: "Geely Automobile Holdings Limited",
  },
  {
    _id: "62e93a345b1e723e81c02880",
    title: "L'attachement automobile mis à l'épreuve",
  },
  {
    _id: "62e93a345b1e723e81c02882",
    title:
      "The Use of Occupation and Education Factors in Automobile Insurance",
  },
  {
    _id: "62e9b6a5cb20d45888e8dcfe",
    title: "Handbook of Medicinal Herbs",
  },
  {
    _id: "62e9b6a5cb20d45888e8dd00",
    title: "The Complete Yoga Poses",
  },
  {
    _id: "62e9b6a5cb20d45888e8dd02",
    title: "Teaching Organic Farming & Gardening",
  },
  {
    _id: "62e9b6a5cb20d45888e8dd04",
    title: "Gardens Outdoor Fine Woodworking",
  },
  {
    _id: "62e9b6a5cb20d45888e8dd06",
    title: "Growing Elite Marijuana",
  },
  {
    _id: "62e9b6a5cb20d45888e8dd08",
    title: "Plant Biotechnology and Genetics: Principles, Techniques",
  },
  {
    _id: "62e9b6a5cb20d45888e8dd0a",
    title: "Vegetable Gardening for Dummies",
  },
  {
    _id: "62e9b6a5cb20d45888e8dd0c",
    title: "Dubai & Abu Dhabi 7",
  },
  {
    _id: "62e9b6a5cb20d45888e8dd0e",
    title: "India Rajasthan",
  },
  {
    _id: "62e9b6a5cb20d45888e8dd10",
    title: "Organic Gardening for Dummies",
  },
  {
    _id: "62e9b6a5cb20d45888e8dd12",
    title: "Morocco: Sleeping & Eating",
  },
  {
    _id: "62e9b6a6cb20d45888e8dd14",
    title: "Japanese gardens",
  },
  {
    _id: "62e9b6a6cb20d45888e8dd16",
    title: "Gardening Basics for..",
  },
  {
    _id: "62e9b6a6cb20d45888e8dd18",
    title: "Fundamentals Organic Farming Gardening",
  },
  {
    _id: "62e9b6a6cb20d45888e8dd1a",
    title: "Teaching Organic Farming and Gardening - Center for Agroecology ",
  },
  {
    _id: "62e9b6a6cb20d45888e8dd1c",
    title: "MEDICINAL PLANTS in Folk Tradition",
  },
  {
    _id: "62e9b6a6cb20d45888e8dd1e",
    title: "Handbook of Plant and Crop Physiology",
  },
  {
    _id: "62e9b6a6cb20d45888e8dd20",
    title: "A Handbook of Native American Herbs",
  },
  {
    _id: "62e9b6a6cb20d45888e8dd22",
    title: "Lonely Planet Guide",
  },
  {
    _id: "62e9b6a6cb20d45888e8dd24",
    title: "Dictionary of Flowers And Plants For Gardening",
  },
  {
    _id: "62e9b6b6023073b8a5b3476c",
    title: "Sri Lanka 13e 2015",
  },
  {
    _id: "62e9b6b7023073b8a5b3476e",
    title: "House and Leisure",
  },
  {
    _id: "62e9b6b7023073b8a5b34770",
    title: "permaculture",
  },
  {
    _id: "62e9b6b7023073b8a5b34772",
    title: "Adelaide & South Australia",
  },
  {
    _id: "62e9b6b7023073b8a5b34774",
    title: "London For Dummies, 6th Edition",
  },
  {
    _id: "62e9b6b7023073b8a5b34776",
    title: "Download Dive Guide to the Philippines",
  },
  {
    _id: "62e9b6b7023073b8a5b34778",
    title: "Lonely Planet Japanese Phrasebook.pdf",
  },
  {
    _id: "62e9b6b7023073b8a5b3477a",
    title: "Ultimate-Travelist",
  },
  {
    _id: "62e9b6b7023073b8a5b3477c",
    title: "Gardening for Insects",
  },
  {
    _id: "62e9b6b7023073b8a5b3477e",
    title: "The Rough Guide to Montenegro",
  },
  {
    _id: "62e9b6b7023073b8a5b34780",
    title: "Greece Peloponnese",
  },
  {
    _id: "62e9b6b7023073b8a5b34782",
    title: "Explore Travel Guides Colombia",
  },
  {
    _id: "62e9b6b7023073b8a5b34784",
    title: "Vegetable Gardening Basics",
  },
  {
    _id: "62e9b6b7023073b8a5b34786",
    title: "Home Gardens in Nepal",
  },
  {
    _id: "62e9b6b7023073b8a5b34788",
    title: "A Traveller's Guide to Making a Difference Around the World",
  },
  {
    _id: "62e9b6b8023073b8a5b3478a",
    title: "Bangkok - Lonely Planet",
  },
  {
    _id: "62e9b6b8023073b8a5b3478c",
    title: "Landscape Irrigation Products",
  },
  {
    _id: "62e9b6b8023073b8a5b3478e",
    title: "Thailand",
  },
  {
    _id: "62e9b6b8023073b8a5b34790",
    title: "california",
  },
  {
    _id: "62e9b6b8023073b8a5b34792",
    title: "[Lonely Planet] Pacific Northwest's Best Trips 2e 2013",
  },
  {
    _id: "62e9b6c7a2169b9a3feb9354",
    title: "The Sudan Handbook",
  },
  {
    _id: "62e9b6c7a2169b9a3feb9356",
    title: "Ecuador - Guía de Oro - Página Principal",
  },
  {
    _id: "62e9b6c7a2169b9a3feb9358",
    title: "Africa 13 - Lonely Planet",
  },
  {
    _id: "62e9b6c7a2169b9a3feb935a",
    title: "[Lonely Planet] New York & the Mid-Atlantic's Best Trips 2e 2014",
  },
  {
    _id: "62e9b6c7a2169b9a3feb935c",
    title: "The travel issue: San Diego",
  },
  {
    _id: "62e9b6c7a2169b9a3feb935e",
    title: "Choosing the Right Plants - University of Nevada, Reno",
  },
  {
    _id: "62e9b6c7a2169b9a3feb9360",
    title: "Chicago Travel Guide",
  },
  {
    _id: "62e9b6c7a2169b9a3feb9362",
    title: "Malaysia",
  },
  {
    _id: "62e9b6c7a2169b9a3feb9364",
    title: "Misadventures in Far Away Places",
  },
  {
    _id: "62e9b6c7a2169b9a3feb9366",
    title: "Roses For Canadians For Dummies",
  },
  {
    _id: "62e9b6c8a2169b9a3feb9368",
    title: "Understand & Survival - Lonely Planet",
  },
  {
    _id: "62e9b6c8a2169b9a3feb936a",
    title: "Strategic Implications of China's Underground Great Wall",
  },
  {
    _id: "62e9b6c8a2169b9a3feb936c",
    title: "Living Blue Planet Report",
  },
  {
    _id: "62e9b6c8a2169b9a3feb936e",
    title: "Travels in a Tin Can",
  },
  {
    _id: "62e9b6c8a2169b9a3feb9370",
    title: "The Journal of San Diego History",
  },
  {
    _id: "62e9b6c8a2169b9a3feb9372",
    title: "To travel here is to encounter men wear",
  },
  {
    _id: "62e9b6c8a2169b9a3feb9374",
    title: "Native Species Planting Guide for New York City",
  },
];

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a,
      b,
      i,
      val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (
        arr[i].title.substr(0, val.length).toUpperCase() == val.toUpperCase()
      ) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML =
          `<strong>` + arr[i].title.substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].title.substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i].title + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}
autocomplete(document.querySelector(".text-input"), books);

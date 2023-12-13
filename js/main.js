//INTERSECTION OBSERVER

const header = document.querySelector(".header");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher", "");
header.before(scrollWatcher);

const navObserver = new IntersectionObserver(
  (entities) => {
    header.classList.toggle("sticking", !entities[0].isIntersecting);
  },
  { rootMargin: "150px" }
);

navObserver.observe(scrollWatcher);

//Skills ointersectionobserver

const skills = document.querySelector("#skills");

// const observer = new IntersectionObserver(
//   (entities) => {
//     entities.forEach((entity) => {
//       if (entity.isIntersecting) {
//         entity.target.classList.add("transition-effect");
//         entity.target.style.background =
//           "linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, black 83%)";
//       } else {
//         entity.target.style.background = "white";
//       }
//     });
//   },
//   { rootMargin: "-450px" }
// );
// observer.observe(skills);

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;

  if (scroll_position > 500) {
    skills.classList.add("active");
  } else {
    skills.classList.remove("active");
  }
});

// RANDOM COLOR GENERATOR

const buttonsColor = document.querySelectorAll(".btn-color");
const javaScript = document.querySelector("#js-color");

const generateRandomColor = () => {
  const hexCodes = "0123456789ABCDEF";
  let color = "";
  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }
  return "#" + color;
};

const setRandomColors = () => {
  buttonsColor.forEach((buttonColor) => {
    buttonColor.innerHTML = generateRandomColor();
    buttonColor.onclick = (event) => {
      javaScript.style.color = event.target.innerHTML;
    };
  });
};

window.onload = () => setRandomColors();
window.onkeydown = (event) => {
  if (event.code.toLowerCase() === "space") {
    event.preventDefault();
    setRandomColors();
  }
};

// SLIDER BLOCK

const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
let index = 0;

const hideSlide = () => {
  slides.forEach((slide) => {
    slide.style.opacity = 0;
    slide.classList.remove("active_slide");
  });
};
const showSlide = (i = 0) => {
  slides[i].style.opacity = 1;
  slides[i].classList.add("active_slide");
};

hideSlide();
showSlide(index);

const autoSlider = (i = 0) => {
  setInterval(() => {
    i++;
    if (i > slides.length - 1) {
      i = 0;
    }
    hideSlide();
    showSlide(i);
  }, 10000);
};

next.onclick = () => {
  index < slides.length - 1 ? index++ : (index = 0);
  hideSlide();
  showSlide(index);
};

prev.onclick = () => {
  index > 0 ? index-- : (index = slides.length - 1);
  hideSlide();
  showSlide(index);
};

autoSlider(index);

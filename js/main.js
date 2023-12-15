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

// const slides = document.querySelectorAll(".slide");
// const next = document.querySelector("#next");
// const prev = document.querySelector("#prev");
// let index = 0;

// const hideSlide = () => {
//   slides.forEach((slide) => {
//     slide.style.opacity = 0;
//     slide.classList.remove("active_slide");
//   });
// };
// const showSlide = (i = 0) => {
//   slides[i].style.opacity = 1;
//   slides[i].classList.add("active_slide");
// };

// hideSlide();
// showSlide(index);

// const autoSlider = (i = 0) => {
//   setInterval(() => {
//     i++;
//     if (i > slides.length - 1) {
//       i = 0;
//     }
//     hideSlide();
//     showSlide(i);
//   }, 10000);
// };

// next.onclick = () => {
//   index < slides.length - 1 ? index++ : (index = 0);
//   hideSlide();
//   showSlide(index);
// };

// prev.onclick = () => {
//   index > 0 ? index-- : (index = slides.length - 1);
//   hideSlide();
//   showSlide(index);
// };

// autoSlider(index);

// Weather app

const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "e417df62e04d3b1b111abeab19cea714";
const cityInput = document.querySelector("#city");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const weatherIcon = document.querySelector(".weatherimage");

cityInput.oninput = async (event) => {
  const response = await fetch(
    `${WEATHER_URL}?q=${event.target.value}&appid=${API_KEY}`
  );
  const data = await response.json();

  city.innerHTML = data?.name ? data?.name : "Choose city";
  temp.innerHTML = data?.main?.temp
    ? Math.round(data?.main?.temp - 273)
    : "...";

  if (temp.innerHTML > -Infinity && temp.innerHTML < 5) {
    weatherIcon.style.backgroundImage =
      'url("https://cdn.dribbble.com/users/2120934/screenshots/6193458/13_snow.gif")'; // Replace with the correct path for your winter image
  } else if (temp.innerHTML > 5 && temp.innerHTML < 15) {
    weatherIcon.style.backgroundImage =
      'url("https://webstockreview.net/images/clipart-cloud-animated-gif-6.gif")'; // Replace with the correct path for your sun image
  } else {
    weatherIcon.style.backgroundImage =
      'url("https://i.pinimg.com/originals/54/d3/ae/54d3ae04cae803cafc21389dfd31fc88.gif")';
  }
};

//Converter
const som = document.querySelector("#som");
const usd = document.getElementById("usd");
const euro = document.getElementById("euro");

// som.oninput = (event) => {
//   const request = new XMLHttpRequest();
//   request.open("GET", "data/converter.json");
//   request.setRequestHeader("Content-type", "application/json");
//   request.send();
//   request.onload = () => {
//     const data = JSON.parse(request.response);
//     usd.value = event.target.value * data.usd;
//   };
// };

const converter = (element, targetValue, targetValue2, type) => {
  element.oninput = async () => {
    const response = await fetch("data/converter.json");
    const data = await response.json();
    switch (type) {
      case "som":
        targetValue.value = (element.value / data.usd).toFixed(2);
        targetValue2.value = (element.value * data.euro).toFixed(2);
        break;
      case "usd":
        targetValue.value = (element.value * data.usd).toFixed(2);
        targetValue2.value = (element.value * data.usdtoeur).toFixed(2);
        break;
      case "eur":
        targetValue.value = (element.value * data.usdtoeur).toFixed(2);
        targetValue2.value = (element.value * data.eurtosom).toFixed(2);
        break;
      default:
        break;
    }
    // element.value === "" ? (targetElement.value = "") : null;
    if (element.value === "") {
      targetValue.value = "";
      targetValue2.value = "";
    }
  };
};

converter(som, usd, euro, "som");
converter(usd, som, euro, "usd");
converter(euro, usd, som, "eur");

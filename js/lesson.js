const phone_input = document.getElementById("phone_input");
const phone_button = document.getElementById("phone_button");
const phone_result = document.getElementById("phone_result");
const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;

phone_button.addEventListener("click", () => {
  if (regExp.test(phone_input.value)) {
    phone_result.innerHTML = "OK";
    phone_result.style.color = "green";
  } else {
    phone_result.innerHTML = "Not OK";
    phone_result.style.color = "red";
  }
});
// end phone checker

// start tab slider
const tabsBlock = document.querySelectorAll(".tab_content_block");
const tabItem = document.querySelectorAll(".tab_content_item");
const itemBlock = document.querySelector(".tab_content_items");
let currentcase = 0;
const hide = () => {
  tabsBlock.forEach((block) => {
    block.style.display = "none";
  });
  tabItem.forEach((item) => {
    item.classList.remove("tab_content_item_active");
  });
};

const show = (index = 0) => {
  tabsBlock[index].style.display = "block";
  tabItem[index].classList.add("tab_content_item_active");
};
const switchcase = () => {
  hide();
  currentcase = (currentcase + 1) % tabsBlock.length;
  show(currentcase);
};

hide();
show();
setInterval(switchcase, 4000);

itemBlock.onclick = (event) => {
  if (event.target.classList.contains("tab_content_item")) {
    tabItem.forEach((item, index) => {
      if (event.target == item) {
        hide();
        currentcase = index;
        show(currentcase);
      }
    });
  }
};
// JSON part

// const request = new XMLHttpRequest();
// request.open("GET", "../data/data.json");
// request.setRequestHeader("Content-type", "aaplication/json");
// request.send();

// request.addEventListener("load", function () {
//   const container = document.querySelector(".containerJson");

//   const data = JSON.parse(request.responseText);
//   data.forEach((subject) => {
//     const newDiv = document.createElement("div");
//     newDiv.setAttribute("class", "newJson");
//     newDiv.innerHTML = `
//     <h3>${subject.topic}</h3>
//     <p>${subject.description}</p>
//     `;
//     container.append(newDiv);
//   });
// });
const container = document.querySelector(".containerJson");
const fetchData = async () => {
  try {
  } catch (e) {
    console.log(e);
  }
  const response = await fetch("../data/data.json");
  const data = await response.json();

  data.forEach((subject) => {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "newJson");
    newDiv.innerHTML = `
    <h3>${subject.topic}</h3>
    <p>${subject.description}</p>
    `;
    container.append(newDiv);
  });
};
fetchData();

// JSON subject end

const converter = (element, targetElement, targetElement2, type) => {
  // element.oninput = () => {
  //   const request = new XMLHttpRequest();
  //   request.open("GET", "../data/converter.json");
  //   request.setRequestHeader("Content-type", "application/json");
  //   request.send();
  //   request.onload = () => {
  //     const data = JSON.parse(request.response);
  //     switch (type) {
  //       case "som":
  //         targetElement.value = (element.value / data.usd).toFixed(2);
  //         targetElement2.value = (element.value * data.euro).toFixed(2);
  //         break;
  //       case "usd":
  //         targetElement.value = (element.value * data.usd).toFixed(2);
  //         targetElement2.value = (element.value * data.usdtoeur).toFixed(2);
  //         break;
  //       case "eur":
  //         targetElement.value = (element.value * data.usdtoeur).toFixed(2);
  //         targetElement2.value = (element.value * data.eurtosom).toFixed(2);
  //         break;
  //       default:
  //         break;
  //     }
  //     // element.value === "" ? (targetElement.value = "") : null;
  //     if (element.value === "") {
  //       targetElement.value = "";
  //       targetElement2.value = "";
  //     }
  //   };
  // };

  // element.oninput = async () => {
  //   try {
  //     const response = await fetch("../data/converter.json");
  //     const data = await response.json();

  //     switch (type) {
  //       case "som":
  //         targetElement.value = (element.value / data.usd).toFixed(2);
  //         targetElement2.value = (element.value * data.euro).toFixed(2);
  //         break;
  //       case "usd":
  //         targetElement.value = (element.value * data.usd).toFixed(2);
  //         targetElement2.value = (element.value * data.usdtoeur).toFixed(2);
  //         break;
  //       case "eur":
  //         targetElement.value = (element.value * data.usdtoeur).toFixed(2);
  //         targetElement2.value = (element.value * data.eurtosom).toFixed(2);
  //         break;
  //       default:
  //         break;
  //     }
  //     // element.value === "" ? (targetElement.value = "") : null;
  //     if (element.value === "") {
  //       targetElement.value = "";
  //       targetElement2.value = "";
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // };

  // converter(som, usd, euro, "som");
  // converter(usd, som, euro, "usd");
  // converter(euro, usd, som, "eur");

  // CARD SWITCHER

  const card = document.querySelector(".card");
  const btnPrev = document.querySelector("#btn-prev");
  const btnNext = document.querySelector("#btn-next");
  let count = 1;
  // const fetching = (id) => {
  //   fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       card.innerHTML = `
  //      <p>${json.id}</p>
  //      <p style="color: ${json.completed ? "green" : "red"}">${json.completed}</p>
  //      `;
  //     });
  // };
  const fetching = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      const data = await response.json();

      card.innerHTML = `
       <p>${data.id}</p>
       <p style="color: ${data.completed ? "green" : "red"}">${
        data.completed
      }</p>
       `;
    } catch (e) {
      console.log(e);
    }
  };
  fetching(count);

  btnNext.addEventListener("click", () => {
    // count++;
    // if (count < 200) {
    //   count++;
    //   fetching(count);
    // } else {
    //   count = 1;
    //   fetching(count);
    // }
    count < 200 ? count++ : (count = 1);
    fetching(count);
  });

  btnPrev.addEventListener("click", () => {
    // if (count > 1) {
    //   count--;
    //   fetching(count);
    // } else {
    //   count = 200;
    //   fetching(count);
    // }
    count > 1 ? count-- : (count = 200);
    fetching(count);
  });

  // WEATHER SEARCH

  const citySearchInput = document.querySelector(".cityName"),
    // searchBtn = document.querySelector("#search"),
    city = document.querySelector(".city"),
    temp = document.querySelector(".temp");
  const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "e417df62e04d3b1b111abeab19cea714";

  // citySearchInput.oninput = (event) => {
  //   fetch(`${WEATHER_URL}?q=${event.target.value}&appid=${API_KEY}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       city.innerHTML = data?.name ? data?.name : "Город не выбран";
  //       temp.innerHTML = data?.main?.temp
  //         ? Math.round(data?.main?.temp - 273) + "&deg;C"
  //         : "...";
  //     });
  // };
  // optional chain ?.

  citySearchInput.oninput = async (event) => {
    try {
      const response = await fetch(
        `${WEATHER_URL}?q=${event.target.value}&appid=${API_KEY}`
      );
      const data = await response.json();

      city.innerHTML = data?.name ? data?.name : "Город не выбран";
      temp.innerHTML = data?.main?.temp
        ? Math.round(data?.main?.temp - 273) + "&deg;C"
        : "...";
    } catch (e) {
      console.log(e);
    }
  };
};

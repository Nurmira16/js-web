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

const request = new XMLHttpRequest();
request.open("GET", "../data/data.json");
request.setRequestHeader("Content-type", "aaplication/json");
request.send();

request.addEventListener("load", function () {
  const container = document.querySelector(".containerJson");

  const data = JSON.parse(request.responseText);
  data.forEach((subject) => {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "newJson");
    newDiv.innerHTML = `
    <h3>${subject.topic}</h3>
    <p>${subject.description}</p>
    `;
    container.append(newDiv);
  });
});

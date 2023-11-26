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
const hide = () => {
  tabsBlock.forEach((block) => {
    block.style.display = "none";
  });
  tabItem.forEach((item) => {
    item.classList.remove("tab_content_item_active");
  });
};
const show = () => {
  let index = 0;
  setInterval(() => {
    hide();
    tabsBlock[index].style.display = "block";
    tabItem.forEach((item) => {
      item.classList.remove("tab_content_item_active");
    });
    tabItem[index].classList.add("tab_content_item_active");
    index = (index + 1) % tabsBlock.length;
  }, 2000);
};

hide();
show();

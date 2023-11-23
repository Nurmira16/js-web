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

const tabBlock = document.querySelectorAll(".tab_content_block");
const tabItems = document.querySelector(".tab_content_items");
const tabItem = document.querySelectorAll(".tab_content_item");
const hide = () => {
  tabBlock.forEach((tab) => {
    tab.style.display = "none";
  });

  tabItem.forEach((item) => {
    item.classList.remove("tab_content_item_active");
  });
};

const show = (index = 0) => {
  tabBlock[index].style.display = "block";
  tabItem[index].classList.add("tab_content_item_active");
};

tabItems.onclick = (event) => {
  if (event.target.classList.contains("tab_content_item")) {
    tabItem.forEach((tab, tabIndex) => {
      if (event.target == tab) {
        hide();
        show(tabIndex);
      }
    });
  }
};
hide();
show();

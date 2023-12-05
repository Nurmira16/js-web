const modal = document.querySelector(".modal");
const buttonModal = document.getElementById("btn-get");
const closeButton = document.querySelector(".modal_close");
buttonModal.onclick = () => openModal();
closeButton.onclick = () => closeModal();
modal.onclick = (event) => {
  if (event.target === modal) {
    closeModal();
  }
};

const closeModal = (event) => {
  modal.style.display = "none";
  document.body.style.overflow = "visible";
};

const openModal = () => {
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
};

// setTimeout(openModal, 5000);

//POST DATA
const formElement = document.getElementById("form");

// const postData = (form) => {
//   form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const request = new XMLHttpRequest();
//     request.open("POST", "server.php");
//     request.setRequestHeader("Content-type", "application/json");

//     const data = new FormData(form);
//     const obj = {};
//     data.forEach((item, index) => {
//       obj[index] = item;
//     });
//     const json = JSON.stringify(obj);
//     request.send(json);
//   });
// };
// postData(formElement);

const postData = (url, data) => {
  const response = fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: data,
  });
  return response;
};
const bindPostdata = (form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const obj = {};
    data.forEach((item, index) => {
      obj[index] = item;
    });
    const json = JSON.stringify(obj);

    if ((window.location.pathname = "/js-web/index.html")) {
      postData("server.php", json);
    } else {
      postData("../server.php", json);
    }
  });
};
bindPostdata(formElement);

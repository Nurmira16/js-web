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

const formElement = document.querySelector("form");

const postData = (form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const request = new XMLHttpRequest();
    request.open("POST", "server.php");
    request.setRequestHeader("Content-type", "application.json");

    const formData = new FormData();
    const obj = {};
    formData.forEach((item, index) => {
      obj[index] = item;
    });
    const data = JSON.stringify(obj);
    request.send(data);
  });
};

postData(formElement);

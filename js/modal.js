const modal = document.querySelector(".modal");
const buttonModal = document.getElementById("btn-get");
const closeButton = document.querySelector(".modal_close");

buttonModal.addEventListener("click", () => {
  modal.style.display = "flex";
});
closeButton.onclick = () => (modal.style.display = "none");

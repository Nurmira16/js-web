const gmailInput = document.getElementById("gmail_input");
const gmailButton = document.getElementById("gmail_button");
const gmailSpan = document.getElementById("gmail_result");
const regExp = /^[a-zA-Z0-9]+@gmail.com$/;

gmailButton.addEventListener("click", () => {
  if (regExp.test(gmailInput.value)) {
    gmailSpan.innerHTML = "OK";
    gmailSpan.style.color = "green";
  } else {
    gmailSpan.innerHTML = "Not OK";
    gmailSpan.style.color = "red";
  }
});

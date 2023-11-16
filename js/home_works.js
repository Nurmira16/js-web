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

const cube = document.querySelector(".child_block");

let positionY = 0;
let positionX = 0;

const moveCube = () => {
  if (positionX <= 447 && positionY == 0) {
    positionX++;
    cube.style.left = `${positionX}px`;
  } else if (positionX >= 447 && positionY <= 447) {
    positionY++;
    cube.style.top = `${positionY}px`;
  } else if (positionX > 0 && positionY >= 447) {
    positionX--;
    cube.style.left = `${positionX}px`;
  } else if (positionX == 0 && positionY > 0) {
    positionY--;
    cube.style.top = `${positionY}px`;
  }
  requestAnimationFrame(moveCube);
};
moveCube();

const second = document.getElementById("seconds");
const startTimer = document.getElementById("start");
const stopTimer = document.getElementById("stop");
const resetTimer = document.getElementById("reset");
let sec = 0;
let intervalId;

const startSec = () => {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    sec++;
    second.innerHTML = sec;
  }, 500);
};
startTimer.addEventListener("click", startSec);

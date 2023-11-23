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
const btn = document.querySelector(".footer__content button");
const btnI = document.querySelector(".button-i");
const btnR = document.querySelector(".button-r");
const result = document.querySelector(".toast");

const getData = async (endpoint) => {
  result.style.right = 0;
  result.innerText = "Loading....";
  await fetch("http://127.0.0.1:1010/" + endpoint)
    .then((res) => res.json())
    .then((data) => {
      result.innerText = "Карта успешно выдана!";
    })
    .catch((error) => {
      result.style.background = "red";
      result.innerText = "Неизвестная ошибка!";
    });

    setTimeout(() => {
      result.style.right = -100 + "%";
    }, 3000)
};

btn.addEventListener("click", () => getData('dispense'));
btnI.addEventListener("click", () => getData('init'));
btnR.addEventListener("click", () => getData('reset'));

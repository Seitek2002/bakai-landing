const btn = document.querySelector(".footer__content button");
const result = document.querySelector(".toast");

const getData = async () => {
  result.style.right = 0;
  result.innerText = "Loading....";
  await fetch("http://127.0.0.1:1010/dispense")
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

btn.addEventListener("click", getData);

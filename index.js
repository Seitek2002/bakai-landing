const btn = document.querySelector(".footer__content button");
const btnI = document.querySelector(".button-i");
const btnR = document.querySelector(".button-r");
const result = document.querySelector(".toast");
const footerResult = document.querySelector(".footer__content");

btn.addEventListener("click", async () => {
  result.style.right = 0;
  result.innerText = "Loading....";
  await fetch("http://127.0.0.1:1010/dispense")
    .then((res) => res.json())
    .then((data) => {
      result.innerText = "Карта успешно выдана!";
      footerResult.classList.add("active");
    })
    .catch((error) => {
      result.style.background = "red";
      result.innerText = "Неизвестная ошибка!";
      footerResult.classList.add("active");
    });

    setTimeout(() => {
      result.style.right = -100 + "%";
      footerResult.classList.remove("active");
    }, 3000)
});

btnI.addEventListener("click", async () => {
  result.style.right = 0;
  result.innerText = "Loading....";
  await fetch("http://127.0.0.1:1010/init")
    .then((res) => res.json())
    .then((data) => {
      result.innerText = "Выполнена инициация!";
    })
    .catch((error) => {
      result.style.background = "red";
      result.innerText = "Неизвестная ошибка!";
    });

    setTimeout(() => {
      result.style.right = -100 + "%";
    }, 3000)
});

btnR.addEventListener("click", async () => {
  result.style.right = 0;
  result.innerText = "Loading....";
  await fetch("http://127.0.0.1:1010/reset")
    .then((res) => res.json())
    .then((data) => {
      result.innerText = "Выполнен сброс!";
    })
    .catch((error) => {
      result.style.background = "red";
      result.innerText = "Неизвестная ошибка!";
    });

    setTimeout(() => {
      result.style.right = -100 + "%";
    }, 3000)
});

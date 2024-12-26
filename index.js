const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  on: {
    autoplayTimeLeft(s, time, progress) {
      const progressBar = document.querySelector(".swiper-pagination-bullet-active .progress-bar");
      progressBar.style.width = progress * 100 + "%";
    }
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"> <div class="progress-bar"></div> </span>`;
    },
  },
});

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

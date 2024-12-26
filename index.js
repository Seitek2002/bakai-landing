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

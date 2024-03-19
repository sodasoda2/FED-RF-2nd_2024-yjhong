const swiper = new Swiper(".banner.swiper-container", {
  // 기본 옵션
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000, // 3초마다 자동 슬라이드
  },
});

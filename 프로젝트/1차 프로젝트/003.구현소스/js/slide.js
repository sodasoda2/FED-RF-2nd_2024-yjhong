const banner = document.querySelector(".banner");
const images = banner.querySelectorAll("img");
const prevBtn = banner.querySelector(".prev");
const nextBtn = banner.querySelector(".next");

let currentImageIndex = 0;

// 최초 로드 시 이미지 표시
images[currentImageIndex].classList.add("active");

// 2초마다 이미지 변경
setInterval(() => {
  images[currentImageIndex].classList.remove("active");
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add("active");
}, 3000);

// 좌우 화살표 클릭 시 이미지 변경
prevBtn.addEventListener("click", () => {
  images[currentImageIndex].classList.remove("active");
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  images[currentImageIndex].classList.add("active");
});

nextBtn.addEventListener("click", () => {
  images[currentImageIndex].classList.remove("active");
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add("active");
});

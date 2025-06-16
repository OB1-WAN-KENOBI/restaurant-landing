document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel__track");
  const trackContainer = document.querySelector(".carousel__track-container");
  const prevButton = document.querySelector(".carousel__btn--prev");
  const nextButton = document.querySelector(".carousel__btn--next");
  const carousel = document.querySelector(".carousel");

  if (!track || !trackContainer || !prevButton || !nextButton || !carousel) {
    console.error("Carousel elements not found");
    return;
  }

  // Плавное появление карусели
  setTimeout(() => {
    carousel.classList.add("visible");
  }, 100);

  const card = document.querySelector(".menu-card");
  const scrollStep = card ? card.offsetWidth + 30 : 305;
  let currentX = 0;
  let isAnimating = false;

  nextButton.addEventListener("click", () => {
    if (isAnimating) return;
    isAnimating = true;
    const maxScroll = track.scrollWidth - trackContainer.clientWidth;
    currentX = Math.min(currentX + scrollStep, maxScroll);
    track.style.transform = `translateX(-${currentX}px)`;
    setTimeout(() => (isAnimating = false), 500);
  });

  prevButton.addEventListener("click", () => {
    if (isAnimating) return;
    isAnimating = true;
    currentX = Math.max(currentX - scrollStep, 0);
    track.style.transform = `translateX(-${currentX}px)`;
    setTimeout(() => (isAnimating = false), 500);
  });

  window.addEventListener("resize", () => {
    const maxScroll = track.scrollWidth - trackContainer.clientWidth;
    if (currentX > maxScroll) {
      currentX = maxScroll;
      track.style.transform = `translateX(-${currentX}px)`;
    }
  });
});

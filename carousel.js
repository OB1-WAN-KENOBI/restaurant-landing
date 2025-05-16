document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel__track");
  const trackContainer = document.querySelector(".carousel__track-container");
  const prevButton = document.querySelector(".carousel__btn--prev");
  const nextButton = document.querySelector(".carousel__btn--next");

  // Задаём шаг прокрутки в пикселях:
  const scrollStep = 305; // например, 250px за клик

  // Функция для чтения текущего смещения по X из transform
  function getCurrentX() {
    const style = window.getComputedStyle(track);
    const matrix = new DOMMatrixReadOnly(style.transform);
    return Math.abs(matrix.m41);
  }

  nextButton.addEventListener("click", () => {
    const currentX = getCurrentX();
    const maxScroll = track.scrollWidth - trackContainer.clientWidth;
    // не уезжаем дальше, чем может прокрутить контейнер
    const newX = Math.min(currentX + scrollStep, maxScroll);
    track.style.transform = `translateX(-${newX}px)`;
  });

  prevButton.addEventListener("click", () => {
    const currentX = getCurrentX();
    const newX = Math.max(currentX - scrollStep, 0);
    track.style.transform = `translateX(-${newX}px)`;
  });
});

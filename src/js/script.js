document.addEventListener("DOMContentLoaded", () => {
  const modalOverlay = document.getElementById("booking-modal");
  const closeBtn = modalOverlay.querySelector(".modal__close");
  const form = document.getElementById("booking-form");
  const confirmation = document.getElementById("booking-confirmation");
  const orderButtons = document.querySelectorAll(
    ".menu-card .button, .header .button, .promo-banner .button"
  );

  orderButtons.forEach((btn) =>
    btn.addEventListener("click", () => {
      modalOverlay.classList.add("active");
    })
  );

  closeBtn.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
  });
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) modalOverlay.classList.remove("active");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const datetime = form.elements["datetime"].value;
    if (!datetime) return;

    // показываем сообщение
    confirmation.textContent = `Вы забронировали столик на ${new Date(
      datetime
    ).toLocaleString()}`;
    confirmation.style.display = "block";

    // сбрасываем форму и через 3 секунды закрываем модалку и скрываем сообщение
    form.reset();
    setTimeout(() => {
      confirmation.style.display = "none";
      modalOverlay.classList.remove("active");
    }, 3000);
  });
});

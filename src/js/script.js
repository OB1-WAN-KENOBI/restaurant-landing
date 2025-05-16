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
      modalOverlay.style.display = "flex";
    })
  );

  closeBtn.addEventListener("click", () => {
    modalOverlay.style.display = "none";
  });
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) modalOverlay.style.display = "none";
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
      modalOverlay.style.display = "none";
    }, 3000);
  });
});

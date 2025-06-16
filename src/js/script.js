document.addEventListener("DOMContentLoaded", () => {
  const modalOverlay = document.getElementById("booking-modal");
  const closeBtn = modalOverlay.querySelector(".modal__close");
  const form = document.getElementById("booking-form");
  const confirmation = document.getElementById("booking-confirmation");
  const orderButtons = document.querySelectorAll(
    ".menu-card .button, .header .button, .promo-banner .button"
  );
  const firstInput = form.querySelector("input, select, textarea");

  function openModal() {
    modalOverlay.classList.add("active");
    setTimeout(() => {
      if (firstInput) firstInput.focus();
    }, 200);
    document.addEventListener("keydown", handleEscClose);
  }

  function closeModal() {
    modalOverlay.classList.add("closing");
    setTimeout(() => {
      modalOverlay.classList.remove("active", "closing");
    }, 400); // время совпадает с transition в CSS
    document.removeEventListener("keydown", handleEscClose);
  }

  function handleEscClose(e) {
    if (e.key === "Escape") closeModal();
  }

  orderButtons.forEach((btn) => btn.addEventListener("click", openModal));

  closeBtn.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
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
      closeModal();
    }, 3000);
  });
});

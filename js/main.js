// Аккуратное открытие/закрытие details
document.querySelectorAll("details").forEach((detail) => {
  detail.addEventListener("toggle", function () {
    if (this.open) {
      this.classList.add("open");
    } else {
      this.classList.remove("open");
    }
  });
});

// Плавное появление карточек
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    setTimeout(() => {
      card.style.transition = "all 0.6s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 200);
  });
});

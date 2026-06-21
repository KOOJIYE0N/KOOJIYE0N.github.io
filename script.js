const filterButtons = document.querySelectorAll(".filter-button");
const workCards = document.querySelectorAll(".work-card");
const yearTarget = document.querySelector("#current-year");

if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    workCards.forEach((card) => {
      const tags = card.dataset.tags || "";
      const shouldShow = selected === "all" || tags.includes(selected);
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

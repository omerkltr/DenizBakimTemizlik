const modal = document.getElementById("contactModal");
const openButtons = document.querySelectorAll(".open-contact");
const closeButtons = document.querySelectorAll("[data-close-modal]");
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");

function setTheme(isDark) {
  document.body.classList.toggle("dark-theme", isDark);
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? "Aydınlık temaya geç" : "Karanlık temaya geç");
  themeIcon.textContent = isDark ? "☀" : "☾";
}

function openModal() {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  const firstLink = modal.querySelector(".contact-option");
  if (firstLink) firstLink.focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

openButtons.forEach((button) => {
  button.addEventListener("click", openModal);
});

closeButtons.forEach((button) => {
  button.addEventListener("click", closeModal);
});

themeToggle.addEventListener("click", () => {
  setTheme(!document.body.classList.contains("dark-theme"));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});

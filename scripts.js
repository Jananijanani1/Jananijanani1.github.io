const menuToggle = document.querySelector("#menuToggle");
const primaryNav = document.querySelector("#primaryNav");
const themeToggle = document.querySelector("#themeToggle");
const currentYear = document.querySelector("#currentYear");
const githubLinkStatus = document.querySelector("#githubLinkStatus");

document.querySelectorAll("[data-github-placeholder]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    if (githubLinkStatus) {
      githubLinkStatus.textContent = "Add this project's GitHub repository URL to its href in index.html.";
    }
  });
});

if (menuToggle && primaryNav) {
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    primaryNav.classList.remove("is-open");
  };

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
    primaryNav.classList.toggle("is-open", !isExpanded);
  });

  primaryNav.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isLight = document.documentElement.dataset.theme === "light";
    document.documentElement.dataset.theme = isLight ? "dark" : "light";
    themeToggle.setAttribute("aria-label", isLight ? "Switch to light theme" : "Switch to dark theme");
  });
}

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

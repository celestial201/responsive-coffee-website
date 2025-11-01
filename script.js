// ====== Mobile Menu Toggle ======
document.addEventListener("DOMContentLoaded", () => {
  const menuOpenButton = document.querySelector("#menu-open-button");
  const menuCloseButton = document.querySelector("#menu-close-button");

  // ✅ Open Menu
  menuOpenButton.addEventListener("click", () => {
    document.body.classList.add("show-mobile-menu");
  });

  // ✅ Close Menu
  menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
  });

  // ✅ Optional: close when clicking outside the menu
  document.addEventListener("click", (e) => {
    if (
      document.body.classList.contains("show-mobile-menu") &&
      !e.target.closest(".nav-menu") &&
      !e.target.closest("#menu-open-button")
    ) {
      document.body.classList.remove("show-mobile-menu");
    }
  });
});

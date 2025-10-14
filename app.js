window.addEventListener("DOMContentLoaded", function () {
  // Todo Code here
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const btn = document.querySelector(".menu-btn");
  const btnIcon = document.querySelector("i");
  btn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("toggled");
    if (btnIcon.classList.contains("bi-x")) {
      btnIcon.classList.replace("bi-x", "bi-list");
    } else {
      btnIcon.classList.replace("bi-list", "bi-x");
    }
  });
});

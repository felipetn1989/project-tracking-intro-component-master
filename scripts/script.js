let info = document.querySelector(".info");

hamburger_menu.addEventListener("click", () => {
  if (window.getComputedStyle(nav__menu).display == "none") {
    nav__menu.style.display = "grid";
    info.style.marginTop = "3.625rem";
  } else {
    nav__menu.style.display = "none";
    info.style.marginTop = "20.5625rem";
  }
});

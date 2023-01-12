let info = document.querySelector(".info");


/* I used window.getComputedStyle().display to avoid the problem of the menu appearing for the first time only if I clicked on it twice (because the code can't access the current value of the display property unless I use getComputed style */

hamburger_menu.addEventListener("click", () => {
  if (window.getComputedStyle(nav__menu).display == "none") {
    nav__menu.style.display = "grid";
    info.style.marginTop = "3.625rem";
  } else {
    nav__menu.style.display = "none";
    info.style.marginTop = "20.5625rem";
  }
});

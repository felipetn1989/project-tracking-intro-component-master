let info = document.querySelector(".info");

/* Added a function to toggle the appropriate classes when we click on the menu icon */

hamburger_menu.addEventListener("click", () => {
  nav__menu.classList.toggle("display");
  info.classList.toggle("margin");
});

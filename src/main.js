const menu_btn = document.querySelector("#menu-toggle");
const mobile_menu = document.querySelector(".mobile-nav");

menu_btn.onclick = () => {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("in-action");
};

// DARKEN BACKGROUND WHEN TOGGLING BURGER
const overlayOne = document.querySelector("body");

menu_btn.addEventListener("click", function () {
  this.classList.toggle("active");
  overlayOne.classList.toggle("active");
});


//MOBILE NAV DROPDOWN UTILITY

function hideMenu() {
  var navbar = document.getElementsByClassName("thread-nav")[0];
  navbar.style.display = "flex";
}

var hideLink = document.querySelector("a[onclick='hideMenu()']");
hideLink.addEventListener("click", function(event) {
  event.preventDefault(); // prevent the default behavior of the anchor tag
  hideMenu();
});

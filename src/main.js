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

const navLinks = document.querySelectorAll('.mobile-top-link');
const navigations = document.querySelectorAll('.mobile-dropdown');

navLinks.forEach(function(link, index) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    navigations[index].style.display = 'flex';
  });
});
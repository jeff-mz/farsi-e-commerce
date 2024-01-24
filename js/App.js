"use strict ";

const hamburgerIcon = document.querySelector(".fa-bars");
const timesIcon = document.querySelector(".fa-times");
const mobileArrowIcon = document.querySelector(".mobile_menu_arrow");
const mobileMenu = document.querySelector(".mobile_menu_items");
const mobileSubMenu = document.querySelectorAll(".mobile_submenu_item");
const desktopArrowIcon = document.querySelector(".desktop_menu_arrow");
const desktopSubMenu = document.querySelectorAll(".desktop_submenu_item");

hamburgerIcon.addEventListener("click", () => {
  mobileMenu.style.right = "0px ";
});
timesIcon.addEventListener("click", () => {
  mobileMenu.style.right = "-180px ";
});

mobileArrowIcon.addEventListener("click", () => {
  if (
    mobileArrowIcon.className === "mobile_menu_arrow fa fa-angle-double-down"
  ) {
    mobileSubMenu.forEach((item) => (item.style.display = "block"));
    mobileArrowIcon.className = "mobile_menu_arrow fa fa-angle-double-up";
  } else {
    mobileSubMenu.forEach((item) => (item.style.display = "none"));
    mobileArrowIcon.className = "mobile_menu_arrow fa fa-angle-double-down";
  }
});
desktopArrowIcon.addEventListener("click", () => {
  if (
    desktopArrowIcon.className === "desktop_menu_arrow fa fa-angle-double-down"
  ) {
    desktopSubMenu.forEach((item) => (item.style.display = "block"));
    desktopArrowIcon.className = "desktop_menu_arrow fa fa-angle-double-up";
  } else {
    desktopSubMenu.forEach((item) => (item.style.display = "none"));
    desktopArrowIcon.className = "desktop_menu_arrow fa fa-angle-double-down";
  }
});

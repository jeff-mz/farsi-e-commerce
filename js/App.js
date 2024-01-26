"use strict ";

const hamburgerIcon = document.querySelector(".fa-bars");
const timesIcon = document.querySelector(".close");
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

// slider
let counter = 0;
const products = [
  {
    name: "تاپ",
    desc: "بهترین تاپ را بخرید",
    price: "200 تومان",
    img: "./images/cloth_1.jpg.webp",
  },
  {
    name: "تیشرت",
    desc: "بهترین تیشرت را بخرید",
    price: "290 تومان",
    img: "./images/cloth_2.jpg.webp",
  },
  {
    name: "کفش",
    desc: "بهترین کفش را بخرید",
    price: "220 تومان",
    img: "../images/shoe_1.jpg.webp",
  },
];
const leftIcon = document.querySelector(".left_icon");
const rightIcon = document.querySelector(".right_icon");

leftIcon.addEventListener("click", () => {
  document.querySelector(".slider_img").src = `${products[counter].img}`;
  document.querySelector(
    ".slider_title"
  ).textContent = `${products[counter].name}`;
  document.querySelector(
    ".slider_desc"
  ).textContent = `${products[counter].desc}`;
  document.querySelector(
    ".slider_price"
  ).textContent = `${products[counter].price}`;
  console.log("tets");
  counter++;
  if (counter > 2) counter = 0;
});
rightIcon.addEventListener("click", () => {
  document.querySelector(".slider_img").src = `${products[counter].img}`;
  document.querySelector(
    ".slider_title"
  ).textContent = `${products[counter].name}`;
  document.querySelector(
    ".slider_desc"
  ).textContent = `${products[counter].desc}`;
  document.querySelector(
    ".slider_price"
  ).textContent = `${products[counter].price}`;
  console.log("tets");
  counter--;
  if (counter < 0) counter = 2;
});

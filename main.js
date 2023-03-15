import './style.scss';

let body = document.querySelector("body");
let menu = document.querySelector(".menu");
let burger = document.querySelector(".burger");

burger.addEventListener("click", function(){
  burger.classList.toggle("burger_active");
  menu.classList.toggle("menu_active");
  body.classList.toggle("freeze");
});
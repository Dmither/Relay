import './style.scss';
import { InitSpoiler } from './onlyOneSpoiler';

let body = document.querySelector("body");
let menu = document.querySelector(".menu");
let burger = document.querySelector(".burger");

burger.addEventListener("click", function(){
  burger.classList.toggle("burger_active");
  menu.classList.toggle("menu_active");
  body.classList.toggle("freeze");
});

let drops = document.querySelectorAll(".drop");

drops.forEach(drop => {
  initDrop(drop);
});

function initDrop(dropdown){
  dropdown.children[0].addEventListener("focus", function (event) {
    event.target
      .closest(".drop")
      .classList.add("drop_active");
  });
  dropdown.children[0].addEventListener("blur", function (event) {
    event.target
      .closest(".drop")
      .classList.remove("drop_active");
  });
  let dropdownLinks = dropdown.children[1].children;
  Array.from(dropdownLinks).forEach(item => {
    item.children[0].addEventListener("focus", function(event){
      event.target
        .closest(".drop")
        .classList.add("drop_active");
    });
    item.children[0].addEventListener("blur", function(event){
      event.target
        .closest(".drop")
        .classList.remove("drop_active");
    });
  });
}

console.log(window.innerWidth);
if (window.innerWidth < 992){
  let accords = document.querySelectorAll(".footer__nav-item");
  InitSpoiler(accords);
}
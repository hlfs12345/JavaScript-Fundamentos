"use strict";

const btn = document.querySelector("button");
const body = document.querySelector("body");

btn.addEventListener('click', (event) => {
   // console.log(event);
   // console.log(event.clientX , event.clientY);
   body.style.background = "red";
});



 btn.addEventListener('mouseover', (event) => {
    //console.log(3);
    body.style.background = "#FFF"
 });
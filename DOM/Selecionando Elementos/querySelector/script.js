"use strict";

const h1 = document.querySelector("h1").innerHTML;
const classP = document.querySelector(".paragrafo strong").innerHTML;
const idP = document.querySelector("#paragrafo").innerHTML;

console.log(h1);
console.log(classP);
console.log(idP);

let timer = 0;
const title = document.querySelector("title");
setInterval(() =>{
    title.innerText = timer;
    timer++;
},1000);
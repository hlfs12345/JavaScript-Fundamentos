"use strict";

const strong = document.querySelector("strong");

const p = document.querySelector(".paragrafo");

console.log(p.parentElement);
console.log(p.parentNode);

console.log(document.documentElement.parentElement === document);
console.log(document.documentElement.parentNode === document);
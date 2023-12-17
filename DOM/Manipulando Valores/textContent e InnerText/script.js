"use strict";

/*
    textContent => Retorna o text com Formatações, mas sem os elementos HTML
    innerText => Retorna somente o texto, sem formatações ou elementos HTML
*/

const p = document.querySelector("p");

console.log(p.textContent);
console.log(p.innerText);

p.textContent = "Lucas Fernandes";

p.innerText = "Lucas Fernandes";
"use strict";

/*
    innerHTML => Retorna o texto com formatações e com elemento html
    createHTML => Cria um elemento HTML
*/

const div = document.querySelector("div");

// console.log(1, div);

// div.innerHTML = `${div.innerHTML} <strong>Esse é o meu texto alterado</strong>`;

// console.log(2, div);

const elementUl = document.createElement("ul");

[1, 2, 3].forEach((element) =>{
    const elementLi = document.createElement("li");
    elementLi.innerText= `Elemento: ${element}`;
    elementUl.appendChild(elementLi);
})

div.appendChild(elementUl);

console.log(elementUl);
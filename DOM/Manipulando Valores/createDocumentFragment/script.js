"use strict";

// cria um fragmento do Dom que é carregado a parte do form principal melhorando performance em alguns casos 

const ul = document.querySelector("ul");
const fragment = document.createDocumentFragment();

const lanches = ["Lanche 1", "Lanche 2" , "Lanche 3", "Lanche 4"];

lanches.forEach( (element) => {
    const elementli = document.createElement("li");
    elementli.textContent = element;
    //ul.append(elementli);
    fragment.append(elementli);
});

console.log(fragment);

ul.append(fragment);

console.log(ul);


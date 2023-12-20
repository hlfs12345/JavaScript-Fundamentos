"use strict";

const form = document.forms.namedItem("registration");

form.addEventListener("input", (event) => { // input - submit
    event.preventDefault();
   
    const nome = form.nome.value;
   // const senha = form.senha.value;

   const newDivElement = document.createElement("div");
   newDivElement.innerText = nome.toUpperCase();
   form.nextElementSibling.remove();
   form.after(newDivElement);
    

});
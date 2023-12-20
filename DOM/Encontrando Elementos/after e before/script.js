"use strict";

const container = document.querySelector(".container");

const newP = document.createElement("p");
newP.innerText = "Olá, Lucas";


// container.after(newP);

container.before(newP);
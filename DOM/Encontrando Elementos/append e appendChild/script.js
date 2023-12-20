"use strict";

const container = document.querySelector(".container");

//container.append("<p>Olá Lucas</p>");

const newDiv = document.createElement("div");
newDiv.innerText = "Olá Lucas";
container.appendChild(newDiv);
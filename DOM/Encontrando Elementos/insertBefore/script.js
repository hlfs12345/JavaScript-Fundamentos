"use strict";

const container = document.querySelector(".container");
const paragrafo = container.querySelector(".paragrafo");

const h1 = container.querySelector("h1");

const newH2 = document.createElement("h2");

newH2.innerText = "Novo H2";

// container.insertBefore(newH2,paragrafo);
container.insertBefore(newH2,h1);
"use strict";

const form = document.forms.namedItem("registration");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = form.nome.value;
    const senha = form.senha.value;
    console.log(nome, senha);
});
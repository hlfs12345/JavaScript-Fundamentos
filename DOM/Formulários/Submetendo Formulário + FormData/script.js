"use strict";

const form = document.forms.namedItem("registration");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = form.nome.value;
    const senha = form.senha.value;

    // if (nome && senha){
    //     console.log(nome, senha);
    //     form.submit();
    // }

    const formData = new FormData(form);

    // console.log(formData);

    // formData.forEach((res) => {
    //     console.log(res);
    // });


    // formData.set("nome", nome);
    // formData.set("senha", senha);

    if (formData.has("nome") || formData.has("senha")){
        console.log(formData.get("nome"));
        console.log(formData.get("senha"));
    };


    //DELETE

    formData.delete("nome");
    console.log(formData.has("nome"));

});
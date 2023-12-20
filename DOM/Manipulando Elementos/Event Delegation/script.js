"use strict";

// const home = document.querySelector(".home");
// const sobre = document.querySelector(".sobre");
// const contato = document.querySelector(".contato");

// home.addEventListener("click", () =>{
//    console.log("Home");
// });

// sobre.addEventListener("click", () =>{
//    console.log("Sobre");
// });

// contato.addEventListener("click", () =>{
//    console.log("Contato");
// });

const menu = document.querySelector("#menu");

menu.addEventListener("click", (event) => {
   const { target } = event;
   // const { target, currentTarget } = event;
   //console.log(target.getAttribute("class"));
   //console.log(currentTarget);

   const body = document.querySelector("body");

   switch (target.getAttribute("class")){
      case "home":
         console.log("home");
         body.style.background = "red";
         break;

      case "sobre":
         console.log("sobre");
         body.style.background = "blue";
         break;

      case "contato":
         console.log("contato");
         body.style.background = "green";
         break;
   }
});

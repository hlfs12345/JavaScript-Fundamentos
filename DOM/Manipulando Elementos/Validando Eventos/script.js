"use strict";


const menu = document.querySelector("#menu");

// if(menu) {}
menu?.addEventListener("click", (event) => { // ? evita uso de if caso não encontre
   const { target } = event;

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
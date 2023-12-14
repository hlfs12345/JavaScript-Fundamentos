// IIF - Expressão de função invocada imediatamente

(function(num1, num2){
    const calc = num1 + num2;
    console.log("Auto chamada");
    console.log(calc);
})(1 ,3);

(()=>{
    const teste = "teste";
    console.log(teste);
})();

/* DOOM
((win, doc)=>{
    console.log("Auto chamada Arrow");
    console.log(win);
    console.log(doc);
})(window, document);

*/
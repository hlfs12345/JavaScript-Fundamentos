/*
 O Strict mode elimina alguns erros silenciosos
 que passariam despercebidos no JavaScript e os faz emitir erros.

 Além disso, essa forma corrige alguns erros que tornam o JavaScript
 difícil de ser otimizado, então algumas vezes os códigos no modo estrito
 rodam mais otimizados e celozes do que codigo no 'modo normal'.

 link: geeksforgeeks.org/strict-mode-javascript
*/

'use strict';

//var arguments;

(()=>{
    teste = "teste";
})();

console.log(teste);

//Chamadas com erros para teste
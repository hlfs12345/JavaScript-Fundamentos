const myArray = [1, 2, 3, 4, 5, 6];

const myArrayObj = [
    {nome: "Lucas", sobrenome: "Fernandes"},    
    {nome: "Bruna", sobrenome: "Roberta"},
];

//for ([inicialização];[condição]; [expressão final])

for(let i = 0; i < myArray.length ; i++){
    console.log(myArray[i]);
}

for(let i = 0; i < myArrayObj.length ; i++){
    console.log(myArrayObj[i].nome + "-" + myArrayObj[i].sobrenome);
}


// for of
for(let numero of myArray){
    console.log(numero);
}

for(let item of myArrayObj){
    console.log(item);
}

// for in
const obj = {nome: "Lucas", sobrenome: "Fernandes"};

for(let item in obj){
    console.log(item);
}
for(let item in obj){
    console.log(obj[item]);
}
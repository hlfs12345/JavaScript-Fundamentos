const stringArray = ["A", "C", "D", "W", "L", "B"];

console.log(stringArray);
console.log(stringArray.sort());
console.log(stringArray.reverse());

const numberArray = [10, 20, 30, 40, 50, 1000, 1, 55, 15];

console.log(numberArray);
console.log(numberArray.sort((a, b) => a - b));

console.log(numberArray.sort((a, b) => a - b).reverse());

console.log(numberArray.sort((a, b) => b - a));

let ObjectArray = [
    {nome: "Lucas"},
    {nome: "Fernandes"},
    {nome: "Bruna"},
    {nome: "Roberta"},
    {nome: "Teste"},
]

console.log(ObjectArray.sort((a, b) => a.nome.localeCompare(b.nome)));
console.log(ObjectArray.sort((a, b) => a.nome.localeCompare(b.nome)).reverse());

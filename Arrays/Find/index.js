const pedidos = [
    {
        id: 420,
        nome: "Lucas",
        alimento: "X-Bacon",
        bebida: "Suco de limão",
    },
    {
        id: 152,
        nome: "Bruna",
        alimento: "X-Burguer",
        bebida: "Suco de laranja",
    },
    {
        id: 29,
        nome: "Marcio",
        alimento: "Coxinha",
        bebida: "Suco de uva",
    },{
        id: 33,
        nome: "Isabel",
        alimento: "X-Picanha",
        bebida: "Refrigerante",
    },
    {
        id: 55,
        nome: "José",
        alimento: "Pizza",
        bebida: "Água",
    },
];

const findId = pedidos.find((element) => {
    return element.id === 29;
    //retorna apenas o primeiro dado encontrado
});

console.log(findId);
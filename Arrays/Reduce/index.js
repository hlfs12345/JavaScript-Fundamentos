const pedidos = [
    {
        id: 420,
        nome: "Lucas",
        alimento: "X-Bacon",
        bebida: "Suco de limão",
        preco: 50,
    },
    {
        id: 152,
        nome: "Bruna",
        alimento: "X-Burguer",
        bebida: "Suco de laranja",
        preco: 55,
    },
    {
        id: 29,
        nome: "Marcio",
        alimento: "Coxinha",
        bebida: "Suco de uva",
        preco: 25,
    },{
        id: 33,
        nome: "Isabel",
        alimento: "X-Picanha",
        bebida: "Refrigerante",
        preco: 60,
    },
    {
        id: 55,
        nome: "José",
        alimento: "Pizza",
        bebida: "Água",
        preco: 40,
    },
];

const balancete = pedidos.reduce((total, element) =>{
    return total + element.preco;
}, 0);

console.log(balancete);
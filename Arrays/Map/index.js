/*
    O método Map além de iterar todo o array ele é muito bom para
    editar iterado resumindo os dados do Array
*/

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

pedidos.map((element, index) => {
    if (element.id === 29 && element.alimento === "Coxinha"){
        return (element.alimento = "Kibe");
    }
});

console.log(pedidos);


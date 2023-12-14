let Tenis = {
    tipo: "Corrida",
    cadarco: "G",
    disponivel: false,
    tamanho: {
        palmilha: 39,
        tenis: 40,
        caixa: {
            largura: 30,
            altura: 20,
            comprimento: 50,
        },
    },
    marcaArrayObject: [
        { 
            nome: "Nike",
        },
        {
            nome: "Adidas",
        },
        {
            nome: "Outro",
        },
    ],
    marcaArrayValores: ["Nike","Adidas","Outro"],
    getMarcaArrayObj: function(param){
        return this.marcaArrayObject[param].nome;
    },
    getMarcaArrayVal: function(param){
        return this.marcaArrayValores[param].nome;
    }
};

console.log(Tenis);
console.log(Tenis.tipo);
console.log(Tenis.tamanho);
console.log(Tenis.getMarcaArrayObj(1));
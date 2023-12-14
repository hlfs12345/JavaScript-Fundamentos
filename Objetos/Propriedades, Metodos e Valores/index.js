function Tenis(tamanho, estoque, preco, disponivel){
    return{
        tamanho,
        estoque,
        preco: preco,
        disponivel: disponivel,
    };
}

const tenis = new Tenis(40,10,"R$ 50,00",true);

console.log(tenis);
console.log(tenis.tamanho);
console.log(tenis.estoque);
console.log(tenis.preco);
console.log(tenis.disponivel);


const Tenis2 = {
    getTamanho() {
        return 35;
    },
};

console.log(Tenis2.getTamanho());
const myArrayObj = [
    {nome: "Lucas", sobrenome: "Fernandes"},    
    {nome: "Bruna", sobrenome: "Roberta"},
    {nome: "Teste", sobrenome: "Sobre Teste"},    
];

myArrayObj.forEach( (item, index) => {
    if(item.nome === "Bruna"){
        return console.log("Achou a Bruna");        
    }
    console.log(index, item.nome);
});
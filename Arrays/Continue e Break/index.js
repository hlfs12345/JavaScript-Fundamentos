const myArrayObj = [
    {nome: "Lucas", sobrenome: "Fernandes"},    
    {nome: "Bruna", sobrenome: "Roberta"},
    {nome: "Teste", sobrenome: "Sobre Teste"},    
    {nome: "Teste2", sobrenome: "Sobre Teste"},    
    {nome: "Teste3", sobrenome: "Sobre Teste"},    
    {nome: "Teste4", sobrenome: "Sobre Teste"},
];

for(let item of myArrayObj){
    if(item.nome === "Bruna"){
        console.log("Achou a Bruna!");
        continue;
    }
    if(item.nome === "Teste3"){
        console.log("Lembrar de enviar SMS!");
        break;
    }

    console.log(item.nome);
}
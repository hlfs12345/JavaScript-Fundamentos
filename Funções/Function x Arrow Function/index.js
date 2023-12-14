/*
    1 - Nome de função
    2 - Retorno
    3 - Não tem Hoisting
    4 - Argunments
*/

function nomeFunc(){
    return "Lucas";
}

console.log(nomeFunc());

const nomeFuncArrow = () => {
    return "Lucas Arrow";
}

console.log(nomeFuncArrow());

const nomeFuncArrowReturn = () => "Lucas Return";

console.log(nomeFuncArrowReturn());

function nomeFuncArgments(){
    return arguments;
}

console.log(nomeFuncArgments("Lucas Arguments"));

//*Hoisting não funciona com Arrow Functions
//*Arrow Functions não aceitam Arguments

const nomeFuncArrowParams = param => param;

//*Arrow Functions quando tem 1 parametro não necessita de parenteses


/*
    5 - Arrow Function não pode ser invocada com new
*/

function novaFunc(){
    return console.log(123);
}

new novaFunc();


/*
    6 - Contexto
    Arrow Functions possuem 'this' léxico enquanto o modelo normal possui 'this' dinâmico.

    Isso significa que Arrow Functions herdam o contexto local de onde foi declarado,
    enquanto o modelo normal possui o contexto associado ao objeto que ele está vinculado 
    no momento da chamada

    Se ele não estiver associado a ninguém na chamada, ele assumirá 'this' automaticamente 
    como o contexto global, que no caso dos navegadores é window
*/

const lanches = {
    cardapio: [
        {nome: "X-Salada", preco: "R$ 25"},
        {nome: "X-Egg", preco: "R$ 30"},
    ],

    //function herda do contexto atual
    meuPedidoFunc: function(select){
        return console.log(this.cardapio[select])
    },

    meuPedidoArrowFunc: (select) => {
        this.cardapio = [
            {nome: "X-Salada", preco: "R$ 25"},
            {nome: "X-Egg", preco: "R$ 30"},
        ];

        return console.log(this.cardapio[select]);
    },

    meuPedidoTimeOut: function() {
        setTimeout(function (){
            console.log(this.cardapio);
            console.log(this);
        }.bind(this.cardapio), 1000) //bind envia o this anterior para dentro da function interna
    }
};

lanches.meuPedidoFunc(1);
lanches.meuPedidoArrowFunc(0);

lanches.meuPedidoTimeOut();

/*
    7 - Constructor
    Arrow functions não podem ser constructors, então não é possível usar o
    operador 'new' com a mesma.
*/

class newFunc{
    contructor(nome){
        this.nome = nome;
    }
}

const a = new newFunc("Lucas Constructor");
console.log(a.nome);
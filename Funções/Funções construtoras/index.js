function Nome(nome){
    this.nome = nome;
}

const lucas = new Nome("Lucas F.");
const bruna = new Nome("Bruna R.");

console.log(lucas.nome);
console.log(bruna.nome);

function Nome2(nome, sobrenome){
    this.nome = nome;

    this.sobrenome = () =>{
        const nomeCompleto = `${this.nome} ${sobrenome}`;
        return nomeCompleto;
    };
}

const lucas2 = new Nome2("Lucas", "Fernandes");
const bruna2 = new Nome2("Bruna", "Roberta");

console.log(lucas2.sobrenome());
console.log(bruna2);


function Calculadora(num1, num2){
    this.soma = () =>{
        return `${num1 + num2}`;
    }

    this.subtracao = () =>{
        return `${num1 - num2}`;
    }
}

const soma = new Calculadora(5, 3).soma();

const subtracao = new Calculadora(5, 3).subtracao();

console.log(soma);
console.log(subtracao);
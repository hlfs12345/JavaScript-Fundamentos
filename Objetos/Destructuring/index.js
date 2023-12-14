const Tenis = {
    tamanho: 45,
    estoque: 10,
    disponivel: true,
    marca: [{nome: "Nike"},{ nome : "Adidas"}],
    secret: 123456,
    link: {a: "A", b: {d: "B"}},
};

const {tamanho, marca, cor = "Não possui cor disponivel"} = Tenis;

console.log(tamanho, marca, cor);

const {secret: randomNum } = Tenis;

console.log(randomNum);

const { link: {a}, } = Tenis;
const { link: {b : {d : oculto}, }, } = Tenis;

console.log(a);
console.log(oculto);
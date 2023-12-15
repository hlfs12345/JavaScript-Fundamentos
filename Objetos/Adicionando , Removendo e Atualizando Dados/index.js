let Tenis = {
    tamanho: 45,
    estoque: true,
};

console.log(Tenis);

Tenis.tamanho = 42;

console.log(Tenis);

Tenis.estoque = false;

console.log(Tenis);

//Tenis.preco = "R$ 42"
Tenis["preco"] = "R$ 42";

console.log(Tenis);

delete Tenis.estoque;

console.log(Tenis);
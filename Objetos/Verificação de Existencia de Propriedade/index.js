const Tenis = {
    tamanho: 45,
    estoque: 10,
    disponivel: true,
    marca: [{nome: "Nike"},{ nome : "Adidas"}],
    secret: 123456,
    link: {a: "A", b: {d: "B"}},
};

// hasOwnProperty | propertyName in Tenis

if (Tenis.hasOwnProperty("marca")){
    console.log("Existe marca");
} else {
    console.log("Não existe marca");
}

console.log("tamanho" in Tenis);
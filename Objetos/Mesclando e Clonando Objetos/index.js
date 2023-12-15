let Tenis = {
    tamanho: 45,
    estoque: 10,
    disponivel: true,
    marca: [{nome: "Nike"},{ nome : "Adidas"}],
    secret: 123456,    
};

let link = {
    link: {
        a: "A", 
        b: {
            d: "B"
        },
    }
};

let clone1 = Tenis;

console.log(clone1);

let mescla1 = Object.assign(Tenis,link);

console.log(mescla1);

let mescla2 = {...Tenis, ...link};

console.log(mescla2);

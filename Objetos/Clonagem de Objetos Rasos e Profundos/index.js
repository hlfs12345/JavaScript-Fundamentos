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

// let clone1 = Tenis;

// console.log(1, clone1);
// console.log(2, Tenis);

// let mescla1 = Object.assign(Tenis,link);
// let mescla2 = {...Tenis, ...link};

// clone1.estoque = false;
// mescla1.link.a = "ABC";

// console.log(3, clone1);
// console.log(4, Tenis);
// console.log(5, mescla1);
// console.log(6, mescla2);

function cloneObject(objc){
    return JSON.parse(JSON.stringify(objc));
}

let clone1 = JSON.parse(JSON.stringify(Tenis));

clone1.estoque = false;

console.log(1, clone1);
console.log(2, Tenis);

let mescla1 = Object.assign(cloneObject(Tenis),cloneObject(link));
let mescla2 = {
    ...cloneObject(Tenis), 
    ...cloneObject(link),
};

clone1.estoque = false;
mescla1.link.a = "ABC";

console.log(3, clone1);
console.log(4, Tenis);
console.log(5, mescla1);
console.log(6, mescla2);



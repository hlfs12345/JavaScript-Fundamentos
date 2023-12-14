function soma(num1, num2){
    if(typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2;
    }
    return "Você passou dados inválidos";
    
}

const soma = (num1 = NaN, num2 = NaN) => {
    if(typeof num1 === "number" && typeof num2 === "number"){
        return num1 - num2;
    }
    return "Você passou dados inválidos";
    
}

console.log(soma("1" ,2));

function subtracao(){
    return arguments;
}

console.log(subtracao(1,2,"ABC"));
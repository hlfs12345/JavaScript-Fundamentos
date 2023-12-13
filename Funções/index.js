// 1 - Function Declaration
function isValidDeclaration(){
    const soma = 1 + 4;

    if (soma === 3){
        return true;
    }
    return false;
}

//console.log(isValidDeclaration);

// 2 - Function Expression
const isValidExpression = function(){
    return false;
};

//console.log(isValidDeclaration());  

// 3 - Arrow Function
const isValidArrow = () => 2 * 2;

//console.log(isValidArrow()); 
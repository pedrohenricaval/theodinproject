function math (operation, ...array){
    switch(operation){
        case "+":
            return add(array);
            break;

        case "-":
            return sub(array);
            break;

        case "*":
            return multiply(array);
            break;

        case "/":
            return divide(array);
            break;
    }
}

/*funcoes math*/
function add (array){
    return array.reduce( (total, element) => total+element )
}

function sub (array){
    return array.reduce( (total, element) => total-element )
}

function multiply (array){
    return array.reduce( (total, element) => total*element )
    return array.reduce((product, current) => product * current)
}

function divide (array){
    return array.reduce( (total, element) => total/element )
}





module.exports = {
    math
};
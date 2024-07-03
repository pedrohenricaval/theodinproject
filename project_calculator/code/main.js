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
        case "%":
            return mod(array);
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

function mod (array){
    return array.reduce( (total, element) => total%element )
}

/*----------------------------------------------------------------------------------------*/

/* Adicionando eventListener a todos os botoes */

const numberPointer = Array.from(document.querySelectorAll(".number"));
numberPointer.forEach(e =>
    {
        e.addEventListener("click", (e) =>
            writeScreen(e.target.textContent)
        )
    }
)

const operationPointer = Array.from(document.querySelectorAll(".operation"));
operationPointer.forEach(e =>
    {
        e.addEventListener("click", (e) =>
            writeScreen(e.target.textContent)
        )
    }
)

const clearPointer= document.querySelector(".clear");
clearPointer.addEventListener("click", () =>
    eraseScreen()
)



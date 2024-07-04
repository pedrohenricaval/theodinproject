/* dados globais */
const operationStr =[
    "%", "/", 
    "+", "-", 
    "*", "=",
]

const numberStr = [
    "0", "1", "2",
    "3", "4", "5",
    "6", "7", "8",
    "Neg.", "9", ",",
]

/*----------------------------------------------------------------------------------------*/
/*funcoes math*/
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

/* implementacao das funcoes math*/
function add (array){
    return array.reduce( (total, element) => Number(total)+Number(element))
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
);

const clearPointer= document.querySelector(".clear");
clearPointer.addEventListener("click", () =>
    eraseScreen()
);

const equalPointer= document.querySelector(".equal");
equalPointer.addEventListener("click", () =>{
    getResult();
});

/*----------------------------------------------------------------------------------------*/
/* funcao de escrever na tela e apagar */

function writeScreen(caractere){
    let screenText = document.querySelector("#text");
    let newText;

    if (operationStr.includes(caractere)){
        newText = document.createTextNode(`${caractere}`);
    } else {
        newText = document.createTextNode(`${caractere}`); 
    }
    screenText.appendChild(newText);
}

function eraseScreen(){
    let screenText = document.querySelector("#text");

    const textArray = Array.from (screenText.childNodes);
    for (let i=0 ; i< textArray.length ; i++){
        textArray[i].remove()
    }
}

function readScreen(){
    let screenText = document.querySelector("#text");

    const textArray = Array.from (screenText.childNodes);
    const textString = [];
    let contador = 0;

    while (!operationStr.includes(textArray[contador].textContent))
    {
        if(textString[0]===undefined){
            textString[0] = textArray[contador].textContent;
        } else {
            textString[0] += textArray[contador].textContent
        }

        contador++;
    }
    
    textString[1]= textArray[contador].textContent
    contador ++;
   
    while (
        !(textArray[contador]===undefined)
        &&
        !operationStr.includes(textArray[contador].textContent)
    ){
        if(textString[2]===undefined){
            textString[2] = textArray[contador].textContent;
        } else {
            textString[2] += textArray[contador].textContent
        }

        contador++;
    }

    return textString;
}

/*----------------------------------------------------------------------------------------*/
/* funcao de obter resultado */
function getResult(){
    const operands = readScreen();
    eraseScreen();
    writeScreen(math(operands[1], operands[0], operands[2]));
}

/*----------------------------------------------------------------------------------------*/
/* exportar funcoes */

module.exports = {
    math
};

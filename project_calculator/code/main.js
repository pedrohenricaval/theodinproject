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
);

const clearPointer= document.querySelector(".clear");
clearPointer.addEventListener("click", () =>
    eraseScreen()
);

const equalPointer= document.querySelector(".equal");
equalPointer.addEventListener("click", () =>{
    getResult();
    eraseScreen();
});

/*----------------------------------------------------------------------------------------*/

/* funcao de escrever na tela e apagar */

const operationStr =[
    "%", "/", 
    "+", "-", 
    "*", "=",
]

function writeScreen(text){
    let oldText = document.querySelector("#text");
    let newText;

    if (operationStr.includes(text)){
        newText = document.createTextNode(` ${text} `);
    } else {
        newText = document.createTextNode(`${text}`); 
    }
    oldText.appendChild(newText);
}

function eraseScreen(){
    let text = document.querySelector("#text");

    const teste = Array.from (text.childNodes);
    for (let i=0 ; i< teste.length ; i++){
        teste[i].remove()
    }
}

/*----------------------------------------------------------------------------------------*/

/* exportar funcoes */
module.exports = {
    math
};

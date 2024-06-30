const lines = []; 
const columns = [];
let container = document.querySelector("#container");
let tamanhoGrid;

function criarGrid (tamanho){
    tamanhoGrid=tamanho;

    for (let i=0 ; i<tamanho ; i++){
        columns[i]=document.createElement("div");
        columns[i].setAttribute("class","column");
        container.appendChild(columns[i]);
        lines[i]=[];
    
        for (let j=0 ; j<tamanho ; j++){
            lines[i][j]=document.createElement("div");
            lines[i][j].setAttribute("class", "line");
            columns[i].appendChild(lines[i][j]);
    
            lines[i][j].addEventListener("mouseover", function() { 
                this.style.backgroundColor="red";  
            });
            lines[i][j].addEventListener("mouseout", function() { 
                this.style.backgroundColor="white";
            });
        }
    }

}

function apagarGrid(){
    for (let i=0 ; i<tamanhoGrid ; i++){    
        for (let j=0 ; j<tamanhoGrid ; j++){
            columns[i].removeChild(lines[i][j]);
        }

        container.removeChild(columns[i]);

    }
}
criarGrid(12);

let button = document.querySelector("#button");
let grid;
button.addEventListener("click", function() { 
    grid = prompt("Tamanho do novo grid \nDeve ser menor que 100")

    while(grid>100){
        grid = prompt("O tamanho deve ser menor que 100!")
    }

    apagarGrid();
    criarGrid(grid);
});
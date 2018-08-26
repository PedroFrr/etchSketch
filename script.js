let x_pos = 0;
let y_pos = 0;
let rowWidth = 540; //change these values 
const container = document.body;
const divContainer = document.createElement('div');
const clearButton = document.createElement('button');
clearButton.classList.add("clearButton");
clearButton.textContent = "Clear Grid";
clearButton.style.height='30px';
clearButton.style.width='90px';
container.appendChild(clearButton);


function createGrid(n){
for(i=0;i<n;i++){
    const row = document.createElement('div');
    row.classList.add('row');
    row.style.width=rowWidth+'px';
    for(j=0; j<n;j++){
        const divGrid = document.createElement('div');
        divGrid.classList.add('gridCell');
        divGrid.style.position = "relative";
        divGrid.style.boxSizing="border-box";
        divGrid.style.display="inline-block";
        divGrid.style.height= (rowWidth/n)+'px'
        divGrid.style.width=(rowWidth/n)+'px';
        divGrid.style.border='1px solid red';
        row.appendChild(divGrid);   
    }
    divContainer.appendChild(row);
}

container.appendChild(divContainer);
}

function paintCell(){
    this.style.background = "#000";
}


 
function newGrid(){
    const divs = document.querySelectorAll('.gridCell');
    divs.forEach(div => div.style.background="white");
    let gridNumber = prompt("Enter the dimensions of the new Grid _x_");
    let gridCells = document.querySelectorAll('.gridCell');
    for(i=0; i<gridCells.length;i++){
        gridCells[i].remove();
    }
    createGrid(gridNumber);
    addEventListeners();
}

const button = document.querySelector('.clearButton');
button.addEventListener('click',newGrid);

function addEventListeners(){
const divs = document.querySelectorAll('.gridCell'); 
divs.forEach(div => div.addEventListener("mouseover",paintCell));
}

createGrid(16);
addEventListeners();
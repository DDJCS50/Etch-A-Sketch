function createGridSquare() {
    gridSquare = document.createElement('div');
    gridSquare.setAttribute('class', 'square');
    gridRow.appendChild(gridSquare);
}

let gridRow;

function createGridRow() {
    for (let j = 0; j < 16; j++) {
        gridRow = document.createElement('div');
        gridRow.setAttribute('class', 'row');
        for (let i = 0; i < 16; i++) {
            createGridSquare();
        }
        sandbox = document.querySelector('div.sandbox');
        sandbox.appendChild(gridRow);
    }
}

createGridRow();
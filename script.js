function createGridSquare() {
    gridSquare = document.createElement('div');
    gridSquare.setAttribute('class', 'square');
    gridRow.appendChild(gridSquare);
}

let gridRow;
let gridSquare;

function createGridRow() {
    for (let j = 0; j < 50; j++) {
        gridRow = document.createElement('div');
        gridRow.setAttribute('class', 'row');
        for (let i = 0; i < 50; i++) {
            createGridSquare();
        }
        sandbox = document.querySelector('div.sandbox');
        sandbox.appendChild(gridRow);
    }
}

function createHover() {
    let squares = document.querySelectorAll('.square');
    for (let k = 0; k < squares.length; k++) {
        squares[k].addEventListener('mouseover', function() {
            squares[k].style.backgroundColor = 'blue';
        });
    }
}


createGridRow();
createHover();
function createGridSquare() {
    gridSquare = document.createElement('div');
    gridSquare.setAttribute('class', 'square');
    gridRow.appendChild(gridSquare);
}

let gridRow;
let gridSquare;

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

function createHover() {
    let squares = document.querySelectorAll('.square');
    for (let k = 0; k < squares.length; k++) {
        squares[k].addEventListener('mouseover', function() {
            squares[k].style.backgroundColor = 'blue';
        });
    }
}

let btnDiv = document.querySelector('.changeGridButton');
let userInput;

function createInputButton() {
    let btn = document.createElement('button');
    btn.innerText = 'Change Grid';
    btn.style.backgroundColor = 'darkGreen';
    btn.style.fontWeight = 'bolder';
    btn.style.border = 'solid black 2px';
    btn.style.borderRadius = '2px';
    btn.addEventListener('click', function() {
        deleteRows();
        
        do {
            userInput = prompt('What size grid do you want to draw in?');
        } while (userInput > 100 || userInput < 1 || isNaN(userInput) || userInput === undefined ||
                userInput === null)
        
        createNewRows();
        createHover();
    });

    btnDiv.appendChild(btn);
}

function deleteRows() {
    let rows = document.querySelectorAll('.row');
    for (let k = 0; k < rows.length; k++) {
        rows[k].remove();
    }
}

function createNewRows() {
    for (let j = 0; j < userInput; j++) {
        gridRow = document.createElement('div');
        gridRow.setAttribute('class', 'row');
        for (let i = 0; i < userInput; i++) {
            createGridSquare();
        }
        sandbox = document.querySelector('div.sandbox');
        sandbox.appendChild(gridRow);
    }
}

createGridRow();
createHover();
createInputButton();
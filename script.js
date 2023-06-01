function createGridSquare() {
    sandbox = document.querySelector('div.sandbox');
    gridSquare = document.createElement('div');
    gridSquare.setAttribute('class', 'square');
    sandbox.appendChild(gridSquare);
}

createGridSquare();
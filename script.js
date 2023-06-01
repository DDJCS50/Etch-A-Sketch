function createGridSquare() {
    sandbox = document.querySelector('div.sandbox');
    gridSquare = document.createElement('div');
    gridSquare.setAttribute('class', 'square');
    sandbox.appendChild(gridSquare);
}

for (let i = 0; i < 16; i++) {
    createGridSquare();
}
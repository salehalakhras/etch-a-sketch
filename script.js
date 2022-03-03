const gridContainer = document.querySelector('.container');
const gridArray = [];

//create 16x16 array
for (let i = 0; i < 16; i++) {
    gridArray[i] = new Array(16);
}

//create a div element for each item in the array and append it to the container div
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        gridArray[i][j] = document.createElement('div');
        gridArray[i][j].classList.add('gridItem');
        gridContainer.appendChild(gridArray[i][j]);
    }
}
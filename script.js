const bodyTag = document.querySelector('body');
const gridContainer = document.querySelector('.container');
const resetBtn = document.createElement('button');
const gridArray = [];

resetBtn.classList.add('reset');
resetBtn.textContent = 'Reset';
bodyTag.prepend(resetBtn);
resetBtn.addEventListener('click', clearGrid);

var sideNum = 16;
createGrid(sideNum);


//create a div element for each item in the array and append it to the container div
function createGrid(sideNum) {
    var hoverTimes = 0;
    var firstTime = true;
    for (let i = 0; i < sideNum; i++)
        gridArray[i] = new Array(sideNum)

    for (let i = 0; i < sideNum; i++) {
        for (let j = 0; j < sideNum; j++) {
            gridArray[i][j] = document.createElement('div');
            gridArray[i][j].classList.add('gridItem');
            gridContainer.appendChild(gridArray[i][j]);
            gridArray[i][j].addEventListener('mouseover', e => {
                e.target.style.cssText = `background-color: black`;
            });
        }
    }
    gridContainer.style.cssText = `grid-template-columns: repeat(${sideNum}, 1fr);
grid-template-rows: repeat(${sideNum}, 1fr);`;

}


function clearGrid() {
    for (let i = 0; i < sideNum; i++) {
        for (let j = 0; j < sideNum; j++) {
            gridArray[i][j].remove();
        }
    }

    sideNum = prompt("Enter a grid size, max: 100x100");
    if (sideNum > 100)
        sideNum = 100;
    else if (sideNum < 0)
        sideNum = 0;

    createGrid(sideNum);
}
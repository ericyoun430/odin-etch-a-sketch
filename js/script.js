


const container = document.createElement('div');
container.classList.add('container');
document.querySelector('body').appendChild(container);

generateGrid(16);

let squareCount;
const button = document.querySelector('button');
button.addEventListener('click', () => {
    squareCount = parseInt(prompt('How many squares do you want per side?'));

    let squares = container.childNodes;
    while (squares[0]) {
        squares[0].remove();
    }
    generateGrid(squareCount);
});


function generateGrid(numSquares) {

    if (numSquares > 100) {
        numSquares = 16;
        alert('You chose too high of a number. It must be 100 or below!');
    }
    const gridWidth = (1/numSquares)*100;

    for (let i = 0; i < numSquares; i++) {
        for (let j = 0; j < numSquares; j++) {
            const gridElement = document.createElement('div');

            gridElement.classList.add('grid-box');
            gridElement.textContent = '';
            gridElement.style.width = ""+gridWidth+"%";

            gridElement.addEventListener('mouseover', (event) => {
                gridElement.style.backgroundColor = 'blue';
            });
            container.appendChild(gridElement);
        }
    }
}

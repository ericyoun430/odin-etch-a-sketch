


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
            
            let r = Math.round(Math.random()*256).toString();
            let g = Math.round(Math.random()*256).toString();
            let b = Math.round(Math.random()*256).toString();
            let a = 0;
            gridElement.addEventListener('mouseover', (event) => {
                a+=.1;
                gridElement.style.backgroundColor = `rgb(${r},${g},${b},${a})`;
            });
            container.appendChild(gridElement);
        }
    }
}

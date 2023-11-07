


const container = document.createElement('div');
container.classList.add('container');
document.querySelector('body').appendChild(container);

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const gridElement = document.createElement('div');

        gridElement.classList.add('grid-box');
        gridElement.textContent = 'grid';
        container.appendChild(gridElement);
    }
}
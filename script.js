const container_div = document.querySelector('#container');
container_div.setAttribute('style', 'display: inline-grid; color: black; background: white; border: solid; grid-template-columns: repeat(16, 1fr);  grid-template-rows: repeat(16, 1fr); width: 500px; height: 500px;');

for (let i = 0; i < 256; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('gridItem');
    gridItem.textContent = ' ';
    container_div.appendChild(gridItem);
    gridItem.setAttribute('style','border: 1px solid; border-color: black;')
    //color changed when mouse onclick the squares
    gridItem.addEventListener('click', () => {
        gridItem.setAttribute('style','border: 1px solid; border-color: black; background-color: black;');
    })
}







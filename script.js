const body_div = document.getElementsByTagName('body');
const container_div = document.querySelector('#container');
const containerNo_div = document.querySelector('.containerNoHead');
const header_div = document.getElementsByTagName('header');
const leftside_div = document.querySelector('#leftside');
containerNo_div.setAttribute('style', 'display: flex; gap: 300px')
container_div.setAttribute('style', 'display: inline-grid; background: white; border: solid; border-color: white; width: 500px; height: 500px;');
leftside_div.setAttribute('style','width: 300px; border: solid; border-color: #94B49F; margin-left: 200px;')
const clear_btn = document.querySelector('.clear');
const eraser_btn = document.querySelector('.eraser');

let isMouseDown = false;
window.onmousedown = () => (isMouseDown = true);
window.onmouseup = () => (isMouseDown = false);

function main() {
    const gridSize = prompt("What size you want?")
    container_div.style.gridTemplateColumns =  `repeat(${gridSize}, 1fr)`;
    container_div.style.gridTemplateRows =  `repeat(${gridSize}, 1fr)`;
    if (gridSize > 100) {
        alert("Too large");
    }

    for (let i = 0; i < (gridSize ** 2); i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        container_div.appendChild(gridItem);
        gridItem.setAttribute('style','border: 1px solid; border-color: #94B49F;')
        //color changed when mouse onclick the squares
        gridItem.addEventListener('mousedown', () => {
        //implement color as picked
            colorPick();
        }) ;

        gridItem.addEventListener('mouseover', () => {
            if (isMouseDown) {
                colorPick();
            }
        });

        function colorPick() {
            const color = document.querySelector('#colorPicker').value;
            gridItem.style.backgroundColor = color;
        }

        //eraser
        eraser_btn.addEventListener('click', () => {
            gridItem.addEventListener('mousedown', () => {
                gridItem.setAttribute('style','border: 1px solid; border-color: #94B49F; background-color: none;');
            }) ;
    
            gridItem.addEventListener('mouseover', () => {
                if (isMouseDown) {
                    gridItem.setAttribute('style','border: 1px solid; border-color: #94B49F; background-color: none;');
                } 
            });
        });
        
        
        //clear  all
        clear_btn.addEventListener('click', () => {
            gridItem.setAttribute('style','border: 1px solid; border-color: #94B49F; background-color: none;');
         });
    }



}

main();


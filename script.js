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
const pen_btn = document.querySelector('.pen');
const rainbow_btn = document.querySelector('.rainbow');

let isMouseDown = false;
window.onmousedown = () => (isMouseDown = true);
window.onmouseup = () => (isMouseDown = false);

function main() {
    const gridSize = prompt("What size you want?")
    container_div.style.gridTemplateColumns =  `repeat(${gridSize}, 1fr)`;
    container_div.style.gridTemplateRows =  `repeat(${gridSize}, 1fr)`;
    if (gridSize > 100|| gridSize <= 0) {
        alert("Not right");
    }

    pen_btn.setAttribute('style','background: #ECB390;');

    for (let i = 0; i < (gridSize ** 2); i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        container_div.appendChild(gridItem);
        gridItem.setAttribute('style','border: 1px solid; border-color: #94B49F;')

        clear_btn.addEventListener('click', () => {
            gridItem.setAttribute('style','border: 1px solid; border-color: #94B49F; background-color: none;');
         });

        //color changed when mouse onclick the squares
        gridItem.addEventListener('mousedown', () => {
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

        rainbow_btn.addEventListener('click', () => {
            rainbow_btn.setAttribute('style','background: #ECB390;');
            pen_btn.setAttribute('style','background: white;');
            eraser_btn.setAttribute('style','background: white;');
            gridItem.addEventListener('mousedown', () => {
                rainbowMode();
            });

            gridItem.addEventListener('mouseover', () => {
                if(isMouseDown) {
                    rainbowMode();
                }
            })

            function rainbowMode () {
            const randomR = Math.floor(Math.random() * 256)
            const randomG = Math.floor(Math.random() * 256)
            const randomB = Math.floor(Math.random() * 256)
            gridItem.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
            }
         });

        //turn on eraser 
        eraser_btn.addEventListener('click', (useEraser));
        
        function useEraser () {
            eraser_btn.setAttribute('style','background: #ECB390;');
            pen_btn.setAttribute('style','background: white;');
            rainbow_btn.setAttribute('style','background: white;')
            gridItem.addEventListener('mousedown', () => {
                eraser();
            }) ;
    
            gridItem.addEventListener('mouseover', () => {
                if (isMouseDown) {
                    eraser();
                } 
            });

            function eraser () {
                gridItem.setAttribute('style','border: 1px solid; border-color: #94B49F; background-color: none;');
            
            };

        // click pen button  
        
        pen_btn.addEventListener('click', () => {
            pen_btn.setAttribute('style','background: #ECB390;');
            eraser_btn.setAttribute('style','background: white;');
            rainbow_btn.setAttribute('style','background: white;')
            gridItem.addEventListener('mousedown', () => {
                colorPick();
            }) ;
    
            gridItem.addEventListener('mouseover', () => {
                if (isMouseDown) {
                    colorPick();
                } 
            });

        })
    }

}
}

main();
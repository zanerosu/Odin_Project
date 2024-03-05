mainDiv = document.querySelector('#mainContainer');

//Creates grid based on row and col parameter
function generateGrid(userSize){
    for (let i = 0; i < userSize; i++){
        for (let j = 0; j < userSize; j++){
            const gridDiv = document.createElement('div');
            gridDiv.setAttribute('class', 'gridDiv');
            gridDiv.style.width = `${480/userSize}px`;
            gridDiv.style.height = `${480/userSize}px`;
            mainDiv.appendChild(gridDiv);
            
            gridDiv.addEventListener('mouseenter', (event) => {
                gridDiv.style.backgroundColor = 'rgb(49, 36, 36)'
            })
        }
    }
}

//Generates Initial Grid
generateGrid(16)


//Clears current grid on screen 
function removeGrid(){
    mainDiv.innerHTML = '';
}   



btnNewGrid = document.querySelector('#newGrid');
btnNewGrid.addEventListener('click', ()=>{
    let userSize = prompt("Enter grid size (Max 100): ")
    removeGrid()
    generateGrid(userSize);
})
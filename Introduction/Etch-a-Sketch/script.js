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
            let alphaVal = 0.10;
            gridDiv.addEventListener('mouseenter', (event) => {
                //Random color background
                //gridDiv.style.backgroundColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${alphaVal += 0.10})`
                //Black background color
                gridDiv.style.backgroundColor = `rgba(0, 0, 0, ${alphaVal += 0.10})`
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

//Button to reset grid and create new grid of specified size
btnNewGrid = document.querySelector('#newGrid');
btnNewGrid.addEventListener('click', ()=>{
    let userSize = prompt("Enter grid size (Max 100): ")
    while (userSize > 100 || userSize < 0){
        alert("Please enter a valid size!")
        userSize = prompt("Enter grid size (Max 100): ")
    }
    removeGrid()
    generateGrid(userSize);
})
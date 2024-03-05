mainDiv = document.querySelector('#mainContainer');

for (let i = 0; i < 16; i++){
    for (let j = 0; j < 16; j++){
        const gridDiv = document.createElement('div');
        gridDiv.setAttribute('class', 'gridDiv');
        mainDiv.appendChild(gridDiv);
    }
}

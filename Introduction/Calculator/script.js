function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b
}


const numA = ""
const numB = ""
const operator = ""


function operate(numA, numB, operator){
    if (operator === '+'){
        add(numA, numB)
    }
    else if (operator === '-'){
        subtract(numA, numB)
    }
    else if (operator === '*'){
        multiply(numA, numB)
    }
    else if (operator === '/'){
        divide(numA, numB)
    }
    else{
        alert('Invalid operator!')
    }
}

const display = document.querySelector("#display");
const num_btns = document.querySelector("#num-btns");
const numberRegex = /^[0-9]$/;

//Adds number to display if the id of the button clicked is a value of 0-9;
num_btns.addEventListener('click', (event) =>{
    if(numberRegex.test(event.target.id)){
        display.textContent += event.target.id
    }
})

const clearAll = document.querySelector("#clearAll");
const clear = document.querySelector("#clear");

//Clears entire display
clearAll.addEventListener('click', () =>{
    display.textContent = "";
})

//Clears last value in display
clear.addEventListener('click', (event) =>{
    display.textContent = display.textContent.slice(0, -1);
})




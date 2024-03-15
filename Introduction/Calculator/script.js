function add(a, b){
    return a + b;
};

function subtract(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    return a / b
};

let numA = ""
let numB = ""
let operator = ""
let total = ""

function operate(numA, numB, operator){
    if (operator === 'add'){
        return numA + numB
    }
    else if (operator === 'subtract'){
        return numA - numB
    }
    else if (operator === 'multiply'){
        return numA * numB
    }
    else if (operator === 'divide'){
        return numA / numB
    }
    else{
        alert('Invalid operator!')
    }
};

function performOperation(){
    numB = Number(display.textContent);
    total = String(operate(numA, numB, operator));
    updateDisplay(total);
    numA = Number(total);
}

function resetAll(){
    display.textContent = "0";
    numA = "";
    numB = "";
    total = "";
    operator = "";
    hasDecimal = false;
    if (lastOp){
        lastOp.classList.remove('op-button-current');
    }
}

function updateDisplay(content){
    const maxLength = 13;
    if (content.length > maxLength){
        display.textContent = content.slice(0, maxLength)
    } else {
        display.textContent = content;
    }
}


const display = document.querySelector("#display");
display.textContent = '0'

//--------------Number button and operator button functions---------------------
const num_btns = document.querySelector("#num-btns");
const numberRegex = /^[0-9]$/;


//Adds number to display if the id of the button clicked is a value of 0-9;
num_btns.addEventListener('click', (event) =>{
    if(numberRegex.test(event.target.id)){
        if (display.textContent === '0' || display.textContent === total){
            updateDisplay(event.target.id);
        } else{
            updateDisplay(display.textContent + event.target.id);
        }
    }
    console.log(`Operation = ${operator} numA = ${numA} numB = ${numB} total = ${total}`);
});

//Stores first number and operation into respective variables
let lastOp = null;
const operator_btns = document.querySelectorAll('.op-button'); 
operator_btns.forEach(button =>{
    button.addEventListener('click', (event) => {
        if (lastOp){
            lastOp.classList.remove('op-button-current');
        }
        if (numA !== ""){
            performOperation();
        } else {
            numA = Number(display.textContent);
        }
        operator = event.target.id;
        if(numA === Number(total)){
            display.textContent = total
        } else {
            display.textContent = "";
        }
        lastOp = event.target;
        event.target.classList.add('op-button-current');
        console.log(`Operation = ${operator} numA = ${numA} numB = ${numB} total = ${total}`);
    })
});

//-------------------Equal button function----------------------------
const equalBtn = document.querySelector("#equal");

equalBtn.addEventListener('click', ()=>{
    if (lastOp){
        lastOp.classList.remove('op-button-current');
    }
    if (numA !== "" && operator !== ""){
        if (numB === ""){
            numB = Number(display.textContent)
        }
        performOperation();
        numA = ""
        numB = ""
        operator = ""
    }
    console.log(`Operation = ${operator} numA = ${numA} numB = ${numB} total = ${total}`);
})


//-------------------Clear button functions--------------------------
const clearAll = document.querySelector("#clearAll");
const clear = document.querySelector("#clear");

//Clears entire display
clearAll.addEventListener('click', () =>{
    resetAll();
    console.log(`Operation = ${operator} numA = ${numA} numB = ${numB} total = ${total}`);
});

//Clears last value in display
clear.addEventListener('click', (event) =>{
    display.textContent = display.textContent.slice(0, -1);
});


//-------------------Change Sign and Decimal Functions -----------------------

const decimal = document.querySelector("#decimal")
const sign = document.querySelector("#sign")
let hasDecimal = false

decimal.addEventListener('click', () =>{
    if (hasDecimal === false){
        display.textContent += '.';
        hasDecimal = true;
    }
})


sign.addEventListener('click', ()=>{
    display.textContent = (Number(display.textContent) * -1).toString();
})
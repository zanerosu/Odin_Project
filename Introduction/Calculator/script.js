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

const display = document.querySelector("#display");

//--------------Number button and operator button functions---------------------
const num_btns = document.querySelector("#num-btns");
const numberRegex = /^[0-9]$/;
const operator_btns = document.querySelector("#operator-btns");

//Adds number to display if the id of the button clicked is a value of 0-9;
num_btns.addEventListener('click', (event) =>{
    if(numberRegex.test(event.target.id)){
        display.textContent += event.target.id;
    }
    console.log("NUM CLICK")
    console.log(`Operation = ${operator} numA = ${numA} numB = ${numB} total = ${total}`);
});

//Stores first number and operation into respective variables
operator_btns.addEventListener('click', (event) =>{
    if (numA != "" && Number(total) != Number(display.textContent)){
        numB = Number(display.textContent)
        total = String(operate(numA, numB, operator));
        operator = event.target.id;
        display.textContent = total;
        numA = Number(total);
    }else{
        numA = Number(display.textContent);
        operator = event.target.id;
        display.textContent = "";
    }
    console.log("OPERATOR CLICK")
    console.log(`Operation = ${operator} numA = ${numA} numB = ${numB} total = ${total}`);
});

//-------------------Equal button function----------------------------
const equalBtn = document.querySelector("#equal");

equalBtn.addEventListener('click', ()=>{
    numB = Number(display.textContent);
    total = String(operate(numA, numB, operator));
    display.textContent = total;
    console.log("EQUAL CLICK")
    console.log(`Operation = ${operator} numA = ${numA} numB = ${numB} total = ${total}`);
})


//-------------------Clear button functions--------------------------
const clearAll = document.querySelector("#clearAll");
const clear = document.querySelector("#clear");

//Clears entire display
clearAll.addEventListener('click', () =>{
    display.textContent = "";
    numA = "";
    numB = "";
    total = "";
    operator = "";
    console.log(`Operation = ${operator} numA = ${numA} numB = ${numB} total = ${total}`);
});

//Clears last value in display
clear.addEventListener('click', (event) =>{
    display.textContent = display.textContent.slice(0, -1);
});








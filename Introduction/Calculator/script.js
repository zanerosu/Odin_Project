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
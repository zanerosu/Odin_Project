export function capitalize(string){
    return string[0].toUpperCase() + string.substring(1);
};

export function reverseString(string){
    let reversed = "";

    for (let i = string.length - 1; i >= 0; i--){
        reversed += string[i]
    }

    return reversed;
};

export const calculator = {
    add(num1, num2){
        return num1 + num2;
    },

    subtract(num1, num2){
        return num1 - num2;
    },

    divide(num1, num2){
        return num1 / num2;
    },

    multiply(num1, num2){
        return num1 * num2;
    }
};

export function caesarCipher(string, shift){
    let shiftedWord = "";
    //65 - 90 Upper & 97 - 122 Lower
    for (let i = 0; i < string.length; i++){
        let currCode = string.charCodeAt(i)

        let baseCharCode = (currCode >= 65 && currCode <= 90) ? 65 : (currCode >= 97 && currCode <= 122) ? 97 : currCode;

        let shiftedCode = ((currCode - baseCharCode + shift) % 26 + 26) % 26 + baseCharCode;
        shiftedWord += String.fromCharCode(shiftedCode); 
    }

    return shiftedWord
}


export function analyzeArray(array){
    let object = {
        average: 0,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }

    let sum = 0
    array.forEach((number) => {
        sum += number
    })

    object.average = sum/object.length

    return object
}
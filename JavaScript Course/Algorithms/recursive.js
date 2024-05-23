
function fibs(n){
    var array = new Array(n)
    array[0] = 0
    array[1] = 1

    for (let i = 2; i < array.length; i++){
        array[i] = array[i - 1]  + array[i - 2];
    }
    
    return array
}

console.log(fibs(10));

function fibsRec(n){
    if (n === 0){
        return []
    }
    else if (n === 1){
        return [0]
    }
    else if (n === 2){
        return [0, 1]
    }
    else{
        const prevArray = fibsRec(n - 1);
        const newNum = prevArray[prevArray.length - 2] + prevArray[prevArray.length - 1];
        return prevArray.concat(newNum)
    }    
}

console.log(fibsRec(10));


function mergeSort(array){
    if (array.length === 1) return array
    const midPoint = Math.ceil(array.length / 2)

    const leftHalf = mergeSort(array.slice(0, midPoint));
    const rightHalf = mergeSort(array.slice(midPoint));
    const res = [];

    while (leftHalf.length !== 0){
        if (rightHalf.length === 0){
            res.push(...leftHalf)
            break
        }
        if (leftHalf[0] < rightHalf[0]){
            res.push(leftHalf.shift())
        } else{
            res.push(rightHalf.shift())
        }
    }

    res.push(...rightHalf);
    return res
}

console.log(mergeSort([38, 27, 43, 10]))
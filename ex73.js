// 73. Измените функцию multiplyAll так, чтобы она возвращала произведение всех чисел в массива arr.

function multiplyAll (arr){
    product = 1;
    for(let i = 0; i < arr.length; i++){
        product = product * arr[i];
    }
    console.log(product);
}

multiplyAll([1,2,3,4,5]);
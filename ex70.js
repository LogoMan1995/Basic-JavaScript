// 70. Нажмите нечетные числа от 9 до 1, myArray используя for цикл.

myArray = [];

for(let i = 9; i >= 1; i--){
    if(i%2 !== 0)
    myArray.push(i)
}

console.log(myArray)


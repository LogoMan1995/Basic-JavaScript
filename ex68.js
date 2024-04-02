// 68. Нажмите нечетные числа от 1 до 9, чтобы myArray использовать for цикл.

const ourArray = [];

for (let i = 1; i <= 9; i++) {
   if(i%2 !== 0) 
  ourArray.push(i);
}


console.log(ourArray);




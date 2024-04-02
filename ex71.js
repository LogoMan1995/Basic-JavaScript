// 71. total Объявите и инициализируйте переменную 0. Используйте for цикл для добавления значения каждого элемента массива myArr в total.

let total = 0;
const myArr = [2, 3, 4, 5, 6]
for(let i = 0; i < myArr.length; i++){
    total += myArr[i];
}

console.log(total);


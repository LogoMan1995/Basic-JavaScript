// 82. В checkSign функции используйте несколько условных операторов (в соответствии с рекомендуемым форматом findGreaterOrEqual), чтобы проверить, является ли число положительным, отрицательным или нулевым. Функция должна вернуть positive, negativeили zero.




function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
  }

console.log(checkSign(10));



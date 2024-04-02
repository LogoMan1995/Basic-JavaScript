// 81. Используйте условный оператор в checkEqual функции, чтобы проверить, равны ли два числа. Функция должна возвращать либо строку Equal, либо строку Not Equal.

function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
  }
  
  console.log(checkEqual(3, 3));
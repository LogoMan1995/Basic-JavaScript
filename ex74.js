// 74. Измените while цикл в коде на do...while цикл, чтобы цикл передавал только число 10 в myArray, и i оно было равно значению 11 на момент завершения выполнения вашего кода.



let myArray = [];
let i = 10;

do {
  myArray.push(i);
  i++;
} while (i <= 10);

console.log(myArray)
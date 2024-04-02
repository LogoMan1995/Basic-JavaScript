// 75. Напишите рекурсивную функцию sum(arr, n), которая возвращает сумму первых n элементов массива arr.

function sum(arr, n) {
    if(n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
    
  }

  console.log(sum([1], 0));
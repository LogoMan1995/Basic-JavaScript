// 83. countdown(10) должен вернуться[10, 9, 8, 7, 6, 5, 4, 3, 2, 1] . Решить с помощью рекурсии.


function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.unshift(n);
      return arr;
    }
  }

  console.log(countdown(10));
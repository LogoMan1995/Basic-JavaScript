// 77. Измените randomFraction, чтобы возвращать случайное число вместо возврата 0.

function randomFraction() {
  
    let result = 0;
    while (result === 0) {
      result = Math.random();
    }
  
    return result;
  }
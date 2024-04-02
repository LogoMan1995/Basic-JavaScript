// 52. Измените функцию abTest так, чтобы, если a или b меньше, 0 функция немедленно завершала работу со значением undefined.



function abTest(a, b) {
    if (a < 0 || b < 0) {
      return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2, 2);
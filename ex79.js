// 79. Создайте функцию, randomRange которая принимает диапазон myMin и myMax возвращает случайное целое число, которое больше или равно myMin и меньше или равно myMax.


function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  }

  console.log(randomRange(0,10));

// 60. Удалить tails свойство из myDog. Вы можете использовать обозначение через точку или скобку.

const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };

delete myDog.tails;
console.log(myDog);


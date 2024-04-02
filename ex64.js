// 64. Используя обозначение точки и скобок, задайте для переменной secondTree второй элемент массива list из второго объекта в myPlants массиве.

const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  

  const secondTree = myPlants[1].list[1];
  
  console.log(secondTree);


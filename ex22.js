// 21. Используя скобочные обозначения, выберите элемент из myArray таких, который myData равен 11.

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[3][0][1];
  console.log(myData);
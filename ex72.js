// 72. Измените функцию multiplyAll так, чтобы она возвращала произведение всех чисел в подмассивах arr.





function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        product = product * arr[i][j];
      }
    }
  
    console.log(product);
  }
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);



  function massiv (arr){
  let product = 1;
  for(let i = 0; i < arr.length; i++){
    product = product * arr[i];
  }
  console.log(product)
  }

  massiv([5,10,25])
// 49. Напишите оператор переключения, который будет устанавливать answer следующие условия: a- apple, b- bird, c- cat, default-stuff.



function switchOfStuff(val) {
    let answer = "";
   switch(val){
    case 'a':
    answer = 'apple';
    break;
    case 'b':
    answer = 'bird';
    break;
    case 'c':
    answer = 'cat';
    break;
    default:
        answer = 'stuff';
    break;
   }
  console.log(answer);
  }
  
  switchOfStuff('a');
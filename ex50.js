// 50. Напишите оператор переключения, который будет установлен answerдля следующих диапазонов: 1-3- Low, 4-6- Mid, 7-9-High.

function  range(val) {
let answer = "";
switch(val){
case 1:
case 2:
case 3:
    answer = "Low";
break;
case 4:
case 5:
case 6:
    answer = "Mid";
break;
case 7:
case 8:
case 9:
    answer = "High";
break;
default:
    break;
}
    console.log(answer);
}

range(9);
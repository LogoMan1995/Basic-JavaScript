// 48. Напишите оператор переключения, который проверяет val и устанавливает answer следующие условия: 1- alpha, 2- beta, 3- gamma, 4-delta.

function caseInSwitch(val) {
    let answer = "";
 switch(val){
    case 1:
        answer = "alpha";
    break;
    case 2:
        answer = "beta";
     break;
    case 3:
        answer = "gamma";
    break;
    case 4:
        answer = "delta";
    break;
 }
 console.log(answer);
}
  
caseInSwitch(4);
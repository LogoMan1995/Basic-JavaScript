// 53. Подсчёт карт. Наличие большего количества старших карт в колоде идет на пользу игроку. Каждой карте присвоено значение в соответствии с таблицей ниже. Когда счет положительный, игроку следует сделать большую ставку. Когда счет равен нулю или отрицателен, игроку следует делать низкую ставку.Подсчитать изменение	Карты
// +1	 2, 3, 4, 5, 6
//  0	     7, 8, 9
//  1	 10, «J», «Q», «К», «А»

let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
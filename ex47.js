// 47. В игре в гольф каждая лунка имеет par, то есть среднее число, которое strokesигрок в гольф должен сделать, чтобы забить мяч в лунку и завершить игру. В зависимости от того, насколько выше или ниже parвы strokesнаходитесь, существует разное прозвище.Ваша функция будет передана parи strokesаргументы. Верните правильную строку в соответствии с этой таблицей, в которой штрихи перечислены в порядке приоритета; сверху (самый высокий) вниз (самый низкий):
/* 1	"Отверстие в одном!"
<= номинал - 2	«Орел»
пар - 1	"Птичка"
номинал	"Пар"
номинал + 1	"Богги"
номинал + 2	"Двойной призрак"
>= номинал + 3	"Иди домой!"
parи strokes всегда будет числовым и положительным. Для вашего удобства мы добавили массив всех имен. */


const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {

  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }
  
}


golfScore(5, 4);
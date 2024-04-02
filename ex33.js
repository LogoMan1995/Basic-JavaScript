// 33. Вызовите processArgфункцию с аргументом 7и присвойте возвращаемое значение переменной processed.


let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);
console.log(processed);

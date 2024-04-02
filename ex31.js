// 31. Добавьте локальную переменную в myOutfitфункцию, чтобы переопределить значение outerWear строки sweater.

const outerWear = "T-Shirt";

function myOutfit() {
const outerWear = "sweater";
  return outerWear;
}

console.log(myOutfit());
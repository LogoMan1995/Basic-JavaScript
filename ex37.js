// 37. Функция compareEqualityв редакторе сравнивает два значения с помощью оператора равенства. Измените функцию так, чтобы она возвращала строку Equalтолько в том случае, если значения строго равны.

function compareEquality(a, b) {
    if (a === b) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");
// 39. Добавьте оператор «больше» в указанные строки, чтобы операторы возврата имели смысл.

function testGreaterThan(val) {
    if (val > 100) {  
      return "Over 100";
    }
    else if (val > 10) {  
      return "Over 10";
    }
    else
    return "10 or Under";
  }
  
  testGreaterThan(101)
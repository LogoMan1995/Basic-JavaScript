// 40. Добавьте оператор «больше или равно» в указанные строки, чтобы операторы возврата имели смысл.


function testGreaterOrEqual(val) {
    if (val >= 20) {  
      return "20 or Over";
    }
  
    if (val >= 10) {  
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);
// 34. Создайте if оператор внутри функции, который будет возвращать значение Yes, that was trueпараметра, и возвращать его в противном случае.wasThatTruetrueNo, that was false

function trueOrFalse(wasThatTrue){
    if(wasThatTrue){
      return "Yes, that was true";
    }
    return "No, that was false";
  }
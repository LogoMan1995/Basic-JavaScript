// 43. Замените два оператора if одним оператором, используя && оператор, который вернет строку, Yes если val меньше или равно 50 и больше или равно 25. В противном случае вернет строку No.

function testLogicalAnd(val) {
if (val <= 50 && val >= 25) {
      return "Yes";
    }
    else{
        return "No";
    }
   }
  
  
  testLogicalAnd(10);




// 36. Используйте в инструкции оператор строгого равенства if, чтобы функция возвращала строку, Equal если val она строго равна 7.

function testEqual (val){
    if(val === 7){
        return "Equal";
    }
    else{
        return "Not Equal";
    }
}

testEqual(7);
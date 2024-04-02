// 44. Объедините два if оператора в один, который возвращает строку, Outside eесли val она не находится между 10 и 20 включительно. В противном случае верните строку Inside.

function testLogicalOr(val) {

    if (val > 20 || val < 10) {
    return "Outside"
    }
    
    return "Inside";
    }
    
    testLogicalOr(15);

// 46. Напишите связанные операторы if/ else if для выполнения следующих условий:
// num < 5- вернуться Tiny, num < 10- вернуться Small, num < 15- вернуться Medium, num < 20- вернуться Large, num >= 20- вернуться Huge


function testSize(num){
    if(num < 5){
        return 'Tiny';
    }
    else if(num < 10){
        return 'Small';
    }
    else if(num < 15){
        return 'Medium';
    }
    else if(num < 20){
        return 'Large';
    }
    else {
        return 'Huge';
    }
}

testSize(4);
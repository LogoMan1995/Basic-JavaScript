// 61. Преобразуйте оператор переключения в объект с именем lookup. Используйте его для поиска val и присвоения связанной строки переменной result.


function phoneticLookup(val) {
    var result = "";
    var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };
    result = lookup[val];
    
    return result;
  }







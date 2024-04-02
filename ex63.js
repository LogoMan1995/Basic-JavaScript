// 63. Получите доступ к myStorage объекту и присвойте содержимое свойства glove box переменной gloveBoxContents. По возможности используйте точечную запись для всех свойств, в противном случае используйте запись в скобках.


const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  const gloveBoxContents = myStorage.car.inside["glove box"];
  console.log(gloveBoxContents);
 
// Unit 17. Методы массивов: map, filter ( часть 1)
// Practic
"use struct"

let a = [1,4,8,12,16,32,64,128,256, -200,512];

let b = a.map(function(item, index){
  console.log(item);
  return item *5; // умножаем ячейки массива на 5
})

console.log(b);

let c = a.filter(function(item, index){
  if(item %2 == 0) {
    return true;
  }
  else {
    return false;
  }
});

console.log(c);
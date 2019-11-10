// Unit 18. Методы массивов: join, split, forEach ( часть 2)
// Practic
"use struct"

let str = 'Привет, я Оксана Орская, я сексуальная богиня твоей мечты,Дмитрий!';
console.log(str);
console.log(str.split(','));


let strArr = ['Привет', 'я Оксана Орская', 'мои ножки сведут тебя с ума', 'Димочка'];

console.log(strArr.join());

strArr.forEach(function(elem, index){
  console.log(elem + ' $');
  console.log(index);
});
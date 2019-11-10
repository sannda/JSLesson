// Unit 15. Set в JavaScript
// Set только для JS6
// Practic
"use struct"

let a = new Set();
a.add("Оксана");
a.add(28);
a.add("Оксана"); // не добавится никогда
a.add("28"); // добавится, как строчное значение
console.log(a);
console.log(a.has("Оксана")); // проверка на наличие элементов
// a.delete("28"); // удаление значения

for (let item of a) console.log(item);
for (let item of a.keys()) console.log(item);

//a.clear(); // очищаем Set
//console.log(a);

let arr = ['Оксана','Орская',28,2,28,2,'Орская']; // обычный массив

let b = new Set(arr);
console.log(b);
console.log(b.size);

let bArr = Array.from(b);
console.log(bArr);
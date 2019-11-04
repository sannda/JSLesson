// Unit 11. Добавление и удаление элементов в массиве, pop, push,splice
// Practic
"use struct"
// Создаем массивы
let a =[1,2,3,4,5,6,7,8,9];
let b =['a','b','c','d','e','f'];
console.log(a.length);
console.log(b.length);
// метод push
console.log(a.push(10)); // добавляем 10 в конце массива
console.log(a.push(11,12,13,14));
console.log(b.push('name','age','num','g'));

// вывод массива
console.log(a);
console.log(b);
console.log(a.length);
console.log(b.length);
// метод pop (убирает последний элемент)
a.pop();
b.pop();
// вывод массива
console.log(a);
console.log(b);
console.log(a.length);
console.log(b.length);

// удалить элемент массива
delete a[4];
delete b[2];
// вывод массива
console.log(a);
console.log(b);
console.log(a.length);
console.log(b.length);

// метод splice (реальное удаление)
a.splice(3,4, 'remove');
console.log(a);

// методы shift и unshift
a.shift();
console.log(a);
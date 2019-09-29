"use strict";
// Unit 1. Стартуем и пишем первую программу

// console.log('Орская Оксана'); // string
// console.log(11); // number
// console.log('Добро' + ' пожаловать' + ' на курс');
// console.log(2019-200);
// //
// let a = 12 *2;
// document.getElementById('one').innerHTML = 'Hello, Oksana Orskaya';
// document.getElementById('two').innerHTML = a;
// document.querySelector('span').innerHTML = 'world';
// document.querySelector('.three').innerHTML = '<h3>Header</h3>';
// document.querySelector('.four').innerHTML +='<h4>Hello, Oksana</h4> <p>My name Oksana Orskaya</p>';
// let y1 = 6;
// let y2 = 3;
// document.querySelector('.five').innerHTML = y1 / y2;
// let d2 = document.querySelector('.test-2');
// console.log(d2);
// d2 =5;
// console.log(d2);

// Unit 2. Основы ввода данных
//  Task 1 Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
let a = 7;
let b = 9;
console.log(a * b);
// Task 2 Создайте две переменные c = 7 и d = 9. Выведите на страницу результат деления c на d.
let c = 7;
let d = 9;
console.log(c / d);
// 
let e1 = '3';
let f1 = 5;
console.log(e1 + f1); // число
// 
let e2 = 3;
let f2 = 0;
console.log(e2 / f2);
// 
let e3 = 3;
let f3 = 'Hello';
console.log(e3 + f3);
//
let input1 = document.querySelector('#input-1');
let btn1 = document.querySelector('#btn1');
input1.value = ' ';
btn1.onclick = function () {
  console.log(input1.value);
}
//
let input2 = document.querySelector('#input-2');
let btn2 = document.querySelector('#btn2');
input2.value = ' ';
btn2.onclick = function () {
  console.log(input2.value * 10);
}
//
let input3 = document.querySelector('#input-3');
let input4 = document.querySelector('#input-4');
let btn3 = document.querySelector('#btn3');
input3.value = ' ';
input4.value = ' ';
btn3.onclick = function () {
  console.log('Привет' + '' + input3.value + '' + input4.value);
}
//
let input5 = document.querySelector('#input-5');
input5.value = 'Hello';
// console.log(input5);
//
let y = document.querySelector('#input-6');
y.style.border = '2px solid red';
// Task 17
let s = document.querySelector('#input-6');
let btnS = document.querySelector('#btn4');
s.value = '';
btnS.onclick = function () {
  let t = s.value;
  console.log(t);
  t = parseInt(t);
  console.log(t);
}
//
let num1 = document.querySelector('#inpNum-1').value;
let num2 = document.querySelector('#inpNum-2').value;
let button = document.querySelector('#btn5');
button.onclick = function () {
  console.log(+num1 * +num2);
}
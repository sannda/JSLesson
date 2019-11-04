// Урок 7. Функции и все о них
// Practic
"use struct"

function hello(){
  console.log('Hello, JavaScript');
}
hello(); // вызов функции

// button.onclick = name function
// работа с переменными
let a = 10;
let b = 12;

function multy(){
  return a * b; // возвращаем значение
}
let c1 = multy(); // присваиваем переменной имя функции
console.log(c1);

// Параметры
function multy2(x, y){
  return x * y;
  // код после return не работает
}
console.log(multy2(4,5));
console.log(multy2(4, a));

// 
function multy3(x = 12, y = 12) {
  return x * y;
}
console.log(multy3(20));

// Виды функций
// Анонимная функция
let btn1 = document.querySelector('.btn1')
btn1.onclick = function () {  
  console.log('Анонимная функция');
}

// Стрелочная функция
btn1.onclick =  () => {
  console.log('Стрелочная функция');
}

btn1.onclick = (a,b) => {
  console.log('Стрелочная функция с параметрами');
}

btn1.onclick = a => {
  console.log('Стрелочная функция с одним параметром');
}


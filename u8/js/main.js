// Unit 8. Цикл While, Do While
// Practic
"use struct"

for (let i = 0; i < 6; i++) {
  console.log(i);
}
console.log('########################');
// цикл while
let k = 0;
while (k < 5) {
  // отчет с единицы
  k++;
  console.log('k: ' + k);
}
console.log('########################');
//
let j = 0;
while (j < 5) {
  // отчет с нуля
  console.log('j: ' + j);
  j++;
}
console.log('########################');

// Сумма числе от нуля до 10
let summ = 0;
let p = 0;
while (p <= 10) {
  summ = summ + p;
  p++;
}
console.log('sum = ' + summ);
console.log('########################');
// Выводим фигуру
// ***
// ***
// ***
let out = document.querySelector('.out');
let x = 0;
let outStr = '';
while (x < 4) {
  let x1 = 0;
  while (x1 < 4) {
    outStr += '*';
    x1++;
  }
  outStr += '<br>';
  x++
}
out.innerHTML = outStr;
//
//
let out1 = document.querySelector('.out1');
let y = 0;
let outStr1 = '';
let flag = 3;

while (y < 4) {
  let y1 = 0;
  while (y1 < 4) {
    if (y1 < flag) {
      outStr1 += '#';
    } else {
      outStr1 += '*';
    }
    y1++;
  }
  flag--;
  outStr1 += '<br>';
  y++
}
out1.innerHTML = outStr1;
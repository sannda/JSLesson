// Unit 12. Двумерные массивы
// Practic
"use struct"
let a = ['Оксана', 28, 'Дева'];
let b = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(b);

// for (let i = 0; i < b.length; i++) {
//   console.log(b[i]); // выводим масив по строчно 
//   let c = b[i]; // переменная с это массив
//   // for (let k = 0; k < c.length; k++) { // массив правильном порядке
//   for (let k = c.length - 1; k >= 0; k--) { // массив в обратном порядке
//     console.log(c[k]); // вывели весь массив без разбивки
//   }
// }
// второй вариант вывода 
let out = '';
// for (let i = 0; i < b.length; i++) {
//   for (let k = 0; k < b[i].length; k++) { 
//     out += b[i][k] + ' ';
//   }
//   out += '<br>';
// }

// document.querySelector('.out0').innerHTML = out;

for (let i = 0; i < b.length; i++) {
  for (let k = 0; k < b[i].length; k++) {
    if (b[i][k] > 4) {
      out += b[i][k] + ' ';
    }
  }
  out += '<br>';
}

console.log(out);

// Двигаем единицу без циклов
let d = [1, 0, 0, 0, 0, 0];
document.querySelector('.out1').innerHTML = d;
let k = 0;
document.querySelector('button').onclick = () => {
  if (k + 1 <= 5) {
    d[k] = 0;
    d[k + 1] = 1;
    k++;
  }
  document.querySelector('.out1').innerHTML = d;
}
// Unit 6. Вложенные циклы в JavaScript (часть 2)
// Practic

// let out = document.querySelector('.out');

// for (let i = 0; i < 5; i++) {
//   // i = 0, далее 5 разх внутренний цикл k
//   for (let k = 0; k < 10; k++) {
//     // k =0
//     out.innerHTML += '*';
//   }
//   //
//   out.innerHTML += '/' + i + '/' + '<br>';
// }

// // таблица умножения на 2

// let out2 = document.querySelector('.out2');

// for (let i = 0; i < 10; i++) {
//   // out2.innerHTML += '2 * ' + i + ' = ' + (i * 2) + '<br>'; // первый вариант 
//   out2.innerHTML += `2 * ${i} = ${2 * i}<br>`;
// }

// // таблица умножения 

// let out3 = document.querySelector('.out3');

// for (let i = 1; i < 10; i++) {
//   // out2.innerHTML += '2 * ' + i + ' = ' + (i * 2) + '<br>'; // первый вариант 
//   // out2.innerHTML += `2 * ${i} = ${2 * i}<br>`;
//   for (let k = 1; k < 10; k++) {
//     out3.innerHTML += `${i}* ${k} = ${k * i}<br>`;
//   }
//   out3.innerHTML += '<hr>';
// }

// Task 1 

let out1 = document.querySelector('.out1');

for (let i = 0; i < 3; i++) {
  for (let k = 0; k < 3; k++) {
    out1.innerHTML += '*';
  }
  out1.innerHTML += '_';
}

// Task 2

let out2 = document.querySelector('.out2');
for (let i = 1; i <= 3; i++) {
  out2.innerHTML += i + '<br>';

  for (let k = 0; k < 3; k++) {
    out2.innerHTML += '*' + '_';
  }
  out2.innerHTML += '<br>';
}

// Task 4

let out3 = document.querySelector('.out3');

for (let i = 0; i < 5; i++) {
  out3.innerHTML += i + '_';
  for (let k = 5; k > 0; k--) {
    out3.innerHTML += k - i + "_";
    if (k > i) break;
  }

}
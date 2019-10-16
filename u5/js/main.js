"use strict";
// Unit 5. Циклы в JavaScript(часть 1)
// Practic
// for (let i =0; i < 5; i++){
//   console.log(i);
// }
// for (let i =5; i > 0; i--) {
//   console.log(i);
// }
// for (let i = 10; i > 0; i = i - 0.5) {
//   console.log(i);
// }
// for (let i = 0; i < 6; i++) {
//   console.log(i + ' и вывести 4');
//   if (i == 4) break;
//   console.log(i + ' ,а четверка тут не появится никогда' );
// }
// let div = document.querySelector('.one');
// let div = document.querySelectorAll('.one');
// console.log(div);

// for (let i =0; i < div.length; i++){
//   div[i].style.background = 'white';
//   div[i].style.borderRadius = '4px';
//   div[i].onclick = selectDiv;
// }

// function selectDiv(){
//   console.log('work');
// }

// let b = document.getElementsByClassName('one');
//   console.log(b);

// for( let i =0; i < b.length; i++){
//   b[i].style.color = 'red';
// }

// let rButtor = document.querySelector('#btn1').onclick =() => {
//   let r =document.querySelectorAll('input[type="radio"]');
//   // console.log(r);
//   for( let i =0; i < r.length; i++){
//     if(r[i].checked){
//       console.log(r[i].value);
//     }
//   }
// }

// Task 1
let out1 = document.querySelector('.out-1');
for (let i = 1; i <= 10; i++) {
  out1.innerHTML += i + ' ';
}
// Task 3
let out2 = '';
for (let i = 10; i > 0; i--) {
  out2 += i + ' ';
}
document.querySelector('.out-2').innerHTML = out2;

// Task 4
let out3 = '';
for (let i = 0; i < 10; i = i + 2) {
  out3 += i + ' ';
}
document.querySelector('.out-3').innerHTML = out3;

// Task 5
let out4 = '';
for (let i = 0; i < 21; i = i + 3) {
  out4 += i + ' ';
}
document.querySelector('.out-4').innerHTML = out4;

// Task 7
document.querySelector('#btn1').onclick = function () {
  let in1 = document.querySelector('#in1');
  let tmpOut = '';
  for (let i = in1.value; i >= 0; i--) {
    tmpOut += i + ' ';
  }
  document.querySelector('#lb1').innerHTML = tmpOut;
}

let divOut = document.querySelectorAll('.div-1');
console.log(divOut.length);
document.querySelector('.divO').innerHTML = divOut.length;
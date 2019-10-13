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
let div = document.querySelectorAll('.one');
console.log(div);

for (let i =0; i < div.length; i++){
  div[i].style.background = 'white';
  div[i].style.borderRadius = '4px';
  div[i].onclick = selectDiv;
}

function selectDiv(){
  console.log('work');
}

let b = document.getElementsByClassName('one');
  console.log(b);

for( let i =0; i < b.length; i++){
  b[i].style.color = 'red';
}

let rButtor = document.querySelector('#btn1').onclick =() => {
  let r =document.querySelectorAll('input[type="radio"]');
  // console.log(r);
  for( let i =0; i < r.length; i++){
    if(r[i].checked){
      console.log(r[i].value);
    }
  }
}

// Task 1
let out = document.querySelector('.output');
for (let i = 0; i < 10; i++) {
  out.innerHTML += i + ' ';
}
// Unit 16. Перебор массивов: for, for in, for of 
// Practic
"use struct"

let arr = [4, 7, 9]; // массив

// переборы
// 1 ###################
//for (let i = 0; i < arr.length; i++) {
//  console.log(arr[i]);
// }
// document.querySelector('.out0').innerHTML = arr;
// 2 ###################
// for (let key in arr) {
//   document.querySelector('.out0').innerHTML += arr[key];
// }

// 3 ###################
// for(let key of arr){
//     document.querySelector('.out0').innerHTML += key; 
// }

let par = document.getElementsByTagName('p'); // коллекция
let par1 =document.querySelectorAll('p');
console.log(par);
console.log(par1);

// for (let i = 0; i < par.length; i++) {
//   console.log(par[i]);
// }
// console.log('for')
// for (let key in par) {
//   console.log(par[key]);
// }
// console.log('for...in')
// for(let key of par){
//     console.log(key);
// }
// console.log('for...of');
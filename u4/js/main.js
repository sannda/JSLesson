"use strict";
// Unit 4. Работаем с формами: input, range, textarea, checkbox...
// text value
// document.querySelector('#b1').onclick = function () {
//   console.log(document.querySelector('#one').value);
// }
// // color
// document.querySelector('#b2').onclick = function () {
//   document.querySelector('#b1').style.backgroundColor = document.querySelector('#two').value
// }
// // date
// document.querySelector('#b3').onclick = function () {
//   console.log(document.querySelector('#tree').value);
// }
// // range
// document.querySelector('#four').oninput = function () {
//   // console.log(document.querySelector('#four').value);
//   document.querySelector('span').innerHTML = document.querySelector('#four').value;
// }
// // checkbox
// document.querySelector('#b4').onclick = () => {
//   console.log(document.querySelector('#i1').value);
//   let myChBox = document.querySelector('#i1');
//   if (myChBox.checked) {
//     console.log('Yes');
//   } else {
//     console.log('No');
//   }
// }
// // 
// document.querySelector('#bn1').onclick = function (event) {
//   event.preventDefault();
//   let ta1 = document.querySelector('#ta1');
//   console.log(ta1.value);
//   ta1.value = "textarea";
//   let form = document.querySelector('form');
//   console.log(form);
//   console.log(form.elements.ta1.value);
//   console.log(form.elements.in1.value);
//   }
// Task 1
document.querySelector('#btn1').onclick = function () {
  alert('Task1');
}
// Task 2
document.querySelector("#inputBtn").onclick = function () {
  alert('Task2');
}
// Task 3
document.querySelector('p').onclick = function () {
  alert('Task3');
}
// Task 4
document.querySelector('#btn2').onclick = function () {
  let chkBox = document.querySelector('#chkBox');
  if (chkBox.checked) {
    alert('checked');
  } else {
    alert('no checked');
  }
}
// Task 5
document.querySelector('#btn3').onclick = function () {
  let chkBox1 = document.querySelector('#chkBox1');
  if (chkBox1.checked) {
    alert(chkBox1.value);
  } else {
    alert('Not checked');
  }
}
// Task 7
document.querySelector('#btn4').onclick = function () {
  let pass = document.querySelector('#pass');
  let x = 'Svetlana';
  console.log(pass.value);
  console.log(x.length);
  if (pass.value.length < 6) {
    console.log(pass.value + ' меньше шести');
  }
}
// Task 8
document.querySelector('#btn5').onclick = function () {
  let div = document.querySelector('.div').innerHTML = '<input type="text" id="newInput"><button id="btn6">New button</button>';
  let newBtn = document.querySelector('#btn6');
  let newInput = document.querySelector('#newInput');
  newBtn.onclick = function () {
    alert(newInput.value);
  }
}
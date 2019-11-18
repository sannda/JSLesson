// Unit 19. События клавиатуры в JavaScript
// Practic
"use struct"
document.querySelector('.i-1').oninput = function (event) {
  console.log(event);
} // события изменения pnut

document.querySelector('.i-1').onkeypress = function (event) {
  console.log('keypress')
  console.log('charCode: ' + event.charCode);
  console.log('code: ' + event.code);
  // console.log(event);
} // события изменения при работте с keyboard (для букв и цифр)

document.querySelector('.i-1').onkeydown = function (event) {
  console.log('keydown')
  console.log('charCode: ' + event.charCode);
  console.log('code: ' + event.code);
  // console.log(event);
if(event.code == 'CapsLock'){
  document.querySelector('.ch-1').checked =true;
} else {
  document.querySelector('.ch-1').checked =false;
}
} // события изменения при работте с keyboard (включая функциональные клавиши)

document.querySelector('.i-1').onkeyup = function (event) {
  console.log('keyup')
  console.log('charCode: ' + event.charCode);
  console.log('code: ' + event.code);
  // console.log(event);
} // события изменения при работте с keyboard (включая функциональные клавиши)

document.querySelector('.i-2').onkeypress = function (event) {
  console.log('charCode: ' + event.charCode);
  console.log('code: ' + event.code);
  let a = {
    q: 'Оксана',
    w : 'Орская'
  }
document.querySelector('.i-2').value = a[event.key];
return false;

} // события изменения при работте с keyboard (для букв и цифр)
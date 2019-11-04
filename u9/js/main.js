// Unit 9. Работаем с DOM
// Practic
"use struct"

let one = document.querySelector('.one');
let toggle = document.querySelector('.toggle');
// one.style.width = '100px';
one.style.paddingLeft = '25px'; // camelCase

//console.log(one.style);

one.classList.add('two'); // добавляем класс к элементу
one.classList.add('two', 'three'); // добавляем классы к элементу
one.classList.remove('two'); // убираем класс от элемента

toggle.onclick = function () {
  this.classList.toggle('three');
}

// Пробуем менять фотографию
let imgOne = document.querySelector('.imgOne');
let imgTwo = document.querySelector('.imgTwo');
let btnChange = document.querySelector('.change');

btnChange.onclick = function () {
  imgTwo.src = "img/logo5.jpg";
}

// получаем атрибуты
console.log(imgTwo.getAttribute('data-img'));
console.log(document.querySelector('.imgOne').getAttribute('src'));

// создаем атрибуты
imgOne.setAttribute('data-img', 'off');

// Задача с бензином
let gas = document.querySelectorAll('.gas');
for (let i = 0; i < gas.length; i++) {
  gas[i].onclick = function(){
    let gallons = document.querySelector('.gallons').value;
    let amout = this.getAttribute('data-type');
    console.log(gallons * amout);
  }
}
// создаем div
let a = document.createElement('img');
a.classList.add('imgTree');
a.setAttribute('data-img', 'on');
a.src = "img/logo6.jpg";
a.style.width = '256px';

document.querySelector('.out2').appendChild(a);

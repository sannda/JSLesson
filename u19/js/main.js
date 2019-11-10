// Unit 19. События мыши в JavaScript
// Practic
"use struct"

document.querySelector('.one').onclick = function (event) {
  console.log(event);
  console.log('click1');
}

document.querySelector('.two').ondblclick = function (event) {
  console.log('double click');
}

document.querySelector('.two').oncontextmenu = function (event) {
  console.log('context menu');
  return false;
}

let width = 100;
document.querySelector('.three').onmousemove = function (event) {
  document.querySelector('.three').style.width = width + 'px';
  width++;
}

document.querySelector('.four').onmouseenter = function (event) {
  document.querySelector('.four').style.background = 'yellow';
}

document.querySelector('.four').onmouseleave = function (event) {
  document.querySelector('.four').style.background = 'red';
}

document.querySelector('.four').onmousedown = function (event) {
  document.querySelector('.four').style.background = 'orange';
}

document.querySelector('.four').onmouseup = function (event) {
  document.querySelector('.four').style.background = 'blue';
}


let val =10;
document.querySelector('button').onclick = function (event) {
  val++;
  document.querySelector('progress').value = val;

}
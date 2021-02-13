const btn = document.querySelector('button');
let liList = document.querySelectorAll('li');

let size = 10;
let numer = 1;

const addNewElement = function() {
  for(let i = 0; i < 4;i++) {
    const newElement = document.createElement('li');
    newElement.innerHTML = `element ${numer}`;
    newElement.style.fontSize = `${size}px`;
    document.querySelector('ul').appendChild(newElement);
    size++; numer++;
  }
}

btn.addEventListener('click', addNewElement);
const h1 = document.querySelector('h1');

const newColor = function (e) {
  let x = e.clientX;
  let y = e.clientY;
  const width = window.innerWidth;
  const height = window.innerHeight;
  h1.textContent = x + ', ' + y;
  document.body.style.backgroundColor = `rgb(${((x + 1)/width) * 255}, ${((y+1)/height)*255}, 0)`;
}

document.body.addEventListener('click', newColor);
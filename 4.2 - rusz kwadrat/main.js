let red = 100 ;
let green = 100 ;
let blue = 100 ;


document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
function changeColor (e) {
  if(e.keyCode < 39) {
    red+=2;
    green+=2;
    blue+=2;
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
  }
  else{
    red-=2;
    green-=2;
    blue-=2;
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
  }
}

function changeColorSwitch (e) {
  switch(e.keyCode) {
    case 40:
      red-=2;
      green-=2;
      blue-=2;
      document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
      break;
    case 38:
      red+=2;
      green+=2;
      blue+=2;
      document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
      break;
  }
}


// document.body.addEventListener('keydown', changeColor);
document.body.addEventListener('keydown', changeColorSwitch);
document.body.addEventListener('click', cord)
function cord (e) {
  console.log(e.clientX, e.clientY);
  if (e.clientX % 2 == 0 && e.clientY % 2 == 0) {
    console.log('oba parz');
    document.body.style.backgroundColor = 'red';
  }
  else if (e.clientX % 2 == 0 && e.clientY % 2 != 0 || e.clientX % 2 != 0 && e.clientY % 2 == 0) {
    console.log('jedno parz');
    document.body.style.backgroundColor = 'blue';
  }
  else if (e.clientX % 2 != 0 && e.clientY % 2 != 0) {
    console.log('żadne parz');
    document.body.style.backgroundColor = 'green';
  }
};
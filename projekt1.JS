const add = document.querySelector('button');
const clear = document.querySelector('.clear');

let number = 1

const addItem = function() {
  activeNumber = number++;
  if (activeNumber%5 == 0) {
    const newThing = document.createElement("div");
    newThing.className = 'five';
    newThing.textContent = `${activeNumber}`;
    document.querySelector('body').appendChild(newThing);

  }
  else {
    console.log("guzik działa");
    const newThing = document.createElement("div");
    newThing.className = 'notFive';
    newThing.textContent = `${activeNumber}`;
    document.querySelector('body').appendChild(newThing);
  };
   
  
};

add.addEventListener("click", addItem);
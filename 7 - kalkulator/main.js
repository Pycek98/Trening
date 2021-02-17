const btnWithNumber = document.querySelectorAll('.number');
const btnWithOperation = document.querySelectorAll(".operation");
const btnWithClear = document.querySelector(".clear");
const btnWithDelete = document.querySelector(".delete");
const btnWithSumm = document.querySelector(".summarise");
const previousActionValue = document.querySelector(".previousAction");
const currentActionValue = document.querySelector(".currentAction");

// Początkowe wartości poprzedniej i obecnaj akcji.
let previousValue = "";
let currentValue = "";
let operation = undefined;

// Po wybranej cyfrze, pchamy ją do "currentValue"
const refreshSumm = () => {
  currentActionValue.innerText = currentValue ;
  previousActionValue.innerText = previousValue ;
};

// Wstawianie symbolu operacji
btnWithOperation.forEach((btn)=>{
  btn.addEventListener("click", ()=>{
    operation = btn.textContent.toString()
    previousValue = currentValue.toString() + " " + operation;
    currentValue = "";
    refreshSumm()
  })
});

// Wstawianie liczby
btnWithNumber.forEach((btn) => {
  btn.addEventListener("click", ()=>{
    if(btn.innerText === "."){
      if(currentValue.includes(".")){
        return
      }
    }
    currentValue = currentValue.toString() + btn.innerText.toString()
    refreshSumm()

  })
});

btnWithClear.addEventListener("click", () =>{
  previousValue = "";
  currentValue = "";
  refreshSumm()
});

btnWithDelete.addEventListener("click", ()=>{
  currentValue = currentValue.toString().slice(0, -1);
  refreshSumm()
})

const count = () => {
  let action
  if(!currentValue || !previousValue) {
    return
  }
  let previous = parseFloat(previousValue);
  let current = parseFloat(currentValue);

  if(isNaN(previous) || isNaN(current)) {
    return
  }

  

  switch(operation) {
    case '+':
      action = previous + current
      break;
    
    case '-':
      action = previous - current
      break;
    
    case '/':
      action = previous / current
      break;

    case '×':
      action = previous * current
      break;
    default:
      return
  }

  if(operation = "/" && currentValue == "0") {
    currentValue = "Nieładnie! ;)"
    return
  }

  currentValue = action;
  operation = undefined;
  previousValue = "";

}

btnWithSumm.addEventListener('click', ()=>{
  count()
  refreshSumm()
});











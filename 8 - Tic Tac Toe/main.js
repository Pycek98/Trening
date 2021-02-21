const resetBtn = document.querySelector(".restart");
const gameCells = document.querySelectorAll(".gridCell");
const turnSign = document.querySelector("#turnSpan");
turnSign.innerText = "X"

let reloadFlag = false;
let flagTurn = true;


gameCells.forEach(gameCell => {
    gameCell.addEventListener("click", ()=>{
        if(gameCell.innerText == ""){
            if(flagTurn){
                gameCell.innerText = "X";
                turnSign.innerText = "O";
                flagTurn = !flagTurn;
            }
            else {
                gameCell.innerText = "O";
                turnSign.innerText = "X";
                flagTurn = !flagTurn;
            }
        }
        else {
            alert("Wybierz wolne pole!")
        }
    })
    
});













resetBtn.addEventListener("click", () => {
    reloadFlag = true
    if (reloadFlag) {
        location.reload()
    }
});




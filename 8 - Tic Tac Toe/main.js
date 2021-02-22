// Stałe, zmienne, elementy.
const resetBtn = document.querySelector(".restart");
const gameCells = document.querySelectorAll(".gridCell");
const turnSign = document.querySelector("#turnSpan");
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
let reloadFlag = false;
let flagTurn = true;
gameCellsValue = ["", "", "", "", "", "", "", "", ""];
let ifGameEnd = false;

// Funkcja określająca turę i zawartość komunikatu ew wygranej.

function whosTurn () {
    if (flagTurn){
        turnSign.innerText = "O" ;
    }
    else {
        turnSign.innerText = "X" ;
    }
};

// Funkcja zmieniająca rundę.

function turn() {
    flagTurn = !flagTurn;
    whosTurn();
};

// Blokowanie komórek

function block() {
    gameCells.forEach((cell)=>{
        cell.style.pointerEvents = "none";
    })
};

// Sprawdzamy, czy gracz wygrał.

function ifWin() {
    if(gameCellsValue[0]==gameCellsValue[1]&&gameCellsValue[1]==gameCellsValue[2]&&gameCellsValue[2]!= ""){
        ifGameEnd = true;
    }
    if(gameCellsValue[3]==gameCellsValue[4]&&gameCellsValue[4]==gameCellsValue[5]&&gameCellsValue[5]!= ""){
        ifGameEnd = true;
    }
    if(gameCellsValue[6]==gameCellsValue[7]&&gameCellsValue[7]==gameCellsValue[8]&&gameCellsValue[8]!= ""){
        ifGameEnd = true;
    }
    if(gameCellsValue[0]==gameCellsValue[3]&&gameCellsValue[3]==gameCellsValue[6]&&gameCellsValue[6]!= ""){
        ifGameEnd = true;
    }
    if(gameCellsValue[1]==gameCellsValue[4]&&gameCellsValue[4]==gameCellsValue[7]&&gameCellsValue[7]!= ""){
        ifGameEnd = true;
    }
    if(gameCellsValue[2]==gameCellsValue[5]&&gameCellsValue[5]==gameCellsValue[8]&&gameCellsValue[8]!= ""){
        ifGameEnd = true;
    }
    if(gameCellsValue[0]==gameCellsValue[4]&&gameCellsValue[4]==gameCellsValue[8]&&gameCellsValue[8]!= ""){
        ifGameEnd = true;
    }
    if(gameCellsValue[6]==gameCellsValue[4]&&gameCellsValue[4]==gameCellsValue[2]&&gameCellsValue[2]!= ""){
        ifGameEnd = true;
    }
};

// Na kliknięcie dodajemy O i X oraz używamy ifWin(); .
gameCells.forEach((cell, i) => {
    cell.addEventListener("click", ()=>{
        if(cell.innerText==""){
            if (flagTurn) {
                turnSign.innerText = "O";
                cell.innerText = turnSign.innerText;
                gameCellsValue[i] = turnSign.innerText;
            }
            else {
                turnSign.innerText = "X";
                cell.innerText = turnSign.innerText;
                gameCellsValue[i] = turnSign.innerText;
            }
            ifWin();
            if(ifGameEnd){
                h1.innerText = `Player ${turnSign.innerText} wins!`;
                h1.style.fontSize = "60px";
                p.innerText = "Game Over!";
                block();
            }
            else{
            turn();
            }
        }
    })
    
});

// Guzik Restart.

resetBtn.addEventListener("click", () => {
    reloadFlag = true
    if (reloadFlag) {
        location.reload()
    }
});




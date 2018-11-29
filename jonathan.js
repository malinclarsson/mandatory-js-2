//======== deklarera ========//
let player = "x";
let numberX = 0; // poäng för X
let numberO = 0; // poäng för O
let turn = 0;
let winner = document.querySelector("#winner");
let scoreForX = document.querySelector("#scoreX");
let scoreForO = document.querySelector("#scoreO");
let buttonTiles = document.querySelectorAll(".buttonTile");




//======== gå igenom alla knappar. OM de trycks på...  ========//
function addEvent(buttonTiles){ // functionen lägger till evenlyssnare på alla kanppar
    for(let i in buttonTiles){
        buttonTiles[i] = document.addEventListener("click", addTile);
    }
}
addEvent(buttonTiles);




//======== OM det är Player 1s tur (och rutan är tom) ========//
function addTile(e){
    if( player === "x" && e.target.textContent === ""){ // ändrar vilken symbol som sätts ut
        e.target.textContent = "x";
        player = "o";
        ++turn  // varje gång if satsen körs pluusa turn med 1, när turn är 9 körs if satsen som kollar ifall matchen är lika.
    }

    else if (player === "o" && e.target.textContent === ""){
        e.target.textContent ="o";
        player = "x";
        ++turn
    }

    if(turn === 9 && winner.textContent ==="Tic Tac Toe"){ //kollar om matchen är lika
        winner.textContent = "Tie";
    }

    for(let i = 0; i<buttonTiles.length; i++){ // hela loopen innehåller alla win-conditions
        if(buttonTiles[0].textContent==="x" && buttonTiles[1].textContent==="x" && buttonTiles[2].textContent==="x" || buttonTiles[0].textContent==="o" && buttonTiles[1].textContent==="o" && buttonTiles[2].textContent==="o" ){
            if(buttonTiles[0].textContent ==="x"){ // körs ifall X vann
                 ++numberX;
                scoreForX.textContent = "X-" + numberX
                winner.textContent = "X WON!!";
                removeEvent(buttonTiles);   // kör functionen som tar bort alla eventlyssnare
                break;
            }
            else{ // körs ifall O vann
                 ++numberO;
                scoreForO.textContent = "O-" + numberO
                winner.textContent = "O WON!!";
                removeEvent(buttonTiles);
                break;
            }
        }
        else if(buttonTiles[3].textContent==="x" && buttonTiles[4].textContent==="x" && buttonTiles[5].textContent==="x" || buttonTiles[3].textContent==="o" && buttonTiles[4].textContent==="o" && buttonTiles[5].textContent==="o" ){
            if(buttonTiles[3].textContent ==="x"){
                 ++numberX;
                scoreForX.textContent = "X-" + numberX
                winner.textContent = "X WON!!";
                removeEvent(buttonTiles);
                break;
            }
            else{
                 ++numberO;
                scoreForO.textContent = "O-" + numberO
                winner.textContent = "O WON!!";
                removeEvent(buttonTiles);
                break;
            }
        }
        else if(buttonTiles[6].textContent==="x" && buttonTiles[7].textContent==="x" && buttonTiles[8].textContent==="x" || buttonTiles[6].textContent==="o" && buttonTiles[7].textContent==="o" && buttonTiles[8].textContent==="o" ){
            if(buttonTiles[6].textContent ==="x"){
                 ++numberX;
                scoreForX.textContent = "X-" + numberX
                winner.textContent = "X WON!!";
                removeEvent(buttonTiles);
                break;
            }
            else{
                 ++numberO;
                scoreForO.textContent = "O-" + numberO
                winner.textContent = "O WON!!";
                removeEvent(buttonTiles);
                break;
            }
        }
        else if(buttonTiles[0].textContent==="x" && buttonTiles[3].textContent==="x" && buttonTiles[6].textContent==="x" || buttonTiles[0].textContent==="o" && buttonTiles[3].textContent==="o" && buttonTiles[6].textContent==="o" ){
            if(buttonTiles[0].textContent ==="x"){
                 ++numberX;
                scoreForX.textContent = "X-" + numberX
                winner.textContent = "X WON!!";
                removeEvent(buttonTiles);
                break;
            }
            else{
                 ++numberO;
                scoreForO.textContent = "O-" + numberO
                winner.textContent = "O WON!!";
                removeEvent(buttonTiles);
                break;
            }
        }
        else if(buttonTiles[1].textContent==="x" && buttonTiles[4].textContent==="x" && buttonTiles[7].textContent==="x" || buttonTiles[1].textContent==="o" && buttonTiles[4].textContent==="o" && buttonTiles[7].textContent==="o" ){
            if(buttonTiles[1].textContent ==="x"){
                 ++numberX;
                scoreForX.textContent = "X-" + numberX
                winner.textContent = "X WON!!";
                removeEvent(buttonTiles);
                break;
            }
            else{
                 ++numberO;
                scoreForO.textContent = "O-" + numberO
                winner.textContent = "O WON!!";
                removeEvent(buttonTiles);
                break;
            }
        }
        else if(buttonTiles[2].textContent==="x" && buttonTiles[5].textContent==="x" && buttonTiles[8].textContent==="x" || buttonTiles[2].textContent==="o" && buttonTiles[5].textContent==="o" && buttonTiles[8].textContent==="o" ){
            if(buttonTiles[2].textContent ==="x"){
                 ++numberX;
                scoreForX.textContent = "X-" + numberX
                winner.textContent = "X WON!!";
                removeEvent(buttonTiles);
                break;
            }
            else{
                 ++numberO;
                scoreForO.textContent = "O-" + numberO
                winner.textContent = "O WON!!";
                removeEvent(buttonTiles);
                break;
            }
        }
        else if(buttonTiles[0].textContent==="x" && buttonTiles[4].textContent==="x" && buttonTiles[8].textContent==="x" || buttonTiles[0].textContent==="o" && buttonTiles[4].textContent==="o" && buttonTiles[8].textContent==="o" ){
            if(buttonTiles[0].textContent ==="x"){
                 ++numberX;
                scoreForX.textContent = "X-" + numberX
                winner.textContent = "X WON!!";
                removeEvent(buttonTiles);
                break;
            }
            else{
                 ++numberO;
                scoreForO.textContent = "O-" + numberO
                winner.textContent = "O WON!!";
                removeEvent(buttonTiles);
                break;
            }
        }
        else if(buttonTiles[2].textContent==="x" && buttonTiles[4].textContent==="x" && buttonTiles[6].textContent==="x" || buttonTiles[2].textContent==="o" && buttonTiles[4].textContent==="o" && buttonTiles[6].textContent==="o" ){
            if(buttonTiles[2].textContent ==="x"){
                 ++numberX;
                scoreForX.textContent = "X-" + numberX
                winner.textContent = "X WON!!";
                removeEvent(buttonTiles);
                break;
            }
            else{
                 ++numberO;
                scoreForO.textContent = "O-" + numberO
                winner.textContent = "O WON!!";
                removeEvent(buttonTiles);
                break;
            }
        }
    }
}

function removeEvent(buttonTiles){// functionen tar bort evenlyssnaren på alla kanppar
    for(let i in buttonTiles){
        buttonTiles[i] = document.removeEventListener("click", addTile);
    }
}

function clearBoard(){ // restart
 for(let i = 0; i < buttonTiles.length; i++){
     buttonTiles[i].textContent = "";
        addEvent(buttonTiles);
        player = "x";
        turn = 0;
        winner.textContent = "Tic Tac Toe";
    }
}
let restartButton = document.querySelector("#restartButton");
restartButton.addEventListener("click", clearBoard);

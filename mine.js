//======== deklarera variabler ========//
let board = $(".container");
let a1 = $('#A1');
let a2 = $('#A2');
let a3 = $('#A3');
let b1 = $('#B1');
let b2 = $('#B2');
let b3 = $('#B3');
let c1 = $('#C1');
let c2 = $('#C2');
let c3 = $('#C3');

let turns = 0; // av nio möjliga
let winner = false; // false by defult

let playerOne = $('#playerOne');
let playerTwo = $('#playerTwo');
playerOne = true; // Player One/X börjar
playerTwo = false;

let clicked; // knappen som klickas på
let message = $("h2"); //vinnar-meddelande
let reset = $("#restartButton"); // new game

//======== loopa igenom alla knappar. OM de trycks på...  ========//
    for(let i = 0; i < board.length; i++){
        board[i].addEventListener("click", addMarker); //OM en knapp trycks på
    }

//======== OM det är Player 1s tur (och OM rutan är tom) ========//
function addMarker(e){
  if(winner !== "true") {
      clicked = e.target;

      if(clicked.value !=="O" && clicked.value !=="X") {

        if( playerOne === true){
            clicked.value = "X";
            playerTwo = true;
            playerOne = false;
              console.log("X");
            ++turns;
        }
    //======== OM det är Player 2s tur (och rutan är tom) ========//
        else if (playerTwo === true){
            clicked.value = "O";
            playerOne = true;
            playerTwo = false;
            ++turns;
            console.log("O");
        }
    //======== OM det har gått 9 drag utan en vinnare = oavgjort ========//
        if(turns === 9 && winner === false){ //kollar om matchen är lika
            winner.textContent = "TIE";
            console.log("TIE");
        }
      }
    }
  }

//======== WIN! - combos  ========//
//for(let i = 0; i < board.length; i++){ // loopar igenom brädet
    if( a1.val()==="X" && a2.val()==="X" && a3.val()==="X" || b1.value==="X" && b2.value==="X" && b3.value==="X" || c1.value==="X" && c2.value==="X" && c3.value==="X" || a1.value==="X" && b1.value==="X" && c1.value==="X" || a2.value==="X" && b2.value==="X" && c2.value==="X" || a3.value==="X" && b3.value==="X" && c3.value==="X" || a1.value==="X" && b2.value==="X" && c3.value==="X" || a3.value==="X" && b2.value==="X" && c1.value==="X") {
         message.textContent = "WINNER: Player One!";
         turns = 0;
         winnner = true;
         //break;

    } else {
        a1.value==="O" && a2.value==="O" && a3.value==="O" || b1.value==="O" && b2.value==="O" && b3.value==="O" || c1.value==="O" && c2.value==="O" && c3.value==="O" || a1.value==="O" && b1.value==="O" && c1.value==="O" || a2.value==="O" && b2.value==="O" && c2.value==="O" || a3.value==="O" && b3.value==="O" && c3.value==="O" || a1.value==="O" && b2.value==="O" && c3.value==="O" || a3.value==="O" && b2.value==="O" && c1.value==="O"; {
         message.textContent = "WINNER: Player Two!";
         turns = 0;
         winnner = true;
         //break;
    }
  }
//}

//======== Töm brädet ========//
function resetBoard() {

}
//======== starta om ========//

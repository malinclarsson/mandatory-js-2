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

let turns = 0;
let winner = false;

let playerOne = $('#playerOne');
let playerOneScore = 0;
let playerTwo = $('#playerTwo');
let playerTwoScore = 0;
let player = "player1";

let clicked;
let message = $("h2");
let reset = $("#restartButton");

//======== loopa igenom alla knappar. OM de trycks på...  ========//
$(".container > input").on("click", addMarker);

//======== OM det är Player 1s tur (och OM rutan är tom) ========//
function addMarker(e){
 if (winner !== "true" && turns < 9) {
  clicked = e.target;
  message.text("");

  if (clicked.value !=="O" && clicked.value !=="X") {

   if (player === "player1"){
    clicked.value = "X";
    player = "player2"; // HÄR
    console.log("X");
    turns++;
    checkWinner();
   }
   //======== OM det är Player 2s tur (och rutan är tom) ========//
   else if (player === "player2"){
    clicked.value = "O";
    player = "player1";
    turns++;
    console.log("O");
    checkWinner();
   }
   //======== OM det har gått 9 drag utan en vinnare = oavgjort ========//
   if (turns === 9 && winner === false) { //kollar det blev oavgjort
    winner.textContent = "TIE";
    console.log("TIE");
   }
  }
 }
}

//======== winning combos  ========//
function checkWinner() {
 if( a1.val() ==="X" && a2.val() ==="X" && a3.val() === "X"
    || b1.val() ==="X" && b2.val() ==="X" && b3.val() ==="X"
    || c1.val() ==="X" && c2.val() ==="X" && c3.val() ==="X"
    || a1.val() ==="X" && b1.val() ==="X" && c1.val() ==="X"
    || a2.val() ==="X" && b2.val() ==="X" && c2.val() ==="X"
    || a3.val() ==="X" && b3.val() ==="X" && c3.val() ==="X"
    || a1.val() ==="X" && b2.val() ==="X" && c3.val() ==="X"
    || a3.val() ==="X" && b2.val() ==="X" && c1.val() ==="X") {
  console.log("Winner 1");
  message.text("WINNER: Player One!");
  turns = 9;
  winner = true;
  playerOneScore++;
  playerOne.text(playerOneScore);

 } else if (a1.val()==="O" && a2.val()==="O" && a3.val()==="O"
            || b1.val()==="O" && b2.val()==="O" && b3.val()==="O"
            || c1.val()==="O" && c2.val()==="O" && c3.val()==="O"
            || a1.val()==="O" && b1.val()==="O" && c1.val()==="O"
            || a2.val()==="O" && b2.val()==="O" && c2.val()==="O"
            || a3.val()==="O" && b3.val()==="O" && c3.val()==="O"
            || a1.val()==="O" && b2.val()==="O" && c3.val()==="O"
            || a3.val()==="O" && b2.val()==="O" && c1.val()==="O") {
  console.log("Winner 2");
  message.text("WINNER: Player Two!");
  turns = 9;
  winner = true;
  playerTwoScore++;
  playerTwo.text(playerTwoScore);
 }
}

//======== töm brädet och starta om ========//
function resetBoard() {
 let inputs = $(".container > input");

 // Loopa igenom och sätta value till tomt
 for (let each of inputs) {
  each.value = "";
 }

 // Sätta variabler till standard
 winner = false;
 turns = 0;
 player = "player1";
 message.text("Again?");
}

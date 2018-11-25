//---  gaming board ---//  //behöver jag göra en för X/röd och en för O/blå?
let A1 = document.querySelector('#A1');
let A2 = document.querySelector('#A2');
let A3 = document.querySelector('#A3');
let B1 = document.querySelector('#B1');
let B2 = document.querySelector('#B2');
let B3 = document.querySelector('#B3');
let C1 = document.querySelector('#C1');
let C2 = document.querySelector('#C2');
let C3 = document.querySelector('#C3');


//---  scoreboard ---//  <-- fix below
let playerOne = document.querySelector('#playerOne');
let playerTwo = document.querySelector('#playerTwo');

//--- who starts? ---//
function whoStarts() {
  let chooseX = document.querySelector('#chooseX');
  let chooseO = document.querySelector('#chooseO');

  if (chooseX !== undefined) { // om X kryssas i
      chooseX = true; // red // X börjar
      chooseO = false; // blue

  } else (chooseO !== undefined); { //Om O kryssas i
      chooseO = true; // blue // O startar
      chooseX = false; // red
    }
}
//--- players turn ---//
function checkIfBox(e) {
let box = e.target;

  if (playerOneTurn === true){ // om det är X's tur
    if (e.target === undefined) { // är boxen tom?
      box.textcontent = "X"; // placera ett X
      playerOneTurn = false; // inte längre Player One's tur
      playerTwoTurn = true; // Player Two's tur
    } else (e.target !== undefined); {
      // do nothing
    }
  } else if (playerTwoTurn === true){ // om det är O's tur
    if (e.target === undefined) { // om boxen är tom?
      box.textcontent = "O"; // placera ett O
      playerTwoTurn = false; // inte längre Player Two's tur
      playerOneTurn = true; // Player One's tur
    } else (e.target !== undefined);{
      // do nothing
    }
  }
}


//---  combinations ---//  <-- fix below
//- X = red -//
let redWin1 = $("#A1.red, #A2.red, #A3.red").length === 3;
/* [X][X][X]
   [ ][ ][ ]
   [ ][ ][ ] */
let redWin2 = $("#B1.red, #B2.red, #B3.red").length === 3;
/* [ ][ ][ ]
   [X][X][X]
   [ ][ ][ ] */
let redWin3 = $("#C1.red, #C2.red, #C3.red").length === 3;
/* [ ][ ][ ]
   [ ][ ][ ]
   [X][X][X] */
let redWin4 = $("#A1.red, #B1.red, #C1.red").length === 3;
/* [X][ ][ ]
   [X][ ][ ]
   [X][ ][ ] */
let redWin5 = $("#A2.red, #B2.red, #C2.red").length === 3;
/* [ ][X][ ]
   [ ][X][ ]
   [ ][X][ ] */
let redWin6 = $("#A3.red, #B3.red, #C3.red").length === 3;
/* [ ][ ][X]
   [ ][ ][X]
   [ ][ ][X] */
let redWin7 = $("#A3.red, #B2.red, #C1.red").length === 3;
/* [ ][ ][X]
   [ ][X][ ]
   [X][ ][ ] */
let redWin8 = $("#A1.red, #B2.red, #C3.red").length === 3;
/* [X][ ][ ]
   [ ][X][ ]
   [ ][ ][X] */

//- O = blue -//
let blueWin1 = $("#A1.blue, #A2.blue, #A3.blue").length === 3;
/* [X][X][X]
   [ ][ ][ ]
   [ ][ ][ ] */
let blueWin2 = $("#B1.blue, #B2.blue, #B3.blue").length === 3;
/* [ ][ ][ ]
   [X][X][X]
   [ ][ ][ ] */
let blueWin3 = $("#C1.blue, #C2.blue, #C3.blue").length === 3;
/* [ ][ ][ ]
   [ ][ ][ ]
   [X][X][X] */
let blueWin4 = $("#A1.blue, #B1.blue, #C1seven.blue").length === 3;
/* [X][ ][ ]
   [X][ ][ ]
   [X][ ][ ] */
let blueWin5 = $("#A2.blue, #B2.blue, #C2.blue").length === 3;
/* [ ][X][ ]
   [ ][X][ ]
   [ ][X][ ] */
let blueWin6 = $("#A3.blue, #B3.blue, #C3.blue").length === 3;
/* [ ][ ][X]
   [ ][ ][X]
   [ ][ ][X] */
let blueWin7 = $("#A3.blue, #B2.blue, #C1.blue").length === 3;
/* [ ][ ][X]
   [ ][X][ ]
   [X][ ][ ] */
let blueWin8 = $("#A1.blue, #B2.blue, #C3.blue").length === 3;
/* [X][ ][ ]
   [ ][X][ ]
   [ ][ ][X] */

//--- message (WINNER / TIE) ---//
let message = document.querySelector('h2'); // WINNER! / TIE!
let redWinner;
redWinner.textcontent = ("WINNER: Player One!");
let blueWinner;
blueWinner.textcontent = ("WINNER: Player Two!");
let noWinner;
noWinner.textcontent = ("TIE");

function winnerMSG() { // denna poppar upp när spelet är slut
  if (redWinner === redWin1 || redWin2 || redWin3 || redWin4 || redWin5 || redWin6 || redWin7 || redWin8) {
      message = redWinner;
    } else if (blueWinner === blueWin1 || blueWin2 || blueWin2 || blueWin3 ||  blueWin4 || blueWin5 || blueWin6 || blueWin7 || blueWin8) {
      message = redWinner;
    } else {
      message = noWinner;
    }
}
//--- new game ---//
let newGame = document.querySelector('#newGame'); // reseta spelet, och lägg till i scoreboard

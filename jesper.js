//====GLÖM INTE ATT DU ÄNDRADE ALLA BUTTONS I HTML TILL INPUT FÖR ATT INTE VÄRDET SKULLE BRÅKA. DET KAN VARA ATT DU MÅSTE FIXA BÅDE DET
//OCH VÄRDET I JS NU FÖR ATT FÅ EFFEKTEN.

//========VARIABLES=============
//==========BUTTONS=============
let a1 = $("#A1");
let a2 = $("#A2");
let a3 = $("#A3");
let b1 = $("#B1");
let b2 = $("#B2");
let b3 = $("#B3");
let c1 = $("#C1");
let c2 = $("#C2");
let c3 = $("#C3");
let h2 = $("h2");

//======================SEPERATE VARIABLES============================
let amount = 0; //För att räkna ut om oavgjort. Når 9 = Oavgjort.
let cross = 'X'; //Symbolen för spelare X.
let circle = 'O'; //Symbolen för spelare O.
let winner = "false"; //För att kontrollera om ngn vunnit
let player = 2; //Kontrollerar vilken spelares tur det är.
let symbol; //Definierar spelarsymbolen.
let control = document.querySelectorAll(".playButton");
let ctrl;
let clicked;


//=============SKAPA EN KLICK FÖR VARJE KNAPP===========================

   for (let i = 0; i < control.length; i++) {
       control[i].addEventListener("click", playerTurn);
 }


//=================================KLICK-FUNCTION======================================================
function playerTurn(e) {

   if(winner !== "true") {
       clicked = e.target;
       if(clicked.value !=="O" && clicked.value !=="X") {

           if (player===2) {
           clicked.value = circle;
           symbol = circle;
           player = 1;
           amount++;
           console.log(clicked);
           }

           else if (player===1) {
               clicked.value = cross;
               symbol = cross;
               player = 2;
               amount++;
               console.log(clicked);
           }
       }
       winner = didIWin()
   }
}


//=================================WINNER-FUNCTION======================================================
function didIWin(){



   if(symbol === "O" || symbol === "X"){

       if (symbol === a3.val() && a3.val() === a2.val() && a2.val() === a1.val()) {
           h2.text("Congratulations! A winnar is you! Player " + player + "!");
           return("true");
       }

       else if (symbol === b3.val() && b3.val() ===  b2.val() && b2.val() === b1.val()) {
           alert("Player "+player+" win");
           return("true");
       }

       else if (symbol === c3.val() && c3.val() === c2.val() && c2.val() === c1.val()) {
           alert("Player "+player+" win");
           return("true");
       }
       else if (symbol === a1.val() && a1.val() === b1.val() && c1.val() === b1.val()) {
           alert("Player "+player+" win");
           return("true");
       }
       else if (symbol === a2.val() && a2.val() === b2.val() && b2.val() === c2.val()) {
           alert("Player "+player+" win");
           return("true");
       }
       else if (symbol === a3.val() && b3.val() === a3.val() && c3.val() === b3.val()) {
           alert("Player "+player+" win");
           return("true");
       }
       else if (symbol === a1.val() && b2.val() === a1.val() && c3.val() === b2.val()){
           alert("Player "+player+" win");
           return("true");
       }
       else if (symbol === a3.val() && b2.val() === a3.val() && c1.val() === b2.val()) {
           alert("Player "+player+" win");
           return("true");
       }
       else if (amount === 9) {
           alert("Draw");
       }
   }
}


//=================================RESET-FUNCTION======================================================
$("#restart").click(function() {
   a1.empty();
   a2.empty();
   a3.empty();
   b1.empty();
   b2.empty();
   b3.empty();
   c1.empty();
   c2.empty();
   c3.empty()
   amount = 0;
   winner ="false";
   player=2;
});

//VARIABLES DECLARATION AND INITIALIZATION

//button to start game
const playButton = document.getElementById('btn-play');

//chosen numbers
const numbers = document.getElementById('output-numeri')

//Player 1 (user) number
let outputPlayer1;

//Player 1 (computer) number
let outputPlayer2;

//Final result
let outputResult;

//FUNCTION CLICK TO START GAME

playButton.addEventListener("click", function(){

  numbers.innerHTML = " ";

  //random number for Player1 (user)
  let player1Number = Math.ceil(Math.random() * 6);
  //random number for Player2 (computer)
  let player2Number = Math.ceil(Math.random() * 6);

  //outptut element creation for numbers
  outputPlayer1 = document.createElement('div');
  outputPlayer2 = document.createElement('div');

  outputPlayer1.innerHTML = `Hai tirato il  ${player1Number}`;
  outputPlayer2.innerHTML = `Il computer ha tirato il  ${player2Number}`;
  numbers.append(outputPlayer1);
  numbers.append(outputPlayer2);

  //outptut element creation for winner declaration
  outputResult = document.createElement('div');
  outputResult.innerHTML = outputResult;

  if (player1Number > player2Number){
    outputResult = 'Hai vinto! Congratulazioni!';

  }else if(player2Number > player1Number ){
    outputResult = 'Hai perso! Riprovaci!';

  }else{
    outputResult = 'Pareggio!';
  }
  
  numbers.append(outputResult);

})

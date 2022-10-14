// **Gioco dei dadi**
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// const numeri = [1,2,3,4,5,6];

const playButton = document.getElementById('btn-play');
const numbers = document.getElementById('output-numeri')
let outputPlayer1;
let outputPlayer2;
let outputResult;


playButton.addEventListener("click", function(){
  numbers.innerHTML = " ";
  let player1Number = Math.ceil(Math.random() * 6);
  let player2Number = Math.ceil(Math.random() * 6);
  outputPlayer1 = document.createElement('div');
  outputPlayer2 = document.createElement('div');
  outputPlayer1.innerHTML = `Hai tirato il  ${player1Number}`;
  outputPlayer2.innerHTML = `Il computer ha tirato il  ${player2Number}`;
  numbers.append(outputPlayer1);
  numbers.append(outputPlayer2);

  outputResult = document.createElement('div');
  if (player1Number > player2Number){
    outputResult.innerHTML = 'Hai vinto! Cogratulazioni!';
  }else if(player2Number > player1Number ){
    outputResult = 'Hai perso! Riprovaci!';
  }else{
    outputResult = 'Pareggio!';
}

numbers.append(outputResult);

})

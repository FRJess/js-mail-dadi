
// const lista mail autorizzate

const mailList = [
  "jessica.tartaglia@gmail.com",
  "laura.bolle@gmail.com",
  "matteo.tasca@gmail.com",
  "lorenzo.porta@gmail.com",
  "alessandra.bianchi@gmail.com",
  "anna.grande@gmail.com",
  "alessia.tartaglia@gmail.com",
  "andrea.giugno@gmail.com",
  "ilaria.fedeli@gmail.com",
  "emma.pace@gmail.com"
];

// le const di cui ho bisogno
let present = true;
const submitButton = document.getElementById("btn-input");
const userMail = document.getElementById("userMail");
const output = document.getElementById("output");

// input mail utente con click
submitButton.addEventListener("click", function(){

  for(let i = 0; i < mailList.lenght; i++){

  // controllo condizione
    if (userMail === mailList[i]){
      present = true;
      break; 
    }
    else{
      present = false;
    }
  }

  // stampa in pagina
  if(present){
    output.innerHTML = 'Buona fortuna!';
}
  else{
    output.innerHTML = 'Ci dispiace, non sei autorizzatə a giocare! Inrerire una mail valida.';
}
})

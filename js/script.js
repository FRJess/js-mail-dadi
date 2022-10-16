
//VARIABLES DECLARATION AND INITIALIZATION

//Authorized mail addresses
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

// if mail is not present on authorized list
let present = true;

// button submit check mail
const submitButton = document.getElementById("btn-input");

// usermail
const userMail = document.getElementById("userMail").value;

// output for usermail
const outputMail = document.getElementById("output-mail");

//FUNCTION CLICK TO CHECK MAIL AUTHORIZATION
submitButton.addEventListener("click", function(){

  //Conditional statement for authorization
  for(let i = 0; i < mailList.lenght; i++){
    if (userMail === mailList[i]){
      present = true;
      break; 
    }
  }
  
  // Output print on page
  if(present){
    outputMail.innerHTML = 'Buona fortuna!';
  }
  else{
    outputMail.innerHTML = 'Ci dispiace, non sei autorizzatə a giocare! Inserire una mail valida.';
  } 
});


// //FUNCTION CLICK TO CHECK MAIL AUTHORIZATION WITH EMPTY MAIL OPTION
// submitButton.addEventListener("click", function(){

//   // Condition for mail present
//   if (userMail !== ""){
//     for(let i = 0; i < mailList.lenght; i++){

//       //Conditional statement for authorization
//       if (userMail === mailList[i]){
//         present = true;
//         break; 
//       }
//       else{
//         present = false;
//       }
//     }
    
//     // Output print on page
//     if(present){
//       output.innerHTML = 'Buona fortuna!';
//     }
//     else{
//       output.innerHTML = 'Ci dispiace, non sei autorizzatə a giocare! Inserire una mail valida.';
//     }
//   }

//   // If no mail present ---- da verificare perché non funziona
//   else{
//     output.innerHTML = 'Nessuna mail inserita! Inserire una mail valida.';
//   }
    
// });

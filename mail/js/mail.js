// devo chiedere all'utente la sua email (prompt())
// devo verificare che sia presente nella lista
// stampo un messaggio sull'esito del controllo


const mailRequest = prompt('Inserisci la tua email');
const mailList = [
   'pinco@gmail.com',
   'pallo@gmail.com',
   'cip@gmail.com',
   'ciop@gmail.com',
   'qui@gmail.com',
   'quo@gmail.com',
   'qua@gmail.com',
];

//create a variable to show a message to the user
let mailVerified = false;

// create a for cycle to verify mailRequest and mailList strings
for (let i = 0; i < mailList.length; i++) {

   if (mailRequest === mailList[i]) {
      mailVerified = true;
   }
   
}

if (mailVerified == true) {
   alert('Hai trovato la tua email!');
} else {
   alert('Non hai trovato la tua email.');
}
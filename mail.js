/* Chiedi all’utente la sua email, controlla che sia 
nella lista di chi può accedere, stampa un messaggio 
appropriato sull’esito del controllo.
 */

// Lista indirizzi email con accesso (array)
const emailList = [
  "donald.duck@mail.pap",
  "naruto.uzumaki@konoha.com",
  "stevejobsreal@mac.com",
];

// Chiedere all'utente la sua email

let userEmail = prompt("Inserisci il tuo indirizzo e-mail"); //string

// Verificare che il dato sia una email

// Confrontare la mail con gli elementi della lista

// SE la mail dell'utente è presente nella lista
//  => Dare messaggio di avvenuto accesso
if (emailList.includes(userEmail)) {
  console.log(`Accesso consentito. Benvenuto ${userEmail}!`);
} else {
  // ALTRIMENTI
  //  => Dare messaggio di accesso negato
  console.log(`Accesso negato. L'indirizzo ${userEmail} non è abilitato.`);
}

// la logica dell'.includes si potrebbe
// rifare a mano con un ciclo for

//inizializzo la varaibile di identità con false
// let found = false;

// for (let i = 0; i > emailList.length; i++) {
//   const currentMail = emailList[i];
//   console.log(currentMail === userEmail);

//   found = currentMail === userEmail;

// solo quando c'è identità la variabile cambia valore
// if (currentMail === userEmail) {
//   found = true;
//    break
// }
// OPPURE
//
// // if (currentMail !== userEmail) {
//   continue
// }
// }

// console.log(found);

// // SE la mail è stata trovata
// // => hai accesso
// if ((found = true)) {
//   console.log("Hai accesso alla pagina");
// }
// // ALTRIMENTI
// //  =>  di accesso negato
// else {
//   console.log("Accesso negato");
// }

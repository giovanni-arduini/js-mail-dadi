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

let userEmail = prompt("Inserisci il tuo indirizzo e-mail");

// Confrontare la mail con gli elementi della lista

// SE la mail dell'utente è presente nella lista
//  => Dare messaggio di avvenuto accesso
if (emailList.includes(userEmail)) {
  console.log(`Accesso consentito. Benvenuto ${userEmail}!`);
} else {
  console.log(`Accesso negato. L'indirizzo ${userEmail} non è abilitato.`);
}

// ALTRIMENTI
//  => Dare messaggio di accesso negato

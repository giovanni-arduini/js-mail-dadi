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

/* Generare un numero random da 1 a 6, 
sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi 
fa il punteggio più alto. */

// Generare un numero random da 1 a 6 per l'utente
// posso crearlo con Math.random
// limito lo span fino a 0.6, moltiplico per 10 e lo rendo intero

let userNumber = Math.floor(Math.random(0.1, 0.6) * 10); //number
console.log(userNumber);

// generare un numero random per il CPU

// confrontare i due numeri

// SE il numero dell'utente è più alto
//  => mostrare messaggio di vittoria utente

// ALTRIMENTI
//  => mostrare messaggio di vittoria CUP

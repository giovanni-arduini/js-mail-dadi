/* Generare un numero random da 1 a 6, 
sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi 
fa il punteggio più alto. */

// Generare un numero random da 1 a 6 per l'utente
// posso crearlo con Math.random
// limito lo span di min e max moltiplico per 10 e lo rendo intero
const min = Math.ceil(1);
// console.log(min);
const max = Math.floor(7);
// console.log(max);

let userNumber = Math.floor(Math.random() * (max - min) + min); //number
console.log(userNumber);

// generare un numero random per il CPU

let cpuNumber = Math.floor(Math.random() * (max - min) + min); //number
console.log(cpuNumber);

// prova = Math.floor(Math.random() * (max - min) + min);
// console.log(prova);

// confrontare i due numeri

// SE il numero dell'utente è più alto
//  => mostrare messaggio di vittoria utente
if (userNumber === cpuNumber) {
  console.log(`È un pareggio!`);
} else if (userNumber > cpuNumber) {
  console.log(`Vittoria dell'umanità!`);
}
// ALTRIMENTI
//  => mostrare messaggio di vittoria CUP
else {
  console.log(`Le macchine hanno vinto. Di nuovo.`);
}

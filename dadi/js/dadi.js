// devo generare un numero randomico da 1 a 6 per il giocatore
// devo generare un numero randomico da 1 a 6 per il computer
// devo stabilire un vincitore in base al punteggio più alto

const playerDice = Math.floor(Math.random() * (6) + 1);
console.log(playerDice);
const computerDice = Math.floor(Math.random() * (6) + 1);
console.log(computerDice)


if (playerDice > computerDice) {
   alert('Hai vinto!');
} else if (playerDice < computerDice) {
   alert('Hai perso!');
} else if (playerDice == computerDice) {
   alert('Pari!');
}
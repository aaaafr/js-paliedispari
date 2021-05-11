
// L’utente sceglie pari o dispari 
// e inserisce un numero da 1 a 5.
// Generiamo un numero random 
// (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri
//  è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto. 


var pariDispari = "dispari";
var numeroUtente = 3;

function numeroCasuale(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var numeroComputer = numeroCasuale(1, 5);
var risultato = numeroUtente + numeroComputer;
console.log(numeroUtente, numeroComputer, risultato);


function numeroRisultato(numero) {
    if(numero % 2 === 0){
        return "pari";
    } 
    return "dispari";
}


console.log(numeroRisultato(risultato));

if(numeroRisultato(risultato) === pariDispari){
    console.log("Hai vinto, il tuo numero è " + risultato, pariDispari);
} else {
    console.log("Hai perso");
}
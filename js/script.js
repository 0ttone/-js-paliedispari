//Palidroma
//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
// ripetizione recap pomeridiano Andrea

//inserimento parola richiesta con prompt

var parolaUtente = prompt('Inserisci una parola');
var lunghezzaParola = parolaUtente.length;

//alert(parolaUtente)

//l idea è quella di richiamare tramite [] ogni singola lettera
//della parola che in sostanza ad ogni istanza [0], [1] e cosi via 
// alert(parolaUtente)[3]
// alert(parolaUtente)[2]
// alert(parolaUtente)[1]
// alert(parolaUtente)[1]
//ci restituirebbe la parola come una stringa di lettere 
//con un for cicliamo il meccanismo ..al contrario dall ultima


// la i però sarà la lunghezza della parola
var stringa = ""
for (var i = (lunghezzaParola - 1); i >=0; i--)
{
      stringa += parolaUtente[i]
      //alert(parolaUtente[i])
}
alert(stringa)
 
//tutta la parte sopra ora è di fatto un generatore
//di palindromi
//se inserita in una function e cambiando argomento
//con parolautente possiamo completare la richiesta





// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Infine, dichiariamo chi ha vinto.


function getRandomNumber(){
             var randomNumber = Math.floor(Math.random()* 5) + 1;
             return randomNumber;
       }

var userNumber = (prompt('Inserisci un numero')); 
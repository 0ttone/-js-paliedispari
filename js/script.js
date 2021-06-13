//Palidroma
//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
// ripetizione recap pomeridiano Andrea

//inserimento parola richiesta con prompt



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
// var stringa = ""
// for (var i = (lunghezzaParola - 1); i >=0; i--)
// {
//       stringa += parolaUtente[i]
//       //alert(parolaUtente[i])
// }
// alert(stringa)
 
//tutta la parte sopra ora è di fatto un generatore
//di palindromi
//se inserita in una function e cambiando argomento (parola)
//con parolautente possiamo completare la richiesta

function palindromo (parola)
{     
      var lunghezzaParola = parola.length;
      var stringa = "";
      for (var i = (lunghezzaParola - 1); i >=0; i--)
      {
            stringa += parola[i];
            
      }  

      console.log(stringa);
      //return stringa; NON CHIUDIAMO LA function
      //controlliamo all interno se è palindroma con if

      if (parola === stringa) {
            
            return true;
      
      }     else {
            
            return false;
      }
}   

      var parolaUtente = prompt("Inserisci una parola");
      var lunghezzaParola = parolaUtente.length;
      document.getElementsByClassName("parola-inserita")[0].innerHTML = parolaUtente;
      

      
      //ORA  sfruttando la function scriviamo se la parola inserita è o
      // non è un palindromo

      var palindromaHtmlElement = document.getElementsByClassName("palindroma-utente")[0];


      if (palindromo (parolaUtente)){
            palindromaHtmlElement.innerHTML = 'La parola è un palindromo';
      
      } else {
            palindromaHtmlElement.innerHTML = 'La parola non è un palindromo';
      }

      



















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



var cpuNumber = getRandomNumber()


var userNumber = parseInt(prompt('Inserisci un numero')); 
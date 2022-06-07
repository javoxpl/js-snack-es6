/*Dato l’array di nomi:
const myArray = [‘Michele’, ‘Fabio’, ‘Roberto’, ‘Giovanni’, ‘Simone’, ‘Chiara’];
e dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.*/



const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
const nuovoArray = [];

const primoNumero = parseInt(prompt('inserisci un numero'))
const secondoNumero = parseInt(prompt('inserisci un numero'))


// esempio con .filter


const ultimoArray = myArray.filter((element, index) => {

    return index >= primoNumero && index <= secondoNumero

});


console.log(ultimoArray);
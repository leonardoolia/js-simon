//? -----------------------------------------------------------------------
//? RECUPERO ELEMENTI DAL DOM
//? -----------------------------------------------------------------------

// Bottoni
const startButton = document.getElementById('start-button');
const startAgainButton = document.getElementById('play-again-button')

// Sezione con timer e numeri
const gameSection = document.getElementById('sezione-gioco');
const screenTimer = document.getElementById('timer');
const screenText = document.getElementById('testo-numeri');
const screenNumbers = document.getElementById('numeri');




//? -----------------------------------------------------------------------
//? FUNZIONI GLOBALI
//? -----------------------------------------------------------------------

//? FUNZIONE PER INIZIARE IL GIOCO
const startGame = () => {

    // Al click scompare il bottone e inizia il gioco
    startButton.classList.add('d-none');
    gameSection.classList.remove('d-none');







}











//? FUNZIONE PER USCIRE DAL GIOCO
const exitGame = () => {
    startButton.classList.remove('d-none');
    gameSection.classList.add('d-none');
}







//? CLICK DEL BOTTONE E INIZIO DEL GIOCO
startButton.addEventListener('click', startGame);


//? CLICK DEL BOTTONE PER USCIRE DAL GIOCO
startAgainButton.addEventListener('click', exitGame);
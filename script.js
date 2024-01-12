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

// Range numeri casuali
const min = 1;
const max = 99;

// Numero di celle(numeri) in pagina
const cells = 5;

//? -----------------------------------------------------------------------
//? FUNZIONI GLOBALI
//? -----------------------------------------------------------------------

//? FUNZIONE PER INIZIARE IL GIOCO
const startGame = () => {

    // Al click scompare il bottone e inizia il gioco
    startButton.classList.add('d-none');
    gameSection.classList.remove('d-none');

    // -----------------------------------------------------------------------
    // Funzioni interne
    // -----------------------------------------------------------------------

    // Funzione per generare 5 numeri casuali
    const generateRandomNumbers = (min, max) => {
        const listOfNumbers = [];

        do {
            const randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min;
            if (!listOfNumbers.includes(randomNumber)) listOfNumbers.push(randomNumber);

        } while (
            listOfNumbers.length < cells
        )

        console.log(listOfNumbers);


        return listOfNumbers;
    };






    // TIMER
    let secondsLeft = 5;
    screenTimer.innerText = secondsLeft;

    const timer = setInterval(() => {
        screenTimer.innerText = --secondsLeft;

        // Quando il timer arriva a 0, interrompiamo il countdown
        if (secondsLeft === 0) {
            clearInterval(timer);
            screenTimer.innerText = 'VIA!';
        };

    }, 1000);




    // GENERO 5 NUMERI CASUALI DA 1 A 99
    const randomNumbers = generateRandomNumbers(min, max); //! userò questi per fare il confronto perchè sono un array


    // CREO LE CELLE DA METTERE IN PAGINA
    const screenCells = document.createElement('div');

    let stringa = randomNumbers.join(' ');

    // AGGIUNGO I 5 NUMERI AI DIV IN PAGINA
    screenCells.innerHTML = stringa;
    screenNumbers.appendChild(screenCells);

}











//? FUNZIONE PER USCIRE DAL GIOCO
const exitGame = () => {
    startButton.classList.remove('d-none');
    gameSection.classList.add('d-none');
    screenNumbers.innerText = '';
}







//? CLICK DEL BOTTONE E INIZIO DEL GIOCO
startButton.addEventListener('click', startGame);


//? CLICK DEL BOTTONE PER USCIRE DAL GIOCO
startAgainButton.addEventListener('click', exitGame);
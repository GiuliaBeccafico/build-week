


let areaCheckbox = document.getElementById('checkbox');
let areaButton = document.querySelector('.button');

let firstPage = document.getElementById('page1')
let secondPage = document.getElementById('page2')
console.log(firstPage, secondPage);
let timer = document.querySelector('.base-timer')
areaButton.addEventListener('click', function () {
  if (areaCheckbox.checked) {
    firstPage.remove()
    secondPage.classList.remove('hidden')
    timer.classList.remove('hidden')
    startTimer()
  } else {
    // L'utente non ha selezionato la casella di controllo, mostra un messaggio di avviso
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please accept the agreement to proceed'
    });
  }
});




const proceedButton = document.querySelector('.footer .button')
console.log(proceedButton);
proceedButton.addEventListener('click', showQuestions())
const main = document.querySelector('.main')
function showQuestions () {
    fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy')
    .then(res => res.json())
    .then(domande => {
    let easy = domande.results //tutte le domande in questo array
    let temp = document.getElementsByTagName('template')[0]
    let container = document.getElementById('container')
    cloneSection(0, container, temp)
    cloneSection(1, container, temp)
    cloneSection(2, container, temp)
    questionTitles(easy)
    console.log(easy);

    // questionTitles()
    // answerMaker(4)
    // const button = document.getElementById('nextButton')
    // button.addEventListener('click', ()=> {
    // nextQuestion(document.querySelector('.questions', container, temp))
  })
   .catch(error =>{
    console.error('erorre nella richiesta Fetch', error);
   }) 
}


// function answerCheck (){
//     const target = document.querySelector('.answ')
// }

function nextQuestion (target, container, temp){
    console.log(target, document.querySelector('.main'));
    target.innerHTML = ''
//    cloneSection(0, container, temp)
//    cloneSection(1, container, temp)
//    cloneSection(2, container, temp)
//    questionTitles()
//    answerMaker(2)
}

function cloneSection (index, target, temp){
    const children = temp.content.children[index].cloneNode(true)
    target.append(children)//main
   
}

function questionTitles (questions){
    const main = document.querySelector('.main')
    let firstTitle = main.children[0].children[0]
    let secondTitle = main.children[0].children[1]
    let question = questions[0].question.split(' ')
    let first = question.slice(0, question.length/2).join(' ')
    let second = question.slice(question.length/2, question.length).join(' ')
    firstTitle.innerText = first
    secondTitle.innerText = second
}

function answerMaker (n){
    const target = document.querySelector('.main').children[0].lastElementChild
    console.log(target);
    for (let i = 1; i <= n; i++){
    let answer = document.createElement('button')
    answer.classList.add('answer')
    answer.innerText = i
    target.append(answer)
    }

}


// function disableButton (){
//     document.getElementById('nextButton').disabled = true
// }

// function enableButton (target){
//     if
//     ldocument.getElementById('nextButton').disableButton = true
// }

// js-script inizio

// timer js inizio

// Seleziona l'elemento HTML con l'ID "timer" dove verrà inserito il numero del timer
let timerContent = document.getElementById('timer');

// Seleziona l'elemento HTML con la classe "base-timer", che contiene il timer
let cerchio = document.querySelector(".base-timer");

// Seleziona l'elemento "path" all'interno del cerchio con l'ID "base-timer-path-remaining"
let PercorsoSecondoCerchio = document.getElementById("base-timer-path-remaining");

// Definisci la costante "raggio" per il cerchio del timer
const raggio = 45;

// Calcola la lunghezza della circonferenza del cerchio
const lunghezzaCirconferenza = 2 * Math.PI * raggio;

// Costante per la lunghezza massima della "stroke-dasharray"
const FULL_DASH_ARRAY = lunghezzaCirconferenza;

// Imposta il limite di tempo del timer in secondi (in questo caso, 60 secondi)
const TIME_LIMIT = 60;

// Variabile per tenere traccia del tempo trascorso
let timePassed = 0;

// Variabile per tenere traccia del tempo rimanente
let timeLeft = TIME_LIMIT;

// Inizializza il contenuto dell'elemento "timer" con il tempo rimanente
timerContent.innerText = timeLeft;

// Variabile per memorizzare l'intervallo del timer
let timerInterval = null;

// Funzione per formattare il tempo rimanente in formato "minuti:secondi"
function formatTimeLeft(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

// Funzione per avviare il timer
function startTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval); // Ferma il timer se è già in esecuzione
  }
  timePassed = 0;
  timeLeft = TIME_LIMIT;
  timerContent.innerText = timeLeft;

  setCircleDasharray(); // Imposta la lunghezza della "stroke-dasharray" del cerchio

  // Avvia l'intervallo del timer
  timerInterval = setInterval(() => {
    timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    timerContent.innerText = timeLeft;

    setCircleDasharray(); // Aggiorna la "stroke-dasharray" del cerchio

    if (timeLeft <= 0) {
      clearInterval(timerInterval); // Ferma il timer quando il tempo rimanente raggiunge 0
    }
  }, 1000);
}

// Avvia il timer quando la pagina si carica
startTimer();

// Funzione per calcolare la frazione di tempo rimanente rispetto al limite di tempo
function calculateTimeFraction() {
  return timeLeft / TIME_LIMIT;
}

// Funzione per impostare la "stroke-dasharray" del cerchio in base alla frazione di tempo rimanente
function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  PercorsoSecondoCerchio.setAttribute("stroke-dasharray", circleDasharray);
}

// Calcola la frazione di tempo iniziale quando la pagina si carica
calculateTimeFraction();

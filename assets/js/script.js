

let areaCheckbox = document.getElementById('checkbox');
let areaButton = document.querySelector('.button');

let firstPage = document.getElementById('page1')
let secondPage = document.getElementById('page2')

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

// areaButton.addEventListener ('click',startTimer())






let timerContent = document.getElementById('timer')



let cerchio = document.querySelector(".base-timer").innerHTML;


let PercorsoSecondoCerchio = document.getElementById(
  "base-timer-path-remaining"
);
const raggio = 45;
const lunghezzaCirconferenza = 2 * Math.PI * raggio;
const FULL_DASH_ARRAY = lunghezzaCirconferenza;

const TIME_LIMIT = 60;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
timerContent.innerText = timeLeft;
let timerInterval = null;

function formatTimeLeft(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (seconds < 10) {
    return (seconds = `0${seconds}`);
  }
  return `${minutes}:${seconds}`;
}


function startTimer() {
  if (timerInterval !== null) { // Controlla se il timer non è già in esecuzione
    clearInterval(timerInterval); // Ferma il timer se è in esecuzione
  }
  timePassed = 0;
  timeLeft = TIME_LIMIT;
  timerContent.innerText = timeLeft;

  setCircleDasharray();

  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;

    timerContent.innerText = timeLeft;

    setCircleDasharray();

    if (timeLeft <= 0) {
      clearInterval(timerInterval); // Ferma il timer quando raggiunge 0
    }
  }, 1000);
}


startTimer();

function calculateTimeFraction() {
  return timeLeft / TIME_LIMIT;
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  PercorsoSecondoCerchio.setAttribute("stroke-dasharray", circleDasharray);
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}
calculateTimeFraction();







let copia = template.content.firstElementChild.cloneNode(true)
let answer = copia.firstElementChild.firstElementChild.innerText;
let firstAnswer = answer = easy[0].question 



//domande easy 
fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy')
  .then(res => res.json())
  .then(domande => {
    let easy = domande.results //tutte le domande in questo array
    let template = document.getElementsByTagName('template')[0];
    console.log(easy);
  })


//domande hard
fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=hard')
  .then(res => res.json())
  .then(domande => {
    let hard = domande.results //tutte le domande in questo array
    console.log(hard);
  })





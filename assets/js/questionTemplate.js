


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




const proceedButton = document.querySelector('.right .button')
console.log(proceedButton);
proceedButton.addEventListener('click', showQuestions)
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

    // questionTitles()
    // answerMaker(4)
    // const button = document.getElementById('nextButton')
    // button.addEventListener('click', ()=> {
    // nextQuestion(document.querySelector('.questions', container, temp))
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
    target.append(children)
    console.log(children);
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


let timerContent = document.getElementById('timer')



let cerchio = document.querySelector(".base-timer").innerHTML;


let PercorsoSecondoCerchio = document.getElementById("base-timer-path-remaining");
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
// fine js timer

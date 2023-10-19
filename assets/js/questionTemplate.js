
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






const proceedButton = document.getElementById('proceed')

proceedButton.addEventListener('click', showQuestions)
const main = document.querySelector('.main')
function showQuestions () {
    let temp = document.getElementsByTagName('template')[0]
    let container = document.getElementById('container')
    cloneSection(0, container, temp)
    cloneSection(1, container, temp)
    cloneSection(2, container, temp)
    questionTitles()
    answerMaker(4)
    const button = document.getElementById('nextButton')
    button.addEventListener('click', ()=> {
    nextQuestion(document.querySelector('.questions', container, temp))
    answerCheck
})
}

function answerCheck (){
    const target = document.querySelectorAll('.answer')
    console.log('.answer');
}

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
}

function questionTitles (){
    const main = document.querySelector('.main')
    let firstTitle = main.children[0].children[0]
    firstTitle.innerText = 'prima domanda'
    let secondTitle = main.children[0].children[1]
    secondTitle.innerText = 'seconda domanda'
    console.log(main);
}

function answerMaker (n){
    const target = document.querySelector('.main').children[0].lastElementChild
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


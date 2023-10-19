// // start chart donuts js
let maxPunteggio = 10;
let punteggio = 7; //sarà dato dall'accumulo delle domande
let risposteCorrette = punteggio * 10; //punteggio in centesimi
let rispSbagliate = maxPunteggio - punteggio; //calcolo risposte sbalgiate
let percentualeSbagliate = rispSbagliate * 10;//risposte sbagliate in percentuale

const chartData = {
  labels: ["Wrong", "Correct"],
  data: [percentualeSbagliate, risposteCorrette],
};

const customColors = ["#9b1d8d", "#00ffff", ];

const myChart = document.querySelector(".myChart");

new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: chartData.labels,
    datasets: [
      {
        label: "Risposte Corrette",
        data: chartData.data,
        backgroundColor:  customColors
      
      },
    ],
  },
  options: {
    borderWidth: 0,
    cutout: "65%",
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

// finish chart donuts js




let leftPercentuale = document.querySelector(".leftSection .valueTitle");
let rightPercentuale = document.querySelector('.rightSection .valueTitle')



function correctAnswers(rispCorr) { //scrive in percentuale le risposte corrette e sbagliate
    rightPercentuale.innerText = `${percentualeSbagliate}%`
    leftPercentuale.innerText = `${risposteCorrette}%`;
}
correctAnswers(punteggio)


let fractionQuestionsLeft = document.querySelector('.leftSection .correctQuestions')
let fractionQuestionsRight = document.querySelector('.rightSection .correctQuestions')
console.log(fractionQuestionsLeft, fractionQuestionsRight);

function frazione(rispCorr) { //frazione corrette e sbagliate 
    fractionQuestionsLeft.innerText = `${punteggio}/${maxPunteggio} questions`
    fractionQuestionsRight.innerText = `${rispSbagliate}/${maxPunteggio} questions`
}
frazione(punteggio)


let headerChart = document.querySelector('.chartHeading')
let mainChart = document.querySelector('.chartPassed')
let footerChart = document.querySelector('.chartFooter')

function internoChart(rispCorr) {
    if (rispCorr >= 6 && rispCorr<= 10) {
        headerChart.innerText = 'Congratulations!'
        mainChart.innerText = 'You passed the exam.'
        footerChart.innerHTML = `Well send you the certificate <br> in few minutes. <br> (Check your email
            <br> including promotions /spam folder)` 
            myChart.data.datasets[0].backgroundColor = customColors
    } else if (rispCorr <6 && rispCorr>= 0){
        headerChart.innerText = 'Fail!'
        mainChart.innerText = 'You failed the exam.'
        mainChart.style.color = 'red'
        footerChart.innerHTML = ` We invite you to try the exam next week.`
        myChart.data.datasets[0].backgroundColor = customColors2

    }
}
internoChart(punteggio)

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

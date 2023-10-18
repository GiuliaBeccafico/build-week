let cerchio = document.getElementById("app").innerHTML

let span = document.getElementById('base-timer-label')
let PercorsoSecondoCerchio= document.getElementById("base-timer-path-remaining")
const raggio = 45; 
const lunghezzaCirconferenza = 2 * Math.PI * raggio;
const FULL_DASH_ARRAY = lunghezzaCirconferenza;


const TIME_LIMIT = 5;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
span.innerHTML= timeLeft


let timerInterval = null;

function formatTimeLeft(time) {
    
    const minutes = Math.floor(time / 60);
    console.log(minutes);
    let seconds = time % 60;
    console.log(seconds);
    if (seconds < 10) {
     return seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }
  console.log(formatTimeLeft(60));


function startTimer() {
  timerInterval = setInterval(() => {
    
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;

  
    span.innerHTML = timeLeft;

    setCircleDasharray()
  }, 1000);
}
startTimer()


function calculateTimeFraction() {
    return timeLeft / TIME_LIMIT;
  }
   
  
  function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    PercorsoSecondoCerchio .setAttribute("stroke-dasharray", circleDasharray);
  }

 function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}
calculateTimeFraction()



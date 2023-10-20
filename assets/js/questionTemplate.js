// da tenere
const proceedButton = document.getElementById("startButton");
const header = document.querySelector(".header");
let footer = document.querySelector(".footer");
let questionFooter = document.getElementById("questionFooter");
const welcomePage = document.getElementById("page1");
questionFooter.style.display = "none";
const resultPage = document.getElementById("page3");
const feedbackPage = document.getElementById("page4");
resultPage.style.display = "none";
feedbackPage.style.display = "none";
let rateUs= document.getElementById('rateUs')
const checkbox = document.getElementById('checkbox')
let punti = 0

// const rightAnswers = [];
let answersGiven = [];


function points(arr, arr2) {
return  arr.filter ((p) => arr2.includes(p) ).length
}


rateUs.addEventListener('click', () => {
  resultPage.remove()
  feedbackPage.style.display = 'block'
})


//da tenere
proceedButton.addEventListener("click", () => {

  if (checkbox.checked) {
    welcomePage.remove();
    cerchio.classList.remove("hidden");
    questionFooter.style.display = "flex";
    questionFooter.style.width = "100%";
    questionFooter.style.justifyContent = "space-between";
    const wrap = document.getElementById("contentWrap");
    let count = 0;
    start(count);
    cloneTemplate(wrap);
    startTimer()
  } else {
    Swal.fire({
     
      title: 'Oops...',
      text: 'Please, agree to the Terms!',
      
    })
  }
});


function nextQuestion(count) {
 if (timeleft == 0) {
   startTimer()
showQuestionsCount(count)
 }
}

function start(count) {
  fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy")
    .then((res) => res.json())
    .then((domande) => {
      let easy = domande.results; //tutte le domande in questo array
      let rightAnswers = (correctAnswer(easy));
      showQuestions(count);
      function showQuestions(count) {
        const nextButton = document.getElementById("nextButton");
        const wrap = document.getElementById("contentWrap");
        const answerArea =
          document.querySelector("#contentWrap").children[0].lastElementChild;
        let tempCount = count + 1;
        questionFooter.firstElementChild.innerHTML = `Question ${tempCount}<span class="pink"> / ${easy.length}</span>`;
        questionTitles(easy, count, wrap);
        answerMaker(easy, count, answerArea);
        nextButton.addEventListener("click", () => {
          count++;
          startTimer()
          answerStorage();
          if (count == easy.length) {
            wrap.innerHTML = ' '
           resultPage.style.display = "block";
           questionFooter.style.display = 'none'
           cerchio.classList.add("hidden");
           footer.style.display = "block";
           let punti = points(rightAnswers, answersGiven)
          //  localStorage.setItem('punteggio',punteggio)
           results(punti)
          } else {
            showQuestions(count);
          }
        });
      }
    });
}

function answerStorage() {
  const radio = document.querySelector(".radioButton:checked");
  if(radio)
   document.querySelector(".radioButton:checked").nextElementSibling.innerHTML;
  answersGiven.push(radio);
}

function answerCheck(given, correct) {
  let points = 0;
  given.forEach((element) => {
    correct.forEach((element2) => {
      if (element === element2) {
        points++;
      }
      return points;
    });
  });
}

function cloneTemplate(target) {
  const temp = document.getElementById("questionsTemplate");
  const content = temp.content.cloneNode(true);
  target.append(content);
}

function clearArea(element) {
  var nodes = element.childNodes;
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    // if it's a text node, remove it
    if (node.nodeType == Node.TEXT_NODE) {
      node.parentNode.removeChild(node);
      i--; // have to update our incrementor since we just removed a node from childNodes
    }
    // if it's an element, repeat this process
    else if (node.nodeType == Node.ELEMENT_NODE) {
      clearArea(node);
    }
  }
}

function answerMaker(questions, index, target) {
  target.innerHTML = "";
  let arr = [questions[index]["correct_answer"]];
  arr = arr.concat(questions[index]["incorrect_answers"]);
  shuffleArray(arr);
  for (let i = 0; i <= arr.length - 1; i++) {
    let answer = document.createElement("label");
    let radio = document.createElement("input");
    radio.id = `answer${i}`;
    radio.type = "radio";
    radio.value = i;
    radio.name = "answerValue";
    radio.classList.add("radioButton");
    radio.style.display = "none";
    answer.classList.add("answer");
    answer.innerHTML = arr[i];
    answer.htmlFor = `answer${i}`;
    target.append(radio);
    target.append(answer);
  }
}

function correctAnswer(questions) {
  let correctArr = [];
  questions.forEach((item) => {
    correctArr.push(item["correct_answer"]);
  });
  return correctArr;
}

function cloneSection(index, target, temp) {
  const children = temp.content.children[index].cloneNode(true);
  target.append(children);
}

function questionTitles(questions, index, target) {
  let firstTitle = target.children[0].children[0];
  let secondTitle = target.children[0].children[1];
  let question = questions[index].question.split(" ");
  let first = question.slice(0, question.length / 2).join(" ");
  let second = question.slice(question.length / 2, question.length).join(" ");
  firstTitle.innerHTML = first;
  secondTitle.innerHTML = second;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function disableButton(btn) {
  btn.disabled = true;
}
function activateButton(btn) {
  btn.disabled = false;
}


function results(punti) {
  
  const maxPunteggio = 10; //punteggio massimo dei quiz
  let punteggio = punti
 //sarà dato dall'accumulo delle domande
  const risposteCorrette = punteggio * 10; //punteggio in centesimi
  const rispSbagliate = maxPunteggio - punteggio; //calcolo risposte sbalgiate
  const percentualeSbagliate = rispSbagliate * 10;//risposte sbagliate in percentuale
  const leftPercentuale = document.querySelector(".leftSection .valueTitle"); //sezione dove verrà inserita la Perccentuale di risposte corrette
const rightPercentuale = document.querySelector('.rightSection .valueTitle')//sezione dove verrà inserita la Perccentuale di risposte sbagliate
const fractionQuestionsLeft = document.querySelector('.leftSection .correctQuestions') //sezione dove verrà inserita la Frazione delle risposte corrette
const fractionQuestionsRight = document.querySelector('.rightSection .correctQuestions') //sezione dove verrà inserita la Frazione di risposte corrette
const headerChart = document.querySelector('.chartHeading')
const mainChart = document.querySelector('.chartPassed')
const footerChart = document.querySelector('.chartFooter')


// creazione della donuts chart
const chartData = {
  labels: ["Wrong", "Correct"], 
  data: [percentualeSbagliate, risposteCorrette], //dati da fornire al grafico
};

const customColors = ["#9b1d8d", "#00ffff", ]; //colore del grafico 

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


//funzione per mandare a schermo il totale delle risposte in percenuale 
function correctAnswers(rispCorr) { 
    rightPercentuale.innerText = `${percentualeSbagliate}%`
    leftPercentuale.innerText = `${risposteCorrette}%`;
}
correctAnswers(punteggio)


//funzione per mandare a schermo la frazione tra le risposte corrette/sbagliate ed il totale delle domande
function frazione(rispCorr) { 
    fractionQuestionsLeft.innerText = `${punteggio}/${maxPunteggio} questions`
    fractionQuestionsRight.innerText = `${rispSbagliate}/${maxPunteggio} questions`
  }
frazione(punteggio)

//funzione per mandare a schermo il messaggio di "Congratulations" se il risultato sarà maggiore o uguale di 6/60, altrimenti il messaggio di "Fail" se inferiore al 60
function internoChart(rispCorr) {
    if (rispCorr >= 6 && rispCorr<= 10) {
        headerChart.innerText = 'Congratulations!'
        mainChart.innerText = 'You passed the exam.'
        footerChart.innerHTML = `Well send you the certificate <br> in few minutes. <br> (Check your email
            <br> including promotions /spam folder)` 
           
    } else if (rispCorr <6 && rispCorr>= 0){
        headerChart.innerText = 'Fail!'
        mainChart.innerText = 'You failed the exam.'
        mainChart.style.color = 'red'
        footerChart.innerHTML = ` We invite you to try the exam next week.`
      
    }
}
internoChart(punteggio)

// finish chart donuts js

}



let buttonFeedback = document.getElementById('moreInfo') //button feeback page

// al click sul bottone si aprirà uno sweet alert
buttonFeedback.addEventListener('click', function () {
  Swal.fire({
    title: 'La Build-Week non è per niente stressante.Lo afferma Davide, 30 anni',
    text: 'Scherziamo, dai!! Ne ha 25',
    imageUrl: 'https://i.imgflip.com/2jsesx.jpg',
    imageWidth: 480,
    imageHeight: 414,
    imageAlt: 'Custom image',
  })
})
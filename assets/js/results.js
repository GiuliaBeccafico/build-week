// // costanti per la creazione ed il funzionamento della donuts chart

const maxPunteggio = 10; //punteggio massimo dei quiz
const punteggio = 8; //sarà dato dall'accumulo delle domande
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



// passaggio dalla result page alla feedback page
let resultPage= document.getElementById('page3') //selezione dell'intera pagina results
let feedbackPage = document.getElementById('page4')//selezione dell'intera pagina feeback
let buttonResult= document.getElementById('rateUs') //bottone results page

//al click sul bottone rimuove la pagina results e leva la classe hidden alla feedback page
buttonResult.addEventListener('click', ()=> {
 resultPage.remove()
feedbackPage.classList.remove('hidden')
})




let buttonFeedback = document.querySelector('.footer .blueButton') //button feeback page

//al click sul bottone si aprirà uno sweet alert
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



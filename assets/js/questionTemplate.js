const proceedButton = document.getElementById('proceed')

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
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
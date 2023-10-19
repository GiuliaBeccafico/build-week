const proceedButton = document.getElementById('proceed')
const header = document.querySelector('.header')
const footer = document.querySelector('.footer')
header.style.display = 'none'
footer.style.display = 'none'
proceedButton.addEventListener('click', showQuestions)

function showQuestions() {
    header.style.display = 'flex'
    footer.style.display = 'flex'
    const nextButton = document.getElementById('nextButton')
    const wrap = document.getElementById('contentWrap')
    fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy')
    .then(res => res.json())
    .then(domande => {
        let easy = domande.results //tutte le domande in questo array
        const [a, b, c] = easy 
        console.log(a['correct_answer'], b, c);
        cloneTemplate(wrap)
        const answerArea = document.querySelector('#contentWrap').children[0].lastElementChild
            questionTitles(easy, 0, wrap)
            answerMaker(answerArea, easy)
            
            nextButton.addEventListener('click', () => {
                    clearQuestions(wrap)
                    clearQuestions(answerArea)
                    cloneTemplate(wrap)
                    questionTitles(easy, 2, wrap)
                    answerMaker(answerArea, easy)
                
                })
        })
}

function cloneTemplate(target) {
    const temp = document.getElementById('questionsTemplate')
    const content1 = temp.content.cloneNode(true)
    target.append(content1)
}




function clearQuestions(target) {
    target.innerText = ''
}

function cloneSection(index, target, temp) {
    const children = temp.content.children[index].cloneNode(true)
    target.append(children)
}

function questionTitles(questions, index, target) {
    let firstTitle = target.children[0].children[0]
    let secondTitle = target.children[0].children[1]
    let question = questions[index].question.split(' ')
    let first = question.slice(0, question.length / 2).join(' ')
    let second = question.slice(question.length / 2, question.length).join(' ')
    firstTitle.innerHTML = first
    secondTitle.innerHTML = second
}

function answerMaker(target, questions) {
    
    let arr = [questions[0]['correct_answer']]
    arr = arr.concat(questions[0]['incorrect_answers'])
    console.log(arr);
    shuffleArray(arr)
    for (let i = 0; i <= arr.length-1; i++) {
        let answer = document.createElement('button')
        answer.classList.add('answer')
        answer.innerHTML = arr[i]
        target.append(answer)
    }
}

function clearQuestions (target) {
target.innerHTML = ''
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// function disableButton (){
//     document.getElementById('nextButton').disabled = true
// }

// function enableButton (target){
//     if
//     ldocument.getElementById('nextButton').disableButton = true
// }
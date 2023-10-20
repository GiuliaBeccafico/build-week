const proceedButton = document.getElementById('proceed')
const header = document.querySelector('.header')
const footer = document.querySelector('.footer')
header.style.display = 'none'
footer.style.display = 'none'

proceedButton.addEventListener('click', () => {
    header.style.display = 'flex'
    footer.style.display = 'flex'
    const wrap = document.getElementById('contentWrap')
    let count = 0
    start(count)
    cloneTemplate(wrap)
})


function start(count){
    fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy')
    .then(res => res.json())
    .then(domande => {
        let easy = domande.results //tutte le domande in questo array
        console.log(easy);
        showQuestions(count)
        function showQuestions(count) {
            const nextButton = document.getElementById('nextButton')
            const wrap = document.getElementById('contentWrap')
            const answerArea = document.querySelector('#contentWrap').children[0].lastElementChild
            let tempCount = count + 1
            footer.firstElementChild.innerHTML = `Question ${tempCount}<span class="pink"> / ${easy.length}</span>`
            disableButton(nextButton)
            questionTitles(easy, count, wrap)
            answerMaker(easy, count, answerArea)
            console.log(correctAnswer(easy, count));
            const radio = document.getElementsByTagName('input')
            console.log(radio);
            const answersBtn = document.querySelectorAll('.answer')
            answersBtn.forEach(btn => {
                btn.addEventListener('click', () => {
                    btn.classList.add ('selectedAnswer')
                })
            })
            nextButton.addEventListener('click', () => {
                count++
                clearArea(wrap)
                if (count == easy.length) {
                    alert('finito')
                } return showQuestions(count)
            })
        }})
        
    }


function cloneTemplate(target) {
    const temp = document.getElementById('questionsTemplate')
    const content = temp.content.cloneNode(true)
    target.append(content)
}


function clearArea(element) {
    var nodes = element.childNodes;
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        // if it's a text node, remove it
        if (node.nodeType == Node.TEXT_NODE) {
            node.parentNode.removeChild(node);
            i--; // have to update our incrementor since we just removed a node from childNodes
        } else
            // if it's an element, repeat this process
            if (node.nodeType == Node.ELEMENT_NODE) {
                clearArea(node);
            }
    }
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

function answerMaker(questions, index, target) {
    // target.innerHTML = ''
    let arr = [questions[index]['correct_answer']]
    arr = arr.concat(questions[index]['incorrect_answers'])
    shuffleArray(arr)
    for (let i = 0; i <= arr.length - 1; i++) {
        let answer = document.createElement('label')
        let radio = document.createElement('input')
        radio.value = i
        radio.name = 'answer'
        radio.id = `answer${i}`
        radio.type = 'radio'
        radio.style.display = 'none'
        answer.classList.add('answer')
        answer.innerHTML = arr[i]
        answer.htmlFor = `answer${i}`
        target.append(answer)
        target.append(radio)
    }
}

function correctAnswer (questions, index) {
    return questions[index]['correct_answer']
}




function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function disableButton (btn){
    btn.disabled = true
}
function activateButton (btn){
    btn.disabled = false
}


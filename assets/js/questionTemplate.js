const proceedButton = document.getElementById('proceed')

proceedButton.addEventListener('click', showQuestions)

function showQuestions () {
    let temp = document.getElementsByTagName('template')[0]
    let container = document.getElementById('container')
    let questions = document.createElement('div')
    container.append(questions)    
    questions.classList.add('questions')

    cloneSection(0, container, temp)
    cloneSection(1, container, temp)
    cloneSection(2, container, temp)
}


function cloneSection (index, target, temp){
    const children = temp.content.children[index].cloneNode(true)
    target.append(children)
}

function questionTitles (target){
    let title = document.createElement('p')
    let content = document.createTextNode('Primo titolo')
    title.append(content)
    title.classList.add('mainTitle')
    target.appendChild(title)
}